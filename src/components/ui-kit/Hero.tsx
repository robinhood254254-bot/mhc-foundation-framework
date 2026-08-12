import { useEffect, useRef, useState } from "react";
import { Quote, ShieldCheck } from "lucide-react";
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

export type HeroQuote = { quote: string; name: string; meta: string };

/** A rotating headline / subheadline pair, optionally paired with a product backdrop. */
export type HeroMessage = {
  headline: string;
  subheadline: string;
  backdrop?: { src: string; alt: string; caption?: string } | undefined;
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
  /** Rotating patient voices shown beneath the hero imagery. */
  quotes?: HeroQuote[] | undefined;
  intervalMs?: number | undefined;
  /** Rotating headline set, typed out one character at a time. */
  messages?: HeroMessage[] | undefined;
};

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () =>
      setReduce(mq.matches || document.documentElement.classList.contains("reduce-motion"));
    read();
    mq.addEventListener("change", read);
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      mq.removeEventListener("change", read);
      obs.disconnect();
    };
  }, []);
  return reduce;
}

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
  quotes,
  intervalMs = 9000,
  messages,
}: HeroProps) {
  const reduce = usePrefersReducedMotion();
  const set: HeroMessage[] = messages?.length ? messages : [{ headline, subheadline }];
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState(reduce ? set[0]!.headline : "");
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  const current = set[step % set.length]!;

  /* Rotate the message set, and keep the photography in step with it. */
  useEffect(() => {
    if (set.length < 2 && slides.length < 2) return;
    if (reduce) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setStep((s) => s + 1);
      setActive((i) => (i + 1) % Math.max(slides.length, 1));
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [set.length, slides.length, intervalMs, reduce]);

  /* Typewriter for the active headline. */
  useEffect(() => {
    if (reduce) {
      setTyped(current.headline);
      return;
    }
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(current.headline.slice(0, i));
      if (i >= current.headline.length) window.clearInterval(id);
    }, 20);
    return () => window.clearInterval(id);
  }, [current.headline, reduce]);

  return (
    <section
      className="relative overflow-hidden bg-surface-2"
      aria-label="Introduction"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* Rotating Starkey product backdrop, changing with the headline. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {set.map((m, i) =>
          m.backdrop ? (
            <img
              key={m.backdrop.src}
              src={m.backdrop.src}
              alt=""
              className={cn(
                "absolute top-1/2 left-1/2 w-[min(52rem,130%)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-all duration-1000 ease-out lg:left-[36%]",
                i === step % set.length && "scale-100 opacity-[0.38]",
                i !== step % set.length && "scale-95",
              )}
            />
          ) : null,
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-2/40 via-transparent to-surface-2" />
      </div>

      <div className="relative container-page grid gap-6 py-6 md:gap-8 md:py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10 lg:py-8">
        <div className="max-w-xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-2 min-h-[3.4em] text-[2rem] leading-[1.08] font-bold text-ink sm:min-h-[2.6em] sm:text-5xl lg:text-[3.25rem]">
            <span>{typed}</span>
            {!reduce ? (
              <span aria-hidden="true" className="animate-caret ml-1 inline-block text-primary">
                |
              </span>
            ) : null}
            <span className="sr-only">{current.headline}</span>
          </h1>
          <p
            key={current.subheadline}
            className="animate-fade-up mt-3 min-h-[5.5rem] text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {current.subheadline}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton to={primaryCta.to} size="lg" attention>
              {primaryCta.label}
            </CTAButton>
            {secondaryCta ? (
              <CTAButton to={secondaryCta.to} size="lg" variant="secondary">
                {secondaryCta.label}
              </CTAButton>
            ) : null}
          </div>
          {trustIndicator ? (
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground">
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
                  ratio="landscape"
                  alt={slide.alt}
                  label={slide.label}
                  src={slide.src}
                  position={slide.focal ?? "center"}
                  rounded="2xl"
                  priority={i === 0}
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="shadow-lift"
                />
                {slide.src && overlay > 0 ? (
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
                  onClick={() => {
                    setActive(i);
                    setStep(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === active ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50",
                  )}
                />
              ))}
            </div>
          ) : null}

          {quotes && quotes.length ? (
            <div className="relative mt-5 min-h-[9.5rem] sm:min-h-[8rem]" aria-live="polite">
              {quotes.map((q, i) => (
                <figure
                  key={q.name}
                  aria-hidden={i !== active % quotes.length}
                  className={cn(
                    "rounded-2xl border border-border bg-surface p-5 shadow-card transition-opacity duration-700",
                    i === active % quotes.length
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0",
                  )}
                >
                  <Quote className="size-5 text-primary" aria-hidden="true" />
                  <blockquote className="mt-2 text-sm leading-relaxed text-foreground">{q.quote}</blockquote>
                  <figcaption className="mt-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-ink">{q.name}</span> · {q.meta}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
