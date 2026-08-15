/**
 * Diagnostic hearing and balance assessments performed at Mombasa Hearing Centre.
 * Clinical descriptions follow standard audiological practice (ISO 8253 pure tone
 * audiometry, 226 Hz tympanometry, click-evoked ABR and bithermal caloric testing).
 */
import { media } from "@/lib/media";

export type TestStep = { title: string; body: string };
export type TestFaq = { q: string; a: string };
export type TestGallery = { url: string; alt: string; caption: string };

export type HearingTest = {
  slug: string;
  name: string;
  shortName: string;
  alsoKnownAs?: string;
  summary: string;
  intro: string;
  duration: string;
  suitableFor: string;
  performedBy: string;
  comfort: string;
  hero: { url: string; alt: string } | null;
  gallery: TestGallery[];
  whyItMatters: string[];
  steps: TestStep[];
  prepare: string[];
  results: { title: string; body: string }[];
  faqs: TestFaq[];
};

export const hearingTests: HearingTest[] = [
  {
    slug: "pure-tone-audiometry",
    name: "Pure Tone Audiometry",
    shortName: "Pure tone audiometry",
    alsoKnownAs: "PTA, air and bone conduction testing",
    summary:
      "The reference test for hearing. It maps the quietest sounds you can detect across the speech frequencies and shows whether a loss sits in the outer, middle or inner ear.",
    intro:
      "Pure tone audiometry is the foundation of every hearing file we open at Mombasa Hearing Centre. Using a calibrated diagnostic audiometer, our audiologist presents pure tones at set frequencies, usually 250 Hz through 8000 Hz, and gradually reduces the level until you can only just hear each tone. The softest level you respond to reliably becomes your threshold, and those thresholds are plotted on an audiogram: one symbol set for the right ear, another for the left.",
    duration: "30 to 45 minutes for a full diagnostic session",
    suitableFor: "Adults and cooperative children from about five years of age",
    performedBy: "Audiologist, in a quiet dedicated test room",
    comfort: "Completely painless and non-invasive. Nothing enters the ear canal.",
    hero: { url: media.ptaTerry.url, alt: media.ptaTerry.alt },
    gallery: [
      {
        url: media.ptaTerry.url,
        alt: media.ptaTerry.alt,
        caption:
          "Air conduction testing in progress. The patient signals each tone he hears while thresholds are marked on the MHC audiogram.",
      },
      {
        url: media.ptaSetup.url,
        alt: media.ptaSetup.alt,
        caption:
          "Equipment is checked and the audiogram prepared before every session, part of the routine listening check our audiologists run each morning.",
      },
    ],
    whyItMatters: [
      "It quantifies hearing loss in decibels rather than guesswork, so progress can be tracked year after year.",
      "Comparing air conduction with bone conduction separates conductive problems, such as fluid or wax, from sensorineural loss in the cochlea.",
      "Hearing aid prescriptions are calculated directly from these thresholds. Without an accurate audiogram, a fitting is only an estimate.",
      "Employers, schools, aviation and maritime medical boards along the coast accept a signed MHC audiogram as formal documentation.",
    ],
    steps: [
      {
        title: "History and otoscopy",
        body: "We start with a short conversation about how the difficulty began, noise exposure, ear infections, medication and family history. The audiologist then examines both ear canals and eardrums with an otoscope. If wax is blocking the canal it is cleared first, because a blocked canal will distort every result that follows.",
      },
      {
        title: "Air conduction thresholds",
        body: "Headphones or insert earphones are placed and you are asked to press a response button, raise a hand or say yes whenever you hear a tone, however faint. Each frequency is tested using a descending and ascending sequence until a reliable threshold is confirmed at least twice.",
      },
      {
        title: "Bone conduction thresholds",
        body: "A small bone vibrator is rested on the mastoid bone behind the ear. Because it bypasses the outer and middle ear and stimulates the cochlea directly, any gap between the air and bone results tells us the loss has a conductive component that may respond to medical treatment.",
      },
      {
        title: "Masking where needed",
        body: "When one ear hears much better than the other, sound can cross the skull and be picked up by the good ear. A controlled narrow band noise is delivered to the better ear so the test ear is measured honestly. This is a skilled step and it is one of the reasons an audiologist, not an app, should record your thresholds.",
      },
      {
        title: "Speech testing",
        body: "We add speech reception thresholds and word recognition scores so we know not only what you can hear but how much of it you can understand. Two people with the same audiogram can have very different clarity, and this measurement guides realistic expectations from hearing aids.",
      },
      {
        title: "Explaining the audiogram",
        body: "Before you leave, the audiologist walks you through the chart, marks where speech sounds fall on it and explains the degree and configuration of any loss in plain language, in English or Kiswahili.",
      },
    ],
    prepare: [
      "Avoid loud noise, including loud music and machinery, for at least 16 hours before the appointment so temporary threshold shift does not exaggerate the result.",
      "Do not attempt to clean the ears with cotton buds. Wax pushed deeper makes the test harder.",
      "Bring any previous audiograms, ENT letters or medication lists.",
      "If you have an active ear infection or discharge, call us first. It may be better to treat that before testing.",
    ],
    results: [
      {
        title: "Normal hearing",
        body: "Thresholds of 25 dB HL or better across the frequency range. If you still struggle in noise despite a normal audiogram, we investigate further with speech in noise testing.",
      },
      {
        title: "Mild to moderate loss",
        body: "26 to 55 dB HL. Conversation in quiet is usually manageable, but group settings, mosque or church halls, and television become tiring. Most people at this level benefit clearly from amplification.",
      },
      {
        title: "Moderately severe to severe loss",
        body: "56 to 90 dB HL. Speech is missed without help. Well fitted, correctly verified hearing aids make the difference between isolation and participation.",
      },
      {
        title: "Profound loss",
        body: "Above 90 dB HL. We discuss high power amplification and, where appropriate, refer for cochlear implant assessment with a clear written report.",
      },
    ],
    faqs: [
      {
        q: "Will the test hurt?",
        a: "No. Pure tone audiometry is completely painless. The loudest tones used are brief and you are always warned before they are presented.",
      },
      {
        q: "Can I fail a hearing test?",
        a: "There is no pass or fail. The audiogram simply describes how you hear today so we can plan the right next step.",
      },
      {
        q: "How often should it be repeated?",
        a: "Every two years for adults with normal hearing, annually if you wear hearing aids or work in noise, and sooner if anything changes suddenly.",
      },
    ],
  },
  {
    slug: "paediatric-hearing-assessment",
    name: "Paediatric Hearing Assessment",
    shortName: "Paediatric assessment",
    alsoKnownAs: "Play audiometry, visual reinforcement audiometry, child hearing test",
    summary:
      "Age appropriate testing for babies and children, using play, toys and visual rewards to obtain reliable thresholds long before a child can describe what they hear.",
    intro:
      "A child does not need to speak or read to have their hearing measured accurately. What changes is the method, not the science. At Mombasa Hearing Centre we choose the technique that matches the child's developmental age, from objective testing in newborns to conditioned play audiometry in toddlers and pre schoolers. Early identification matters enormously: the first three years of life are when the auditory pathways and spoken language are built, and a hearing loss picked up at eight months has a very different outcome from the same loss found at four years.",
    duration: "45 to 60 minutes, often split across two shorter visits",
    suitableFor: "From newborn to twelve years, matched to developmental stage",
    performedBy: "Audiologist, with a parent or guardian in the room throughout",
    comfort: "Play based and reward driven. Most children treat it as a game.",
    hero: { url: media.ptaPaediatric.url, alt: media.ptaPaediatric.alt },
    gallery: [
      {
        url: media.ptaPaediatric.url,
        alt: media.ptaPaediatric.alt,
        caption:
          "The paediatric station. Stacking rings and coloured toys are the response tools: the child holds a ring, waits for the tone and drops it on the stack the moment it is heard.",
      },
    ],
    whyItMatters: [
      "Permanent childhood hearing loss affects roughly one to two babies in every thousand, and many more acquire temporary loss from middle ear fluid.",
      "Untreated loss in early childhood delays speech, reading and school performance, and is frequently mistaken for inattention or stubbornness.",
      "Glue ear is common in coastal Kenya and is often silent. Tympanometry finds it in minutes.",
      "Once identified, most childhood hearing problems can be treated medically or managed with amplification and structured support.",
    ],
    steps: [
      {
        title: "Parent interview and developmental history",
        body: "We ask about pregnancy and birth, jaundice, neonatal admission, meningitis, ear infections, family history of deafness, and how the child responds to sound and speech at home. Parents notice more than they realise, and that history shapes the test plan.",
      },
      {
        title: "Otoscopy and tympanometry",
        body: "Ears are examined and middle ear function screened, because fluid behind the eardrum is the single most common cause of childhood hearing difficulty and must be identified before anything else is interpreted.",
      },
      {
        title: "Visual reinforcement audiometry, six months to two and a half years",
        body: "The infant sits on a parent's lap. When a sound is presented, the child turns towards it and is rewarded with a lit or animated toy. The turn becomes a conditioned response, and thresholds are built up frequency by frequency.",
      },
      {
        title: "Conditioned play audiometry, two and a half to five years",
        body: "The child is taught a simple game: hold the ring or block to the ear, listen, and drop it in the bucket or onto the stack the instant the beep arrives. Once the conditioning is solid, the audiologist lowers the level to find true thresholds. Two testers are often used, one to run the audiometer and one to keep the game moving.",
      },
      {
        title: "Objective testing when required",
        body: "For newborns, children who cannot condition, or where results are inconsistent, we move to otoacoustic emissions and brainstem evoked response audiometry, which need no active cooperation at all.",
      },
      {
        title: "Report, counselling and referral",
        body: "Results are explained the same day with a written report for the paediatrician, ENT surgeon or school. Where amplification is indicated we discuss paediatric fitting, real ear measurement and the support the family will need.",
      },
    ],
    prepare: [
      "Book a time when your child is normally alert and fed, usually mid morning.",
      "Bring a favourite toy or comfort item, and a second adult if you have other children with you.",
      "Bring the child health booklet, immunisation record and any hospital letters.",
      "Do not tell the child it is a hospital test. Describing it as a listening game removes most of the anxiety.",
    ],
    results: [
      {
        title: "Normal for age",
        body: "Thresholds within the normal range with healthy middle ear pressure. We advise on speech milestones and when to return.",
      },
      {
        title: "Temporary conductive loss",
        body: "Usually glue ear or infection. We refer to ENT for medical management and re test after treatment, since most of these losses resolve.",
      },
      {
        title: "Permanent sensorineural loss",
        body: "Confirmed with objective testing, then managed with early amplification, family counselling, speech therapy referral and close monitoring as the child grows.",
      },
    ],
    faqs: [
      {
        q: "My baby is only a few weeks old. Can you still test?",
        a: "Yes. Newborns are tested with otoacoustic emissions and brainstem evoked response audiometry while they sleep naturally after a feed.",
      },
      {
        q: "What if my child refuses to cooperate?",
        a: "That is normal and it is not a wasted visit. We gather what we can, then either bring the child back or switch to objective testing that does not require cooperation.",
      },
      {
        q: "Can I stay in the room?",
        a: "We prefer it. A calm parent nearby makes for a calm child and a better result.",
      },
    ],
  },
  {
    slug: "tympanometry-impedance-audiometry",
    name: "Tympanometry and Impedance Audiometry",
    shortName: "Tympanometry",
    alsoKnownAs: "Impedance audiometry, middle ear analysis, acoustic reflex testing",
    summary:
      "A rapid objective measure of how the eardrum and middle ear move, detecting fluid, negative pressure, perforation and ossicular problems within seconds per ear.",
    intro:
      "Where pure tone audiometry describes what you hear, tympanometry explains part of the reason. A soft probe tip seals the ear canal and varies the air pressure while a 226 Hz tone is delivered. The instrument measures how much sound energy the eardrum admits at each pressure and draws a tympanogram. A healthy middle ear peaks near zero decapascals; fluid, blocked eustachian tubes, perforations and disrupted ossicles each produce their own recognisable trace. At Mombasa Hearing Centre this test is run on both ears in the same sitting, and the results are captured directly onto the clinical software for the file.",
    duration: "Five to ten minutes for both ears",
    suitableFor: "All ages, including infants and patients who cannot respond voluntarily",
    performedBy: "Lead audiologist or audiologist",
    comfort:
      "You feel a light pressure change, similar to a lift or descending aircraft, and hear a low hum. It is over in seconds.",
    hero: { url: media.tympanometryLeft.url, alt: media.tympanometryLeft.alt },
    gallery: [
      {
        url: media.tympanometryLeft.url,
        alt: media.tympanometryLeft.alt,
        caption:
          "The probe is sealed in the left ear canal. A gentle pressure sweep is run while the tympanogram is recorded.",
      },
      {
        url: media.tympanometryRight.url,
        alt: media.tympanometryRight.alt,
        caption:
          "The right ear follows immediately, so both middle ears are compared under the same conditions.",
      },
      {
        url: media.tympanometryResults.url,
        alt: media.tympanometryResults.alt,
        caption:
          "Compensated tympanograms and ipsilateral acoustic reflexes for both ears, captured on the clinical software and stored in the patient file.",
      },
    ],
    whyItMatters: [
      "It identifies middle ear fluid before it causes obvious symptoms, which is critical in children.",
      "It confirms or rules out a conductive component objectively, supporting the air and bone results from audiometry.",
      "Acoustic reflex thresholds add information about the middle ear muscles, the auditory nerve and the brainstem pathway.",
      "It requires no response from the patient, so it can be performed on infants, elderly patients with dementia, and anyone unable to cooperate.",
    ],
    steps: [
      {
        title: "Otoscopy first",
        body: "The canal is inspected to confirm there is no wax occlusion or discharge and that a safe seal can be achieved.",
      },
      {
        title: "Probe placement and seal",
        body: "A soft disposable tip sized to your ear is placed at the canal entrance. You will be asked to stay still and avoid swallowing, talking or yawning for a few seconds, since any of these change middle ear pressure.",
      },
      {
        title: "Pressure sweep and tympanogram",
        body: "Pressure is swept from positive to negative, typically +200 to -400 daPa, while admittance is measured. The instrument reports peak pressure, static compliance and ear canal volume.",
      },
      {
        title: "Acoustic reflex thresholds",
        body: "Louder tones at 500, 1000, 2000 and 4000 Hz are presented to trigger the stapedius muscle contraction. Present reflexes at normal levels are reassuring; absent or elevated reflexes direct further investigation.",
      },
      {
        title: "Interpretation and reporting",
        body: "Traces are classified and read alongside the audiogram. The audiologist explains what the shape of your tympanogram means and whether an ENT opinion is needed.",
      },
    ],
    prepare: [
      "Let us know if you have a perforated eardrum, a grommet, or recent ear surgery, as the protocol is adjusted.",
      "Avoid using ear drops on the morning of the test unless prescribed.",
      "Stay still and quiet during the few seconds of recording for a clean trace.",
    ],
    results: [
      {
        title: "Type A, normal",
        body: "A clear peak near zero daPa with normal compliance. The middle ear is ventilated and mobile.",
      },
      {
        title: "Type B, flat",
        body: "No peak. With a normal canal volume this usually indicates fluid behind the eardrum; with a large volume it suggests a perforation or a patent grommet.",
      },
      {
        title: "Type C, negative pressure",
        body: "The peak is shifted negative, pointing to eustachian tube dysfunction, often after a cold, allergy or air travel.",
      },
      {
        title: "Shallow or very deep peaks",
        body: "Reduced compliance can indicate a stiff or fixed ossicular chain, while an unusually high peak can indicate a disarticulation or a very flaccid eardrum. Both warrant an ENT referral.",
      },
    ],
    faqs: [
      {
        q: "Is any liquid or instrument put into my ear?",
        a: "No. Only a soft probe tip at the canal entrance, and only air pressure and sound are used.",
      },
      {
        q: "Can it be done if my eardrum is perforated?",
        a: "Yes, and it is useful. The measured canal volume helps confirm the perforation and estimate its effect.",
      },
      {
        q: "Does it replace the audiogram?",
        a: "No. Tympanometry tests the middle ear mechanism, not your hearing sensitivity. The two tests answer different questions and are read together.",
      },
    ],
  },
  {
    slug: "brainstem-evoked-response-audiometry",
    name: "Brainstem Evoked Response Audiometry",
    shortName: "BERA",
    alsoKnownAs: "BERA, ABR, auditory brainstem response",
    summary:
      "An objective test of the hearing nerve and brainstem pathway. Small surface electrodes record the brain's automatic response to sound while the patient rests or sleeps quietly.",
    intro:
      "Brainstem evoked response audiometry records the tiny electrical activity generated by the auditory nerve and brainstem in the first ten milliseconds after a sound. Click or tone burst stimuli are delivered through insert earphones and thousands of responses are averaged by the equipment until a clear waveform emerges, with the classic peaks labelled I, III and V. Because the recording is picked up automatically from the nervous system while the patient lies still, BERA is the reference test for newborns, for young children who cannot perform play audiometry, for patients where a non organic or exaggerated loss is suspected, and for medico legal hearing claims that require objective evidence.",
    duration: "45 to 90 minutes depending on the protocol and how settled the patient is",
    suitableFor: "Newborns, infants, children, adults needing objective or neurological assessment",
    performedBy: "Audiologist, referred to ENT or neurology when retrocochlear findings appear",
    comfort:
      "Painless. Small self adhesive electrodes are placed on the forehead and behind the ears after the skin is cleaned.",
    hero: { url: media.audiologistReview.url, alt: media.audiologistReview.alt },
    gallery: [],
    whyItMatters: [
      "It estimates hearing thresholds objectively when behavioural testing is impossible or unreliable.",
      "It screens the pathway from cochlea to brainstem, which matters when one ear is worse than the other or when there is tinnitus on one side only.",
      "It underpins early intervention: a confirmed BERA result allows a baby to be aided within the first months of life.",
      "It provides defensible documentation for occupational, insurance and legal hearing assessments.",
    ],
    steps: [
      {
        title: "Preparation and electrode placement",
        body: "The skin at the forehead and behind each ear is gently cleaned to lower impedance, then soft electrodes are attached. Impedances are checked before recording starts, since a poor contact ruins the trace.",
      },
      {
        title: "Settling the patient",
        body: "Muscle activity is the main source of interference, so the patient must be relaxed. Babies are tested in natural sleep after a feed, and adults are made comfortable on a couch in a darkened quiet room.",
      },
      {
        title: "Stimulus delivery",
        body: "Insert earphones present clicks or frequency specific tone bursts, one ear at a time, at a set repetition rate. The system averages many thousands of sweeps to lift the response out of background noise.",
      },
      {
        title: "Threshold search",
        body: "The stimulus level is lowered in steps until wave V can no longer be identified. That lowest level is the electrophysiological threshold and it correlates closely with behavioural hearing.",
      },
      {
        title: "Latency and waveform analysis",
        body: "Absolute latencies of waves I, III and V, the I to V interpeak interval and interaural differences are measured. Delays or absent waves at high levels suggest a problem beyond the cochlea and trigger onward referral.",
      },
    ],
    prepare: [
      "For babies and young children, keep them awake before the appointment and bring a feed so they sleep through the recording.",
      "Wash hair and avoid oils, gels or braided styles that prevent electrode contact at the forehead and mastoids.",
      "Adults should avoid caffeine immediately before and plan to lie still with eyes closed.",
      "Tell us about any sedation, neurological condition or previous ear surgery.",
    ],
    results: [
      {
        title: "Normal responses",
        body: "Clear wave V down to low stimulus levels with normal latencies. Hearing sensitivity and the brainstem pathway are within normal limits.",
      },
      {
        title: "Raised thresholds",
        body: "Wave V disappears at higher than expected levels, indicating hearing loss. Frequency specific tone burst testing then estimates the audiogram shape for a hearing aid fitting.",
      },
      {
        title: "Delayed or absent waves",
        body: "Prolonged interpeak intervals or an interaural latency difference point to a retrocochlear cause. We refer for ENT review and imaging with a full written report.",
      },
    ],
    faqs: [
      {
        q: "Does BERA involve needles or radiation?",
        a: "Neither. Only surface electrodes that stick to the skin, like those used for an ECG.",
      },
      {
        q: "Will my child need sedation?",
        a: "Usually not. Most infants are recorded in natural sleep. Where sedation is genuinely required it is arranged medically, never casually.",
      },
      {
        q: "Is BERA better than an audiogram?",
        a: "It is different. BERA is objective but estimates thresholds, while behavioural audiometry measures what you actually perceive. We use whichever, or both, fits the clinical question.",
      },
    ],
  },
  {
    slug: "caloric-test",
    name: "Caloric Test",
    shortName: "Caloric test",
    alsoKnownAs: "Bithermal caloric irrigation, vestibular caloric testing",
    summary:
      "A balance investigation that stimulates each inner ear separately with warm and cool irrigation to reveal which side is underperforming in patients with dizziness or vertigo.",
    intro:
      "The caloric test remains the only routine assessment that examines one labyrinth at a time. Warm and cool stimuli are delivered into the ear canal, creating a temperature gradient across the horizontal semicircular canal. In a healthy ear this produces a predictable eye movement called nystagmus, which is recorded and measured. Comparing the strength of the response between the two ears tells us whether there is a unilateral weakness, which is the classic signature of conditions such as vestibular neuritis, labyrinthitis and Meniere's disease. At Mombasa Hearing Centre this test is always preceded by a full ear examination and hearing assessment, because balance and hearing share the same organ.",
    duration: "45 to 60 minutes including the settling period afterwards",
    suitableFor:
      "Adults and older children with dizziness, vertigo, unsteadiness or unexplained falls",
    performedBy: "Lead audiologist, with ENT liaison where the history suggests a medical cause",
    comfort:
      "Brief and manageable. Each irrigation causes a spinning sensation lasting under a minute, which settles while you rest.",
    hero: { url: media.tympanometryResults.url, alt: media.tympanometryResults.alt },
    gallery: [],
    whyItMatters: [
      "Dizziness is one of the most misdiagnosed complaints in general practice, and caloric testing gives objective evidence of which ear is at fault.",
      "It distinguishes an inner ear cause from central or cardiovascular causes, preventing months of unnecessary treatment.",
      "The degree of weakness measured guides the design of an individualised vestibular rehabilitation programme.",
      "Serial testing shows whether the brain is compensating over time.",
    ],
    steps: [
      {
        title: "Screening and otoscopy",
        body: "We take a careful history of the dizziness, its triggers, duration and associated hearing symptoms, then check both eardrums. An intact eardrum is required for water irrigation; where there is a perforation an air caloric technique is used instead.",
      },
      {
        title: "Baseline eye recording",
        body: "Eye movements are recorded, with vision removed so that gaze cannot suppress the response. Spontaneous nystagmus is checked before any stimulus is given.",
      },
      {
        title: "Four irrigations",
        body: "Each ear receives a cool and a warm stimulus in turn, with a rest of about five minutes between each. Cool stimuli produce nystagmus beating away from the tested ear and warm stimuli towards it, the pattern remembered by clinicians as COWS.",
      },
      {
        title: "Measurement of slow phase velocity",
        body: "The peak slow phase velocity of the nystagmus is measured for each of the four responses. These four values are entered into the standard formulae for unilateral weakness and directional preponderance.",
      },
      {
        title: "Recovery and counselling",
        body: "You rest until any residual dizziness settles. The audiologist explains the findings, and if a weakness is confirmed, the rehabilitation plan begins from that same conversation.",
      },
    ],
    prepare: [
      "Do not eat a heavy meal within two hours of the appointment, and avoid alcohol for 48 hours.",
      "Stop vestibular sedatives, antihistamines and sleeping tablets for 48 hours where your doctor agrees, since they suppress the very responses we are measuring.",
      "Do not drive yourself. Bring someone who can take you home.",
      "Wear comfortable clothing and bring your glasses rather than contact lenses.",
    ],
    results: [
      {
        title: "Symmetrical responses",
        body: "Both labyrinths respond equally. The peripheral vestibular system is likely intact and we look at other causes, including positional vertigo and blood pressure.",
      },
      {
        title: "Unilateral weakness",
        body: "One ear responds significantly less than the other, typically beyond 25 percent difference. This localises the problem and is the usual finding after vestibular neuritis.",
      },
      {
        title: "Bilateral reduction",
        body: "Both ears respond poorly, which can follow certain medications or systemic disease. Rehabilitation focuses on vision and proprioception to compensate.",
      },
    ],
    faqs: [
      {
        q: "Will the test make me very dizzy?",
        a: "You will feel a spinning sensation for less than a minute after each irrigation. It is unpleasant briefly, then it passes. Provoking that response in a controlled setting is the point of the test.",
      },
      {
        q: "Can I go back to work afterwards?",
        a: "Most people can, but plan a quiet couple of hours first and arrange transport rather than driving straight away.",
      },
      {
        q: "Is it safe with a perforated eardrum?",
        a: "Water irrigation is avoided, and an alternative air based or rotational assessment is used instead. Always tell us about previous ear surgery or discharge.",
      },
    ],
  },
  {
    slug: "vestibular-rehabilitation",
    name: "Vestibular Rehabilitation",
    shortName: "Vestibular rehabilitation",
    alsoKnownAs: "Balance therapy, vestibular rehabilitation therapy",
    summary:
      "A structured, individually prescribed exercise programme that retrains the brain to compensate for inner ear balance problems and restores confident movement.",
    intro:
      "Vestibular rehabilitation is treatment rather than testing, and it is one of the most rewarding parts of our work. When one balance organ is damaged, the brain can learn to recalibrate using the remaining vestibular input together with vision and sensation from the feet and joints. That recalibration does not happen well through rest and avoidance. It happens through carefully graded, repeated exposure to the movements that provoke symptoms. Programmes are built from the assessment findings, taught in the clinic and then practised daily at home, with review appointments to progress the difficulty.",
    duration: "Initial session 45 minutes, then reviews every two to four weeks",
    suitableFor:
      "Patients with vestibular neuritis, labyrinthitis, positional vertigo, unilateral weakness, or age related unsteadiness",
    performedBy: "Audiologist, with referral to physiotherapy and ENT where required",
    comfort:
      "Exercises are graded to a level you can tolerate. Mild symptom provocation is expected and is part of how compensation is built.",
    hero: { url: media.ptaSetup.url, alt: media.ptaSetup.alt },
    gallery: [],
    whyItMatters: [
      "It reduces dizziness and the fear of falling, which is a major cause of loss of independence in older adults.",
      "Repositioning manoeuvres can resolve benign paroxysmal positional vertigo in one or two sessions.",
      "It reduces reliance on vestibular sedative medication, which delays recovery when taken long term.",
      "It restores confidence for driving, work, prayer, stairs and busy environments such as markets.",
    ],
    steps: [
      {
        title: "Assessment",
        body: "Balance function, gaze stability, positional testing and walking are assessed, alongside your hearing. We identify the specific movements and environments that trigger symptoms.",
      },
      {
        title: "Repositioning where indicated",
        body: "If positional vertigo from displaced otoconia is found, a repositioning manoeuvre such as Epley is performed in the clinic, often with immediate relief.",
      },
      {
        title: "Gaze stabilisation exercises",
        body: "Simple exercises in which you fix your eyes on a target while turning your head retrain the vestibulo ocular reflex so vision stays steady during movement.",
      },
      {
        title: "Habituation and balance training",
        body: "Movements that provoke mild symptoms are repeated in short controlled doses so the brain learns to ignore the faulty signal. Standing and walking tasks progress from firm ground and open eyes to softer surfaces and head movement.",
      },
      {
        title: "Home programme and review",
        body: "You leave with a written daily plan, usually a few minutes several times a day, and a symptom diary. Progress is reviewed and the programme is made harder as you improve.",
      },
    ],
    prepare: [
      "Wear flat comfortable shoes and clothing you can move in.",
      "Bring a list of all medications, especially anything taken for dizziness.",
      "Bring a family member if you are unsteady, both for support and to learn the exercises with you.",
      "Expect to be moved and to feel briefly dizzy. That is therapeutic, not harmful.",
    ],
    results: [
      {
        title: "Rapid resolution",
        body: "Positional vertigo often settles within one to three sessions after successful repositioning.",
      },
      {
        title: "Progressive improvement",
        body: "After vestibular neuritis, most patients improve substantially over six to twelve weeks of consistent daily exercises.",
      },
      {
        title: "Ongoing management",
        body: "Where the loss is permanent or bilateral, the programme shifts to long term strategies, fall prevention and environmental adaptation.",
      },
    ],
    faqs: [
      {
        q: "Why do the exercises make me dizzy?",
        a: "Because they are meant to, mildly and briefly. Controlled provocation is the stimulus the brain uses to recalibrate. Avoiding movement prolongs the problem.",
      },
      {
        q: "How long before I feel better?",
        a: "Some patients improve within days, most notice real change within four to six weeks. Consistency matters far more than intensity.",
      },
      {
        q: "Can medication replace the exercises?",
        a: "No. Sedatives may help in the acute phase but slow compensation if continued. Rehabilitation is the treatment that produces lasting recovery.",
      },
    ],
  },
  {
    slug: "tinnitus-assessment-and-management",
    name: "Tinnitus Assessment and Management",
    shortName: "Tinnitus assessment",
    alsoKnownAs: "Ringing in the ears, tinnitus matching, sound therapy",
    summary:
      "A full evaluation of ringing, buzzing or hissing in the ears, followed by a management plan combining sound therapy, amplification, counselling and habituation.",
    intro:
      "Tinnitus is the perception of sound with no external source, most often described as ringing, buzzing, hissing, whistling or the sound of crickets. It is a symptom rather than a disease. It commonly arises when damage to the delicate hair cells of the inner ear reduces the input reaching the brain, and the auditory system compensates by increasing its own gain. Common contributors include noise exposure, age related hearing loss, wax blockage, middle ear infection, head injury, certain medications, high blood pressure and stress. Our purpose in assessment is to identify anything treatable, characterise the tinnitus precisely, and then reduce the distress it causes.",
    duration: "60 to 90 minutes for the full assessment and counselling session",
    suitableFor: "Adults and older children troubled by ringing, buzzing or hissing in the ears",
    performedBy: "Audiologist, with ENT referral where the history requires it",
    comfort:
      "Entirely non invasive. The most valuable part is often the conversation, since understanding the mechanism reduces the alarm it creates.",
    hero: { url: media.tinnitusDiagram.url, alt: media.tinnitusDiagram.alt },
    gallery: [
      {
        url: media.hearingAidLifestyle.url,
        alt: media.hearingAidLifestyle.alt,
        caption:
          "Well fitted amplification restores the missing input to the auditory system and is one of the most effective tinnitus interventions available.",
      },
    ],
    whyItMatters: [
      "Around one adult in seven experiences persistent tinnitus, and a significant minority find it affects sleep, concentration and mood.",
      "Tinnitus in one ear only, pulsating tinnitus, or tinnitus with sudden hearing loss are warning signs that need prompt medical assessment.",
      "Most tinnitus accompanies a hearing loss the person has not yet noticed. Treating the hearing loss frequently reduces the tinnitus.",
      "Habituation is achievable. The goal is not always silence, it is for the sound to stop demanding your attention.",
    ],
    steps: [
      {
        title: "Detailed tinnitus history",
        body: "We record when it started, whether it is constant or intermittent, one ear or both, pulsating or steady, and what makes it worse. We also screen for the impact on sleep, concentration and mood using a structured questionnaire so change can be measured later.",
      },
      {
        title: "Otoscopy and medical screening",
        body: "Ears are examined for wax, infection and eardrum abnormalities. We review blood pressure, medication and relevant medical history, and refer to ENT for pulsatile, unilateral or sudden onset tinnitus.",
      },
      {
        title: "Full audiological evaluation",
        body: "Pure tone audiometry, including high frequency thresholds where indicated, plus tympanometry and acoustic reflexes. A hearing loss is found in the great majority of cases and is central to the plan.",
      },
      {
        title: "Pitch and loudness matching",
        body: "You compare your tinnitus with tones presented at different frequencies and levels until the closest match is found. We also measure the minimum masking level and check for residual inhibition, the period of quiet that sometimes follows a masking sound.",
      },
      {
        title: "Uncomfortable loudness levels",
        body: "Because tinnitus often coexists with sound sensitivity, we measure the levels at which everyday sound becomes uncomfortable. This protects against over amplification at the fitting stage.",
      },
      {
        title: "Management plan",
        body: "The plan is built around education about the mechanism, sound enrichment so the brain has something else to listen to, hearing aids or combination devices with built in tinnitus generators where there is hearing loss, sleep and relaxation strategies, and structured follow up to track improvement.",
      },
    ],
    prepare: [
      "Keep a short diary for a week before the appointment noting when the tinnitus is loudest and what you were doing.",
      "Bring a list of all medications, including anything bought over the counter.",
      "Avoid loud noise and heavy caffeine the day before, as both can temporarily worsen the sound.",
      "Bring a partner or family member if the tinnitus is affecting your sleep or mood. Their observations help.",
    ],
    results: [
      {
        title: "Tinnitus with hearing loss",
        body: "The most common finding. Correctly fitted and verified hearing aids restore missing input, reduce the internal gain and are frequently the single most effective step.",
      },
      {
        title: "Tinnitus with normal hearing",
        body: "Management focuses on sound enrichment, sleep hygiene, stress reduction and habituation therapy, with high frequency testing to look for hidden damage.",
      },
      {
        title: "Findings needing medical referral",
        body: "Pulsatile tinnitus, one sided tinnitus with asymmetric hearing, sudden onset or tinnitus with vertigo are referred promptly to ENT with our full report.",
      },
    ],
    faqs: [
      {
        q: "Will my tinnitus ever go away?",
        a: "Sometimes, particularly when there is a treatable cause such as wax or infection. When it persists, the realistic and very achievable goal is habituation, where the sound remains but no longer intrudes.",
      },
      {
        q: "Is silence good for tinnitus?",
        a: "No. Quiet rooms make tinnitus more noticeable. Gentle background sound, a fan, soft music or a sound generator, gives the brain an alternative to focus on.",
      },
      {
        q: "Do hearing aids help tinnitus?",
        a: "Very often, yes. They restore the sound the brain is missing, and many modern devices also include dedicated tinnitus sound generators that we tune to your matched pitch.",
      },
      {
        q: "Should I worry?",
        a: "Most tinnitus is not dangerous. Seek prompt assessment if it is in one ear only, pulsates in time with your heartbeat, follows a head injury, or comes with sudden hearing loss or dizziness.",
      },
    ],
  },
  {
    slug: "hearing-aid-fitting-and-verification",
    name: "Hearing Aid Fitting and Verification",
    shortName: "Fitting and verification",
    alsoKnownAs: "Hearing aid programming, real ear verification, aftercare",
    summary:
      "Programming your devices to your own audiogram and ear acoustics, verifying the output objectively, and supporting you through the adjustment period.",
    intro:
      "Buying a hearing aid and being fitted with one are not the same thing. A fitting at Mombasa Hearing Centre begins with your audiogram, applies a validated prescription target, and then verifies what the device is actually delivering in your ear rather than assuming the software got it right. Ear canals differ enormously in volume and shape, and the same device can be several decibels off target in two different people. Verification, fine tuning and structured follow up are what turn a device into better hearing.",
    duration: "60 to 90 minutes for the fitting, with scheduled follow up visits",
    suitableFor: "Anyone whose assessment shows amplification will help, from children to elders",
    performedBy: "Lead audiologist and audiology team",
    comfort: "Comfortable throughout. Nothing uncomfortable is done without warning.",
    hero: { url: media.hearingAidLifestyle.url, alt: media.hearingAidLifestyle.alt },
    gallery: [
      {
        url: media.tympanometryLeft.url,
        alt: "Lead audiologist fitting a hearing device at Mombasa Hearing Centre",
        caption:
          "Our lead audiologist placing and adjusting a device on the ear during a fitting appointment.",
      },
      {
        url: media.audiologistReview.url,
        alt: media.audiologistReview.alt,
        caption:
          "Programming and review at the fitting workstation, where settings are refined against prescription targets.",
      },
    ],
    whyItMatters: [
      "An unverified fitting is the most common reason hearing aids end up in a drawer.",
      "Correct output protects residual hearing by keeping loud sounds below your uncomfortable levels.",
      "Physical fit and retention matter in a hot, humid coastal climate, and are checked at every visit.",
      "Follow up in the first three months is when most of the real benefit is gained.",
    ],
    steps: [
      {
        title: "Review of needs and lifestyle",
        body: "We discuss where you struggle most, whether that is the mosque, church, classroom, market, meetings or the telephone, and match technology and settings to those situations rather than to a brochure.",
      },
      {
        title: "Physical fit",
        body: "Domes, moulds or receivers are selected and checked for comfort, retention and feedback. Poor physical fit undermines even the best electronics.",
      },
      {
        title: "First fit to prescription",
        body: "Your audiogram is loaded and a validated prescription target is applied for soft, average and loud inputs, rather than an arbitrary manufacturer default.",
      },
      {
        title: "Verification",
        body: "Output is measured and compared against target, then adjusted until soft speech is audible, average speech is comfortable and loud sounds remain below your discomfort level.",
      },
      {
        title: "Orientation and counselling",
        body: "You and your family are shown insertion and removal, batteries or charging, cleaning, moisture care and phone connectivity. We set realistic expectations for the first few weeks.",
      },
      {
        title: "Follow up and fine tuning",
        body: "Review appointments in the first weeks address the situations you report back on. Cleaning, servicing, battery supply and repairs continue from the centre for the life of the device.",
      },
    ],
    prepare: [
      "Bring a family member. A second listener helps judge speech clarity and remembers the care instructions.",
      "Bring your most recent audiogram if it was performed elsewhere.",
      "Set aside the full appointment time and plan a quiet rest of the day, since new sound takes some adjustment.",
      "Note down the three situations you most want to improve, and bring that list.",
    ],
    results: [
      {
        title: "Matched to target",
        body: "Measured output sits on prescription across the speech frequencies, giving audibility without discomfort.",
      },
      {
        title: "Adjustment period",
        body: "Two to six weeks of daily wear as the brain reacclimatises to sounds it has not processed for years. Wearing time is built up steadily.",
      },
      {
        title: "Long term care",
        body: "Reviews, cleaning, re programming as hearing changes, and a reliable local supply of batteries and accessories.",
      },
    ],
    faqs: [
      {
        q: "Can I be fitted the same day as my test?",
        a: "Often yes, when a suitable device is in stock. We keep inventory on site so patients travelling from outside Mombasa are not sent away empty handed.",
      },
      {
        q: "Why does my own voice sound strange at first?",
        a: "It is the occlusion effect from blocking the canal. Venting, mould changes and software adjustments reduce it, and most people adapt within a few weeks.",
      },
      {
        q: "What if the aid does not suit me?",
        a: "Come back. Fine tuning is part of the service and most complaints are solved with adjustment rather than replacement.",
      },
    ],
  },
];

export function getHearingTest(slug: string) {
  return hearingTests.find((t) => t.slug === slug);
}
