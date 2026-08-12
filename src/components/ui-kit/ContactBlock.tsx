import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactBlock({
  variant = "stacked",
  className,
}: {
  variant?: "stacked" | "inline";
  className?: string;
}) {
  const rows = [
    {
      icon: Phone,
      label: "Mobile",
      value: contact.phoneDisplay,
      href: contact.phoneHref,
    },
    {
      icon: Phone,
      label: "Telephone",
      value: contact.landlineDisplay,
      href: contact.landlineHref,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsappDisplay,
      href: whatsappLink("Hello Mombasa Hearing Centre, I would like to make an enquiry."),
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
  ];

  return (
    <div className={cn(variant === "inline" ? "flex flex-wrap gap-x-8 gap-y-4" : "space-y-4", className)}>
      {rows.map((row) => (
        <div key={row.label} className="flex min-w-0 items-start gap-3">
          <row.icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">{row.label}</p>
            <a href={row.href} className="text-sm font-medium break-words text-foreground hover:text-primary">
              {row.value}
            </a>
          </div>
        </div>
      ))}
      <div className="flex min-w-0 items-start gap-3">
        <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Address</p>
          <p className="text-sm font-medium text-foreground">{contact.addressLine1}</p>
          <p className="text-sm text-muted-foreground">{contact.addressLine2}</p>
          <p className="text-sm text-muted-foreground">{contact.poBox}</p>
        </div>
      </div>
      <div className="flex min-w-0 items-start gap-3">
        <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Opening Hours</p>
          {contact.hours.map((h) => (
            <p key={h.days} className="text-sm text-foreground">
              <span className="font-medium">{h.days}:</span> {h.time}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
