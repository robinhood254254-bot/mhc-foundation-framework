import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { cta } from "@/lib/site";
import { hearingTests } from "@/lib/hearing-tests";
import { testIcons } from "@/lib/icons";
import { media } from "@/lib/media";

export const Route = createFileRoute("/hearing-test/")({
  head: () => ({
    meta: [
      { title: "Hearing Tests in Mombasa | Mombasa Hearing Centre" },
      {
        name: "description",
        content:
          "Diagnostic hearing and balance tests in Mombasa: pure tone audiometry, tympanometry, BERA, caloric testing, paediatric assessment and tinnitus evaluation.",
      },
      { property: "og:title", content: "Hearing Tests in Mombasa | Mombasa Hearing Centre" },
      {
        property: "og:description",
        content:
          "Audiologist-led hearing and balance diagnostics at NSSF Building, Nkrumah Road, Mombasa. Same-day results and clear written reports.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hearing-test" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hearing-test" }],
  }),
  component: HearingTestIndex,
});

const journey = [
  {
    title: "Listen to the story first",
    body: "Every appointment opens with a conversation. When the difficulty started, where it bites hardest, what has already been tried. That history shapes which tests we run.",
  },
  {
    title: "Look inside the ear",
    body: "Otoscopy before anything else. Wax, infection or a retracted eardrum will distort every measurement that follows, so they are dealt with first.",
  },
  {
    title: "Measure, do not guess",
    body: "Calibrated equipment, established protocols and results recorded directly into your file. Nothing is estimated from how loudly you say you can hear.",
  },
  {
    title: "Explain it plainly",
    body: "You leave knowing what your audiogram shows, in English or Kiswahili, with a written report for your doctor, employer or school.",
  },
];

function HearingTestIndex() {
  return (
    <>
      <PageHeader
        image={{ url: media.ptaTerry.url }}
        eyebrow="Diagnostics"
        title="Hearing and balance tests"
        intro="Accurate diagnosis is where good hearing care begins. Our audiologists run a full diagnostic range at NSSF Building on Nkrumah Road, from the standard audiogram to objective brainstem and balance testing, with results explained to you the same day."
        breadcrumbs={[{ label: "Hearing Test" }]}
        actions={
          <>
            <CTAButton to={cta.primary.to}>Book a hearing test</CTAButton>
            <CTAButton to={cta.secondary.to} variant="secondary">
              Ask our team a question
            </CTAButton>
          </>
        }
      />

      <Section label="Our approach">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="How we test"
              title="A method, not a quick check"
              description="A hearing test is only as good as the hands running it. Masking, probe seal, reflex thresholds and paediatric conditioning are skilled steps, and they are the difference between a result you can act on and a number on a page."
            />
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {journey.map((item, i) => (
                <li key={item.title} className="rounded-2xl border border-border bg-surface p-5">
                  <span className="grid size-9 place-items-center rounded-lg bg-primary-soft text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <ImageContainer
            ratio="portrait"
            src={media.ptaTerry.url}
            alt={media.ptaTerry.alt}
            position="center"
            rounded="2xl"
            className="shadow-lift"
          />
        </div>
      </Section>

      <Section tone="muted" label="Tests we perform">
        <SectionHeading
          eyebrow="Diagnostic range"
          title="Tests performed at the centre"
          description="Select any assessment to read what it measures, how it is performed, how to prepare and what the results mean."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hearingTests.map((test, i) => {
            const icon = testIcons[test.slug];
            return (
              <Reveal key={test.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 70} className="h-full">
              <Link
                to="/hearing-test/$slug"
                params={{ slug: test.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                <div className="relative overflow-hidden">
                  <ImageContainer
                    ratio="landscape"
                    src={test.hero?.url}
                    alt={test.hero?.alt ?? test.name}
                    label={test.name}
                    rounded="none"
                    className="border-0 border-b"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  {icon ? (
                    <span className="absolute bottom-3 left-3 grid size-10 place-items-center rounded-xl bg-surface/95 text-primary shadow-card backdrop-blur">
                      {icon}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-lg font-semibold text-ink">{test.name}</h3>
                  {test.alsoKnownAs ? (
                    <p className="mt-1 text-xs font-medium tracking-wide text-primary/80 uppercase">
                      {test.alsoKnownAs}
                    </p>
                  ) : null}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{test.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section label="When to get tested">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Warning signs"
              title="When it is time to book"
              description="Hearing loss is gradual, and most people wait years before acting. These are the signs worth taking seriously."
            />
            <ul className="mt-7 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {[
                "You hear people speaking but cannot make out the words, especially in a crowded room.",
                "Family complain the television or radio is too loud.",
                "You ask people to repeat themselves several times a day.",
                "Ringing, buzzing or hissing in one or both ears.",
                "Dizziness, spinning or unsteadiness on your feet.",
                "A child who is slow to speak, inattentive at school, or turns only when you touch them.",
                "You work around machinery, generators, engines or loud music.",
                "Sudden loss of hearing in one ear, which should be treated as urgent.",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-primary-soft p-6 md:p-10">
            <h3 className="text-2xl font-bold text-ink">What your visit includes</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A standard diagnostic appointment covers history taking, otoscopic examination, pure tone audiometry with
              masking where required, speech testing, tympanometry with acoustic reflexes, and a full explanation of the
              findings. Additional tests are added when the history calls for them.
            </p>
            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ["Typical duration", "45 to 60 minutes"],
                ["Results", "Same day, explained in person"],
                ["Report", "Written and signed for your doctor"],
                ["Languages", "English and Kiswahili"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-surface p-4">
                  <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{k}</dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>
              <CTAButton to="/contact" variant="secondary">
                Find the centre
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
