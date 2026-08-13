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

