import { createFileRoute } from "@tanstack/react-router";
import { Award, Ear, HeartHandshake, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/ui-kit/Hero";
import { Section } from "@/components/ui-kit/Page";
import { Reveal } from "@/components/ui-kit/Reveal";
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
import { services } from "@/lib/services";
import { hearingAids } from "@/lib/hearing-aids";
import { articles } from "@/lib/education";
import { featuredTestimonials, patientVoices } from "@/lib/testimonials";
import { serviceIcons, testIcons } from "@/lib/icons";

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

const heroMessages = [
  {
    headline: "Hearing care built around you, in the heart of Mombasa",
    subheadline:
      "Audiologist-led hearing tests, balance diagnostics and hearing aid fitting at NSSF Building on Nkrumah Road. We measure carefully, explain plainly, and stay with you long after the fitting.",
    backdrop: { src: hearingAids[0]!.image.url, alt: hearingAids[0]!.image.alt },
  },
  {
    headline: "Your hearing is our concern",
    subheadline:
      "Every visit starts with measurement, not a sales pitch. Otoscopy, pure tone audiometry, speech testing and tympanometry, with your audiogram printed and explained before you leave.",
    backdrop: { src: hearingAids[1]!.image.url, alt: hearingAids[1]!.image.alt },
  },
  {
    headline: "Starkey technology, fitted and verified here",
    subheadline:
      "As an authorised Starkey partner we prescribe from your own audiogram, verify the fitting on the day, and keep devices, batteries and accessories in stock at the centre.",
    backdrop: { src: hearingAids[2]!.image.url, alt: hearingAids[2]!.image.alt },
  },
  {
    headline: "Aftercare that lasts as long as your device",
    subheadline:
      "Reviews, re-programming, cleaning and repairs continue for the life of the hearing aid, in English or Kiswahili, with your family welcome in the room.",
    backdrop: { src: hearingAids[3]!.image.url, alt: hearingAids[3]!.image.alt },
  },
];

const trust = [
  { value: `${site.experienceYears}+ years`, label: "Serving Mombasa and the coast", icon: <Award className="size-4" /> },
  { value: "Audiologist-led", label: "Every test run by a clinician", icon: <Ear className="size-4" /> },
  { value: "Nkrumah Road", label: "NSSF Building, 5th Floor, Mombasa", icon: <ShieldCheck className="size-4" /> },
  { value: "Lifelong aftercare", label: "Servicing, batteries and reviews on site", icon: <HeartHandshake className="size-4" /> },
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
        messages={heroMessages}
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
          title="What we do at the centre"
          description="Diagnosis, hearing aids, tinnitus care, balance rehabilitation and hearing protection, all delivered by our own clinical team on Nkrumah Road."
          actions={<CTAButton to="/services" variant="secondary">All services</CTAButton>}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 70} className="h-full">
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
              title="Why patients keep coming back"
              description="Families travel from across Mombasa, Kilifi and Kwale to be seen here. These are the reasons they give."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Diagnosis before devices",
                  body: "No one is sold a hearing aid before their hearing has been properly measured and explained.",
                },
                {
                  title: "Stock held on site",
                  body: "Devices, batteries and accessories are kept in the centre, so patients travelling far are rarely sent away empty handed.",
                },
                {
                  title: "Care in your language",
                  body: "Results, options and instructions are explained in English or Kiswahili, with family welcome in the room.",
                },
                {
                  title: "We stay with you",
                  body: "Reviews, re-programming, cleaning and repairs continue for the life of the device, not just the first month.",
                },
              ].map((reason) => (
                <Card key={reason.title} className="p-5">
                  <h3 className="text-sm font-semibold text-ink">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{reason.body}</p>
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
          title="Starkey hearing aids fitted here"
          description="We are an authorised Starkey partner. Devices are prescribed from your own audiogram, verified at the fitting, and serviced at the centre for the life of the device."
          actions={<CTAButton to="/hearing-aids" variant="secondary">View hearing aids</CTAButton>}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hearingAids.slice(0, 4).map((aid, i) => (
            <Reveal key={aid.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 70} className="h-full">
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
          {hearingTests.slice(0, 6).map((test, i) => (
            <Reveal key={test.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 70} className="h-full">
              <ServiceCard
                            key={test.slug}
                            title={test.name}
                            description={test.summary}
                            to={`/hearing-test/${test.slug}`}
                            icon={testIcons[test.slug]}
                            src={test.hero?.url}
                            imageAlt={test.hero?.alt ?? test.name}
                          />
            </Reveal>
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
          title="Understand your hearing"
          description="Plain-language guides written by our clinical team for patients living and working on the coast."
          actions={<CTAButton to="/hearing-education" variant="secondary">All resources</CTAButton>}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 70} className="h-full">
              <ArticleCard
                            key={article.slug}
                            category={article.category}
                            title={article.title}
                            excerpt={article.excerpt}
                            imageLabel={article.image.alt}
                            src={article.image.url}
                            to={`/hearing-education/${article.slug}`}
                          />
            </Reveal>
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
          {featuredTestimonials.map((t, i) => (
            <Reveal key={t.name} direction={i % 2 === 0 ? "left" : "right"} delay={i * 70} className="h-full">
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} meta={t.meta} rating={t.rating} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 10. Starkey partnership */}
      <Section tone="muted" label="Starkey partnership">
        <div className="grid gap-10 rounded-3xl border border-border bg-surface p-6 shadow-card md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Authorised partner"
              title="Starkey technology, fitted and supported in Mombasa"
              description="Starkey supplies the hearing aids we fit, from the invisible custom Signature Series to the flagship Omega AI platform. Being an authorised partner means genuine devices, manufacturer warranty support and access to the full accessory and battery range on site."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Genuine Starkey devices and warranty handling",
                "Batteries in sizes 10, 13, 312 and 675 held in stock",
                "StarLink accessories, chargers and drying kits",
                "TeleHear remote programming after the fitting",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton to="/hearing-aids" variant="secondary">
                Explore the Starkey range
              </CTAButton>
            </div>
          </div>
          <ImageContainer
            ratio="landscape"
            src={media.batteries2.url}
            alt={media.batteries2.alt}
            rounded="2xl"
          />
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
      </Section>
    </>
  );
}
