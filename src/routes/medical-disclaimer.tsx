import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    meta: [
      { title: "Medical Disclaimer | Mombasa Hearing Centre" },
      { name: "description", content: "Medical disclaimer for Mombasa Hearing Centre. Approved wording is supplied separately." },
      { property: "og:title", content: "Medical Disclaimer | Mombasa Hearing Centre" },
      { property: "og:description", content: "Medical disclaimer for Mombasa Hearing Centre. Approved wording is supplied separately." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/medical-disclaimer" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/medical-disclaimer" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Medical Disclaimer"
        intro="Approved legal wording will be supplied in a later module."
        breadcrumbs={[{ label: "Medical Disclaimer" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <ContentPlaceholder title="Medical Disclaimer — section 1" lines={5} />
          <ContentPlaceholder title="Medical Disclaimer — section 2" lines={4} />
          <ContentPlaceholder title="Medical Disclaimer — section 3" lines={4} />
        </div>
      </Section>
    </>
  );
}
