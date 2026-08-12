import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ImageContainer, type ImageRatio } from "./ImageContainer";

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card",
        interactive && "transition-shadow duration-200 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ServiceCard({
  title,
  description,
  to,
  icon,
}: {
  title: string;
  description: string;
  to: string;
  icon?: ReactNode;
}) {
  return (
    <Card interactive className="group p-6 md:p-7">
      <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
        {icon ?? <span className="text-sm font-bold">MHC</span>}
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link
        to={to}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
      >
        Learn more
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="absolute inset-0" aria-hidden="true" />
      </Link>
    </Card>
  );
}

export function ProductCard({
  title,
  category,
  to,
  imageLabel,
  src,
  description,
}: {
  title: string;
  category: string;
  to: string;
  imageLabel: string;
  src?: string | undefined;
  description?: string | undefined;
}) {
  return (
    <Card interactive className="group">
      <ImageContainer
        ratio="square"
        alt={imageLabel}
        label={imageLabel}
        src={src}
        rounded="none"
        className="border-0 border-b bg-surface-2"
        imgClassName="object-contain p-6"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{category}</p>
        <h3 className="mt-2 text-base font-semibold text-ink">{title}</h3>
        {description ? (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
        <Link to={to} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          View details
          <ArrowUpRight className="size-4" />
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}

export function ArticleCard({
  title,
  category,
  to,
  imageLabel,
  src,
  excerpt,
  ratio = "article",
}: {
  title: string;
  category: string;
  to: string;
  imageLabel: string;
  src?: string | undefined;
  excerpt?: string | undefined;
  ratio?: ImageRatio;
}) {
  return (
    <Card interactive className="group">
      <ImageContainer
        ratio={ratio}
        alt={imageLabel}
        label={imageLabel}
        src={src}
        rounded="none"
        className="border-0 border-b"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{category}</p>
        <h3 className="mt-2 text-base leading-snug font-semibold text-ink">{title}</h3>
        {excerpt ? <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{excerpt}</p> : null}
        <Link to={to} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Read article
          <ArrowUpRight className="size-4" />
          <span className="absolute inset-0" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}

export function TestimonialCard({
  quote,
  name,
  meta,
  rating,
}: {
  quote: string;
  name: string;
  meta: string;
  rating?: number | undefined;
}) {
  return (
    <Card className="p-6 md:p-7">
      {rating ? (
        <p className="text-sm tracking-[0.2em] text-primary" aria-label={`${rating} out of 5 stars`}>
          <span aria-hidden="true">{"★".repeat(rating)}</span>
        </p>
      ) : null}
      <div aria-hidden="true" className="mt-1 font-display text-4xl leading-none text-primary/30">
        &ldquo;
      </div>
      <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-foreground">{quote}</blockquote>
      <figcaption className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <p className="text-xs text-muted-foreground">{meta}</p>
      </figcaption>
    </Card>
  );
}

export function TrustBadge({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
      {icon ? (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
          {icon}
        </span>
      ) : null}
      <div className="min-w-0">
        <p className="text-sm font-bold text-ink">{value}</p>
        <p className="truncate text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export function DownloadResourceCard({
  title,
  meta,
  href = "#",
}: {
  title: string;
  meta: string;
  href?: string;
}) {
  return (
    <Card interactive className="flex-row items-center gap-4 p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent text-xs font-bold">
        PDF
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-ink">{title}</h3>
        <p className="text-xs text-muted-foreground">{meta}</p>
      </div>
      <a href={href} className="shrink-0 text-sm font-semibold text-primary">
        Download<span className="sr-only"> {title}</span>
      </a>
    </Card>
  );
}
