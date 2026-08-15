/**
 * Single source of truth for global site data.
 * Contact details, navigation and CTA labels are edited here only.
 */

export const site = {
  name: "Mombasa Hearing Centre",
  shortName: "MHC",
  domain: "mombasahearing.com",
  description:
    "Mombasa Hearing Centre is a specialist hearing care practice in Mombasa County, Kenya, providing diagnostic hearing assessments, hearing aids and aftercare. Referrals from public hospitals, private clinics and ENT surgeons are accepted. The centre is located at the NSSF Building, North Wing, 5th Floor, Room 531, Nkrumah Road, Mombasa, Kenya.",
  experienceYears: 23,
};

export const contact = {
  phoneDisplay: "+254 722 825 006",
  phoneHref: "tel:+254722825006",
  landlineDisplay: "+254 723 102 898",
  landlineHref: "tel:+254723102898",
  whatsappNumber: "254722825006",
  whatsappDisplay: "+254 722 825 006",
  email: "msahearing@yahoo.com",
  poBox: "P.O. Box 86771, Mombasa",
  addressLine1: "NSSF Building, North Wing, 5th Floor, Room 531",
  addressLine2: "Nkrumah Road, Mombasa, Kenya",
  mapQuery: "Mombasa Hearing Centre, NSSF Building, Nkrumah Road, Mombasa, Kenya",
  hours: [
    { days: "Monday – Friday", time: "8:30 am – 4:30 pm" },
    { days: "Saturday", time: "9:00 am – 12:00 noon" },
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
      { label: "Diagnostic Hearing Assessment", to: "/services/diagnostic-hearing-assessment", description: "Full audiogram, speech testing and tympanometry in one visit." },
      { label: "Paediatric Hearing Care", to: "/services/paediatric-hearing-care", description: "Testing and hearing aids for babies, toddlers and school children." },
      { label: "Hearing Aid Fitting", to: "/services/hearing-aid-fitting-and-verification", description: "Prescription, programming and verified fitting of Starkey devices." },
      { label: "Repairs, Servicing & Supplies", to: "/services/hearing-aid-repairs-servicing-and-supplies", description: "Cleaning, repairs, re-programming, batteries and accessories." },
      { label: "Home Visits", to: "/services/home-visits", description: "Limited home appointments for bedridden and immobile patients." },
      { label: "Tinnitus Care", to: "/services/tinnitus-assessment-and-management", description: "Measurement, causes and a structured management plan." },
      { label: "Balance & Vestibular Care", to: "/services/balance-and-vestibular-care", description: "Caloric testing and vestibular rehabilitation for dizziness." },
      { label: "Ear Moulds & Hearing Protection", to: "/services/custom-ear-moulds-and-hearing-protection", description: "Custom noise, swim and musician protection made from your impressions." },
    ],
  },
  {
    label: "Hearing Aids",
    to: "/hearing-aids",
    children: [
      { label: "Starkey Signature Series", to: "/hearing-aids/signature-series", description: "Custom invisible and completely-in-canal devices." },
      { label: "Starkey Omega AI", to: "/hearing-aids/omega-ai", description: "Flagship G3 Gen AI platform with Auracast and health tracking." },
      { label: "Starkey Edge AI", to: "/hearing-aids/edge-ai", description: "Deep neural network processing with Edge Mode+." },
      { label: "Starkey Evolv AI", to: "/hearing-aids/evolv-ai", description: "Handcrafted custom devices with 2-Way Audio." },
      { label: "Starkey G Series AI", to: "/hearing-aids/g-series-ai", description: "Accessible range covering mild through profound loss." },
    ],
  },
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
      { label: "Early Signs of Hearing Loss", to: "/hearing-education/signs-of-hearing-loss", description: "Ten signs that justify booking a hearing test." },
      { label: "Hearing Aid Care on the Coast", to: "/hearing-education/living-with-hearing-aids-in-a-coastal-climate", description: "Keeping devices working in heat and humidity." },
      { label: "Protecting Your Hearing", to: "/hearing-education/protecting-your-hearing-from-noise", description: "Noise limits, protection and workplace screening." },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Diagnostic Hearing Assessment", to: "/services/diagnostic-hearing-assessment" },
  { label: "Paediatric Hearing Care", to: "/services/paediatric-hearing-care" },
  { label: "Hearing Aid Fitting", to: "/services/hearing-aid-fitting-and-verification" },
  { label: "Tinnitus Assessment & Management", to: "/services/tinnitus-assessment-and-management" },
  { label: "Repairs, Servicing & Supplies", to: "/services/hearing-aid-repairs-servicing-and-supplies" },
  { label: "Home Visits", to: "/services/home-visits" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Use", to: "/terms-of-use" },
  { label: "Medical Disclaimer", to: "/medical-disclaimer" },
  { label: "Accessibility", to: "/accessibility" },
];
