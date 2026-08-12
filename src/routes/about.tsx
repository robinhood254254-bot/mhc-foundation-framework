import { createFileRoute } from "@tanstack/react-router";
import { Award, Ear, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { DoctorProfile } from "@/components/ui-kit/DoctorProfile";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { cta, site } from "@/lib/site";
import { media } from "@/lib/media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mombasa Hearing Centre | Specialist Hearing Care in Mombasa" },
      {
        name: "description",
        content:
          "Meet the team behind Mombasa Hearing Centre — specialist hearing care, audiology and hearing aid services at NSSF Building, Nkrumah Road, Mombasa.",
      },
      { property: "og:title", content: "About Mombasa Hearing Centre | Specialist Hearing Care in Mombasa" },
      {
        property: "og:description",
        content: "Our people, our centre and our approach to hearing care in Mombasa and the wider Coast region.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

const values = [
  {
    icon: Ear,
    title: "Hearing is our only focus",
    body: "We are a dedicated hearing centre, not a general clinic. Every appointment, instrument and member of staff exists to support your hearing.",
  },
  {
    icon: ShieldCheck,
    title: "Careful, evidence-led practice",
    body: "Assessments follow recognised audiological protocols so recommendations are based on measured results, never guesswork.",
  },
  {
    icon: HeartHandshake,
    title: "Patients before products",
    body: "We explain the options in plain language, in English or Kiswahili, and give you time to decide what is right for you and your family.",
  },
  {
    icon: Users,
    title: "Care that continues",
    body: "Follow-up, fine-tuning, servicing and support are part of the relationship, not an afterthought once you leave the centre.",
  },
];

const team = [
  {
    src: media.teamGroup.url,
    alt: media.teamGroup.alt,
    caption: "The Mombasa Hearing Centre team — clinical and front-of-house staff together at the centre.",
  },
  {
    src: media.receptionTeam.url,
    alt: media.receptionTeam.alt,
    caption: "Our front desk team, who handle registration, appointments and patient records.",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        image={{ url: media.teamGroup.url }}
        eyebrow="About"
        title="About Mombasa Hearing Centre"
        intro="A specialist hearing-care organisation serving Mombasa, the Coast region and Kenya at large — combining experienced clinicians, modern audiology equipment and a genuinely welcoming centre."
        breadcrumbs={[{ label: "About" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />

      <Section label="Who we are">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <ImageContainer
            ratio="landscape"
            alt={media.receptionEntrance.alt}
            src={media.receptionEntrance.url}
            rounded="2xl"
          />
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
              Specialist hearing care in the heart of Mombasa
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {site.name} is a dedicated hearing-care centre based on the 5th floor of the NSSF Building on Nkrumah
                Road, Mombasa. We support children, adults and older patients who are living with hearing difficulty,
                tinnitus or ear-health concerns, and we help families understand what those difficulties mean day to
                day.
              </p>
              <p>
                Our team brings more than {site.experienceYears} years of combined clinical experience in audiology and
                hearing rehabilitation. Patients come to us from across Mombasa County and the wider Coast region, as
                well as from other parts of Kenya, for assessments, hearing devices, servicing and long-term follow-up
                care.
              </p>
              <p>
                The centre is purpose-arranged for hearing work: a quiet assessment environment, calibrated audiometry
                equipment, a dedicated fitting and demonstration area, and a reception team that keeps appointments
                running on time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" label="Our values">
        <SectionHeading
          eyebrow="Our approach"
          title="What guides our care"
          description="Four commitments that shape every appointment at Mombasa Hearing Centre."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <v.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Clinical authority">
        <DoctorProfile
          doctor={{
            name: "Dr Mahin Abdilahi Mohamed",
            title: "Lead Audiologist & Founder",
            qualifications: ["Audiology", "Hearing aid fitting & rehabilitation", "Paediatric hearing care"],
            experience: "Over two decades of clinical hearing-care experience",
            bio: "Dr Mahin leads the clinical team at Mombasa Hearing Centre. He has spent over twenty years assessing and managing hearing loss across all age groups, from newborn and paediatric referrals to adults and older patients adapting to hearing devices. He is known for taking the time to explain results clearly and for building long-term relationships with the families under his care.",
            portraitSrc: media.drMahin.url,
            portraitLabel: media.drMahin.alt,
          }}
        />
      </Section>

      <Section tone="muted" label="Our audiologist">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow">Audiology</p>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Madam Terry, Audiologist</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Madam Terry carries out hearing assessments at the centre, including pure tone audiometry and the
                related diagnostic tests used to map the type and degree of a hearing loss.
              </p>
              <p>
                She talks patients through each step before it happens, keeps the test environment calm for children
                and anxious first-time visitors, and produces the audiogram that guides the clinical recommendation
                you receive.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>
              <CTAButton to="/contact" variant="secondary">
                Contact the centre
              </CTAButton>
            </div>
          </div>
          <ImageContainer
            ratio="portrait"
            alt={media.audiologistTerry.alt}
            src={media.audiologistTerry.url}
            rounded="2xl"
            position="top"
            className="max-w-md"
          />
        </div>
      </Section>

      <Section label="Our team">
        <SectionHeading
          eyebrow="Our team"
          title="The people you will meet"
          description="From your first phone call to your follow-up appointment, the same familiar team looks after you."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {team.map((t) => (
            <figure key={t.src}>
              <ImageContainer ratio="landscape" alt={t.alt} src={t.src} rounded="2xl" />
              <figcaption className="mt-3 text-sm text-muted-foreground">{t.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="muted" label="Our centre">
        <SectionHeading
          eyebrow="Our facilities"
          title="Inside the centre"
          description="A well-equipped, clearly signposted centre on Nkrumah Road, stocked to support fitting, servicing and everyday hearing needs."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <figure>
            <ImageContainer ratio="landscape" alt={media.displayCounter.alt} src={media.displayCounter.url} rounded="2xl" />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Our fitting and demonstration counter inside the centre.
            </figcaption>
          </figure>
          <figure>
            <ImageContainer ratio="landscape" alt={media.deviceDisplay.alt} src={media.deviceDisplay.url} rounded="2xl" />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Devices and accessories kept in stock for demonstration and fitting.
            </figcaption>
          </figure>
          <figure>
            <ImageContainer ratio="landscape" alt={media.batteries2.alt} src={media.batteries2.url} rounded="2xl" />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Hearing aid batteries in the common sizes, available at the centre.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section label="Visit us">
        <div className="rounded-3xl border border-border bg-primary-soft p-6 text-center md:p-10">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-surface text-primary">
            <Award className="size-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-bold text-ink md:text-3xl">Come and see us in Mombasa</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Whether you are noticing a change in your hearing or supporting a family member who is, our team is ready
            to help. Book an appointment or get in touch and we will guide you from there.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton to={cta.primary.to} size="lg">
              {cta.primary.label}
            </CTAButton>
            <CTAButton to="/contact" size="lg" variant="secondary">
              Contact & directions
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
