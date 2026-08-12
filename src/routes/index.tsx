import { createFileRoute } from "@tanstack/react-router";
import { Award, Ear, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { Hero } from "@/components/ui-kit/Hero";
import { Section, ContentPlaceholder } from "@/components/ui-kit/Page";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import {
  ArticleCard,
  ProductCard,
  ServiceCard,
  TestimonialCard,
  TrustBadge,
  Card,
} from "@/components/ui-kit/Cards";
import { DoctorProfile } from "@/components/ui-kit/DoctorProfile";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { ContactBlock } from "@/components/ui-kit/ContactBlock";
import { cta, site } from "@/lib/site";
import { media } from "@/lib/media";
import { hearingTests } from "@/lib/hearing-tests";
import { featuredTestimonials, patientVoices } from "@/lib/testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mombasa Hearing Centre | Specialist Hearing Care in Mombasa" },
      {
        name: "description",
        content:
          "Mombasa Hearing Centre is a specialist hearing-care organisation at NSSF Building, Nkrumah Road, Mombasa, offering hearing aids, hearing tests and patient education.",
      },
      { property: "og:title", content: "Mombasa Hearing Centre | Specialist Hearing Care in Mombasa" },
      {
        property: "og:description",
        content: "Specialist hearing care, hearing aids and hearing assessments in Mombasa, Kenya.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const heroSlides = [
  { src: media.receptionEntrance.url, alt: media.receptionEntrance.alt, label: "Mombasa Hearing Centre reception", focal: "center" as const },
  { src: media.teamGroup.url, alt: media.teamGroup.alt, label: "Our team", focal: "center" as const },
  { src: media.drMahin.url, alt: media.drMahin.alt, label: "Dr Mahin Abdilahi Mohamed", focal: "top" as const },
  { src: media.audiologistTerry.url, alt: media.audiologistTerry.alt, label: "Audiology assessment", focal: "top" as const },
];

