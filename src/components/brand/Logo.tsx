import { Link } from "@tanstack/react-router";
import logo from "@/assets/mhc-logo.png.asset.json";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const h = size === "sm" ? "h-9" : size === "lg" ? "h-16" : "h-12";
  return (
    <Link
      to="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${site.name} — home`}
    >
      <img
        src={logo.url}
        alt={`${site.name} logo`}
        className={cn(h, "w-auto object-contain")}
        width={240}
        height={96}
      />
    </Link>
  );
}
