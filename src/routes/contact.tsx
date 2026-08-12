import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { contact, cta, googlePlaceUrl, googleStreetViewUrl, mapDirectionsUrl, mapEmbedSrc, whatsappLink } from "@/lib/site";
import { media } from "@/lib/media";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mombasa Hearing Centre | Nkrumah Road, Mombasa" },
      {
        name: "description",
        content:
          "Contact Mombasa Hearing Centre: phone, WhatsApp, email, opening hours and directions to NSSF Building, 5th Floor, Nkrumah Road, Mombasa, Kenya.",
      },
      { property: "og:title", content: "Contact Mombasa Hearing Centre | Nkrumah Road, Mombasa" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, email, opening hours and directions to our Mombasa hearing centre.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Phone,
    title: "Call the centre",
    lines: [
      { label: contact.phoneDisplay, href: contact.phoneHref },
      { label: contact.landlineDisplay, href: contact.landlineHref },
    ],
    note: "Best for urgent questions and same-week appointment changes.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [
      {
        label: contact.whatsappDisplay,
        href: whatsappLink("Hello Mombasa Hearing Centre, I would like to make an enquiry."),
      },
    ],
    note: "Send us a message any time; we reply during opening hours.",
  },
  {
    icon: Mail,
    title: "Email",
    lines: [{ label: contact.email, href: `mailto:${contact.email}` }],
    note: "Ideal for referrals, reports and detailed enquiries.",
  },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        image={ url: media.receptionEntrance.url }
        eyebrow="Contact"
        title="Contact Mombasa Hearing Centre"
        intro="Reach our team by phone, WhatsApp or email, or visit us on the 5th floor of the NSSF Building on Nkrumah Road in Mombasa."
        breadcrumbs={[{ label: "Contact" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />

      <Section label="Contact channels">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <c.icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold text-ink">{c.title}</h2>
              <ul className="mt-3 space-y-1.5">
                {c.lines.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm font-semibold text-foreground hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted" label="Visit us">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
          <div>
            <p className="eyebrow">Visit us</p>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Where to find the centre</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Mombasa Hearing Centre is located inside the NSSF Building on Nkrumah Road, in the heart of Mombasa
              Island. Take the lift to the 5th floor and follow the Mombasa Hearing Centre signage and arrow to our
              entrance — our reception team will welcome you and complete your registration.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-ink">Address</p>
                  <p className="text-sm text-muted-foreground">
                    {contact.addressLine1}
                    <br />
                    {contact.addressLine2}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-ink">Opening hours</p>
                  <dl className="mt-1 space-y-1 text-sm">
                    {contact.hours.map((h) => (
                      <div key={h.days} className="flex flex-wrap gap-x-3">
                        <dt className="text-muted-foreground">{h.days}</dt>
                        <dd className="font-semibold text-ink">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href={mapDirectionsUrl} icon={<Navigation aria-hidden="true" />}>
                Get directions
              </CTAButton>
              <CTAButton href={googlePlaceUrl} variant="secondary">
                View us on Google
              </CTAButton>
              <CTAButton href={googleStreetViewUrl} variant="secondary">
                Street view of the building
              </CTAButton>
              <CTAButton
                href={whatsappLink("Hello Mombasa Hearing Centre, I need help finding your offices.")}
                variant="secondary"
                icon={<MessageCircle aria-hidden="true" />}
              >
                Ask for directions
              </CTAButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <iframe
              title="Map showing Mombasa Hearing Centre, NSSF Building, Nkrumah Road, Mombasa"
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 lg:h-[460px]"
            />
          </div>
        </div>
      </Section>

      <Section label="Finding our entrance">
        <div className="grid gap-6 md:grid-cols-2">
          <figure>
            <ImageContainer
              ratio="landscape"
              alt={media.signage.alt}
              src={media.signage.url}
              rounded="2xl"
              position="center"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Our signage outside the entrance, with an arrow pointing the way to Mombasa Hearing Centre.
            </figcaption>
          </figure>
          <figure>
            <ImageContainer
              ratio="landscape"
              alt={media.receptionEntrance.alt}
              src={media.receptionEntrance.url}
              rounded="2xl"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Inside our reception, where patients are welcomed and registered before their appointment.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="muted" label="Book an appointment">
        <div className="rounded-3xl border border-border bg-primary-soft p-6 text-center md:p-10">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Ready to book your visit?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Appointments are handled on a separate booking page so we can capture your preferred date, time and
            reason for visiting.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton to="/book-appointment" size="lg">
              Book an Appointment
            </CTAButton>
            <CTAButton to="/about" size="lg" variant="secondary">
              About the Centre
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
