import { useCallback, useEffect, useRef, useState } from "react";
import { Accessibility, Minus, Moon, Plus, RotateCcw, Sun, X } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Settings = {
  scale: number; // percent
  contrast: boolean;
  motion: boolean;
  spacing: boolean;
  theme: "light" | "dark";
};

const DEFAULTS: Settings = { scale: 100, contrast: false, motion: false, spacing: false, theme: "light" };
const KEY = "mhc-a11y";

function apply(s: Settings) {
  const root = document.documentElement;
  root.style.setProperty("--font-scale", `${s.scale}%`);
  root.classList.toggle("hc", s.contrast);
  root.classList.toggle("reduce-motion", s.motion);
  root.classList.toggle("readable-spacing", s.spacing);
  root.classList.toggle("dark", s.theme === "dark");
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-surface px-3 py-2.5 text-left text-sm font-medium text-foreground hover:border-primary/50"
    >
      {label}
      <span
        aria-hidden="true"
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors",
          checked ? "bg-primary" : "bg-border",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-5 rounded-full bg-surface transition-all",
            checked ? "left-[1.375rem]" : "left-0.5",
          )}
        />
      </span>
    </button>
  );
}

export function AccessibilityPanel() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      try {
        const parsed = { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Settings>) };
        setSettings(parsed);
        apply(parsed);
        return;
      } catch {
        /* ignore corrupt state */
      }
    }
    apply(DEFAULTS);
  }, []);

  const update = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      apply(next);
      window.localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-4 left-4 z-[80] print:hidden">
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label={t("Accessibility")}
          className="mb-3 max-h-[70dvh] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-border bg-popover p-4 shadow-lift"
        >
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 className="text-sm font-bold text-ink">{t("Accessibility")}</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("Close")}
              className="grid size-9 place-items-center rounded-full border border-border"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
              <p className="mb-2 text-sm font-medium">{t("Text size")}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Decrease text size"
                  onClick={() => update({ scale: Math.max(85, settings.scale - 10) })}
                  className="grid size-11 place-items-center rounded-lg border border-border"
                >
                  <Minus className="size-4" aria-hidden="true" />
                </button>
                <span className="flex-1 text-center text-sm font-semibold" aria-live="polite">
                  {settings.scale}%
                </span>
                <button
                  type="button"
                  aria-label="Increase text size"
                  onClick={() => update({ scale: Math.min(150, settings.scale + 10) })}
                  className="grid size-11 place-items-center rounded-lg border border-border"
                >
                  <Plus className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
              <p className="mb-2 text-sm font-medium">{t("Theme")}</p>
              <div className="grid grid-cols-2 gap-2">
                {(["light", "dark"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    aria-pressed={settings.theme === mode}
                    onClick={() => update({ theme: mode })}
                    className={cn(
                      "flex min-h-11 items-center justify-center gap-2 rounded-lg border text-sm font-medium",
                      settings.theme === mode
                        ? "border-primary bg-primary-soft text-primary"
                        : "border-border text-foreground",
                    )}
                  >
                    {mode === "light" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                    {t(mode === "light" ? "Light" : "Dark")}
                  </button>
                ))}
              </div>
            </div>

            <Toggle label={t("High contrast")} checked={settings.contrast} onChange={(v) => update({ contrast: v })} />
            <Toggle label={t("Reduced motion")} checked={settings.motion} onChange={(v) => update({ motion: v })} />
            <Toggle label={t("Readable spacing")} checked={settings.spacing} onChange={(v) => update({ spacing: v })} />

            <div className="rounded-xl border border-border bg-surface px-3 py-2.5">
              <p className="mb-2 text-sm font-medium">{t("Language")}</p>
              <div className="grid grid-cols-2 gap-2">
                {([
                  { code: "en", label: "English" },
                  { code: "sw", label: "Kiswahili" },
                ] as { code: Lang; label: string }[]).map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    aria-pressed={lang === l.code}
                    onClick={() => setLang(l.code)}
                    className={cn(
                      "min-h-11 rounded-lg border text-sm font-medium",
                      lang === l.code ? "border-primary bg-primary-soft text-primary" : "border-border text-foreground",
                    )}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setLang("en");
                update(DEFAULTS);
              }}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              {t("Reset")}
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={t("Accessibility")}
        className={cn(
          "grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-110 md:size-14",
          !open && "animate-zoom-beat",
        )}

      >
        <Accessibility className="size-6" aria-hidden="true" />
      </button>
    </div>
  );
}
