import { phrases } from "@/lib/sw-dictionary";

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

export function translateString(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed || !/[A-Za-z]/.test(trimmed)) return raw;
  const cached = cache.get(trimmed);
  if (cached !== undefined) return raw.replace(trimmed, cached);

  // Whole-block match first, then sentence-level matches. No word-for-word fallback:
  // anything without a vetted translation stays in English.
  let result = phrases[trimmed.toLowerCase()];

  if (result === undefined) {
    const sentences = trimmed.split(/(?<=[.!?])\s+/);
    if (sentences.length > 1) {
      let anyHit = false;
      result = sentences
        .map((sentence) => {
          const s = sentence.trim();
          const punct = /[.!?]$/.test(s) ? s.slice(-1) : "";
          const bare = punct ? s.slice(0, -1) : s;
          const hit = phrases[bare.toLowerCase()] ?? phrases[s.toLowerCase()];
          if (hit) {
            anyHit = true;
            return /[.!?]$/.test(hit) ? hit : hit + punct;
          }
          return s;
        })
        .join(" ");
      if (!anyHit) result = trimmed;
    } else {
      result = trimmed;
    }
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

export function walk(root: Node, apply: boolean) {
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

