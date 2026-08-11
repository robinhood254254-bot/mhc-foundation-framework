import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

export type ImageRatio = "hero" | "landscape" | "portrait" | "square" | "wide" | "article";

const ratioClass: Record<ImageRatio, string> = {
  hero: "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  article: "aspect-[16/9]",
};

/**
 * Reusable responsive image container.
 * Renders a labelled placeholder until approved photography is supplied.
 */
export function ImageContainer({
  src,
  alt,
  label,
  ratio = "landscape",
  position = "center",
  rounded = "xl",
  priority = false,
  className,
  imgClassName,
  sizes,
}: {
  src?: string;
  alt: string;
  /** Placeholder caption describing the approved image that will be supplied. */
  label?: string;
  ratio?: ImageRatio;
  position?: "center" | "top" | "bottom" | "left" | "right";
  rounded?: "none" | "lg" | "xl" | "2xl" | "full";
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  sizes?: string;
}) {
  const roundedClass = {
    none: "",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  }[rounded];

  const objectPosition = {
    center: "object-center",
    top: "object-top",
    bottom: "object-bottom",
    left: "object-left",
    right: "object-right",
  }[position];

  return (
    <div
      className={cn(
        "relative isolate w-full overflow-hidden border border-border/70",
        ratioClass[ratio],
        roundedClass,
        !src && "placeholder-grid",
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={cn("size-full object-cover", objectPosition, imgClassName)}
        />
      ) : (
        <div
          className="flex size-full flex-col items-center justify-center gap-2 p-6 text-center"
          role="img"
          aria-label={`Image placeholder: ${alt}`}
        >
          <ImageIcon className="size-6 text-primary/70" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.14em] text-primary/80 uppercase">
            Image placeholder
          </p>
          <p className="max-w-[26ch] text-xs text-muted-foreground">{label ?? alt}</p>
        </div>
      )}
    </div>
  );
}
