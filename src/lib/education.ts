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
  {
    slug: "how-to-read-your-audiogram",
    title: "How to read your audiogram, line by line",
    category: "Understanding hearing",
    readingTime: "6 min read",
    excerpt:
      "The graph you are handed after a hearing test answers most of your questions once you know what the symbols, the numbers and the shape of the line actually mean.",
    image: { url: media.tympanometryResults.url, alt: media.tympanometryResults.alt },
    sections: [
      {
        heading: "The two axes",
        body: [
          "Frequency, or pitch, runs across the top from 250 Hz on the left to 8000 Hz on the right. Low pitches sit on the left, high pitches on the right. Intensity, or loudness, runs down the side from -10 dB at the top to 120 dB at the bottom. The lower a mark sits on the page, the louder that pitch had to be before you heard it.",
          "Each mark is the softest sound you detected at that pitch. O usually means the right ear by air conduction, X the left ear, and the bracket symbols show bone conduction, which tests the inner ear directly.",
        ],
      },
      {
        heading: "What the numbers mean",
        body: ["Hearing thresholds are grouped into broad bands that describe the difficulty, not the person."],
        list: [
          "0 to 25 dB: normal hearing range for adults",
          "26 to 40 dB: mild loss, soft speech and group conversation become difficult",
          "41 to 55 dB: moderate loss, ordinary conversation is often missed",
          "56 to 70 dB: moderately severe, speech must be loud to be followed",
          "71 to 90 dB: severe, most everyday speech is inaudible without amplification",
          "Above 90 dB: profound, and usually a candidate for high-power devices or implant referral",
        ],
      },
      {
        heading: "Air, bone and the gap between them",
        body: [
          "When bone conduction is normal but air conduction is poorer, the gap between them points to a conductive problem in the outer or middle ear: wax, fluid, a perforation or an ossicular issue. Many of these are medically or surgically treatable, which is why the gap matters more than the raw numbers.",
          "When air and bone thresholds sit together and both are reduced, the loss is sensorineural, arising in the cochlea or the hearing nerve. That type is managed with hearing aids, rehabilitation and, where indicated, onward referral rather than medication.",
        ],
      },
      {
        heading: "The shape tells the story",
        body: [
          "A line that slopes downwards to the right is the classic pattern of age-related and noise-related loss, and explains the familiar complaint of hearing speech without understanding it. A dip around 4000 Hz suggests noise exposure. A flat line across all frequencies often accompanies middle-ear disease, and a rising line points to certain inner-ear conditions.",
          "Speech testing is reported alongside the graph. Two people with identical audiograms can differ widely in how well they discriminate words, and that score is what predicts how much benefit a hearing aid will give.",
        ],
      },
      {
        heading: "Bring your audiogram with you",
        body: [
          "An audiogram from anywhere in the country can be reviewed at the centre and compared with a fresh test. Patients travel to us from across the Coast, Nairobi and upcountry, and a copy of any previous result makes that first appointment considerably more useful.",
        ],
      },
    ],
  },
  {
    slug: "hearing-loss-and-brain-health",
    title: "Hearing loss, memory and brain health: what the evidence says",
    category: "Understanding hearing",
    readingTime: "6 min read",
    excerpt:
      "Hearing is a brain activity, not only an ear activity. Understanding that link explains why untreated hearing loss is now discussed alongside memory and mental wellbeing.",
    image: { url: media.audiologistReview.url, alt: media.audiologistReview.alt },
    sections: [
      {
        heading: "Why hearing and thinking are connected",
        body: [
          "The ear collects sound, but the brain turns it into meaning. When the signal arriving from the ear is degraded, the brain has to spend extra effort filling in the gaps, and that effort is drawn from the same mental resources used for memory and concentration. This is why many patients describe being exhausted after a long meeting rather than simply saying they cannot hear.",
          "Large international studies, including the Lancet Commission on dementia prevention, list untreated hearing loss among the modifiable risk factors for cognitive decline in later life. Risk is not certainty, and hearing loss does not cause dementia on its own, but the association is consistent enough to treat hearing as part of general health rather than a minor inconvenience.",
        ],
      },
      {
        heading: "Three mechanisms researchers describe",
        body: [],
        list: [
          "Cognitive load: effort spent decoding unclear speech is effort unavailable for remembering it",
          "Reduced stimulation: the parts of the brain that process sound receive less input over years",
          "Social withdrawal: conversation becomes tiring, activity narrows, and isolation follows",
        ],
      },
      {
        heading: "What treatment appears to change",
        body: [
          "The ACHIEVE trial, published in 2023, found that hearing treatment slowed cognitive change over three years in older adults who were already at higher risk, while showing little difference in a healthier group. The practical reading is straightforward: treating hearing loss is one of the few actions available that supports both communication and long-term brain health.",
          "Patients also report the immediate effects long before any research question is answered: less fatigue at the end of the day, easier phone calls, and a willingness to attend gatherings they had begun to avoid.",
        ],
      },
      {
        heading: "Practical steps at any age",
        body: [
          "Have a baseline hearing test, treat any loss early rather than waiting until it is severe, wear devices consistently rather than only for special occasions, protect your hearing in noise, and keep conversation and social life active. Where balance, tinnitus or memory concerns appear together, mention all of them at the appointment so the assessment covers the whole picture.",
        ],
      },
    ],
  },
  {
    slug: "tinnitus-what-works",
    title: "Ringing in the ears: what actually helps with tinnitus",
    category: "Understanding hearing",
    readingTime: "6 min read",
    excerpt:
      "Tinnitus is common, rarely dangerous, and far more manageable than most people are told. Here is what causes it, what genuinely helps, and what to be sceptical about.",
    image: { url: media.tinnitusDiagram.url, alt: media.tinnitusDiagram.alt },
    sections: [
      {
        heading: "What tinnitus is",
        body: [
          "Tinnitus is the perception of sound with no external source: ringing, hissing, buzzing, crickets or a pulse. It is a symptom rather than a disease, and it usually arises when reduced input from the ear leads the hearing pathway to increase its own internal gain, much as a microphone left turned up produces a hiss.",
          "It is very common. Most people experience it briefly at some point, and for a minority it becomes persistent and intrusive enough to affect sleep, concentration and mood.",
        ],
      },
      {
        heading: "When to be seen promptly",
        body: ["Most tinnitus is benign, but these features deserve a timely assessment rather than a wait-and-see approach."],
        list: [
          "Tinnitus in one ear only, or clearly worse in one ear",
          "Sudden hearing loss alongside the noise",
          "A sound that pulses in time with your heartbeat",
          "Dizziness, vertigo or unsteadiness with the tinnitus",
          "Tinnitus after a head injury, or with ear pain or discharge",
        ],
      },
      {
        heading: "What the evidence supports",
        body: [
          "Assessment comes first: a full hearing test, tympanometry and, where indicated, pitch and loudness matching define what is driving the symptom. Treating any underlying cause, such as wax, middle-ear fluid or medication effects, resolves a proportion of cases outright.",
          "For persistent tinnitus with hearing loss, hearing aids are the single most effective step, because restoring real sound reduces the contrast that makes the internal noise stand out. Sound therapy and structured counselling based on cognitive behavioural principles have the strongest evidence for reducing distress, and many Starkey devices include built-in tinnitus sound stimuli that can be tuned to your own profile.",
        ],
      },
      {
        heading: "What to be careful about",
        body: [
          "There is no supplement, herbal remedy or device that has been shown to cure tinnitus, and claims of a cure are a reliable sign to walk away. Silence tends to make tinnitus louder, so complete quiet at bedtime is usually unhelpful; a low background sound is better.",
          "Habituation is realistic for most people. The sound may not disappear, but with the right combination of amplification, sound therapy and understanding, it stops holding attention. Our tinnitus assessment and management service works through that plan step by step, for patients here on the Coast and those travelling from Nairobi and beyond.",
        ],
      },
    ],
  },
  {
    slug: "childrens-hearing-milestones",
    title: "Children's hearing: milestones, warning signs and when to test",
    category: "Prevention",
    readingTime: "6 min read",
    excerpt:
      "Speech and language are built on hearing. Knowing what a child should respond to at each age is the simplest way to catch a problem while it is still easy to solve.",
    image: { url: media.ptaPaediatric.url, alt: media.ptaPaediatric.alt },
    sections: [
      {
        heading: "Why early matters so much",
        body: [
          "The first three years are when the brain lays down the pathways for speech and language, and it does so using the sound it receives. A hearing loss present during that window delays language, and the delay grows the longer it goes undetected. Identified early, most children catch up with their peers.",
          "Hearing loss in children is not always permanent. Glue ear, or fluid behind the eardrum, is extremely common after colds and ear infections and can produce a temporary loss that still affects learning if it persists through a school term.",
        ],
      },
      {
        heading: "Milestones to expect",
        body: [],
        list: [
          "Newborn: startles at sudden loud sound, settles to a familiar voice",
          "3 to 4 months: turns towards a voice, quietens or smiles when spoken to",
          "6 to 9 months: babbles with varied sounds, responds to their own name",
          "12 months: uses one or two words, follows a simple instruction with a gesture",
          "18 to 24 months: a growing vocabulary, begins joining two words together",
          "3 years: speech that unfamiliar adults can mostly understand",
        ],
      },
      {
        heading: "Warning signs at any age",
        body: [
          "Bring a child for testing if speech is delayed or unclear for their age, if they turn the television up or sit very close, if they do not respond unless facing you, if teachers report inattention, if they mispronounce sounds their peers have mastered, or if there is a family history of childhood hearing loss. Recurrent ear infections and discharge also warrant a check.",
          "A child never being too young to test is the point worth repeating. We assess newborns and infants with objective methods that require no cooperation at all.",
        ],
      },
      {
        heading: "How children are tested",
        body: [
          "Testing is matched to age. Brainstem evoked response audiometry records the brain's automatic response while the baby sleeps. Tympanometry checks middle-ear function in seconds. Older infants are tested with visual reinforcement audiometry, and preschool children with play audiometry, where the child drops a block each time a sound is heard.",
          "Everything is explained to parents at the visit, and results are provided in writing for schools, paediatricians and ENT colleagues wherever you are in the country.",
        ],
      },
    ],
  },
];


export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
