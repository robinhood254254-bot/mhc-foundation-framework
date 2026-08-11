import { useId, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-xl border border-input bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-60 aria-[invalid=true]:border-destructive";

function FieldShell({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 text-xs font-medium text-destructive">
          <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

type Common = { label: string; hint?: string; error?: string };

export function TextField({
  label,
  hint,
  error,
  className,
  ...props
}: Common & InputHTMLAttributes<HTMLInputElement>) {
  const auto = useId();
  const id = props.id ?? auto;
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={props.required}>
      <input
        {...props}
        id={id}
        aria-invalid={!!error}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        className={cn(fieldBase, className)}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  label,
  hint,
  error,
  className,
  ...props
}: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const auto = useId();
  const id = props.id ?? auto;
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={props.required}>
      <textarea
        {...props}
        id={id}
        aria-invalid={!!error}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        className={cn(fieldBase, "min-h-32 resize-y", className)}
      />
    </FieldShell>
  );
}

export function SelectField({
  label,
  hint,
  error,
  options,
  className,
  ...props
}: Common & { options: { value: string; label: string }[] } & SelectHTMLAttributes<HTMLSelectElement>) {
  const auto = useId();
  const id = props.id ?? auto;
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} required={props.required}>
      <select
        {...props}
        id={id}
        aria-invalid={!!error}
        aria-describedby={cn(hint && `${id}-hint`, error && `${id}-error`) || undefined}
        className={cn(fieldBase, "appearance-none pr-10", className)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function FormStatus({
  state,
  message,
}: {
  state: "success" | "error" | "info";
  message: string;
}) {
  const styles = {
    success: "border-primary/30 bg-primary-soft text-primary-deep",
    error: "border-destructive/40 bg-accent-soft text-destructive",
    info: "border-border bg-surface-2 text-muted-foreground",
  }[state];
  return (
    <p role="status" aria-live="polite" className={cn("rounded-xl border px-4 py-3 text-sm font-medium", styles)}>
      {message}
    </p>
  );
}
