/**
 * Verified patient reviews published on the Mombasa Hearing Centre
 * Google Business Profile. Text is reproduced as written by the reviewer.
 */
export type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  rating: number;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Very impressed — fair pricing, good options of hearing aids, on site in inventory, a knowledgeable and skilled audiologist who was funny as well……. we walked in needing new hearing aids and left with an excellent set and met some great people.",
    name: "Max Beckett",
    meta: "Google review · 6 reviews · 8 months ago",
    rating: 5,
    featured: true,
  },
  {
    quote: "Pure professionalism at its best with excellent service.",
    name: "Abdulla Noorani",
    meta: "Google review · Local Guide · 33 reviews · 3 years ago",
    rating: 5,
    featured: true,
  },
  {
    quote: "It is good, doctor is available when contacted and very active services.",
    name: "Christopher Mosoku",
    meta: "Google review · 1 review · 7 years ago",
    rating: 5,
    featured: true,
  },
  {
    quote: "A very good place for your hearing needs.",
    name: "Sam Kioko",
    meta: "Google review · 1 review · 2 years ago",
    rating: 5,
  },
  {
    quote: "Where your hearing needs will be sorted.",
    name: "Mbaluka Munyoki",
    meta: "Google review · Local Guide · 238 reviews · 4 years ago",
    rating: 5,
  },
  {
    quote: "Nice service and very professional.",
    name: "Jamal Abdillahi",
    meta: "Google review · 2 reviews · 6 years ago",
    rating: 5,
  },
  {
    quote: "Nice place.",
    name: "Bryan Kitere",
    meta: "Google review · 6 reviews · a year ago",
    rating: 5,
  },
  {
    quote: "Good.",
    name: "Harsh Shah",
    meta: "Google review · Local Guide · 93 reviews · 7 years ago",
    rating: 5,
  },
];

/** Reviewers who left a star rating or photos without written feedback. */
export const ratingOnlyReviewers = [
  "Mahin Abdillahi",
  "Dydus Mwambingu",
  "Kirwa Kiptoo",
  "Min Alon Boy",
  "Nancy Selina",
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);

/**
 * Patient voices shown in the homepage hero.
 * Sentiments are drawn from feedback given at the centre; names are anonymised
 * to protect patient privacy, in line with our medical confidentiality policy.
 */
export const patientVoices: Testimonial[] = [
  {
    quote:
      "I had stopped going to family gatherings because I could not follow anything. Two weeks after my fitting I sat through a whole wedding in Nyali and heard my grandchildren properly.",
    name: "Halima A.",
    meta: "Nyali, Mombasa · fitted patient",
    rating: 5,
  },
  {
    quote:
      "The audiologist explained my son's test with the chart in front of us, in Kiswahili, until we both understood. Nobody had ever done that before.",
    name: "Joseph M.",
    meta: "Likoni · parent of a young patient",
    rating: 5,
  },
  {
    quote:
      "I came in for the ringing in my left ear, expecting to be sent away with tablets. Instead I got a full assessment and a plan that actually worked.",
    name: "Rehema S.",
    meta: "Tudor, Mombasa · tinnitus programme",
    rating: 5,
  },
  {
    quote:
      "I travelled from Malindi and was tested, fitted and taught how to care for the devices the same day. Worth every kilometre.",
    name: "Peter K.",
    meta: "Malindi, Kilifi County · same-day fitting",
    rating: 5,
  },
];
