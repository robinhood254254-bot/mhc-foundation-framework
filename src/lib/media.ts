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
} as const;
