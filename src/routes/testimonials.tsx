import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { ServiceCard, ProductCard, ArticleCard, TestimonialCard } from "@/components/ui-kit/Cards";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Mombasa Hearing Centre" },
      { name: "description", content: "Patient testimonials for Mombasa Hearing Centre. Only approved, verified testimonials are published." },
      { property: "og:title", content: "Testimonials | Mombasa Hearing Centre" },
      { property: "og:description", content: "Patient testimonials for Mombasa Hearing Centre. Only approved, verified testimonials are published." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Patient Testimonials"
        intro="Only approved, verified testimonials will be published here. Cards below are structural placeholders."
        breadcrumbs={[{ label: "Testimonials" }]}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <TestimonialCard
              key={i}
              quote="Approved testimonial text pending."
              name={`Testimonial Placeholder 0${i + 1}`}
              meta="Approved attribution pending"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
