import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { ArticleCard, DownloadResourceCard } from "@/components/ui-kit/Cards";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { media } from "@/lib/media";
import { cta } from "@/lib/site";
import { articles } from "@/lib/education";
import { brochures } from "@/lib/hearing-aids";

const title = "Hearing Education and Resources | Mombasa Hearing Centre";
const description =
  "Plain-language guidance on the signs of hearing loss, caring for hearing aids in coastal humidity, and protecting your hearing from noise, plus downloadable Starkey brochures.";

export const Route = createFileRoute("/hearing-education/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hearing-education" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hearing-education" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        image={{ url: media.audiologistReview.url }}
        eyebrow="Hearing Education"
        title="Understand your hearing"
        intro="Good decisions start with good information. These guides are written by our clinical team for patients on this coast, in plain language and without sales talk."
        breadcrumbs={[{ label: "Hearing Education" }]}
        actions={<CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>}
      />

      <Section label="Articles">
        <SectionHeading eyebrow="Guides" title="Articles from our clinical team" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal key={article.slug} direction={i % 2 === 0 ? "left" : "right"} delay={i * 70} className="h-full">
              <ArticleCard
                            key={article.slug}
                            category={article.category}
                            title={article.title}
                            excerpt={article.excerpt}
                            imageLabel={article.image.alt}
                            src={article.image.url}
                            to={`/hearing-education/${article.slug}`}
                          />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted" label="Downloads">
        <SectionHeading
          eyebrow="Downloads"
          title="Official Starkey brochures"
          description="Complete product brochures for every hearing aid family fitted at the centre."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {brochures.map((b) => (
            <DownloadResourceCard key={b.href} title={b.title} meta={b.meta} href={b.href} />
          ))}
        </div>
      </Section>

      <Section label="Book">
        <div className="rounded-3xl border border-border bg-primary-soft p-6 md:p-10">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Still have a question about your hearing?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Reading only goes so far. A diagnostic hearing assessment takes under an hour and answers the question
            properly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton to={cta.primary.to} size="lg">
              {cta.primary.label}
            </CTAButton>
            <CTAButton to={cta.secondary.to} size="lg" variant="secondary">
              {cta.secondary.label}
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
