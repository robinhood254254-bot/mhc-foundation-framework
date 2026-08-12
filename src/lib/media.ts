/**
 * Approved Mombasa Hearing Centre photography (CDN asset pointers).
 * Only official centre photography is used across the site.
 */
import drMahin from "@/assets/dr-mahin.jpeg.asset.json";
import audiologistTerry from "@/assets/audiologist-terry.jpeg.asset.json";
import teamGroup from "@/assets/team-group.jpeg.asset.json";
import receptionTeam from "@/assets/reception-team.jpeg.asset.json";
import receptionEntrance from "@/assets/reception-entrance.png.asset.json";
import signage from "@/assets/signage.jpeg.asset.json";
import displayCounter from "@/assets/display-counter.png.asset.json";
import deviceDisplay from "@/assets/device-display.jpeg.asset.json";
import batteries1 from "@/assets/batteries-1.jpeg.asset.json";
import batteries2 from "@/assets/batteries-2.jpeg.asset.json";
import ptaTerry from "@/assets/pta-terry.jpeg.asset.json";
import ptaPaediatric from "@/assets/pta-paediatric.jpeg.asset.json";
import ptaSetup from "@/assets/pta-setup.jpeg.asset.json";
import tympanometryLeft from "@/assets/tympanometry-left.jpeg.asset.json";
import tympanometryRight from "@/assets/tympanometry-right.jpeg.asset.json";
import tympanometryResults from "@/assets/tympanometry-results.jpeg.asset.json";
import audiologistReview from "@/assets/audiologist-review.jpeg.asset.json";
import hearingAidLifestyle from "@/assets/hearing-aid-lifestyle.png.asset.json";
import tinnitusDiagram from "@/assets/tinnitus-diagram.png.asset.json";

export const media = {
  drMahin: {
    url: drMahin.url,
    alt: "Dr Mahin Abdilahi Mohamed at his desk in the Mombasa Hearing Centre consulting room",
  },
  audiologistTerry: {
    url: audiologistTerry.url,
    alt: "Madam Terry, audiologist at Mombasa Hearing Centre, at her pure tone audiometry workstation",
  },
  teamGroup: {
    url: teamGroup.url,
    alt: "The Mombasa Hearing Centre team together at the centre reception",
  },
  receptionTeam: {
    url: receptionTeam.url,
    alt: "Mombasa Hearing Centre front-desk team assisting with patient registration",
  },
  receptionEntrance: {
    url: receptionEntrance.url,
    alt: "Mombasa Hearing Centre reception area with the illuminated MHC sign",
  },
  signage: {
    url: signage.url,
    alt: "Mombasa Hearing Centre signage and directional arrow outside the entrance",
  },
  displayCounter: {
    url: displayCounter.url,
    alt: "Hearing aid and accessory display counter at Mombasa Hearing Centre",
  },
  deviceDisplay: {
    url: deviceDisplay.url,
    alt: "Hearing aid demonstration display at Mombasa Hearing Centre",
  },
  batteries1: {
    url: batteries1.url,
    alt: "Hearing aid batteries stocked at Mombasa Hearing Centre",
  },
  batteries2: {
    url: batteries2.url,
    alt: "Size 675 and size 13 hearing aid batteries available at Mombasa Hearing Centre",
  },
  ptaTerry: {
    url: ptaTerry.url,
    alt: "Madam Terry recording pure tone audiometry thresholds while a patient wears audiometric headphones",
  },
  ptaPaediatric: {
    url: ptaPaediatric.url,
    alt: "Paediatric audiometry station with children's headphones, audiometer and stacking-ring play toys",
  },
  ptaSetup: {
    url: ptaSetup.url,
    alt: "Audiologist preparing the audiometer and audiogram form before a hearing test",
  },
  tympanometryLeft: {
    url: tympanometryLeft.url,
    alt: "Lead audiologist performing tympanometry on a patient's left ear with a handheld probe",
  },
  tympanometryRight: {
    url: tympanometryRight.url,
    alt: "Lead audiologist performing tympanometry on a patient's right ear",
  },
  tympanometryResults: {
    url: tympanometryResults.url,
    alt: "Tympanometry and acoustic reflex results for both ears displayed on the clinical software",
  },
  audiologistReview: {
    url: audiologistReview.url,
    alt: "Lead audiologist at the Mombasa Hearing Centre testing workstation",
  },
  tinnitusDiagram: {
    url: tinnitusDiagram.url,
    alt: "Medical illustration of the ear showing common causes of tinnitus: damage to cilia in the inner ear, injuries, earwax blockage and ear infections",
  },
  hearingAidLifestyle: {
    url: hearingAidLifestyle.url,
    alt: "Woman wearing a behind-the-ear hearing aid at home",
  },
} as const;
