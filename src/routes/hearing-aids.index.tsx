import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { ServiceCard, ProductCard, ArticleCard, TestimonialCard } from "@/components/ui-kit/Cards";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { cta } from "@/lib/site";

export const Route = createFileRoute("/hearing-aids/")({
  head: () => ({
    meta: [
      { title: "Hearing Aids | Mombasa Hearing Centre" },
      { name: "description", content: "Hearing aid range fitted and supported by Mombasa Hearing Centre. Approved product details are published separately." },
      { property: "og:title", content: "Hearing Aids | Mombasa Hearing Centre" },
      { property: "og:description", content: "Hearing aid range fitted and supported by Mombasa Hearing Centre. Approved product details are published separately." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hearing-aids" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hearing-aids" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Hearing Aids"
        title="Hearing Aids"
        intro="Approved product range, specifications and imagery will be supplied in a later module."
        breadcrumbs={[{ label: "Hearing Aids" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCard
              key={i}
              category="Product placeholder"
              title={`Hearing Aid Placeholder 0${i + 1}`}
              imageLabel="Approved product photograph"
              to={`/hearing-aids/product-placeholder-0${i + 1}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
