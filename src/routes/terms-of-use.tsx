import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Mombasa Hearing Centre" },
      { name: "description", content: "Terms of use for the Mombasa Hearing Centre website. Approved legal wording is supplied separately." },
      { property: "og:title", content: "Terms of Use | Mombasa Hearing Centre" },
      { property: "og:description", content: "Terms of use for the Mombasa Hearing Centre website. Approved legal wording is supplied separately." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-of-use" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        intro="Approved legal wording will be supplied in a later module."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <ContentPlaceholder title="Terms of Use — section 1" lines={5} />
          <ContentPlaceholder title="Terms of Use — section 2" lines={4} />
          <ContentPlaceholder title="Terms of Use — section 3" lines={4} />
        </div>
      </Section>
    </>
  );
}
