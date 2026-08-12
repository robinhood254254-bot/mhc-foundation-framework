/**
 * Services delivered at Mombasa Hearing Centre.
 * Clinical detail for individual diagnostic tests lives in hearing-tests.ts.
 */
import { media } from "@/lib/media";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  intro: string[];
  includes: string[];
  whoItIsFor: string[];
  image: { url: string; alt: string };
  relatedTests?: string[];
  relatedAids?: boolean;
};

export const services: Service[] = [
  {
    slug: "diagnostic-hearing-assessment",
    name: "Diagnostic Hearing Assessment",
    shortName: "Hearing assessment",
    summary:
      "A full audiological work-up: history, otoscopy, pure tone audiometry, speech testing and tympanometry, explained to you the same day.",
    intro: [
      "Almost every patient begins here. A diagnostic hearing assessment answers three questions in one sitting: how much hearing has been lost, where in the ear the problem sits, and what should be done about it.",
      "The session starts with a conversation about how the difficulty began and an otoscopic look into both canals. We then measure air and bone conduction thresholds across the speech frequencies, check how well you understand words at comfortable and raised levels, and finish with tympanometry to assess the eardrum and middle ear.",
      "Your audiogram is printed and explained before you leave, along with a clear recommendation: no action, medical referral, or a hearing aid trial. Nobody is sold a device before their hearing has been measured.",
    ],
    includes: [
      "Case history and otoscopic examination of both ears",
      "Pure tone audiometry, air and bone conduction, with masking where required",
      "Speech reception and speech discrimination testing",
      "Tympanometry and acoustic reflex screening",
      "A printed audiogram with a written recommendation",
    ],
    whoItIsFor: [
      "Adults noticing difficulty in conversation, meetings or on the telephone",
      "Anyone told by family that the television volume has crept up",
      "Workers needing a signed audiogram for occupational or maritime medicals",
      "Patients referred by an ENT surgeon or general practitioner",
    ],
    image: { url: media.ptaTerry.url, alt: media.ptaTerry.alt },
    relatedTests: ["pure-tone-audiometry", "tympanometry-impedance-audiometry"],
  },
  {
    slug: "paediatric-hearing-care",
    name: "Paediatric Hearing Care",
    shortName: "Paediatric care",
    summary:
      "Hearing assessment for babies, toddlers and school-age children using play audiometry, visual reinforcement and objective testing when needed.",
    intro: [
      "A child who cannot hear cannot learn language at the normal pace, and the earlier that is corrected the better the outcome. Our paediatric room is set up for children rather than adapted for them, with play toys, children's headphones and a team used to working at a child's speed.",
      "How we test depends on age. Babies are assessed objectively with tympanometry and brainstem evoked response audiometry while they sleep. Toddlers are tested with visual reinforcement audiometry. Older children respond through structured play, dropping a ring on a peg each time they hear a tone.",
      "Parents stay in the room throughout, and we explain the findings, the likely cause and the next step, whether that is medical treatment for glue ear, a hearing aid fitting, or a review in a few months.",
    ],
    includes: [
      "Play audiometry and visual reinforcement audiometry",
      "Tympanometry to detect glue ear and middle-ear fluid",
      "Brainstem evoked response audiometry for infants and unresponsive children",
      "School and speech-therapy reports on request",
      "Paediatric hearing aid fitting and follow-up",
    ],
    whoItIsFor: [
      "Newborns and infants who failed or missed a screening",
      "Children with delayed speech or unclear pronunciation",
      "Children with repeated ear infections or persistent glue ear",
      "School-age children struggling to follow the teacher",
    ],
    image: { url: media.ptaPaediatric.url, alt: media.ptaPaediatric.alt },
    relatedTests: ["paediatric-hearing-assessment", "brainstem-evoked-response-audiometry"],
  },
  {
    slug: "hearing-aid-fitting-and-verification",
    name: "Hearing Aid Fitting and Verification",
    shortName: "Fitting and verification",
    summary:
      "Selection, programming and verified fitting of Starkey hearing aids, with follow-up appointments to settle the prescription over the first months.",
    intro: [
      "A hearing aid is only as good as the fitting behind it. We prescribe from your own audiogram, programme the device to that prescription, and verify that what reaches your eardrum matches the target rather than assuming the software got it right.",
      "As an authorised Starkey partner we fit the Signature Series, Omega AI, Edge AI, Evolv AI and G Series AI families. Custom devices begin with an ear impression taken here; receiver-in-canal devices can often be fitted the same week.",
      "The first fitting is the start, not the end. We see you again at two weeks, six weeks and three months to fine-tune the prescription as your brain re-adjusts to sounds it has not heard in years.",
    ],
    includes: [
      "Device selection matched to your audiogram, dexterity and lifestyle",
      "Ear impressions for custom devices and moulds",
      "Prescription programming and real-world verification",
      "Handling, cleaning and smartphone app training",
      "Scheduled follow-up reviews and remote fine-tuning through TeleHear",
    ],
    whoItIsFor: [
      "Patients with a confirmed hearing loss ready to trial amplification",
      "Existing wearers whose devices no longer match their hearing",
      "People upgrading from an old analogue or unverified device",
      "Families arranging a first fitting for an elderly relative",
    ],
    image: { url: media.hearingAidLifestyle.url, alt: media.hearingAidLifestyle.alt },
    relatedTests: ["hearing-aid-fitting-and-verification"],
    relatedAids: true,
  },
  {
    slug: "hearing-aid-repairs-servicing-and-supplies",
    name: "Hearing Aid Repairs, Servicing and Supplies",
    shortName: "Repairs and supplies",
    summary:
      "In-house cleaning, tubing and receiver replacement, re-programming, manufacturer repairs, and Starkey batteries and accessories held in stock.",
    intro: [
      "Hearing aids live in a warm, humid, waxy environment, and on the coast that is harder than most. Regular servicing is the difference between a device that lasts five years and one that fails in eighteen months.",
      "We clean and de-humidify devices, replace wax guards, domes, tubing and receivers, and re-programme units whose settings have drifted or whose owner's hearing has changed. Repairs beyond in-house scope are sent to the manufacturer and tracked for you.",
      "Batteries in sizes 10, 13, 312 and 675, chargers, drying kits and cleaning tools are kept in stock at the centre, so patients travelling in from Kilifi, Kwale or Taita are rarely sent away empty handed.",
    ],
    includes: [
      "Deep cleaning, de-humidifying and wax guard replacement",
      "Tubing, dome, receiver and microphone cover replacement",
      "Re-programming and prescription updates",
      "Manufacturer repair handling and warranty claims",
      "Starkey batteries, chargers, drying kits and accessories in stock",
    ],
    whoItIsFor: [
      "Wearers whose device sounds weak, intermittent or distorted",
      "Anyone whose hearing has changed since the last programming",
      "Patients needing batteries or consumables at short notice",
      "Users of devices bought elsewhere or brought from abroad",
    ],
    image: { url: media.displayCounter.url, alt: media.displayCounter.alt },
    relatedAids: true,
  },
  {
    slug: "tinnitus-assessment-and-management",
    name: "Tinnitus Assessment and Management",
    shortName: "Tinnitus care",
    summary:
      "Measurement of the ringing you hear, investigation of the cause, and a structured management plan combining sound therapy, amplification and counselling.",
    intro: [
      "Tinnitus, the ringing, hissing or buzzing heard without an external source, is a symptom rather than a disease. Our first job is to find what is driving it: noise damage to the hair cells of the cochlea, wax against the eardrum, middle-ear infection, head or neck injury, blood pressure, or medication.",
      "We then measure it. Pitch matching, loudness matching and minimum masking levels turn a subjective complaint into numbers we can track, alongside a full audiogram and tympanometry.",
      "Management is built from what we find. Most patients do best with a combination of treating any underlying hearing loss, sound enrichment so the brain has something else to attend to, structured counselling that breaks the anxiety cycle, and practical sleep and noise-protection advice.",
    ],
    includes: [
      "Full diagnostic hearing assessment and middle-ear testing",
      "Pitch, loudness and minimum masking level measurement",
      "Identification and referral of treatable medical causes",
      "Sound therapy and tinnitus masking through hearing aids",
      "Counselling, habituation strategies and sleep advice",
    ],
    whoItIsFor: [
      "Anyone with persistent ringing, hissing or buzzing in one or both ears",
      "Patients whose tinnitus disturbs sleep or concentration",
      "People with noise-exposed occupations along the port and industrial areas",
      "Patients with tinnitus that is one-sided or pulsing, which needs prompt review",
    ],
    image: { url: media.audiologistReview.url, alt: media.audiologistReview.alt },
    relatedTests: ["tinnitus-assessment-and-management"],
  },
  {
    slug: "balance-and-vestibular-care",
    name: "Balance and Vestibular Care",
    shortName: "Balance care",
    summary:
      "Investigation of dizziness and vertigo with caloric testing, followed by individually prescribed vestibular rehabilitation exercises.",
    intro: [
      "The balance organ sits in the inner ear next to the cochlea, which is why dizziness so often belongs in an audiology clinic. Caloric testing tells us whether each balance organ is responding normally and whether one side is weaker than the other.",
      "Once the picture is clear, vestibular rehabilitation retrains the brain to compensate. The exercises are prescribed individually, practised with us and continued at home, and they are effective for unilateral weakness, post-viral vertigo and general unsteadiness.",
      "Where the pattern points to something needing medical or surgical attention, we refer promptly to ENT with our findings attached.",
    ],
    includes: [
      "Balance history and clinical examination",
      "Bithermal caloric testing of both labyrinths",
      "Assessment of gaze stability and postural control",
      "Individually prescribed vestibular rehabilitation programme",
      "Home exercise plan with review appointments",
    ],
    whoItIsFor: [
      "Patients with vertigo, spinning attacks or persistent unsteadiness",
      "Older adults at risk of falls",
      "People recovering from an inner-ear infection or vestibular neuritis",
      "Patients with dizziness alongside hearing loss or tinnitus",
    ],
    image: { url: media.audiologistReview.url, alt: media.audiologistReview.alt },
    relatedTests: ["caloric-test", "vestibular-rehabilitation"],
  },
  {
    slug: "custom-ear-moulds-and-hearing-protection",
    name: "Custom Ear Moulds and Hearing Protection",
    shortName: "Moulds and protection",
    summary:
      "Custom-made ear moulds, noise plugs, swim plugs and musician protection, taken from impressions made at the centre.",
    intro: [
      "Prevention is the cheapest hearing care there is. Mombasa is a port city, and dock work, workshops, generators, boat engines and amplified music all sit comfortably above the level at which permanent damage begins.",
      "We take impressions at the centre and supply custom-fitted protection: industrial noise plugs for workers, filtered plugs for musicians and sound engineers who need to hear the music without the damage, and watertight swim plugs for children with grommets or recurrent ear infections.",
      "Custom moulds for behind-the-ear hearing aids are made in the same way, and a well-made mould solves most complaints about whistling and discomfort.",
    ],
    includes: [
      "Silicone ear impressions taken by an audiologist",
      "Industrial and occupational noise protection",
      "Filtered musician and sound-engineer plugs",
      "Swim plugs for children and adults",
      "Custom moulds and re-moulds for behind-the-ear hearing aids",
    ],
    whoItIsFor: [
      "Port, industrial and workshop employees exposed to daily noise",
      "Musicians, DJs and sound engineers",
      "Swimmers and children with grommets or recurrent otitis",
      "Hearing aid wearers whose current mould whistles or hurts",
    ],
    image: { url: media.deviceDisplay.url, alt: media.deviceDisplay.alt },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
