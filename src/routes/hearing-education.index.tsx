import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { ServiceCard, ProductCard, ArticleCard, TestimonialCard } from "@/components/ui-kit/Cards";
import { DownloadResourceCard } from "@/components/ui-kit/Cards";

export const Route = createFileRoute("/hearing-education")({
  head: () => ({
    meta: [
      { title: "Hearing Education | Mombasa Hearing Centre" },
      { name: "description", content: "Patient education resources and articles from Mombasa Hearing Centre. Approved articles are published progressively." },
      { property: "og:title", content: "Hearing Education | Mombasa Hearing Centre" },
      { property: "og:description", content: "Patient education resources and articles from Mombasa Hearing Centre. Approved articles are published progressively." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hearing-education" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hearing-education" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Hearing Education"
        title="Hearing Education"
        intro="Approved educational articles and downloadable resources will be supplied in a later module."
        breadcrumbs={[{ label: "Hearing Education" }]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ArticleCard
              key={i}
              category="Article placeholder"
              title={`Education Article Placeholder 0${i + 1}`}
              imageLabel="Approved article image"
              to={`/hearing-education/article-placeholder-0${i + 1}`}
            />
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">Downloadable resources</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <DownloadResourceCard key={i} title={`Resource Placeholder 0${i + 1}`} meta="Approved document pending" />
          ))}
        </div>
      </Section>
    </>
  );
}
