import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { contact, cta, mainNav, whatsappLink, type NavItem } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function TopBar() {
  const { t } = useI18n();
  return (
    <div className="hidden border-b border-border bg-surface-2 lg:block">
      <div className="container-page flex h-10 items-center justify-between gap-6 text-xs">
        <p className="truncate text-muted-foreground">
          {contact.addressLine1}, {contact.addressLine2}
        </p>
        <div className="flex shrink-0 items-center gap-5">
          <a href={contact.phoneHref} className="flex items-center gap-1.5 font-medium hover:text-primary">
            <Phone className="size-3.5" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hello Mombasa Hearing Centre, I would like to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium hover:text-primary"
          >
            <MessageCircle className="size-3.5" aria-hidden="true" />
            {t("WhatsApp")}
          </a>
          <a href={`mailto:${contact.email}`} className="font-medium hover:text-primary">
            {contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function DesktopMegaItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const { t } = useI18n();

  const show = () => {
    window.clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="flex items-center">
        <Link
          to={item.to}
          className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary [&.active]:text-primary"
          activeProps={{ className: "text-primary" }}
        >
          {t(item.label)}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={`${t(item.label)} menu`}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          className="-ml-1 rounded p-1 text-muted-foreground hover:text-primary"
        >
          <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div
          className="absolute top-full left-1/2 z-50 w-[min(44rem,88vw)] -translate-x-1/2 pt-3"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        >
          <div className="rounded-2xl border border-border bg-popover p-4 shadow-lift">
            <ul className="grid gap-1 sm:grid-cols-2">
              {item.children?.map((child) => (
                <li key={child.to}>
                  <Link
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl p-3 transition-colors hover:bg-primary-soft"
                  >
                    <span className="block text-sm font-semibold text-ink">{child.label}</span>
                    {child.description ? (
                      <span className="mt-0.5 block text-xs text-muted-foreground">{child.description}</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3">
              <p className="text-xs text-muted-foreground">Full list published in a later module.</p>
              <Link to={item.to} className="text-sm font-semibold text-primary" onClick={() => setOpen(false)}>
                View all
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </li>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n();
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0]!;
        const last = focusables[focusables.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t("Menu")}
        className="absolute inset-x-0 top-0 flex max-h-dvh flex-col overflow-y-auto bg-background pb-8 shadow-lift"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("Close")}
            className="grid size-11 place-items-center rounded-full border border-border text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="px-5 py-4">
          <ul className="divide-y divide-border">
            {mainNav.map((item) => (
              <li key={item.to} className="py-1">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="flex-1 py-3 text-base font-semibold text-ink"
                    activeProps={{ className: "text-primary" }}
                  >
                    {t(item.label)}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      aria-expanded={expanded === item.to}
                      aria-label={`Toggle ${t(item.label)} submenu`}
                      onClick={() => setExpanded(expanded === item.to ? null : item.to)}
                      className="grid size-11 place-items-center rounded-lg border border-border text-muted-foreground"
                    >
                      <ChevronDown
                        className={cn("size-4 transition-transform", expanded === item.to && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                  ) : null}
                </div>
                {item.children && expanded === item.to ? (
                  <ul className="mb-3 space-y-1 rounded-xl bg-surface-2 p-2">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          onClick={onClose}
                          className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 px-5">
          <CTAButton to={cta.primary.to} block size="lg">
            {t(cta.primary.label)}
          </CTAButton>
          <div className="grid grid-cols-2 gap-3">
            <CTAButton href={contact.phoneHref} variant="secondary">
              {t("Call us")}
            </CTAButton>
            <CTAButton
              href={whatsappLink("Hello Mombasa Hearing Centre, I would like to make an enquiry.")}
              variant="secondary"
            >
              {t("WhatsApp")}
            </CTAButton>
          </div>
          <p className="pt-2 text-xs text-muted-foreground">
            {contact.addressLine1}, {contact.addressLine2}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[60] w-full">
      <TopBar />
      <div
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-card",
        )}
      >
        <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((item) =>
                item.children ? (
                  <DesktopMegaItem key={item.to} item={item} />
                ) : (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                      activeProps={{ className: "text-primary" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <CTAButton to={cta.primary.to} className="hidden sm:inline-flex" size="sm">
              {t(cta.primary.label)}
            </CTAButton>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t("Menu")}
              aria-expanded={menuOpen}
              className="grid size-11 place-items-center rounded-xl border border-border text-foreground lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
