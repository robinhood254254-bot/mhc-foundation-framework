import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "sw";

const dict: Record<Lang, Record<string, string>> = {
  en: {},
  sw: {
    Home: "Nyumbani",
    About: "Kuhusu",
    Services: "Huduma",
    "Hearing Aids": "Vifaa vya Kusikia",
    "Hearing Test": "Kipimo cha Kusikia",
    "Hearing Education": "Elimu ya Kusikia",
    Contact: "Wasiliana",
    Testimonials: "Ushuhuda",
    "Book an Appointment": "Weka Miadi",
    "Talk to Our Team": "Ongea na Timu Yetu",
    "Take a Hearing Test": "Fanya Kipimo cha Kusikia",
    "Quick Links": "Viungo vya Haraka",
    "Contact Details": "Mawasiliano",
    "Opening Hours": "Saa za Kazi",
    "Call us": "Tupigie simu",
    WhatsApp: "WhatsApp",
    Email: "Barua pepe",
    Menu: "Menyu",
    Close: "Funga",
    Accessibility: "Ufikivu",
    Language: "Lugha",
    "Text size": "Ukubwa wa maandishi",
    "High contrast": "Utofautishaji wa juu",
    "Reduced motion": "Punguza mwendo",
    "Readable spacing": "Nafasi rahisi kusoma",
    Theme: "Mandhari",
    Light: "Mwanga",
    Dark: "Giza",
    Reset: "Rejesha",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };

const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("mhc-lang");
    if (stored === "sw" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        window.localStorage.setItem("mhc-lang", l);
      },
      t: (key) => dict[lang][key] ?? key,
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
