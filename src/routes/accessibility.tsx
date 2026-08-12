import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/ui-kit/Page";

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
          <section>
            <h2 className="text-2xl font-bold text-ink">Our commitment</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A hearing care practice of all places should be usable by everyone. This site is built to meet the
              Web Content Accessibility Guidelines 2.1 at level AA, and accessibility is treated as part of the build
              rather than an afterthought.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ink">How the site is built</h2>
            <ul className="mt-4 space-y-3">
              {[
                "Semantic HTML with a single main heading per page and a logical heading order",
                "Text and interface colours tested for contrast against their backgrounds",
                "Every meaningful image carries descriptive alternative text",
                "All functionality is reachable by keyboard, with visible focus indicators",
                "Layouts reflow to 320 pixels and text can be enlarged without loss of content",
                "Motion is reduced automatically when your device requests it",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ink">Accessibility at the centre</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our rooms are on the fifth floor of NSSF Building, North Wing, served by lift. Consultations are given in
              English or Kiswahili, family members are welcome in the room, and our team is used to communicating
              clearly with patients who have significant hearing loss. If you need written instructions rather than
              spoken ones, tell the front desk and we will provide them.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ink">Tell us if something does not work</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If any part of this site or of our service is difficult for you to use, we want to hear about it. Call
              the centre, send a WhatsApp message or email us, describe the problem and the page it happened on, and we
              will correct it and reply with an alternative way to get the information you needed.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
