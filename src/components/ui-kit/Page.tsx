import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui-kit/Breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  actions,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs: { label: string; to?: string }[];
  actions?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface-2">
      <div className="container-page py-10 md:py-14">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow ? <p className="eyebrow mt-6">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-ink md:text-5xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground md:text-lg">{intro}</p> : null}
        {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  id,
  label,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "brand";
  id?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "section-y",
        tone === "muted" && "bg-surface-2",
        tone === "brand" && "bg-primary-soft",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

/** Clearly labelled placeholder for content approved in a later module. */
export function ContentPlaceholder({
  title,
  note = "Approved content will be supplied in a later module.",
  lines = 3,
}: {
  title: string;
  note?: string;
  lines?: number;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-primary/35 bg-surface p-6 md:p-8">
      <p className="eyebrow">Placeholder</p>
      <h3 className="mt-2 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{note}</p>
      <div className="mt-5 space-y-2.5" aria-hidden="true">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-2.5 rounded-full bg-surface-2"
            style={{ width: `${100 - i * 12}%` }}
          />
        ))}
      </div>
    </div>
  );
}
