import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Download } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { cta } from "@/lib/site";
import { seoTitle } from "@/lib/seo";
import { getHearingAid, hearingAids } from "@/lib/hearing-aids";
import { media } from "@/lib/media";

export const Route = createFileRoute("/hearing-aids/$slug")({
  loader: ({ params }) => {
    const aid = getHearingAid(params.slug);
    if (!aid) throw notFound();
    return aid;
  },
  head: ({ params }) => {
    const aid = getHearingAid(params.slug);
    const title = seoTitle(aid ? aid.name : "Hearing Aid");
    const description = aid
      ? aid.summary.slice(0, 155)
      : "Starkey hearing aids fitted at Mombasa Hearing Centre.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/hearing-aids/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/hearing-aids/${params.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const aid = Route.useLoaderData();
  const others = hearingAids.filter((a) => a.slug !== aid.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        image={{ url: media.displayCounter.url }}
        eyebrow={`${aid.brand} · ${aid.category}`}
        title={aid.name}
        intro={aid.tagline}
        breadcrumbs={[{ label: "Hearing Aids", to: "/hearing-aids" }, { label: aid.name }]}
        actions={
          <>
            <CTAButton to={cta.primary.to}>Book a demonstration</CTAButton>
            <CTAButton to={cta.secondary.to} variant="secondary">
              {cta.secondary.label}
            </CTAButton>
          </>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-3xl border border-border bg-surface-2 p-6 md:p-10">
            <ImageContainer
              ratio="square"
              src={aid.image.url}
              alt={aid.image.alt}
              rounded="2xl"
              priority
              className="border-0 bg-transparent"
              imgClassName="object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink md:text-3xl">
              About the {aid.name.replace("Starkey ", "")}
            </h2>
            {aid.intro.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mt-4 text-base leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
            <div className="mt-8">
              <a
                href={aid.brochure.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="size-4" aria-hidden="true" />
                Download the {aid.brochure.title.replace("Starkey ", "")}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" label="Features">
        <SectionHeading eyebrow="Technology" title="What this device does" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aid.features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card"
            >
              <h3 className="text-base font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Styles and specifications">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-ink">Available styles</h2>
            <dl className="mt-5 space-y-5">
              {aid.styles.map((s) => (
                <div key={s.name}>
                  <dt className="text-sm font-semibold text-ink">{s.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-3xl border border-border bg-surface-2 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-ink">At a glance</h2>
            <dl className="mt-5 divide-y divide-border">
              {aid.specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-4 py-3"
                >
                  <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {s.label}
                  </dt>
                  <dd className="text-sm text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="muted" label="Suitability">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Is it right for you"
              title={`Who the ${aid.name.replace("Starkey ", "")} suits`}
            />
            <ul className="mt-8 space-y-3">
              {aid.bestFor.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-card md:p-8">
            <h3 className="text-xl font-bold text-ink">Read the full brochure</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The official Starkey brochure covers colours, accessories, app features and technical
              detail in full.
            </p>
            <a
              href={aid.brochure.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
            >
              <Download className="size-4" aria-hidden="true" />
              {aid.brochure.title} (PDF)
            </a>
            <div className="mt-6">
              <CTAButton to={cta.primary.to} className="w-full justify-center">
                {cta.primary.label}
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section label="Other hearing aids">
        <SectionHeading eyebrow="Compare" title="Other Starkey families we fit" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              to="/hearing-aids/$slug"
              params={{ slug: other.slug }}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-lift"
            >
              <h3 className="text-base font-semibold text-ink">{other.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{other.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/hearing-aids"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all hearing aids
          </Link>
        </div>
      </Section>
    </>
  );
}
