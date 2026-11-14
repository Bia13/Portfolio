import type { ComponentType } from "react";
import { SiHtml5, SiTailwindcss, SiReact, SiN8N, SiFigma, SiCanva } from "react-icons/si";
import { BiLogoAdobe } from "react-icons/bi";
import { Clapperboard, Database } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Reveal, SectionHeader } from "./ui";

const LEVELS = {
  nativo:        { dots: 5 },
  profissional:  { dots: 5 },
  avançado:      { dots: 4 },
  intermediário: { dots: 3 },
  básico:        { dots: 2 },
} as const;

type Level = keyof typeof LEVELS;

interface Skill {
  name?: string;
  /** logo da ferramenta (ou ícone genérico quando não existe logo no pacote) */
  icon?: ComponentType<{ className?: string }>;
  langKey?: "pt" | "en" | "es";
  level: Level;
}

type CategoryLabel = "tech" | "design" | "languages";

interface Category {
  label: CategoryLabel;
  items: Skill[];
}

const categories: Category[] = [
  {
    label: "tech",
    items: [
      { icon: SiHtml5, name: "HTML & CSS",           level: "avançado"      },
      { icon: SiTailwindcss, name: "Tailwind CSS",         level: "avançado"      },
      { icon: SiReact, name: "React / React Native", level: "intermediário" },
      { icon: SiN8N, name: "N8N",                  level: "básico"        },
      { icon: Database, name: "SQL",                  level: "básico"        },
    ],
  },
  {
    label: "design",
    items: [
      { icon: SiFigma, name: "Figma",       level: "profissional" },
      { icon: BiLogoAdobe, name: "Adobe Suite", level: "avançado"     },
      { icon: SiCanva, name: "Canva",       level: "avançado"     },
      { icon: Clapperboard, name: "Capcut",      level: "avançado"     },
    ],
  },
  {
    label: "languages",
    items: [
      { langKey: "pt", level: "nativo"       },
      { langKey: "en", level: "avançado" },
      { langKey: "es", level: "básico"       },
    ],
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function SkillRow({ name, icon: Icon, langKey, level }: Skill) {
  const { t } = useLanguage();
  const dots = LEVELS[level].dots;
  const label = t.about.levelLabels[level];
  const displayName = langKey ? t.about.languageNames[langKey] : name;

  return (
    <li className="flex items-center justify-between gap-4 border-t border-line-night py-4">
      <div className="flex min-w-0 items-center gap-3.5">
        {/* logo em uma cor só; idiomas usam a sigla no lugar de bandeira */}
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-night-3 text-on-night"
        >
          {Icon ? (
            <Icon className="h-[18px] w-[18px]" />
          ) : (
            <span className="eyebrow text-[11px]">{langKey}</span>
          )}
        </span>
        <div className="min-w-0">
          <p className="text-[17px] font-medium tracking-[-0.02em] text-on-night">{displayName}</p>
          <p className="eyebrow mt-1 text-[10px] text-on-night-2">{label}</p>
        </div>
      </div>

      <div className="flex shrink-0 gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-4 w-1.5 rounded-full ${i < dots ? "bg-on-night" : "bg-on-night/15"}`}
          />
        ))}
      </div>
    </li>
  );
}

function CategoryBlock({ cat, catIndex }: { cat: Category; catIndex: number }) {
  const { t } = useLanguage();

  return (
    <Reveal delay={catIndex * 0.08}>
      <h3 className="eyebrow flex items-center gap-3 pb-5 text-on-night-2">
        <span className="text-coral">{String.fromCharCode(65 + catIndex)}.</span>
        {t.about.categories[cat.label]}
      </h3>
      <ul>
        {cat.items.map((skill) => (
          <SkillRow key={skill.name ?? skill.langKey} {...skill} />
        ))}
      </ul>
    </Reveal>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section relative">
      <div className="shell">
        <SectionHeader index="01" label={t.about.label} line1={t.about.titleLine1} line2={t.about.titleLine2} />

        <div className="grid gap-8 lg:grid-cols-[25.5%_1fr]">
          <span className="hidden lg:block" aria-hidden="true" />
          <div className="lg:pl-6">
            <Reveal>
              <p className="max-w-[34ch] text-[clamp(1.35rem,2.5vw,2.125rem)] font-medium leading-[1.2] tracking-[-0.035em] text-ink">
                {t.about.bio1}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[58ch] text-[15.5px] leading-[1.6] text-ink-2">{t.about.bio2}</p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* habilidades em painel escuro */}
      <div className="relative z-10 mt-[clamp(56px,8vw,104px)] px-2 sm:px-3">
        <div className="panel mx-auto grid max-w-[1400px] gap-x-12 gap-y-12 p-[clamp(20px,4vw,48px)] md:grid-cols-3 lg:rounded-[36px]">
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.label} cat={cat} catIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
