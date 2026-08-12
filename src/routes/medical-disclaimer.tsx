import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { LegalBody, type LegalSection } from "@/components/ui-kit/LegalBody";
import { contact } from "@/lib/site";

const title = "Medical Disclaimer | Mombasa Hearing Centre";
const description =
  "Information on this website is general in nature. It does not replace a hearing assessment, a diagnosis or advice from a qualified audiologist or doctor.";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/medical-disclaimer" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/medical-disclaimer" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    heading: "General information only",
    body: [
      "The articles, service pages and product pages on this website are written to help you understand hearing, balance and hearing aids. They describe how we work in general terms. They are not a diagnosis, not a prescription and not personal medical advice.",
      "Hearing loss has many causes, and two people with similar symptoms can need completely different treatment. Only a clinical assessment can tell you which applies to you.",
    ],
  },
  {
    heading: "No professional relationship is created online",
    body: [
      "Reading this site, sending an enquiry or downloading a brochure does not create a clinician and patient relationship. That relationship begins when you are seen and assessed at the centre.",
    ],
  },
  {
    heading: "Do not delay medical care",
    body: [
      "Never delay seeking medical attention because of something you read here. Some ear symptoms need urgent review rather than a routine appointment.",
    ],
    list: [
      "Sudden hearing loss in one or both ears, which should be assessed within days",
      "Pain, bleeding or discharge from the ear",
      "Hearing loss following a head injury",
      "Severe or sudden vertigo, especially with weakness, double vision or difficulty speaking",
      "Tinnitus in one ear only, or tinnitus that pulses in time with your heartbeat",
    ],
  },
  {
    heading: "Self-testing and online screeners",
    body: [
      "Any self-check or symptom list on this site is a prompt to seek assessment, nothing more. It is not calibrated, it cannot measure thresholds, and it cannot distinguish between a conductive and a sensorineural loss. A diagnostic audiogram performed on calibrated equipment is the only reliable measure.",
    ],
  },
  {
    heading: "Hearing aids and outcomes",
    body: [
      "Hearing aid features and performance descriptions come from the manufacturer. Individual results depend on the type and degree of your hearing loss, how long it has been present, ear anatomy, your general health and how consistently the devices are worn. We will always give you an honest expectation before a fitting.",
    ],
  },
  {
    heading: "Questions",
    body: [
      `If anything on this website concerns you, speak to us rather than guessing. Call ${contact.phoneDisplay} or ${contact.landlineDisplay}, email ${contact.email}, or visit the centre at ${contact.addressLine1}, ${contact.addressLine2}.`,
    ],
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Medical Disclaimer"
        intro="A website can explain how hearing works and what we do about it. It cannot examine your ears. This page sets out where the information here stops and clinical care begins."
        breadcrumbs={[{ label: "Medical Disclaimer" }]}
      />
      <Section>
        <LegalBody sections={sections} />
      </Section>
    </>
  );
}
