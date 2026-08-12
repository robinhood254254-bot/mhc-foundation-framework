export type LegalSection = { heading: string; body: string[]; list?: string[] };

export function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
          {section.body.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          {section.list ? (
            <ul className="mt-5 space-y-3">
              {section.list.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
