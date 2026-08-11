import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageHeader, Section } from "@/components/ui-kit/Page";
import { ContactBlock } from "@/components/ui-kit/ContactBlock";
import { ImageContainer } from "@/components/ui-kit/ImageContainer";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { FormStatus, SelectField, TextAreaField, TextField } from "@/components/ui-kit/FormField";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Mombasa Hearing Centre" },
      {
        name: "description",
        content:
          "Book an appointment or contact Mombasa Hearing Centre at NSSF Building, 5th Floor, Nkrumah Road, Mombasa.",
      },
      { property: "og:title", content: "Book an Appointment | Mombasa Hearing Centre" },
      {
        property: "og:description",
        content: "Request an appointment with Mombasa Hearing Centre or reach us on phone, WhatsApp or email.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
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
          { value: "Hearing test", label: "Hearing test" },
          { value: "Hearing aid consultation", label: "Hearing aid consultation" },
          { value: "Follow-up appointment", label: "Follow-up appointment" },
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
          message="Opening WhatsApp with your appointment details. If nothing happens, use the WhatsApp button below."
        />
      ) : null}

      <CTAButton type="submit" size="lg" block icon={<MessageCircle aria-hidden="true" />}>
        {status === "loading" ? "Preparing your request…" : "Submit booking via WhatsApp"}
      </CTAButton>
      <p className="text-xs text-muted-foreground">
        Submitting opens WhatsApp with your appointment details pre-filled so you can send them to our team. No data is
        stored on this website.
      </p>
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book an Appointment"
        intro="Send us your appointment details on WhatsApp, or reach the centre directly by phone or email."
        breadcrumbs={[{ label: "Contact" }]}
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
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-lg font-bold text-ink">Visit the centre</h2>
              <ContactBlock className="mt-5" />
            </div>
            <ImageContainer
              ratio="landscape"
              alt="Mombasa Hearing Centre location"
              label="Approved location photograph or map embed"
              rounded="2xl"
            />
          </aside>
        </div>
      </Section>
    </>
  );
}