const trust = [
  { value: `${site.experienceYears}+ years`, label: "Experience placeholder", icon: <Award className="size-4" /> },
  { value: "Specialist care", label: "Positioning placeholder", icon: <Ear className="size-4" /> },
  { value: "Mombasa, Kenya", label: "NSSF Building, Nkrumah Rd", icon: <ShieldCheck className="size-4" /> },
  { value: "Patient support", label: "Support placeholder", icon: <HeartHandshake className="size-4" /> },
];

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        eyebrow={`Specialist hearing care · ${site.experienceYears}+ years in Mombasa`}
        headline="Hearing care built around you, in the heart of Mombasa"
        subheadline="Audiologist-led hearing tests, balance diagnostics and hearing aid fitting at NSSF Building on Nkrumah Road. We measure carefully, explain plainly, and stay with you long after the fitting."
        primaryCta={{ label: cta.primary.label, to: cta.primary.to }}
        secondaryCta={{ label: cta.hearingTest.label, to: cta.hearingTest.to }}
        slides={heroSlides}
        overlay={0}
        trustIndicator="Diagnostic testing, fitting and aftercare under one roof since 2003"
        quotes={patientVoices}
      />


      {/* 2. Trust / Experience strip */}
      <section aria-label="Experience" className="border-y border-border bg-surface">
        <div className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <TrustBadge key={item.value} value={item.value} label={item.label} icon={item.icon} />
          ))}
        </div>
      </section>

      {/* 3. Featured services */}
      <Section label="Featured services">
        <SectionHeading
          eyebrow="Services"
          title="Featured hearing services"
          description="Approved service list and descriptions will be supplied in a later module."
          actions={<CTAButton to="/services" variant="secondary">All services</CTAButton>}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ServiceCard
              key={i}
              title={`Service Placeholder 0${i + 1}`}
              description="Approved service description pending."
              to={`/services/service-placeholder-0${i + 1}`}
              icon={<Stethoscope className="size-5" />}
            />
          ))}
        </div>
      </Section>

      {/* 4. Why Mombasa Hearing Centre */}
      <Section tone="muted" label="Why Mombasa Hearing Centre">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <ImageContainer
            ratio="landscape"
            alt={media.receptionTeam.alt}
            src={media.receptionTeam.url}
            rounded="2xl"
          />
          <div>
            <SectionHeading
              eyebrow="Why us"
              title="Why Mombasa Hearing Centre"
              description="Approved differentiators will be supplied in a later module."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="p-5">
                  <h3 className="text-sm font-semibold text-ink">Reason Placeholder 0{i + 1}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Approved supporting text pending.</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Lead doctor / clinical authority */}
      <Section label="Clinical authority">
        <DoctorProfile
          doctor={{
            name: "Dr Mahin Abdilahi Mohamed",
            title: "Lead Audiologist & Founder",
            qualifications: ["Audiology", "Hearing aid fitting & rehabilitation", "Paediatric hearing care"],
            experience: "Over two decades of clinical hearing-care experience",
            bio: "Dr Mahin leads the clinical team at Mombasa Hearing Centre, with more than twenty years spent assessing and managing hearing loss across all age groups. He is known for explaining results clearly and for the long-term relationships he builds with the families in his care.",
            portraitSrc: media.drMahin.url,
            portraitLabel: media.drMahin.alt,
          }}
        />
      </Section>

      {/* 6. Hearing aids */}
      <Section tone="muted" label="Hearing aids">
        <SectionHeading
          eyebrow="Hearing Aids"
          title="Hearing aid range"
          description="Approved product range and imagery will be supplied in a later module."
          actions={<CTAButton to="/hearing-aids" variant="secondary">View hearing aids</CTAButton>}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
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

      {/* 7. Hearing and balance tests */}
      <Section label="Hearing test">
        <SectionHeading
          eyebrow="Diagnostics"
          title="Hearing and balance tests we perform"
          description="From the standard audiogram to objective brainstem and balance testing, every assessment is run by an audiologist on calibrated equipment and explained to you the same day."
          actions={
            <CTAButton to={cta.hearingTest.to} variant="secondary">
              All hearing tests
            </CTAButton>
          }
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hearingTests.slice(0, 6).map((test) => (
            <ServiceCard
              key={test.slug}
              title={test.name}
              description={test.summary}
              to={`/hearing-test/${test.slug}`}
              icon={<Stethoscope className="size-5" />}
            />
          ))}
        </div>
        <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-surface p-6 shadow-card md:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <h3 className="text-2xl font-bold text-ink md:text-3xl">Not sure which test you need?</h3>
            <p className="mt-3 text-muted-foreground">
              Most people start with a full diagnostic hearing assessment. It takes under an hour, covers otoscopy,
              pure tone audiometry, speech testing and tympanometry, and tells us exactly what to do next. Call the
              centre and our team will guide you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>
              <CTAButton to={cta.secondary.to} variant="secondary">
                {cta.secondary.label}
              </CTAButton>
            </div>
          </div>
          <ImageContainer
            ratio="landscape"
            alt={media.tympanometryResults.alt}
            src={media.tympanometryResults.url}
            rounded="2xl"
          />
        </div>
      </Section>


      {/* 8. Hearing education */}
      <Section tone="muted" label="Hearing education">
        <SectionHeading
          eyebrow="Hearing Education"
          title="Patient education"
          description="Approved educational articles will be supplied in a later module."
          actions={<CTAButton to="/hearing-education" variant="secondary">All resources</CTAButton>}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
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

      {/* 9. Testimonials */}
      <Section label="Testimonials">
        <SectionHeading
          eyebrow="Testimonials"
          title="Patient experiences"
          description="Verified reviews from patients who visited Mombasa Hearing Centre, published on our Google Business Profile."
          actions={<CTAButton to="/testimonials" variant="secondary">All testimonials</CTAButton>}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredTestimonials.map((t) => (
            <TestimonialCard key={t.name} quote={t.quote} name={t.name} meta={t.meta} rating={t.rating} />
          ))}
        </div>
      </Section>

      {/* 10. Partner / supplier recognition */}
      <Section tone="muted" label="Partners and suppliers">
        <SectionHeading
          eyebrow="Partners"
          title="Partner and supplier recognition"
          description="Approved partner and supplier marks will be supplied in a later module."
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-xl border border-dashed border-border bg-surface px-4 text-center text-xs text-muted-foreground"
            >
              Partner logo placeholder 0{i + 1}
            </div>
          ))}
        </div>
      </Section>

      {/* 11. Appointment CTA */}
      <Section label="Book an appointment">
        <div className="grid gap-10 rounded-3xl border border-border bg-primary-soft p-6 md:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Appointments"
              title="Book an appointment with our team"
              description="Send your appointment details straight to our team on WhatsApp, or call the centre during opening hours."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to={cta.primary.to} size="lg">
                {cta.primary.label}
              </CTAButton>
              <CTAButton to={cta.secondary.to} size="lg" variant="secondary">
                {cta.secondary.label}
              </CTAButton>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <ContactBlock />
          </div>
        </div>
        <div className="mt-10">
          <ContentPlaceholder
            title="Additional homepage content"
            note="Reserved for approved copy blocks introduced in later modules."
          />
        </div>
      </Section>
    </>
  );
}
