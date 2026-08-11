import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { cta } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mombasa Hearing Centre | Specialist Hearing Care in Mombasa" },
      { name: "description", content: "Learn about Mombasa Hearing Centre, a specialist hearing-care organisation based at NSSF Building, Nkrumah Road, Mombasa." },
      { property: "og:title", content: "About Mombasa Hearing Centre | Specialist Hearing Care in Mombasa" },
      { property: "og:description", content: "Learn about Mombasa Hearing Centre, a specialist hearing-care organisation based at NSSF Building, Nkrumah Road, Mombasa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About Mombasa Hearing Centre"
        intro="Approved organisation profile, history and clinical philosophy will be supplied in a later module."
        breadcrumbs={[{ label: "About" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImageContainer ratio="landscape" alt="Mombasa Hearing Centre premises" label="Approved photograph: centre premises / reception" rounded="2xl" />
          <ContentPlaceholder title="Organisation overview" lines={5} />
        </div>
      </Section>
      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-3">
          <ContentPlaceholder title="Our approach" />
          <ContentPlaceholder title="Our team" />
          <ContentPlaceholder title="Our facilities" />
        </div>
      </Section>
    </>
  );
}
