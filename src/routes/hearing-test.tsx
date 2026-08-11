import { createFileRoute } from "@tanstack/react-router";
import { Headphones, ListChecks, Volume2 } from "lucide-react";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { cta } from "@/lib/site";

export const Route = createFileRoute("/hearing-test")({
  head: () => ({
    meta: [
      { title: "Hearing Test | Mombasa Hearing Centre" },
      {
        name: "description",
        content:
          "The dedicated hearing test experience at Mombasa Hearing Centre. Test logic and clinical guidance are supplied in a later module.",
      },
      { property: "og:title", content: "Hearing Test | Mombasa Hearing Centre" },
      {
        property: "og:description",
        content: "A dedicated hearing test page and on-site assessment booking at Mombasa Hearing Centre.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hearing-test" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hearing-test" }],
  }),
  component: HearingTestPage,
});

const steps = [
  { icon: Headphones, title: "Step 1 — Setup", body: "Placeholder for the approved preparation instructions." },
  { icon: Volume2, title: "Step 2 — Assessment", body: "Placeholder for the approved assessment interaction." },
  { icon: ListChecks, title: "Step 3 — Result", body: "Placeholder for the approved result and next-step guidance." },
];

function HearingTestPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hearing Test"
        title="Hearing Test"
        intro="A dedicated hearing test experience. The approved test logic, audio and clinical guidance will be supplied in a later module."
        breadcrumbs={[{ label: "Hearing Test" }]}
        actions={
          <>
            <CTAButton to={cta.primary.to}>Book a clinical hearing test</CTAButton>
            <CTAButton to="/services" variant="secondary">
              Explore our services
            </CTAButton>
          </>
        }
      />

      <Section>
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-card md:p-10">
          <p className="eyebrow">Test application area</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Online hearing screening</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            This container is reserved for the interactive hearing screening application. No clinical logic has been
            implemented yet.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-dashed border-primary/35 bg-surface-2 p-5">
                <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-2">
          <ContentPlaceholder title="Who the screening is for" lines={4} />
          <ContentPlaceholder title="Important clinical note" lines={4} />
        </div>
      </Section>
    </>
  );
}
