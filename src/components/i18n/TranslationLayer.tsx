import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { walk } from "@/lib/translate";

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
