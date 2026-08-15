/**
 * Starkey hearing aid families fitted and supported at Mombasa Hearing Centre.
 * Product photography is supplied by Starkey; brochures are the official
 * Starkey consumer brochures hosted for download.
 */
import signatureImg from "@/assets/signature-series.png.asset.json";
import omegaImg from "@/assets/omega-ai.png.asset.json";
import edgeImg from "@/assets/edge-ai.png.asset.json";
import evolvImg from "@/assets/evolve-ai.png.asset.json";
import gSeriesImg from "@/assets/g-series-ai.png.asset.json";
import signaturePdf from "@/assets/signature-series-brochure.pdf.asset.json";
import omegaPdf from "@/assets/omega-ai-brochure.pdf.asset.json";
import edgePdf from "@/assets/edge-ai-brochure.pdf.asset.json";
import evolvPdf from "@/assets/evolve-ai-brochure.pdf.asset.json";
import gSeriesPdf from "@/assets/g-series-ai-brochure.pdf.asset.json";

export type HearingAidSpec = { label: string; value: string };
export type HearingAidFeature = { title: string; body: string };

export type HearingAid = {
  slug: string;
  name: string;
  tagline: string;
  brand: "Starkey";
  category: string;
  summary: string;
  image: { url: string; alt: string };
  intro: string[];
  features: HearingAidFeature[];
  styles: { name: string; body: string }[];
  specs: HearingAidSpec[];
  bestFor: string[];
  brochure: { url: string; title: string; size: string };
};

