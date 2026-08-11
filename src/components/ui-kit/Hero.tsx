import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  /** Supplied later — approved MHC photography only. */
  src?: string | undefined;
  alt: string;
  label: string;
  /** Keeps headline clear of faces / key subjects per image composition. */
  focal?: "center" | "top" | "bottom" | "left" | "right" | undefined;
};

export type HeroProps = {
  eyebrow?: string | undefined;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; to: string };
  secondaryCta?: { label: string; to: string } | undefined;
  slides: HeroSlide[];
  /** 0 – 100, controls legibility scrim over photography. */
  overlay?: number | undefined;
  overlayTone?: "dark" | "light" | undefined;
  trustIndicator?: string | undefined;
  trustCard?: { quote: string; name: string; meta: string } | undefined;
  intervalMs?: number | undefined;
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  slides,
  overlay = 55,
  overlayTone = "dark",
  trustIndicator,
  trustCard,
  intervalMs = 6500,
}: HeroProps) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (slides.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || document.documentElement.classList.contains("reduce-motion")) return;
    const id = window.setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <section
      className="relative overflow-hidden bg-surface-2"
      aria-label="Introduction"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="container-page grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl leading-[1.05] font-bold text-ink sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton to={primaryCta.to} size="lg">
              {primaryCta.label}
            </CTAButton>
            {secondaryCta ? (
              <CTAButton to={secondaryCta.to} size="lg" variant="secondary">
                {secondaryCta.label}
              </CTAButton>
            ) : null}
          </div>
          {trustIndicator ? (
            <p className="mt-7 flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {trustIndicator}
            </p>
          ) : null}
        </div>

        <div className="relative">
          <div className="relative">
            {slides.map((slide, i) => (
              <div
                key={slide.label}
                aria-hidden={i !== active}
                className={cn(
                  "transition-opacity duration-700",
                  i === active ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0",
                )}
              >
                <ImageContainer
                  ratio="hero"
                  alt={slide.alt}
                  label={slide.label}
                  src={slide.src}
                  position={slide.focal ?? "center"}
                  rounded="2xl"
                  priority={i === 0}
                  className="shadow-lift"
                />
                {slide.src ? (
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-0 rounded-2xl",
                      overlayTone === "dark"
                        ? "bg-gradient-to-t from-black to-transparent"
                        : "bg-gradient-to-t from-white to-transparent",
                    )}
                    style={{ opacity: overlay / 100 }}
                  />
                ) : null}
              </div>
            ))}
          </div>

          {slides.length > 1 ? (
            <div className="mt-4 flex items-center gap-2" role="tablist" aria-label="Hero images">
              {slides.map((slide, i) => (
                <button
                  key={slide.label}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Show image ${i + 1}: ${slide.label}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === active ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50",
                  )}
                />
              ))}
            </div>
          ) : null}

          {trustCard ? (
            <figure className="mt-5 rounded-2xl border border-border bg-surface p-5 shadow-card lg:absolute lg:-bottom-10 lg:-left-10 lg:mt-0 lg:max-w-xs">
              <blockquote className="text-sm leading-relaxed text-foreground">{trustCard.quote}</blockquote>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                <span className="font-semibold text-ink">{trustCard.name}</span> · {trustCard.meta}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
