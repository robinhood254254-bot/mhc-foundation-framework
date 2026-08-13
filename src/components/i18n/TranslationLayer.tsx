import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { translateString } from "@/lib/translate";

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
