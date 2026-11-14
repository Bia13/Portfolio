import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const sections = [
  { id: "about", labelKey: "about" },
  { id: "projects", labelKey: "projects" },
  { id: "gallery", labelKey: "gallery" },
  { id: "experience", labelKey: "experience" },
  { id: "contact", labelKey: "contact" },
];

const locales = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const menuLabels = {
  pt: { open: "Abrir menu", close: "Fechar menu", home: "Ir para o início", lang: "Idioma" },
  en: { open: "Open menu", close: "Close menu", home: "Go to top", lang: "Language" },
  es: { open: "Abrir menú", close: "Cerrar menú", home: "Ir al inicio", lang: "Idioma" },
};

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const a11y = menuLabels[locale] || menuLabels.pt;

  const goTo = (id) => {
    setOpen(false);

    // fora da home (página de projeto), volta para ela e rola até a seção
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-4">
      <div className="mx-auto flex h-14 max-w-[1360px] items-center justify-between gap-3 rounded-full border border-line bg-paper-2/85 pl-5 pr-2 backdrop-blur-md">
        <button
          type="button"
          onClick={() => goTo("top")}
          aria-label={a11y.home}
          className="cursor-pointer text-[19px] font-semibold tracking-[-0.04em] text-ink"
        >
          {t.nav.home}
          <span className="text-coral">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => goTo(section.id)}
              className="eyebrow cursor-pointer rounded-full px-3.5 py-2 text-ink transition-colors duration-200 hover:bg-ink/[0.06]"
            >
              {t.nav[section.labelKey]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <div
            role="group"
            aria-label={a11y.lang}
            className="flex items-center rounded-full border border-line p-1"
          >
            {locales.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                aria-pressed={locale === l.code}
                className={`eyebrow cursor-pointer rounded-full px-2.5 py-1.5 transition-colors duration-200 ${
                  locale === l.code ? "bg-ink text-paper" : "text-ink-2 hover:text-ink"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? a11y.close : a11y.open}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-ink text-paper md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="panel absolute inset-x-3 top-full mt-2 p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)] sm:inset-x-4 md:hidden"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => goTo(section.id)}
              className="display block w-full cursor-pointer border-b border-line-night px-3 py-4 text-left text-3xl last:border-none"
            >
              {t.nav[section.labelKey]}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
