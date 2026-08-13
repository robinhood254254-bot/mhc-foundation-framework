import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { phrases, words } from "@/lib/sw-dictionary";

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "SVG", "TEXTAREA"]);

const originals = new WeakMap<Node, string>();
const attrOriginals = new WeakMap<Element, Record<string, string>>();
const cache = new Map<string, string>();

function capitalizeLike(source: string, target: string) {
  if (!target) return target;
  if (source === source.toUpperCase() && source.length > 2) return target.toUpperCase();
  if (source[0] === source[0]?.toUpperCase()) return target[0]!.toUpperCase() + target.slice(1);
  return target;
}

function translateWords(input: string) {
  const out = input.replace(/[A-Za-z][A-Za-z'’-]*/g, (token) => {
    const hit = words[token.toLowerCase()];
    if (hit === undefined) return token;
    return capitalizeLike(token, hit);
  });
  return out.replace(/ {2,}/g, " ").replace(/\s+([,.;:!?])/g, "$1").trim();
}

export function translateString(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed || !/[A-Za-z]/.test(trimmed)) return raw;
  const cached = cache.get(trimmed);
  if (cached !== undefined) return raw.replace(trimmed, cached);

  const key = trimmed.toLowerCase();
  let result = phrases[key];

  if (result === undefined) {
    // Sentence-by-sentence phrase matching, then word fallback.
    result = trimmed
      .split(/(?<=[.!?])\s+/)
      .map((sentence) => {
        const s = sentence.trim();
        const punct = /[.!?]$/.test(s) ? s.slice(-1) : "";
        const bare = punct ? s.slice(0, -1) : s;
        const phraseHit = phrases[bare.toLowerCase()];
        if (phraseHit) return capitalizeLike(bare, phraseHit) + punct;
        return translateWords(bare) + punct;
      })
      .join(" ");
  } else {
    result = capitalizeLike(trimmed, result);
  }

  cache.set(trimmed, result);
  return raw.replace(trimmed, result);
}

function shouldSkip(node: Node) {
  let el = node.parentElement;
  while (el) {
    if (SKIP_TAGS.has(el.tagName)) return true;
    if (el.hasAttribute("data-no-translate")) return true;
    el = el.parentElement;
  }
  return false;
}

function walk(root: Node, apply: boolean) {
  const doc = root.ownerDocument ?? document;
  const walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }
  if (root.nodeType === Node.TEXT_NODE) nodes.push(root as Text);

  for (const node of nodes) {
    const value = node.nodeValue ?? "";
    if (!value.trim() || shouldSkip(node)) continue;
    if (apply) {
      if (!originals.has(node)) originals.set(node, value);
      const source = originals.get(node)!;
      const next = translateString(source);
      if (node.nodeValue !== next) node.nodeValue = next;
    } else {
      const source = originals.get(node);
      if (source !== undefined && node.nodeValue !== source) node.nodeValue = source;
    }
  }

  // Translatable attributes
  const els =
    root.nodeType === Node.ELEMENT_NODE
      ? [root as Element, ...Array.from((root as Element).querySelectorAll("*"))]
      : Array.from(doc.querySelectorAll("*"));

  for (const el of els) {
    if (SKIP_TAGS.has(el.tagName)) continue;
    for (const attr of ["placeholder", "aria-label", "title"]) {
      const value = el.getAttribute(attr);
      if (value === null) continue;
      if (apply) {
        const store = attrOriginals.get(el) ?? {};
        if (store[attr] === undefined) {
          store[attr] = value;
          attrOriginals.set(el, store);
        }
        const next = translateString(store[attr]!);
        if (value !== next) el.setAttribute(attr, next);
      } else {
        const store = attrOriginals.get(el);
        if (store?.[attr] !== undefined && value !== store[attr]) el.setAttribute(attr, store[attr]!);
      }
    }
  }
}

/**
 * Translates the rendered page into Swahili when the language is set to `sw`,
 * and restores the original English text when switched back to `en`.
 */
export function TranslationLayer() {
  const { lang } = useI18n();

  useEffect(() => {
    const body = document.body;
    if (lang !== "sw") {
      walk(body, false);
      return;
    }

    let scheduled = false;
    const run = (target: Node) => {
      walk(target, true);
    };

    run(body);

    const observer = new MutationObserver((mutations) => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        observer.disconnect();
        for (const m of mutations) {
          if (m.type === "characterData" && m.target.nodeValue) {
            originals.delete(m.target);
            run(m.target.parentElement ?? body);
          }
          m.addedNodes.forEach((n) => {
            if (n.nodeType === Node.ELEMENT_NODE || n.nodeType === Node.TEXT_NODE) run(n);
          });
        }
        observer.observe(body, { childList: true, subtree: true, characterData: true });
      });
    });

    observer.observe(body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [lang]);

  return null;
}
