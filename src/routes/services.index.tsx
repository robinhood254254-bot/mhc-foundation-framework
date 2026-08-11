import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { ServiceCard, ProductCard, ArticleCard, TestimonialCard } from "@/components/ui-kit/Cards";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { cta } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Hearing Services | Mombasa Hearing Centre" },
      { name: "description", content: "Specialist hearing-care services offered by Mombasa Hearing Centre. Approved service details are published progressively." },
      { property: "og:title", content: "Hearing Services | Mombasa Hearing Centre" },
      { property: "og:description", content: "Specialist hearing-care services offered by Mombasa Hearing Centre. Approved service details are published progressively." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Hearing Services"
        intro="Approved service descriptions will be supplied in a later module. The structure below is ready to receive them."
        breadcrumbs={[{ label: "Services" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ServiceCard
              key={i}
              title={`Service Placeholder 0${i + 1}`}
              description="Approved service description pending."
              to={`/services/service-placeholder-0${i + 1}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
