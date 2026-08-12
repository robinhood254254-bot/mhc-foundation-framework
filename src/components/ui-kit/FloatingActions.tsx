import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Fixed bottom-right actions: scroll-to-top (top) and WhatsApp click-to-chat (below it).
 */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("reduce-motion");
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-4 z-[80] flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Scroll back to top of page"
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-lift transition-all hover:border-primary/50 hover:bg-primary-soft hover:text-primary",
          showTop ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <ArrowUp className="size-5" aria-hidden="true" />
      </button>

      <a
        href={whatsappLink(
          "Hello Mombasa Hearing Centre, I would like to enquire about your hearing care services.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mombasa Hearing Centre on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-semibold text-white shadow-lift transition-transform hover:scale-[1.03]"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="hidden text-sm sm:inline">Chat with us</span>
      </a>
    </div>
  );
}
