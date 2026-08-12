import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[transform,background-color,color,box-shadow] duration-200 hover:scale-[1.04] disabled:pointer-events-none disabled:opacity-60 active:translate-y-px [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-card hover:bg-primary-deep hover:shadow-lift",
        secondary:
          "border border-border bg-surface text-foreground hover:border-primary/50 hover:bg-primary-soft",
        accent: "bg-accent text-accent-foreground shadow-card hover:brightness-110",
        ghost: "text-primary hover:bg-primary-soft",
        onImage:
          "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
      },
      size: {
        sm: "min-h-10 px-4 text-sm",
        md: "min-h-12 px-6 text-[0.95rem]",
        lg: "min-h-14 px-8 text-base",
      },
      block: { true: "w-full", false: "" },
      attention: { true: "animate-attention", false: "" },
    },
    defaultVariants: { variant: "primary", size: "md", block: false, attention: false },
  },
);

type BaseProps = VariantProps<typeof ctaVariants> & {
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
};

type CTAProps =
  | (BaseProps & { to: string; href?: never; onClick?: never; type?: never })
  | (BaseProps & { href: string; to?: never; external?: boolean; onClick?: never; type?: never })
  | (BaseProps & { to?: never; href?: never; onClick?: () => void; type?: "button" | "submit" });

export function CTAButton(props: CTAProps) {
  const { className, children, icon, variant, size, block, attention } = props;
  const cls = cn(ctaVariants({ variant, size, block, attention }), className);
  const inner = (
    <>
      {children}
      {icon}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {inner}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    return (
      <a
        href={props.href}
        className={cls}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={cls}>
      {inner}
    </button>
  );
}
