import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, CalendarCheck, Clock, Phone } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { FormStatus, SelectField, TextAreaField, TextField } from "@/components/ui-kit/FormField";
import { contact, site, whatsappLink } from "@/lib/site";
import { media } from "@/lib/media";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Mombasa Hearing Centre" },
      {
        name: "description",
        content:
          "Request a hearing appointment at Mombasa Hearing Centre, NSSF Building, Nkrumah Road, Mombasa. Send your preferred date and time straight to our team on WhatsApp.",
      },
      { property: "og:title", content: "Book an Appointment | Mombasa Hearing Centre" },
      {
        property: "og:description",
        content: "Request a hearing appointment with the Mombasa Hearing Centre clinical team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book-appointment" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/book-appointment" }],
  }),
  component: BookAppointmentPage,
});

type Errors = Partial<Record<"name" | "phone" | "reason", string>>;

function BookingForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    date: "",
    time: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!/^[0-9+\s()-]{7,}$/.test(values.phone.trim())) next.phone = "Please enter a valid phone number.";
    if (!values.reason) next.reason = "Please select a reason for your visit.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const message = [
      `New appointment request — ${site.name}`,
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      `Reason: ${values.reason}`,
      values.date ? `Preferred date: ${values.date}` : null,
      values.time ? `Preferred time: ${values.time}` : null,
      values.notes ? `Notes: ${values.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = whatsappLink(message);
    window.setTimeout(() => {
      setStatus("success");
      window.open(url, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Full name"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          placeholder="Your full name"
        />
        <TextField
          label="Phone number"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
          placeholder="+254 7XX XXX XXX"
        />
      </div>
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        value={values.email}
        onChange={set("email")}
        placeholder="you@example.com"
      />
      <SelectField
        label="Reason for visit"
        name="reason"
        required
        value={values.reason}
        onChange={set("reason")}
        error={errors.reason}
        options={[
          { value: "", label: "Select a reason" },
          { value: "Hearing assessment", label: "Hearing assessment" },
          { value: "Hearing aid consultation", label: "Hearing aid consultation" },
          { value: "Hearing aid repair or servicing", label: "Hearing aid repair or servicing" },
          { value: "Follow-up appointment", label: "Follow-up appointment" },
          { value: "Paediatric hearing appointment", label: "Paediatric hearing appointment" },
          { value: "General enquiry", label: "General enquiry" },
        ]}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Preferred date" name="date" type="date" value={values.date} onChange={set("date")} />
        <TextField label="Preferred time" name="time" type="time" value={values.time} onChange={set("time")} />
      </div>
      <TextAreaField
        label="Additional notes"
        name="notes"
        value={values.notes}
        onChange={set("notes")}
        placeholder="Anything you would like us to know before your visit."
      />

      {status === "error" ? <FormStatus state="error" message="Please correct the highlighted fields." /> : null}
      {status === "success" ? (
        <FormStatus
          state="success"
          message="Opening WhatsApp with your appointment details. If nothing happens, tap the WhatsApp button on this page."
        />
      ) : null}

      <CTAButton type="submit" size="lg" block icon={<MessageCircle aria-hidden="true" />}>
        {status === "loading" ? "Preparing your request…" : "Send booking via WhatsApp"}
      </CTAButton>
      <p className="text-xs text-muted-foreground">
        Submitting opens WhatsApp with your appointment details pre-filled so you can send them to our team. No
        personal data is stored on this website.
      </p>
    </form>
  );
}

const steps = [
  {
    title: "1. Send your request",
    body: "Complete the short form and send it to our team on WhatsApp, or call the centre directly during opening hours.",
  },
  {
    title: "2. We confirm your slot",
    body: "Our front desk confirms the date and time that suits you and lets you know how long to set aside for your visit.",
  },
  {
    title: "3. Attend your appointment",
    body: "Come to the 5th floor of the NSSF Building on Nkrumah Road. Bring any previous hearing reports or devices you use.",
  },
];

function BookAppointmentPage() {
  return (
    <>
      <PageHeader
        image={ url: media.receptionEntrance.url }
        eyebrow="Appointments"
        title="Book an Appointment"
        intro="Request a visit with the Mombasa Hearing Centre clinical team. Appointments help us set aside enough time for a careful, unhurried consultation."
        breadcrumbs={[{ label: "Book an Appointment" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card md:p-8">
            <h2 className="text-xl font-bold text-ink">Appointment request</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              Fields marked with an asterisk are required.
            </p>
            <BookingForm />
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-primary-soft p-6">
              <h2 className="text-lg font-bold text-ink">Prefer to speak to someone?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our reception team is happy to book you in over the phone.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <a href={contact.phoneHref} className="flex items-center gap-2 font-semibold hover:text-primary">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
                <a href={contact.landlineHref} className="flex items-center gap-2 font-semibold hover:text-primary">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {contact.landlineDisplay}
                </a>
              </div>
              <div className="mt-6">
                <CTAButton
                  href={whatsappLink("Hello Mombasa Hearing Centre, I would like to book an appointment.")}
                  variant="secondary"
                  icon={<MessageCircle aria-hidden="true" />}
                >
                  Chat on WhatsApp
                </CTAButton>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-ink">
                <Clock className="size-4 text-primary" aria-hidden="true" />
                Opening hours
              </h2>
              <dl className="mt-4 space-y-2 text-sm">
                {contact.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{h.days}</dt>
                    <dd className="font-semibold text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ImageContainer
              ratio="landscape"
              alt={media.receptionEntrance.alt}
              src={media.receptionEntrance.url}
              rounded="2xl"
            />
          </aside>
        </div>
      </Section>

      <Section tone="muted" label="How booking works">
        <h2 className="text-2xl font-bold text-ink md:text-3xl">How booking works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-surface p-6">
              <CalendarCheck className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-base font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
