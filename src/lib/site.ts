/**
 * Single source of truth for global site data.
 * Contact details, navigation and CTA labels are edited here only.
 */

export const site = {
  name: "Mombasa Hearing Centre",
  shortName: "MHC",
  domain: "mombasahearing.com",
  description:
    "Mombasa Hearing Centre is a company that specializes in Hearing Aids, Public Hospitals. The company has showed exemplary performance in services/products delivery. Mombasa Hearing Centre is located in Kenya, Mombasa County and the address/physical location is at The NSSF Building, Nkurumah Rd, Mombasa, Kenya.",
  experienceYears: 23,
};

export const contact = {
  phoneDisplay: "+254 722 825 006",
  phoneHref: "tel:+254722825006",
  phoneAltDisplay: "+254 723 102 898",
  phoneAltHref: "tel:+254723102898",
  whatsappNumber: "254722825006",
  whatsappDisplay: "+254 722 825 006",
  email: "msahearing@yahoo.com",
  addressLine1: "NSSF Building, 5th Flr, Nkrumah Rd",
  addressLine2: "Mombasa, Kenya",
  mapQuery: "Mombasa Hearing Centre, NSSF Building, Nkrumah Road, Mombasa, Kenya",
  hours: [
    { days: "Monday – Friday", time: "8:00 am – 4:00 pm" },
    { days: "Saturday", time: "9:00 am – 4:00 pm" },
    { days: "Sunday & Public Holidays", time: "Closed" },
  ],
};

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapQuery)}`;

/** Google Business Profile for Mombasa Hearing Centre. */
export const googlePlaceUrl = "https://maps.google.com/?cid=17656764618786340745";
export const googleReviewsUrl = googlePlaceUrl;
export const googleStreetViewUrl =
  "https://www.google.com/maps/@?api=1&map_action=pano&pano=1VntOj5wTLCAEU8tWAcgpA";

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const cta = {
  primary: { label: "Book an Appointment", to: "/book-appointment" as const },
  secondary: { label: "Talk to Our Team", to: "/contact" as const },
  hearingTest: { label: "Take a Hearing Test", to: "/hearing-test" as const },
};

export type NavItem = {
  label: string;
  to: string;
  description?: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Service Placeholder 01", to: "/services/service-placeholder-01", description: "Approved description pending." },
      { label: "Service Placeholder 02", to: "/services/service-placeholder-02", description: "Approved description pending." },
      { label: "Service Placeholder 03", to: "/services/service-placeholder-03", description: "Approved description pending." },
      { label: "Service Placeholder 04", to: "/services/service-placeholder-04", description: "Approved description pending." },
      { label: "Service Placeholder 05", to: "/services/service-placeholder-05", description: "Approved description pending." },
      { label: "Service Placeholder 06", to: "/services/service-placeholder-06", description: "Approved description pending." },
    ],
  },
  { label: "Hearing Aids", to: "/hearing-aids" },
  {
    label: "Hearing Test",
    to: "/hearing-test",
    children: [
      { label: "Pure Tone Audiometry", to: "/hearing-test/pure-tone-audiometry", description: "The reference audiogram: air, bone and speech testing." },
      { label: "Paediatric Hearing Assessment", to: "/hearing-test/paediatric-hearing-assessment", description: "Play and visual reinforcement testing for babies and children." },
      { label: "Tympanometry", to: "/hearing-test/tympanometry-impedance-audiometry", description: "Impedance audiometry and acoustic reflexes for the middle ear." },
      { label: "BERA", to: "/hearing-test/brainstem-evoked-response-audiometry", description: "Objective brainstem evoked response audiometry." },
      { label: "Caloric Test", to: "/hearing-test/caloric-test", description: "Balance testing for dizziness and vertigo." },
      { label: "Vestibular Rehabilitation", to: "/hearing-test/vestibular-rehabilitation", description: "Individually prescribed balance retraining." },
      { label: "Tinnitus Assessment", to: "/hearing-test/tinnitus-assessment-and-management", description: "Evaluation and management of ringing in the ears." },
      { label: "Hearing Aid Fitting", to: "/hearing-test/hearing-aid-fitting-and-verification", description: "Programming, verification and aftercare." },
    ],
  },
  {
    label: "Hearing Education",
    to: "/hearing-education",
    children: [
      { label: "Article Placeholder 01", to: "/hearing-education/article-placeholder-01", description: "Approved article pending." },
      { label: "Article Placeholder 02", to: "/hearing-education/article-placeholder-02", description: "Approved article pending." },
      { label: "Article Placeholder 03", to: "/hearing-education/article-placeholder-03", description: "Approved article pending." },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Service Placeholder 01", to: "/services/service-placeholder-01" },
  { label: "Service Placeholder 02", to: "/services/service-placeholder-02" },
  { label: "Service Placeholder 03", to: "/services/service-placeholder-03" },
  { label: "Service Placeholder 04", to: "/services/service-placeholder-04" },
  { label: "Service Placeholder 05", to: "/services/service-placeholder-05" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Use", to: "/terms-of-use" },
  { label: "Medical Disclaimer", to: "/medical-disclaimer" },
  { label: "Accessibility", to: "/accessibility" },
];