export const hearingAids: HearingAid[] = [
  {
    slug: "signature-series",
    name: "Starkey Signature Series",
    tagline: "Nothing is smaller. Nothing sounds better.",
    brand: "Starkey",
    category: "Custom invisible and in-canal",
    summary:
      "Custom-built invisible and completely-in-canal hearing aids, including the world's smallest custom rechargeable, handcrafted to the shape of your own ear canal.",
    image: {
      url: signatureImg.url,
      alt: "Pair of black Starkey Signature Series custom in-canal hearing aids above their portable charging case",
    },
    intro: [
      "Signature Series is Starkey's custom family, and it exists for one reason: many people want to hear well without anyone knowing they are wearing anything. Each shell is built individually from an impression of your own ear, taken here at the centre, so the device sits deep and comfortably in the canal where it is very difficult to see.",
      "Because the microphone sits inside the ear rather than behind it, the outer ear does part of the work it was designed to do. Sound is collected the natural way, which helps with knowing where a voice is coming from and makes telephone use straightforward. Starkey's Neuro Sound Technology then processes that signal to keep speech clear and comfortable rather than sharp and tinny.",
      "The completely-in-canal rechargeable model is the headline device: the smallest custom rechargeable hearing aid made, waterproof to one metre, with up to thirty-eight hours of use from a single charge. For coastal humidity and long days away from a power point, that combination matters.",
    ],
    features: [
      {
        title: "Handcrafted to your ear",
        body: "We take a silicone impression of each ear at the centre and Starkey builds the shell to that exact geometry, so the fit is secure without pressure points and the seal stays consistent through the day.",
      },
      {
        title: "Virtually invisible in the canal",
        body: "The invisible-in-canal and completely-in-canal styles sit far enough inside the ear that most people never notice them, which removes the single biggest reason patients delay treatment.",
      },
      {
        title: "Neuro Sound Technology",
        body: "Starkey's processing is modelled on how the auditory system handles sound, aiming for transparent, true-to-life listening rather than simple amplification.",
      },
      {
        title: "Rechargeable and waterproof",
        body: "The rechargeable model is waterproof up to one metre and delivers up to thirty-eight hours per charge, so there are no tiny batteries to change and no anxiety about sweat or rain.",
      },
    ],
    styles: [
      {
        name: "Completely-in-canal rechargeable (CIC R)",
        body: "The world's smallest custom rechargeable hearing aid. Waterproof up to one metre, up to thirty-eight hours of battery life, and nothing to replace each week.",
      },
      {
        name: "Completely-in-canal (CIC)",
        body: "For wearers who prefer to adjust settings on demand and are comfortable with a disposable battery.",
      },
      {
        name: "Invisible-in-canal (IIC)",
        body: "The smallest style Starkey builds. Exceptional sound with minimal handling and nothing visible from the side.",
      },
    ],
    specs: [
      { label: "Styles", value: "IIC, CIC and CIC rechargeable" },
      { label: "Power", value: "Rechargeable (up to 38 hours) or size 10 / 312 battery" },
      { label: "Water resistance", value: "Waterproof up to 1 metre (rechargeable style)" },
      { label: "Fitting range", value: "Mild to moderately severe hearing loss" },
      { label: "Build", value: "Custom shell made from an ear impression taken at MHC" },
    ],
    bestFor: [
      "Patients whose main concern is that the device should not be seen",
      "Professionals and public-facing workers who use the telephone constantly",
      "Anyone who wants rechargeability in a custom, in-the-ear format",
      "Wearers with mild to moderately severe hearing loss and healthy ear canals",
    ],
    brochure: { url: signaturePdf.url, title: "Starkey Signature Series brochure", size: "PDF" },
  },
  {
    slug: "omega-ai",
    name: "Starkey Omega AI",
    tagline: "Experience the speed of innovation.",
    brand: "Starkey",
    category: "Flagship receiver-in-canal",
    summary:
      "Starkey's flagship platform, built on the G3 Gen AI neuro processor, with Auracast streaming, health and balance tracking and a voice-driven assistant in the My Starkey app.",
    image: {
      url: omegaImg.url,
      alt: "Cutaway view of a silver Starkey Omega AI hearing aid showing the G3 Gen AI processor inside",
    },
    intro: [
      "Omega AI is the most advanced hearing aid Starkey builds. Inside the shell sits the G3 Gen AI neuro processor, which analyses the sound around you many thousands of times a second and adjusts amplification, noise reduction and directionality before you notice a change in the room. Starkey reports up to twenty-eight percent improved speech intelligibility from this platform.",
      "What sets Omega AI apart is how much of the work moves into your own hands. Through the My Starkey app you can describe a sound problem in plain language and TeleHear AI creates an adjustment for you on the spot, based on the way a hearing professional would solve it. The Gen AI Smart Assistant answers questions, changes programmes and sets reminders using your voice alone.",
      "Connectivity has been rebuilt around Bluetooth LE Audio and Auracast. In an airport, a mosque, a church or a lecture hall equipped for broadcast, the app lets you select the broadcast and the audio arrives directly in both ears. Android users get one-tap pairing through Google Fast Pair, and Push-to-talk turns the hearing aids into a quick voice messenger between wearers.",
      "Because hearing health and general health travel together, Omega AI also tracks activity and now respiratory rate, an industry first, and adds Balance Builder, a guided exercise feature designed to improve stability and reduce the risk of falls.",
    ],
    features: [
      {
        title: "G3 Gen AI neuro processor",
        body: "The fastest processor Starkey has produced, engineered to come closer to a natural sense of hearing and to lift speech out of noise without the sound turning harsh.",
      },
      {
        title: "TeleHear AI self-adjustment",
        body: "Tell the app what is bothering you and it generates a professional-grade fine-tuning for you instantly. Anything it cannot solve, we solve at the centre or remotely.",
      },
      {
        title: "Auracast assistant",
        body: "Find and join public Auracast broadcasts and stream low-latency audio straight into your hearing aids in halls, terminals and places of worship.",
      },
      {
        title: "Balance Builder and health tracking",
        body: "Guided balance exercises, activity monitoring and respiratory rate tracking bring fall prevention and wellness into the same device.",
      },
      {
        title: "Built for hard use",
        body: "Up to fifty-one hours of battery life, a status indicator LED, and a waterproof coating Starkey rates as ten times more durable than the previous generation.",
      },
    ],
    styles: [
      {
        name: "Rechargeable receiver-in-canal (RIC R)",
        body: "The standard fitting for most adults. Discreet behind the ear, with a thin wire carrying the receiver into the canal.",
      },
      {
        name: "Custom in-the-ear styles",
        body: "Available where the ear anatomy allows, with the same processor and app features.",
      },
    ],
    specs: [
      { label: "Processor", value: "G3 Gen AI neuro processor" },
      { label: "Battery life", value: "Up to 51 hours per charge" },
      { label: "Connectivity", value: "Bluetooth LE Audio, Auracast, Google Fast Pair" },
      { label: "Durability", value: "Waterproof coating rated 10x more durable" },
      { label: "Health features", value: "Respiratory rate, activity tracking, Balance Builder, fall alerts" },
      { label: "Fitting range", value: "Mild through severe to profound, depending on receiver" },
    ],
    bestFor: [
      "Patients who want the best speech clarity available in noisy environments",
      "Anyone who streams calls, television or lectures throughout the day",
      "Older adults who would benefit from balance work and fall detection",
      "Wearers who travel and want remote fine-tuning without returning to the centre",
    ],
    brochure: { url: omegaPdf.url, title: "Starkey Omega AI brochure", size: "PDF" },
  },
  {
    slug: "edge-ai",
    name: "Starkey Edge AI",
    tagline: "Life sounds better with an edge.",
    brand: "Starkey",
    category: "Receiver-in-canal and custom",
    summary:
      "Deep-learning hearing aids trained on millions of real sounds, with on-demand Edge Mode+ for the hardest listening situations and up to fifty-one hours of battery life.",
    image: {
      url: edgeImg.url,
      alt: "Silver Starkey Edge AI receiver-in-canal hearing aid beside a black custom Edge AI in-the-ear device",
    },
    intro: [
      "Edge AI was designed around the situation patients complain about most: the noisy restaurant, the crowded wedding, the busy matatu stage. Its neural network was trained on millions of sounds so that it can separate the voice you are trying to follow from the clatter, hum and competing conversation around it, and it does this continuously rather than waiting for you to intervene.",
      "When a room is genuinely difficult, Edge Mode+ gives you a second layer of help on demand. A tap on the device or a press in the My Starkey app runs an immediate scan of the environment and applies a more aggressive setting tuned for speech in that specific noise. Many wearers use it only a few times a day, and those are precisely the moments that used to defeat them.",
      "The hardware matches the processing. Edge AI is modern, discreet and comfortable for all-day wear, rechargeable styles are waterproof to one metre, and battery life runs up to fifty-one hours. Bluetooth LE Audio brings faster pairing, more robust streaming and Auracast readiness for cinemas, airports and places of worship.",
      "Paired with the My Starkey app, Edge AI becomes a control centre on your phone or Apple Watch: change programmes, adjust volume, stream calls, find a misplaced device, request a TeleHear session with us, and track exercise, cognitive engagement, falls and balance.",
    ],
    features: [
      {
        title: "Deep neural network processing",
        body: "Trained on millions of sounds to keep what matters and diminish what does not, delivering a cleaner signal in unpredictable environments.",
      },
      {
        title: "Edge Mode+",
        body: "An on-demand scan and re-optimisation for the toughest rooms, available from the device or the app in a second.",
      },
      {
        title: "All-day power",
        body: "Up to fifty-one hours of battery life on rechargeable styles, so a long day of work, travel and family never runs the battery flat.",
      },
      {
        title: "Auracast-ready LE Audio",
        body: "Next-generation Bluetooth that pairs more easily, uses less power and connects to public broadcast systems where available.",
      },
      {
        title: "Wellness and safety",
        body: "Exercise monitoring, cognitive activity tracking, fall detection with alerts, and a self-guided balance assessment exercise.",
      },
    ],
    styles: [
      { name: "Rechargeable RIC", body: "The most commonly fitted style, waterproof up to one metre." },
      { name: "Behind-the-ear", body: "For greater power requirements and easier handling." },
      { name: "Custom in-the-ear", body: "Built from an impression taken at the centre for a discreet in-ear fit." },
    ],
    specs: [
      { label: "Battery life", value: "Up to 51 hours per charge" },
      { label: "Water resistance", value: "Waterproof up to 1 metre (rechargeable styles)" },
      { label: "Connectivity", value: "Bluetooth LE Audio, Auracast ready, iPhone and Android streaming" },
      { label: "App control", value: "My Starkey on smartphone and Apple Watch" },
      { label: "Fitting range", value: "Mild through severe hearing loss" },
    ],
    bestFor: [
      "People who struggle most in restaurants, meetings and crowded events",
      "Working adults who need reliable streaming for calls and video meetings",
      "Patients who want app and smartwatch control of their own hearing",
      "Anyone who wants proactive treatment of an early or moderate hearing loss",
    ],
    brochure: { url: edgePdf.url, title: "Starkey Edge AI brochure", size: "PDF" },
  },
  {
    slug: "evolv-ai",
    name: "Starkey Evolv AI",
    tagline: "Custom craftsmanship, effortless hearing.",
    brand: "Starkey",
    category: "Custom in-the-ear",
    summary:
      "Handcrafted custom in-ear hearing aids making up to fifty-five million personalised adjustments an hour, with 2-Way Audio, Edge Mode and remote programming.",
    image: {
      url: (evolvImg as { url: string }).url,
      alt: "Pair of black Starkey Evolv AI custom in-the-ear hearing aids with removal wires",
    },
    intro: [
      "Evolv AI is Starkey's custom line, handcrafted to the anatomy of your ear and finished in the colour you choose. Every shell is moulded from an impression taken at the centre, which is why the fit feels settled from the first week rather than something you have to get used to.",
      "The processing philosophy behind Evolv AI is always-on and always automatic. The device makes up to fifty-five million personalised adjustments every hour, quietly balancing amplification, noise reduction and compression as you move from a quiet consulting room to a busy street. There is nothing for you to press for the sound to stay natural.",
      "Compared with the previous Starkey platform, Evolv AI delivers an additional forty percent reduction in noise energy, which translates into less listening effort and less fatigue by the end of the day. Edge Mode remains available for the moments when you want an immediate, on-demand improvement in a difficult room.",
      "For iPhone and iPad users, 2-Way Audio lets you take and end calls from the hearing aids themselves, with the device microphones picking up your voice and streaming it back, so conversations are genuinely hands free. TeleHear remote programming means many fine-tuning appointments can be handled without you travelling into town.",
    ],
    features: [
      {
        title: "Handcrafted custom shells",
        body: "Built individually at Starkey from your ear impression, with a water-resistant coating that resists dust, moisture and humidity, which matters on the coast.",
      },
      {
        title: "Effortless automatic sound",
        body: "Up to fifty-five million personalised adjustments an hour keep the sound realistic across every environment without manual input.",
      },
      {
        title: "40 percent less noise energy",
        body: "A measurable reduction in background noise compared with the previous generation, designed to cut listening effort.",
      },
      {
        title: "2-Way Audio",
        body: "Answer and end calls directly from the hearing aids on compatible Apple devices, with your voice streamed from the device microphones.",
      },
      {
        title: "TeleHear remote programming",
        body: "We adjust your devices remotely after a short video consultation, so distance is no longer a barrier to good aftercare.",
      },
    ],
    styles: [
      { name: "In-the-ear and in-the-canal", body: "Custom moulded to the ear canal, available in six shell colours from pink through to black." },
      { name: "Custom rechargeable", body: "Starkey pioneered the custom rechargeable; chargers give up to three full charges away from mains power." },
    ],
    specs: [
      { label: "Build", value: "Handcrafted custom shell from an ear impression" },
      { label: "Processing", value: "Up to 55 million personalised adjustments per hour" },
      { label: "Noise reduction", value: "40 percent additional reduction in noise energy" },
      { label: "Connectivity", value: "2-Way Audio on compatible Apple devices, app control, TeleHear" },
      { label: "Protection", value: "Water-resistant coating against dust, moisture and humidity" },
      { label: "Accessories", value: "Remote microphone, table microphone, TV streamer, remote control, custom chargers" },
    ],
    bestFor: [
      "Wearers who prefer everything inside the ear with nothing behind it",
      "Spectacle wearers and people who find behind-the-ear devices crowded",
      "Patients who want automatic sound rather than constant manual adjustment",
      "Families in outlying areas who benefit from remote fine-tuning",
    ],
    brochure: { url: evolvPdf.url, title: "Starkey Evolv AI brochure", size: "PDF" },
  },
  {
    slug: "g-series-ai",
    name: "Starkey G Series AI",
    tagline: "Hearing within reach.",
    brand: "Starkey",
    category: "Essential range",
    summary:
      "Starkey's accessible range: rechargeable and battery styles, wireless app control and automatic directionality, including powerful BTE options for severe loss.",
    image: {
      url: gSeriesImg.url,
      alt: "Pair of champagne coloured Starkey G Series AI receiver-in-canal hearing aids",
    },
    intro: [
      "G Series AI exists so that good hearing technology is not reserved for the few. It carries the features that make the largest practical difference, automatic directionality, wireless connectivity and app control, in a range built to be practical for more families along the coast.",
      "The directionality system uses Starkey's Friendly AI to recognise the kind of place you are in, a quiet sitting room, a small group, a noisy street, and adjust the settings for you. Most wearers never touch a control, which is exactly the point for a first pair of hearing aids.",
      "The range covers four styles. The rechargeable receiver-in-canal is waterproof to one metre and needs no batteries. The 312 receiver-in-canal is the smallest option. The powered and ultra-power behind-the-ear models carry a telecoil and drive the gain needed for severe and profound losses, which makes G Series AI a genuine option for patients other ranges cannot serve.",
      "All four styles are wireless and work with the My Starkey app for programme changes, volume and call streaming, and all four pair with the StarLink accessory family: remote microphones for one-to-one conversation in noise, a table microphone for group meetings, a TV streamer and a remote control.",
    ],
    features: [
      {
        title: "Friendly AI directionality",
        body: "Identifies your listening environment and adjusts settings automatically for the best available clarity in small groups and in noise.",
      },
      {
        title: "Four styles, one range",
        body: "Rechargeable RIC, RIC 312, powered BTE 13 and ultra-power BTE 13, so mild through profound losses are all covered.",
      },
      {
        title: "Telecoil on BTE models",
        body: "Loop systems in halls and places of worship can be picked up directly, an important feature for institutional users.",
      },
      {
        title: "Wireless and app controlled",
        body: "Bluetooth connection to smartphones, with the My Starkey app for programmes, volume and streaming.",
      },
      {
        title: "StarLink accessories",
        body: "Remote microphones, a table microphone and a TV streamer extend hearing across distance and background noise.",
      },
    ],
    styles: [
      { name: "RIC R", body: "Rechargeable and waterproof to one metre. The most popular choice in this range." },
      { name: "RIC 312", body: "Compact battery-powered receiver-in-canal for a discreet fit." },
      { name: "P BTE 13", body: "Powered behind-the-ear with telecoil for moderate to severe loss." },
      { name: "UP BTE 13", body: "Ultra-power behind-the-ear with telecoil for severe to profound loss." },
    ],
    specs: [
      { label: "Styles", value: "RIC R, RIC 312, P BTE 13, UP BTE 13" },
      { label: "Rechargeable", value: "RIC R style" },
      { label: "Water resistance", value: "Waterproof up to 1 metre (RIC R)" },
      { label: "Telecoil", value: "Included on P BTE and UP BTE models" },
      { label: "App control", value: "My Starkey on iOS and Android, all styles" },
      { label: "Fitting range", value: "Mild through profound hearing loss" },
    ],
    bestFor: [
      "First-time hearing aid users looking for dependable, affordable technology",
      "Patients with severe or profound loss who need a powered behind-the-ear device",
      "Users of loop systems in halls, classrooms and places of worship",
      "Families who want dependable rechargeable hearing aids",
    ],
    brochure: { url: gSeriesPdf.url, title: "Starkey G Series AI brochure", size: "PDF" },
  },
];

export function getHearingAid(slug: string) {
  return hearingAids.find((a) => a.slug === slug);
}

export const brochures = hearingAids.map((a) => ({
  title: a.brochure.title,
  meta: `${a.name} · official Starkey brochure (PDF)`,
  href: a.brochure.url,
}));
