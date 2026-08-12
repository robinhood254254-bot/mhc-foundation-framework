import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { cta, site } from "@/lib/site";
import { articles, getArticle } from "@/lib/education";

export const Route = createFileRoute("/hearing-education/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ params }) => {
    const article = getArticle(params.slug);
    const title = article ? `${article.title} | ${site.name}` : `Article | ${site.name}`;
    const description = article
      ? article.excerpt.slice(0, 155)
      : "Hearing education from Mombasa Hearing Centre.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/hearing-education/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/hearing-education/${params.slug}` }],
    };
  },
  component: ArticleDetail,
});

function ArticleDetail() {
  const article = Route.useLoaderData();
  const others = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <PageHeader
        image={{ url: article.image.url }}
        eyebrow={article.category}
        title={article.title}
        intro={article.excerpt}
        breadcrumbs={[
          { label: "Hearing Education", to: "/hearing-education" },
          { label: article.category },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary" aria-hidden="true" />
            {article.readingTime}
          </p>
          <ImageContainer
            ratio="article"
            src={article.image.url}
            alt={article.image.alt}
            rounded="2xl"
            priority
            className="mt-6"
          />

          <article className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-ink md:text-3xl">{section.heading}</h2>
                {section.body.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="mt-4 text-base leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-5 space-y-3">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <div className="mt-12 rounded-3xl border border-border bg-primary-soft p-6 md:p-8">
            <h2 className="text-xl font-bold text-ink">Book a hearing assessment</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Our audiologists test, explain and advise in one visit at NSSF Building on Nkrumah
              Road.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton to={cta.primary.to}>{cta.primary.label}</CTAButton>
              <CTAButton to={cta.secondary.to} variant="secondary">
                {cta.secondary.label}
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" label="More reading">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">More from our team</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {others.map((other) => (
            <Link
              key={other.slug}
              to="/hearing-education/$slug"
              params={{ slug: other.slug }}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-lift"
            >
              <p className="eyebrow">{other.category}</p>
              <h3 className="mt-2 text-base font-semibold text-ink">{other.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{other.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/hearing-education"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to hearing education
          </Link>
        </div>
      </Section>
    </>
  );
}
