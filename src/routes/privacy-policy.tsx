import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { LegalBody, type LegalSection } from "@/components/ui-kit/LegalBody";
import { contact, site } from "@/lib/site";

const title = "Privacy Policy | Mombasa Hearing Centre";
const description =
  "How Mombasa Hearing Centre collects, uses, stores and protects the personal and clinical information of patients and website visitors.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `${site.name} is a hearing care practice at ${contact.addressLine1}, ${contact.addressLine2}. We are responsible for the personal and clinical information we hold about our patients and about visitors to this website.`,
    ],
  },
  {
    heading: "Information we collect",
    body: ["We collect only what we need in order to provide hearing care and to run the practice."],
    list: [
      "Identity and contact details: name, telephone number, email address, physical address and, where relevant, next of kin",
      "Clinical information: case history, otoscopy findings, audiograms, tympanograms, balance test results, hearing aid prescriptions and fitting records",
      "Appointment and correspondence records, including WhatsApp and email enquiries you send us",
      "Payment and insurance details where a claim or invoice is involved",
      "Basic website usage data such as pages visited and device type, used only to keep the site working well",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "Your information is used to assess your hearing, to provide and support treatment, to keep an accurate clinical record, to contact you about appointments and follow-up, and to meet legal and professional record-keeping obligations.",
      "We do not sell personal information, and we do not share it for advertising purposes.",
    ],
  },
  {
    heading: "Sharing your information",
    body: [
      "Clinical information is shared only where it is necessary for your care or required by law: with an ENT surgeon, doctor or hospital you have been referred to or referred from, with a hearing aid manufacturer where a device must be built, repaired or replaced under warranty, and with an insurer or employer where you have asked us to submit a report or claim.",
      "Where a manufacturer builds a custom device, only the technical information needed to build and programme that device is shared.",
    ],
  },
  {
    heading: "How long we keep records",
    body: [
      "Clinical records are retained for the period required by Kenyan health record-keeping practice and are then securely destroyed. Paediatric records are retained until the patient reaches adulthood and for the required period thereafter.",
    ],
  },
  {
    heading: "How we protect information",
    body: [
      "Paper records are kept in locked storage at the centre and electronic records are held on password-protected systems accessible only to authorised staff. Every member of our team is bound by patient confidentiality.",
    ],
  },
  {
    heading: "Your rights",
    body: ["You may, at any time and free of charge for a reasonable request:"],
    list: [
      "Ask what information we hold about you and receive a copy",
      "Ask us to correct information that is inaccurate or incomplete",
      "Ask us to stop sending appointment reminders or other messages",
      "Ask about the basis on which any specific information was shared",
    ],
  },
  {
    heading: "Contacting us about privacy",
    body: [
      `Write to us at ${contact.email}, call ${contact.phoneDisplay} or ${contact.landlineDisplay}, or visit the centre at ${contact.addressLine1}, ${contact.addressLine2}. We aim to respond to any privacy request within thirty days.`,
    ],
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        intro="Hearing care depends on trust. This policy sets out exactly what we record about you, why we record it, who can see it and what you can ask us to do with it."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <Section>
        <LegalBody sections={sections} />
      </Section>
    </>
  );
}
