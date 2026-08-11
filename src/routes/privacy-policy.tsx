import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mombasa Hearing Centre" },
      { name: "description", content: "Privacy policy for Mombasa Hearing Centre. Approved legal wording is supplied separately." },
      { property: "og:title", content: "Privacy Policy | Mombasa Hearing Centre" },
      { property: "og:description", content: "Privacy policy for Mombasa Hearing Centre. Approved legal wording is supplied separately." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="Approved legal wording will be supplied in a later module."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <ContentPlaceholder title="Privacy Policy — section 1" lines={5} />
          <ContentPlaceholder title="Privacy Policy — section 2" lines={4} />
          <ContentPlaceholder title="Privacy Policy — section 3" lines={4} />
        </div>
      </Section>
    </>
  );
}
