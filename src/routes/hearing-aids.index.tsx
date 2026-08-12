import { createFileRoute } from "@tanstack/react-router";
import { BatteryCharging, Droplets, Radio, Sparkles } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { ProductCard, DownloadResourceCard, Card } from "@/components/ui-kit/Cards";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { cta } from "@/lib/site";
import { hearingAids, brochures } from "@/lib/hearing-aids";
import { media } from "@/lib/media";

const title = "Starkey Hearing Aids in Mombasa | Mombasa Hearing Centre";
const description =
  "Starkey Signature Series, Omega AI, Edge AI, Evolv AI and G Series AI hearing aids, fitted, verified and serviced at Mombasa Hearing Centre on Nkrumah Road.";

export const Route = createFileRoute("/hearing-aids/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hearing-aids" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hearing-aids" }],
  }),
  component: Page,
});

const highlights = [
  {
    icon: <Sparkles className="size-5" />,
    title: "AI-driven sound processing",
    body: "Starkey's neural processors analyse your environment continuously and adjust amplification, noise reduction and directionality before you notice a change in the room.",
  },
  {
    icon: <BatteryCharging className="size-5" />,
    title: "Rechargeable, all day",
    body: "Up to fifty-one hours from a single charge on the flagship platforms, and up to thirty-eight hours on the world's smallest custom rechargeable device.",
  },
  {
    icon: <Droplets className="size-5" />,
    title: "Built for coastal conditions",
    body: "Water-resistant and waterproof coatings that stand up to humidity, sweat and rain, which matters far more in Mombasa than in a showroom.",
  },
  {
    icon: <Radio className="size-5" />,
    title: "Streaming and Auracast",
    body: "Calls, television and public broadcast audio delivered straight into both ears through Bluetooth LE Audio, with app control from your phone.",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        image={{ url: media.displayCounter.url }}
        eyebrow="Hearing Aids"
        title="Starkey hearing aids, fitted and supported in Mombasa"
        intro="We are an authorised Starkey partner. Every device below is prescribed from your own audiogram, programmed and verified at the centre, and supported here for the life of the device with servicing, batteries and re-programming."
        breadcrumbs={[{ label: "Hearing Aids" }]}
        actions={
          <>
            <CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>
            <CTAButton to={cta.hearingTest.to} variant="secondary">
              {cta.hearingTest.label}
            </CTAButton>
          </>
        }
      />

      <Section label="Range">
        <SectionHeading
          eyebrow="The range"
          title="Five Starkey families, one fitting standard"
          description="From invisible custom devices to ultra-power behind-the-ear units for profound loss, the right choice depends on your audiogram, your ear anatomy, your dexterity and the way you actually live."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hearingAids.map((aid, i) => (
            <Reveal
              key={aid.slug}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 70}
              className="h-full"
            >
              <ProductCard
                key={aid.slug}
                category={aid.category}
                title={aid.name}
                description={aid.summary}
                imageLabel={aid.image.alt}
                src={aid.image.url}
                to={`/hearing-aids/${aid.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted" label="Why Starkey">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Technology"
              title="What today's hearing aids actually do"
              description="These are not amplifiers. They are small computers that make millions of decisions an hour about which sounds to keep and which to suppress."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <Card key={h.title} className="p-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                    {h.icon}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </Card>
              ))}
            </div>
          </div>
          <ImageContainer
            ratio="landscape"
            src={media.displayCounter.url}
            alt={media.displayCounter.alt}
            rounded="2xl"
          />
        </div>
      </Section>

      <Section label="Fitting process">
        <SectionHeading
          eyebrow="How we fit"
          title="A device is only as good as the fitting behind it"
          description="Nobody at Mombasa Hearing Centre is sold a hearing aid before their hearing has been measured, and no fitting is finished on the first day."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Assessment",
              b: "A full diagnostic hearing assessment establishes the prescription target for each ear.",
            },
            {
              t: "Selection",
              b: "We match style, power and features to your audiogram, dexterity, ear anatomy and daily life.",
            },
            {
              t: "Fitting and verification",
              b: "The device is programmed to prescription and checked in your ear, not just in software.",
            },
            {
              t: "Aftercare",
              b: "Reviews at two weeks, six weeks and three months, then servicing and remote fine-tuning for life.",
            },
          ].map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted" label="Brochures">
        <SectionHeading
          eyebrow="Downloads"
          title="Official Starkey brochures"
          description="Full product brochures for every family we fit. Download, read at home, and bring your questions to the appointment."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {brochures.map((b) => (
            <DownloadResourceCard key={b.href} title={b.title} meta={b.meta} href={b.href} />
          ))}
        </div>
      </Section>

      <Section label="Book">
        <div className="rounded-3xl border border-border bg-primary-soft p-6 md:p-10">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Try before you decide</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Come in for a hearing assessment and a demonstration. You will hear the difference in
            the room before any commitment is made, and we will tell you honestly if a hearing aid
            is not what you need.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton to={cta.primary.to} size="lg">
              {cta.primary.label}
            </CTAButton>
            <CTAButton to={cta.secondary.to} size="lg" variant="secondary">
              {cta.secondary.label}
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
