import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { cta } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  head: () => ({
    meta: [
      { title: "Service | Mombasa Hearing Centre" },
      { name: "description", content: "Individual hearing service template. Approved clinical content is supplied separately." },
      { property: "og:title", content: "Service | Mombasa Hearing Centre" },
      { property: "og:description", content: "Individual hearing service template. Approved clinical content is supplied separately." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services/$slug" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/$slug" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Service Detail Template"
        intro="This template will render an approved individual service."
        breadcrumbs={[{ label: "Services", to: "/services" }, { label: "Service detail" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <ImageContainer ratio="article" alt="Service illustration" label="Approved service photograph" rounded="2xl" />
            <ContentPlaceholder title="Service overview" lines={5} />
            <ContentPlaceholder title="What to expect" lines={4} />
          </div>
          <aside className="space-y-6">
            <ContentPlaceholder title="Key information" lines={3} />
            <ContentPlaceholder title="Related services" lines={3} />
          </aside>
        </div>
      </Section>
    </>
  );
}
