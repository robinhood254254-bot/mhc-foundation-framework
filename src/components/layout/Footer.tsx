import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { ContactBlock } from "@/components/ui-kit/ContactBlock";
import { CTAButton } from "@/components/ui-kit/CTAButton";
import { contact, cta, footerServiceLinks, legalNav, mainNav, site, whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t border-border bg-surface-2">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton to={cta.primary.to} size="sm">
              {t(cta.primary.label)}
            </CTAButton>
            <CTAButton
              href={whatsappLink("Hello Mombasa Hearing Centre, I would like to make an enquiry.")}
              size="sm"
              variant="secondary"
            >
              {t("WhatsApp")}
            </CTAButton>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">{t("Quick Links")}</h2>
          <ul className="mt-5 space-y-3">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted-foreground hover:text-primary">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">{t("Services")}</h2>
          <ul className="mt-5 space-y-3">
            {footerServiceLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted-foreground hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-sm font-semibold text-primary">
                View all services
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-ink uppercase">{t("Contact Details")}</h2>
          <ContactBlock className="mt-5" />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-4 py-6 pb-24 md:flex-row md:pb-6 md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 Mombasa Hearing Center. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-xs text-muted-foreground hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-muted-foreground">
            <a href={contact.phoneHref} className="hover:text-primary">
              {contact.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
