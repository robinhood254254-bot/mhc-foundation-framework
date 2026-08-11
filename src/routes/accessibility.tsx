import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, ContentPlaceholder } from "@/components/ui-kit/Page";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility | Mombasa Hearing Centre" },
      { name: "description", content: "Accessibility statement and available accessibility controls on the Mombasa Hearing Centre website." },
      { property: "og:title", content: "Accessibility | Mombasa Hearing Centre" },
      { property: "og:description", content: "Accessibility statement and available accessibility controls on the Mombasa Hearing Centre website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/accessibility" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Accessibility"
        title="Accessibility"
        intro="Accessibility controls are available site-wide from the button in the bottom-left corner of every page."
        breadcrumbs={[{ label: "Accessibility" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-lg font-semibold text-ink">Available controls</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Increase or decrease text size</li>
              <li>High contrast mode</li>
              <li>Light and dark mode</li>
              <li>Reduced motion</li>
              <li>Improved spacing and readability</li>
              <li>Language: English (default) and Kiswahili</li>
              <li>Full keyboard navigation with visible focus states</li>
            </ul>
          </div>
          <ContentPlaceholder title="Accessibility statement" lines={5} />
        </div>
      </Section>
    </>
  );
}
