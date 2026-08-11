import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { cta } from "@/lib/site";

export const Route = createFileRoute("/hearing-aids/$slug")({
  head: () => ({
    meta: [
      { title: "Hearing Aid | Mombasa Hearing Centre" },
      { name: "description", content: "Individual hearing-aid product template. Approved product specifications are supplied separately." },
      { property: "og:title", content: "Hearing Aid | Mombasa Hearing Centre" },
      { property: "og:description", content: "Individual hearing-aid product template. Approved product specifications are supplied separately." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hearing-aids/$slug" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hearing-aids/$slug" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="Hearing Aid Detail Template"
        intro="This template will render an approved hearing-aid product."
        breadcrumbs={[{ label: "Hearing Aids", to: "/hearing-aids" }, { label: "Product detail" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <ImageContainer ratio="square" alt="Hearing aid product" label="Approved product photograph" rounded="2xl" />
          <div className="space-y-6">
            <ContentPlaceholder title="Product overview" lines={4} />
            <ContentPlaceholder title="Specifications" lines={5} />
          </div>
        </div>
      </Section>
    </>
  );
}
