import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Reveal, RollButton } from "./ui";

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    { label: t.contact.email, value: "biafranciscodantas@gmail.com", href: "mailto:biafranciscodantas@gmail.com" },
    { label: t.contact.linkedin, value: "linkedin.com/in/dantasbia", href: "https://linkedin.com/in/dantasbia" },
    { label: t.contact.behance, value: "behance.net/dantasbia", href: "https://behance.net/dantasbia" },
    { label: t.contact.github, value: "github.com/bia13", href: "https://github.com/bia13" },
  ];

  return (
    <section id="contact" className="relative z-10 px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="panel mx-auto max-w-[1400px] p-[clamp(20px,4vw,48px)] lg:rounded-[36px]">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-on-night-2">
            <span className="h-px w-8 bg-coral" aria-hidden="true" />
            <span>05</span>
            <span>{t.contact.label}</span>
          </p>

          <h2 className="display mt-6 text-[clamp(2.75rem,9.5vw,8.5rem)]">
            {t.contact.titleLine1}
            <br />
            <span className="serif-i text-[1.08em]">{t.contact.titleLine2}</span>
          </h2>

          <span className="mt-[clamp(24px,4vw,48px)] block h-[2px] w-full bg-coral" aria-hidden="true" />
        </Reveal>

        <div className="mt-[clamp(32px,5vw,64px)] grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-[30ch] text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.2] tracking-[-0.03em]">
              {t.contact.description}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="border-b border-line-night">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 border-t border-line-night py-5 transition-colors duration-200 hover:text-coral"
                  >
                    <span className="min-w-0">
                      <span className="eyebrow block text-on-night-2">{link.label}</span>
                      <span className="mt-1 block truncate text-[17px] font-medium tracking-[-0.02em]">
                        {link.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <footer className="mt-[clamp(48px,7vw,96px)] flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow text-on-night-2">© {new Date().getFullYear()} Beatriz Dantas</p>
          <RollButton
            variant="ghost"
            turn={false}
            icon={<ArrowUp />}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t.contact.backToTop}
          </RollButton>
        </footer>
      </div>
    </section>
  );
}
