import { Link } from "@tanstack/react-router";
import logo from "@/assets/mhc-logo-mark.png.asset.json";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const h = size === "sm" ? "h-12" : size === "lg" ? "h-24" : "h-16 md:h-20";
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
        width={925}
        height={491}
      />
    </Link>
  );
}
