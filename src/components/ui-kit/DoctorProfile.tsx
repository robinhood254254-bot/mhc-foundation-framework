import { ImageContainer } from "./ImageContainer";
import { CTAButton } from "./CTAButton";
import { cta } from "@/lib/site";

export type DoctorProfileData = {
  name: string;
  title: string;
  qualifications: string[];
  experience: string;
  bio: string;
  portraitSrc?: string;
  portraitLabel: string;
};

export function DoctorProfile({ doctor }: { doctor: DoctorProfileData }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14">
      <div className="relative">
        <ImageContainer
          ratio="portrait"
          alt={`Portrait of ${doctor.name}`}
          label={doctor.portraitLabel}
          src={doctor.portraitSrc}
          rounded="2xl"
          position="top"
          className="max-w-md"
        />
      </div>
      <div>
        <p className="eyebrow">Clinical Authority</p>
        <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">{doctor.name}</h2>
        <p className="mt-2 text-base font-semibold text-primary">{doctor.title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{doctor.experience}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {doctor.qualifications.map((q) => (
            <li
              key={q}
              className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground"
            >
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{doctor.bio}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>
          <CTAButton to="/about" variant="secondary">
            About the Centre
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
