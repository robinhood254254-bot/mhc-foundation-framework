import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TestimonialCard } from "@/components/ui-kit/Cards";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { cta, googleReviewsUrl } from "@/lib/site";
import { testimonials, ratingOnlyReviewers } from "@/lib/testimonials";
import { media } from "@/lib/media";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials | Mombasa Hearing Centre" },
      {
        name: "description",
        content:
          "Read verified Google reviews from patients of Mombasa Hearing Centre — fair pricing, skilled audiology and hearing aids fitted on site in Mombasa, Kenya.",
      },
      { property: "og:title", content: "Patient Testimonials | Mombasa Hearing Centre" },
      {
        property: "og:description",
        content: "Verified patient reviews of hearing care and hearing aids at Mombasa Hearing Centre.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        image={ url: media.receptionTeam.url }
        eyebrow="Testimonials"
        title="Patient Testimonials"
        intro="Every review below is published on our Google Business Profile by a patient who visited the centre. We reproduce them as written, without editing the reviewer's words."
        breadcrumbs={[{ label: "Testimonials" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />

      <Section label="Review summary">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Star, value: "5-star reviews", label: "Consistently rated by patients on Google" },
            { icon: Quote, value: `${testimonials.length} written reviews`, label: "Published on our Google Business Profile" },
            {
              icon: Star,
              value: `${ratingOnlyReviewers.length} rating-only reviews`,
              label: "Patients who rated or shared photos without written feedback",
            },
          ].map((s) => (
            <div key={s.value} className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <s.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-lg font-bold text-ink">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted" label="What patients say">
        <SectionHeading
          eyebrow="In their words"
          title="What our patients say"
          description="Feedback from people who came to us for hearing assessments, hearing aids and follow-up care."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} quote={t.quote} name={t.name} meta={t.meta} rating={t.rating} />
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          We are also grateful to {ratingOnlyReviewers.join(", ")} and others who left a star rating or shared photos
          of the centre without a written review.
        </p>
      </Section>

      <Section label="Share your experience">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <ImageContainer
            ratio="landscape"
            alt={media.teamGroup.alt}
            src={media.teamGroup.url}
            rounded="2xl"
          />
          <div>
            <p className="eyebrow">Your feedback</p>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Share your experience with us</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If we have helped you or a member of your family hear better, a short review helps other people in
              Mombasa and the Coast region find hearing care they can trust. You can read all of our reviews, or add
              your own, on our Google Business Profile.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href={googleReviewsUrl}>Read reviews on Google</CTAButton>
              <CTAButton to={cta.primary.to} variant="secondary">
                {cta.primary.label}
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
