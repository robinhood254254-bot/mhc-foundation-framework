/**
 * SEO title helpers.
 * Search engines truncate titles beyond ~70 characters, so page titles are
 * composed with a brand suffix that degrades gracefully when space runs out.
 */
export const BRAND = "Mombasa Hearing Centre";
export const SHORT_BRAND = "MHC Mombasa";

const MAX_TITLE = 70;

/** Build a page title of at most 70 characters, keeping the brand where it fits. */
export function seoTitle(base: string): string {
  const trimmed = base.trim();
  const full = `${trimmed} | ${BRAND}`;
  if (full.length <= MAX_TITLE) return full;

  const short = `${trimmed} | ${SHORT_BRAND}`;
  if (short.length <= MAX_TITLE) return short;

  if (trimmed.length <= MAX_TITLE) return trimmed;
  return `${trimmed.slice(0, MAX_TITLE - 1).trimEnd()}…`;
}
