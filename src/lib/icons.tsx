import type { ReactNode } from "react";
import {
  Activity,
  Baby,
  Brain,
  Ear,
  Gauge,
  Headphones,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Waves,
  Wrench,
} from "lucide-react";

/** One distinct icon per service, shared by the homepage and the services index. */
export const serviceIcons: Record<string, ReactNode> = {
  "diagnostic-hearing-assessment": <Stethoscope className="size-5" />,
  "paediatric-hearing-care": <Baby className="size-5" />,
  "hearing-aid-fitting-and-verification": <Headphones className="size-5" />,
  "hearing-aid-repairs-servicing-and-supplies": <Wrench className="size-5" />,
  "tinnitus-assessment-and-management": <Activity className="size-5" />,
  "balance-and-vestibular-care": <Waves className="size-5" />,
  "custom-ear-moulds-and-hearing-protection": <ShieldCheck className="size-5" />,
};

/** One distinct icon per diagnostic test. */
export const testIcons: Record<string, ReactNode> = {
  "pure-tone-audiometry": <Headphones className="size-5" />,
  "paediatric-hearing-assessment": <Baby className="size-5" />,
  "tympanometry-impedance-audiometry": <Gauge className="size-5" />,
  "brainstem-evoked-response-audiometry": <Brain className="size-5" />,
  "caloric-test": <Waves className="size-5" />,
  "vestibular-rehabilitation": <HeartPulse className="size-5" />,
  "tinnitus-assessment": <Activity className="size-5" />,
  "hearing-aid-fitting-and-verification": <Ear className="size-5" />,
};
