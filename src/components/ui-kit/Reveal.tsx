import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type RevealDirection = "left" | "right" | "up";

/**
 * Reveals its children the first time they scroll into view.
 * Alternating directions give sections an entrance rather than a static drop-in.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  direction?: RevealDirection;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const anim = shown
    ? direction === "left"
      ? "reveal-left"
      : direction === "right"
        ? "reveal-right"
        : "reveal-up"
    : "reveal-idle";

  return (
    <Tag
      ref={ref as never}
      className={cn(anim, className)}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
