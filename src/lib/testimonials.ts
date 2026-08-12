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
