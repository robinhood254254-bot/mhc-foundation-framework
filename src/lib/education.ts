/**
 * Patient education articles written for Mombasa Hearing Centre.
 */
import { media } from "@/lib/media";

export type Article = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  image: { url: string; alt: string };
  sections: { heading: string; body: string[]; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "signs-of-hearing-loss",
    title: "Ten early signs of hearing loss most people ignore",
    category: "Understanding hearing",
    readingTime: "6 min read",
    excerpt:
      "Hearing rarely disappears overnight. It slips away quietly, and the first clues usually show up in conversation long before anyone thinks of a hearing test.",
    image: { url: media.ptaSetup.url, alt: media.ptaSetup.alt },
    sections: [
      {
        heading: "Why hearing loss hides",
        body: [
          "Age-related and noise-related hearing losses usually begin in the high frequencies. Vowels, which carry the volume of speech, live in the low frequencies, while consonants like s, f, th, k and t live high up. That combination produces the complaint we hear every week: people sound like they are mumbling, and speech is loud enough but not clear enough.",
          "Because the change is gradual, the brain compensates for years. Family members notice before the patient does, which is why so many people arrive at the centre only after somebody else insisted.",
        ],
      },
      {
        heading: "The signs worth acting on",
        body: ["Any one of these on its own may mean nothing. Three or more together justifies a hearing test."],
        list: [
          "You hear people but cannot make out the words, particularly women's and children's voices",
          "Restaurants, weddings and family gatherings have become exhausting rather than enjoyable",
          "The television volume is higher than everyone else finds comfortable",
          "You ask for repetition several times a day, or answer the wrong question",
          "Telephone calls are harder than face-to-face conversation",
          "You avoid meetings, mosque, church or social events you used to enjoy",
          "There is ringing, hissing or buzzing in one or both ears",
          "One ear is clearly worse than the other",
          "You feel unusually tired after a day of listening",
          "You work around noise: port machinery, generators, workshops, music systems",
        ],
      },
      {
        heading: "What waiting actually takes from you",
        body: [
          "Untreated hearing loss is not a neutral state. Research consistently links it with social withdrawal, low mood, reduced income and an increased risk of cognitive decline, because the brain slowly loses its practice at processing speech.",
          "The auditory pathway responds to use. The longer sound is absent, the more work is needed later to relearn it, which is why patients fitted early adapt faster and report better satisfaction than those who wait a decade.",
        ],
      },
      {
        heading: "What to do next",
        body: [
          "Book a diagnostic hearing assessment. It takes under an hour, it is painless, and it ends with a printed audiogram and a plain explanation of what it means. If your hearing is normal, you leave with a baseline to compare against in future, which is valuable on its own.",
        ],
      },
    ],
  },
  {
    slug: "living-with-hearing-aids-in-a-coastal-climate",
    title: "Caring for hearing aids in Mombasa heat and humidity",
    category: "Hearing aid care",
    readingTime: "5 min read",
    excerpt:
      "Salt air, humidity and sweat are hard on electronics. A few habits will add years to the life of your hearing aids and keep them sounding the way they did on fitting day.",
    image: { url: media.batteries1.url, alt: media.batteries1.alt },
    sections: [
      {
        heading: "Moisture is the main enemy",
        body: [
          "Modern Starkey devices carry water-resistant and, on rechargeable models, waterproof coatings, but no coating removes the need for drying. Coastal humidity condenses inside the receiver and microphone ports and gradually corrodes contacts.",
          "Open the battery door every night, or place rechargeable devices in their charger, and keep a drying kit or desiccant pot beside the bed. A device dried nightly will outlast an identical one that is not, by a wide margin.",
        ],
      },
      {
        heading: "Daily routine that takes two minutes",
        body: [],
        list: [
          "Wipe the shell with a dry cloth before storing overnight, never with water or alcohol",
          "Brush the microphone ports gently with the tool supplied at fitting",
          "Check the wax guard weekly and change it as soon as sound becomes weak",
          "Remove devices before showering, swimming, applying oils or using insect spray",
          "Store away from direct sun, and never on a car dashboard",
        ],
      },
      {
        heading: "Batteries and charging",
        body: [
          "Zinc-air batteries in sizes 10, 13, 312 and 675 activate when the sticker is removed. Wait a full minute before inserting, and the battery will last measurably longer. Keep spares at room temperature, not in a fridge.",
          "Rechargeable devices should be charged nightly rather than topped up in short bursts. Keep the charger contacts clean and dry, and carry the charger when travelling; a full charge on Starkey Omega AI and Edge AI gives up to fifty-one hours.",
        ],
      },
      {
        heading: "When to bring them in",
        body: [
          "Come to the centre if sound is weak or intermittent, if you hear whistling that was not there before, if the device feels loose, or if it has been submerged. Most of these are solved in one visit with cleaning, a wax guard, new tubing or a receiver change.",
          "Book a professional service every six months even when nothing seems wrong. Cleaning, de-humidifying and a check against your current audiogram keep a device reliable and prevent most out-of-warranty repairs.",
        ],
      },
    ],
  },
  {
    slug: "protecting-your-hearing-from-noise",
    title: "Noise, work and music: protecting the hearing you still have",
    category: "Prevention",
    readingTime: "5 min read",
    excerpt:
      "Noise-induced hearing loss is permanent and entirely preventable. Here is how much noise is too much, and what protection actually works.",
    image: { url: media.signage.alt ? media.deviceDisplay.url : media.deviceDisplay.url, alt: media.deviceDisplay.alt },
    sections: [
      {
        heading: "How noise damages hearing",
        body: [
          "Sound is detected by delicate hair cells inside the cochlea. Loud noise physically flattens them, and unlike skin or bone they do not regenerate. Damage tends to appear first as a notch around 4000 Hz on the audiogram, long before the patient notices anything in conversation.",
          "The first warning sign is usually temporary: muffled hearing or ringing after a loud shift or a loud event. It recovers overnight in the early years. Once it stops recovering, the loss is permanent.",
        ],
      },
      {
        heading: "How much is too much",
        body: [
          "The accepted occupational limit is 85 decibels averaged over eight hours. Every three decibels above that halves the safe exposure time: eight hours at 85 dB, four hours at 88 dB, two hours at 91 dB, and so on.",
          "For a practical rule, if you must raise your voice to be understood by someone an arm's length away, the environment is loud enough to need protection.",
        ],
        list: [
          "Busy street traffic: around 80 dB",
          "Workshop machinery and generators: 90 to 100 dB",
          "Port and construction equipment: 95 to 110 dB",
          "Amplified music at a club or concert: 100 to 115 dB",
        ],
      },
      {
        heading: "Protection that people actually wear",
        body: [
          "Foam plugs from a pharmacy work only when inserted correctly, and most are not. Custom-moulded plugs made from an impression of your own ear seal reliably, sit comfortably for a full shift and are far more likely to stay in.",
          "Musicians and sound engineers should use filtered plugs, which reduce level evenly across frequencies so the music still sounds like music rather than a muffled version of it.",
        ],
      },
      {
        heading: "Screening for noise-exposed workers",
        body: [
          "If you work in noise, have a baseline audiogram taken and repeat it annually. Comparing year to year catches a shift while it is small and while changing protection can still preserve what remains. We provide signed audiograms for occupational and maritime medical requirements.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
