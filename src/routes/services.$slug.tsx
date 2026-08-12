import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Users } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { cta, site } from "@/lib/site";
import { getService, services } from "@/lib/services";
import { getHearingTest } from "@/lib/hearing-tests";
import { hearingAids } from "@/lib/hearing-aids";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    const title = service ? `${service.name} in Mombasa | ${site.name}` : `Service | ${site.name}`;
    const description = service
      ? service.summary.slice(0, 155)
      : "Hearing care services at Mombasa Hearing Centre.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const tests = (service.relatedTests ?? []).map(getHearingTest).filter(Boolean);

  return (
    <>
      <PageHeader
        image={{ url: service.image.url }}
        eyebrow="Service"
        title={service.name}
        intro={service.summary}
        breadcrumbs={[{ label: "Services", to: "/services" }, { label: service.shortName }]}
        actions={
          <>
            <CTAButton to={cta.primary.to}>Book this service</CTAButton>
            <CTAButton to={cta.secondary.to} variant="secondary">
              {cta.secondary.label}
            </CTAButton>
          </>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold text-ink md:text-3xl">About this service</h2>
            {service.intro.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {p}
              </p>
            ))}

            <h3 className="mt-10 text-xl font-bold text-ink">What the appointment includes</h3>
            <ul className="mt-4 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <ImageContainer
              ratio="landscape"
              src={service.image.url}
              alt={service.image.alt}
              rounded="2xl"
            />
            <aside className="rounded-3xl border border-border bg-surface-2 p-6 md:p-8">
              <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <Users className="size-5" aria-hidden="true" />
              </span>
              <p className="eyebrow mt-4">Who it is for</p>
              <ul className="mt-4 space-y-3">
                {service.whoItIsFor.map((item) => (
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
              <div className="mt-7">
                <CTAButton to={cta.primary.to} className="w-full justify-center">
                  {cta.primary.label}
                </CTAButton>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      {tests.length ? (
        <Section tone="muted" label="Related tests">
          <SectionHeading eyebrow="Diagnostics" title="Tests used in this service" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tests.map((test) => (
              <Link
                key={test!.slug}
                to="/hearing-test/$slug"
                params={{ slug: test!.slug }}
                className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-lift"
              >
                <h3 className="text-base font-semibold text-ink">{test!.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {test!.summary}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {service.relatedAids ? (
        <Section label="Hearing aids">
          <SectionHeading
            eyebrow="Starkey"
            title="Hearing aids we fit"
            description="Mombasa Hearing Centre is an authorised Starkey partner. Every family below is fitted, programmed and serviced here."
            actions={
              <CTAButton to="/hearing-aids" variant="secondary">
                View all hearing aids
              </CTAButton>
            }
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hearingAids.slice(0, 3).map((aid) => (
              <Link
                key={aid.slug}
                to="/hearing-aids/$slug"
                params={{ slug: aid.slug }}
                className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-lift"
              >
                <h3 className="text-base font-semibold text-ink">{aid.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{aid.summary}</p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="muted" label="Other services">
        <SectionHeading eyebrow="Explore" title="Other services at the centre" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              to="/services/$slug"
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
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all services
          </Link>
        </div>
      </Section>
    </>
  );
}
