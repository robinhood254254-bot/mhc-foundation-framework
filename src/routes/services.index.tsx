import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { ServiceCard } from "@/components/ui-kit/Cards";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { cta, site } from "@/lib/site";
import { services } from "@/lib/services";
import { serviceIcons } from "@/lib/icons";
import { media } from "@/lib/media";

const title = "Hearing Services in Kenya | Mombasa Hearing Centre";
const description =
  "Diagnostic hearing assessments, paediatric hearing care, Starkey hearing aid fitting, tinnitus management, balance care, repairs and custom hearing protection for patients from across Kenya.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
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
        image={{ url: media.receptionTeam.url }}
        eyebrow="Services"
        title="Hearing services at Mombasa Hearing Centre"
        intro={`Everything from the first hearing test to lifelong aftercare happens under one roof on Nkrumah Road. ${site.experienceYears} years of practice, serving patients from the Coast, Nairobi and the rest of Kenya, have taught us that careful measurement, plain explanation and steady follow-up matter more than anything else.`}
        breadcrumbs={[{ label: "Services" }]}
        actions={
          <>
            <CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>
            <CTAButton to={cta.secondary.to} variant="secondary">
              {cta.secondary.label}
            </CTAButton>
          </>
        }
      />

      <Section label="All services">
        <SectionHeading
          eyebrow="What we do"
          title="Complete hearing and balance care"
          description="Each service is delivered by our own clinical team on calibrated equipment, and every finding is explained to you before you leave the centre."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 70}
              className="h-full"
            >
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={service.summary}
                to={`/services/${service.slug}`}
                icon={serviceIcons[service.slug]}
                src={service.image.url}
                imageAlt={service.image.alt}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted" label="How care works here">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <ImageContainer
            ratio="landscape"
            src={media.receptionTeam.url}
            alt={media.receptionTeam.alt}
            rounded="2xl"
          />
          <div>
            <SectionHeading
              eyebrow="Your visit"
              title="What happens from the moment you walk in"
              description="A first appointment usually takes under an hour, and you leave with results in your hand rather than a promise to call."
            />
            <ol className="mt-8 space-y-5">
              {[
                {
                  t: "Registration and history",
                  b: "Our front desk registers you and takes a short history: when the difficulty started, any ear infections, noise exposure, medication and family history.",
                },
                {
                  t: "Examination and testing",
                  b: "The audiologist examines both ear canals, then runs the tests your symptoms call for, from pure tone audiometry through to tympanometry or balance assessment.",
                },
                {
                  t: "Results explained",
                  b: "Your audiogram is printed and explained in English or Kiswahili, with family welcome in the room, so the decision that follows is an informed one.",
                },
                {
                  t: "Plan and follow-up",
                  b: "Where treatment is needed we set it out clearly: medical referral, a hearing aid trial, tinnitus management or a review date. Aftercare continues for the life of the device.",
                },
              ].map((step, i) => (
                <li key={step.t} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{step.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section label="Book">
        <div className="rounded-3xl border border-border bg-primary-soft p-6 md:p-10">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Most people start with a diagnostic hearing assessment, and everything else follows from
            what it shows. Send us a message and our team will point you to the right appointment.
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
