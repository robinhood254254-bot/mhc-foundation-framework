import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarClock, CheckCircle2, ClipboardList, Clock, ShieldCheck, Users } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { cta, site } from "@/lib/site";
import { getHearingTest, hearingTests } from "@/lib/hearing-tests";

export const Route = createFileRoute("/hearing-test/$slug")({
  loader: ({ params }) => {
    const test = getHearingTest(params.slug);
    if (!test) throw notFound();
    return test;
  },
  head: ({ params }) => {
    const test = getHearingTest(params.slug);
    const title = test ? `${test.name} in Mombasa | ${site.name}` : `Hearing Test | ${site.name}`;
    const description = test
      ? test.summary.slice(0, 155)
      : "Diagnostic hearing and balance testing at Mombasa Hearing Centre.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/hearing-test/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/hearing-test/${params.slug}` }],
    };
  },
  component: TestDetail,
});

function TestDetail() {
  const test = Route.useLoaderData();
  const others = hearingTests.filter((t) => t.slug !== test.slug).slice(0, 3);

  const facts = [
    { icon: Clock, label: "Duration", value: test.duration },
    { icon: Users, label: "Suitable for", value: test.suitableFor },
    { icon: ShieldCheck, label: "Performed by", value: test.performedBy },
    { icon: CheckCircle2, label: "Comfort", value: test.comfort },
  ];

  return (
    <>
      <PageHeader
        eyebrow={test.alsoKnownAs ?? "Diagnostics"}
        title={test.name}
        intro={test.summary}
        breadcrumbs={[{ label: "Hearing Test", to: "/hearing-test" }, { label: test.shortName }]}
        actions={
          <>
            <CTAButton to={cta.primary.to}>Book this assessment</CTAButton>
            <CTAButton to={cta.secondary.to} variant="secondary">
              Speak to our team
            </CTAButton>
          </>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold text-ink md:text-3xl">What this assessment is</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{test.intro}</p>

            <h3 className="mt-10 text-xl font-bold text-ink">Why it matters</h3>
            <ul className="mt-4 space-y-3">
              {test.whyItMatters.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-3xl border border-border bg-surface-2 p-6 md:p-8">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-5 space-y-5">
              {facts.map((fact) => (
                <div key={fact.label} className="flex gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <fact.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="mt-7">
              <CTAButton to={cta.primary.to} className="w-full justify-center">
                <CalendarClock className="size-4" aria-hidden="true" />
                Book an appointment
              </CTAButton>
            </div>
          </aside>
        </div>
      </Section>

      {test.gallery.length ? (
        <Section tone="muted" label="Inside the test room">
          <SectionHeading
            eyebrow="At the centre"
            title="How it looks in practice"
            description="Photographs taken at Mombasa Hearing Centre during real clinical sessions."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {test.gallery.map((shot) => (
              <figure key={shot.url + shot.caption} className="flex flex-col">
                <ImageContainer
                  ratio="landscape"
                  src={shot.url}
                  alt={shot.alt}
                  rounded="2xl"
                  className="shadow-card"
                />
                <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      <Section label="Procedure">
        <SectionHeading
          eyebrow="Step by step"
          title="How the assessment is performed"
          description="Each stage follows established audiological protocol, and you are told what is happening before it happens."
        />
        <ol className="mt-10 space-y-5">
          {test.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted" label="Preparation and results">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <ClipboardList className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-ink">How to prepare</h2>
            <ul className="mt-5 space-y-3">
              {test.prepare.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-ink">Understanding your results</h2>
            <dl className="mt-5 space-y-5">
              {test.results.map((r) => (
                <div key={r.title}>
                  <dt className="text-sm font-semibold text-ink">{r.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section label="Questions">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {test.faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-base font-semibold text-ink">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted" label="Other assessments">
        <SectionHeading eyebrow="Explore" title="Other tests we perform" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              to="/hearing-test/$slug"
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
            to="/hearing-test"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all hearing tests
          </Link>
        </div>
      </Section>
    </>
  );
}
