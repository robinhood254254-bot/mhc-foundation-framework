import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: As = "h2",
  actions,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <As
          className={cn(
            "mt-3 font-bold text-ink",
            As === "h1" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl",
          )}
        >
          {title}
        </As>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
