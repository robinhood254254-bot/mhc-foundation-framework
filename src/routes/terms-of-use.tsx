import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { LegalBody, type LegalSection } from "@/components/ui-kit/LegalBody";
import { contact, site } from "@/lib/site";

const title = "Terms of Use | Mombasa Hearing Centre";
const description =
  "The terms that apply to the use of the Mombasa Hearing Centre website, appointment requests, product information and downloadable brochures.";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-of-use" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
  component: Page,
});

const sections: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    body: [
      `By using this website you agree to these terms. If you do not agree with them, please do not use the site. The site is operated by ${site.name}, ${contact.addressLine1}, ${contact.addressLine2}.`,
    ],
  },
  {
    heading: "Purpose of this website",
    body: [
      "This website exists to explain the services we provide, the assessments we perform and the hearing aids we fit, and to make it easy to contact the centre or request an appointment. It is an information resource, not a diagnostic tool and not a substitute for a consultation.",
    ],
  },
  {
    heading: "Appointment requests",
    body: [
      "An appointment request sent through this site, by WhatsApp or by email is a request, not a confirmed booking. An appointment is confirmed only when a member of our team replies to you. Please arrive on time and let us know in advance if you cannot attend, so that the slot can be offered to another patient.",
    ],
  },
  {
    heading: "Product information and brochures",
    body: [
      "Hearing aid descriptions, specifications and downloadable brochures on this site are provided by Starkey, the manufacturer, and are reproduced for your information. Features, styles and availability may change without notice, and not every feature is available on every model or in every market. The specification confirmed at your fitting appointment is the one that applies.",
      "Brochures may be downloaded and shared for personal, non-commercial use. All trademarks and product imagery remain the property of their owners.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      `Photography of the centre, our team and our patients, along with the written content on this site, belongs to ${site.name} and may not be copied, reproduced or republished without written permission.`,
    ],
  },
  {
    heading: "Links to other sites",
    body: [
      "Where we link to a manufacturer, a map service or another external resource, we do so for convenience. We do not control those sites and are not responsible for their content or their privacy practices.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "We take care to keep the information on this site accurate and current, but we cannot guarantee that it is free from error or interruption. To the extent permitted by law, we are not liable for any loss arising from reliance on website content alone rather than on advice given to you in person by our clinical team.",
    ],
  },
  {
    heading: "Changes and contact",
    body: [
      `We may update these terms as the site develops. The version published here is the version that applies. Questions about these terms can be sent to ${contact.email} or raised on ${contact.phoneDisplay}.`,
    ],
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        intro="These terms explain what this website is for, what you can expect from the information published here, and the limits of what a website can do for your hearing."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />
      <Section>
        <LegalBody sections={sections} />
      </Section>
    </>
  );
}
