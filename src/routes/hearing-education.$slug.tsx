import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";

export const Route = createFileRoute("/hearing-education/$slug")({
  head: () => ({
    meta: [
      { title: "Article | Mombasa Hearing Centre" },
      { name: "description", content: "Individual hearing education article template. Approved editorial content is supplied separately." },
      { property: "og:title", content: "Article | Mombasa Hearing Centre" },
      { property: "og:description", content: "Individual hearing education article template. Approved editorial content is supplied separately." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hearing-education/$slug" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hearing-education/$slug" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Article"
        title="Education Article Template"
        intro="This template will render an approved education article."
        breadcrumbs={[{ label: "Hearing Education", to: "/hearing-education" }, { label: "Article" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <ImageContainer ratio="article" alt="Article image" label="Approved article image" rounded="2xl" />
          <ContentPlaceholder title="Article body" lines={6} />
          <ContentPlaceholder title="Key takeaways" lines={3} />
        </div>
      </Section>
    </>
  );
}
