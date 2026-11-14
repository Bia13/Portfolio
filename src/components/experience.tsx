import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { EASE, Reveal, SectionHeader } from "./ui";

// ── Data ─────────────────────────────────────────────────────────────────────

const experiences = [
  {
    company: "Procfit",
    role: "Product Designer Pleno",
    period: "Jan 2026 — Atual",
    current: true,
    description: [
      "Definição e evolução da identidade visual e Design System dos produtos",
      "Atuação end-to-end em UI/UX mobile, do discovery à entrega, com foco em soluções intuitivas e centradas no usuário",
      "Condução de pesquisas qualitativas e quantitativas",
      "Mapeamento e otimização de jornadas, melhorando usabilidade e eficiência das interfaces",
      "Redesign e evolução contínua dos produtos, garantindo consistência e qualidade da experiência",
    ],
    translations: {
      en: {
        role: "Product Designer (Mid-level)",
        period: "Jan 2026 — Present",
        description: [
          "Defining and evolving the products' visual identity and Design System",
          "End-to-end UI/UX mobile work, from discovery to delivery, focused on intuitive, user-centered solutions",
          "Conducting qualitative and quantitative research",
          "Mapping and optimizing journeys, improving interface usability and efficiency",
          "Ongoing product redesign and evolution, ensuring consistency and quality of the experience",
        ],
      },
      es: {
        role: "Product Designer (Nivel intermedio)",
        period: "Ene 2026 — Actual",
        description: [
          "Definición y evolución de la identidad visual y el Design System de los productos",
          "Trabajo end-to-end en UI/UX móvil, desde el discovery hasta la entrega, con foco en soluciones intuitivas y centradas en el usuario",
          "Conducción de investigaciones cualitativas y cuantitativas",
          "Mapeo y optimización de recorridos, mejorando la usabilidad y eficiencia de las interfaces",
          "Rediseño y evolución continua de los productos, garantizando consistencia y calidad de la experiencia",
        ],
      },
    },
  },
  {
    company: "Mamba Digital",
    role: "Assistente UI/UX Designer",
    period: "Jul 2025 — Jan 2026",
    description: [
      "Responsável pela criação de interfaces, protótipos interativos e fluxos de navegação",
      "Estruturação de design systems do zero, garantindo padronização, escalabilidade e alinhamento com desenvolvimentos",
      "Colaboração com produto e desenvolvimento na definição e entrega das soluções",
      "Apoio em pesquisas de usuário, testes de usabilidade e análise de métricas para otimização contínua das interfaces",
      "Atuação integrada com desenvolvimento (dailys, handoff e validação técnica de protótipos), reduzindo retrabalho e ciclos de ajuste",
    ],
    translations: {
      en: {
        role: "UI/UX Design Assistant",
        period: "Jul 2025 — Jan 2026",
        description: [
          "Responsible for creating interfaces, interactive prototypes and navigation flows",
          "Structuring design systems from scratch, ensuring standardization, scalability and alignment with development",
          "Collaborating with product and development teams to define and deliver solutions",
          "Supporting user research, usability testing and metrics analysis for continuous interface optimization",
          "Working closely with development (dailies, handoff and technical validation of prototypes), reducing rework and adjustment cycles",
        ],
      },
      es: {
        role: "Asistente de Diseño UI/UX",
        period: "Jul 2025 — Ene 2026",
        description: [
          "Responsable de la creación de interfaces, prototipos interactivos y flujos de navegación",
          "Estructuración de design systems desde cero, garantizando estandarización, escalabilidad y alineación con desarrollo",
          "Colaboración con producto y desarrollo en la definición y entrega de las soluciones",
          "Apoyo en investigaciones de usuario, pruebas de usabilidad y análisis de métricas para la optimización continua de las interfaces",
          "Trabajo integrado con desarrollo (dailies, handoff y validación técnica de prototipos), reduciendo retrabajo y ciclos de ajuste",
        ],
      },
    },
  },
  {
    company: "Mamba Digital",
    role: "Auxiliar em Design Gráfico e Front-end",
    period: "Jan 2025 — Jun 2025",
    description: [
      "Criação de peças para marketplaces e páginas de produto",
      "Implementação front-end com HTML, CSS, JavaScript, React e Tailwind",
      "Apoio em melhorias de interfaces e experiência do usuário",
    ],
    translations: {
      en: {
        role: "Graphic Design & Front-end Assistant",
        period: "Jan 2025 — Jun 2025",
        description: [
          "Creating assets for marketplaces and product pages",
          "Front-end implementation with HTML, CSS, JavaScript, React and Tailwind",
          "Supporting interface and user experience improvements",
        ],
      },
      es: {
        role: "Asistente de Diseño Gráfico y Front-end",
        period: "Ene 2025 — Jun 2025",
        description: [
          "Creación de piezas para marketplaces y páginas de producto",
          "Implementación front-end con HTML, CSS, JavaScript, React y Tailwind",
          "Apoyo en mejoras de interfaces y experiencia de usuario",
        ],
      },
    },
  },
  {
    company: "Mamba Digital",
    role: "Estagiária em Design Gráfico",
    period: "Set 2024 — Jan 2025",
    description: [
      "Criação de peças para marketplaces",
      "Design gráfico e identidade visual",
    ],
    translations: {
      en: {
        role: "Graphic Design Intern",
        period: "Sep 2024 — Jan 2025",
        description: [
          "Creating assets for marketplaces",
          "Graphic design and visual identity",
        ],
      },
      es: {
        role: "Pasante de Diseño Gráfico",
        period: "Sep 2024 — Ene 2025",
        description: [
          "Creación de piezas para marketplaces",
          "Diseño gráfico e identidad visual",
        ],
      },
    },
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

type Experience = (typeof experiences)[0];

// a timeline horizontal só liga em telas largas e altas o bastante para caber
const HORIZONTAL_QUERY = "(min-width: 1024px) and (min-height: 660px)";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

function useLocalized(exp: Experience) {
  const { locale } = useLanguage();
  const localized = exp.translations?.[locale as "en" | "es"];
  return {
    role: localized?.role ?? exp.role,
    period: localized?.period ?? exp.period,
    description: localized?.description ?? exp.description,
  };
}

function CurrentBadge() {
  const { t } = useLanguage();
  return (
    <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line bg-paper-2 px-3 py-1.5 text-ink-2">
      <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
      {t.experience.currentLabel}
    </span>
  );
}

// ── Lista vertical (celular, telas baixas e movimento reduzido) ───────────────

function ExperienceRow({ exp, index }: { exp: Experience; index: number }) {
  const { role, period, description } = useLocalized(exp);

  return (
    <Reveal delay={index * 0.06}>
      <article className="grid gap-x-6 gap-y-5 border-t border-line py-[clamp(28px,4vw,48px)] lg:grid-cols-[25.5%_1fr_1fr]">
        <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-start">
          <p className="eyebrow text-ink-2">{period}</p>
          {exp.current && <CurrentBadge />}
        </div>

        <div className="lg:pl-6">
          <h3 className="display text-[clamp(1.6rem,3vw,2.125rem)] leading-[1.02] tracking-[-0.04em] text-ink">
            {role}
          </h3>
          <p className="serif-i mt-2 text-2xl text-ink-2">{exp.company}</p>
        </div>

        <ul className="space-y-2.5">
          {description.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-[1.55] text-ink-2">
              <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-coral" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

// ── Timeline horizontal (a seção fixa e a trilha anda de lado) ────────────────

const inViewport = { once: true, margin: "0px -22% 0px -22%" } as const;

function Milestone({ exp, index }: { exp: Experience; index: number }) {
  const { t } = useLanguage();
  const { role, period, description } = useLocalized(exp);
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="relative grid h-full w-[480px] shrink-0 grid-rows-2 pl-8">
      {/* haste vertical: cresce do centro para cima e para baixo */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px origin-center bg-on-night/25"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={inViewport}
        transition={{ duration: 1.1, ease: EASE }}
      />
      {/* ponto sobre a linha */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-1/2 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={inViewport}
        transition={{ duration: 0.5, ease: EASE }}
      />

      {/* acima da linha: quando, cargo e empresa */}
      <motion.div
        className="flex flex-col justify-end pb-7"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewport}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      >
        <p className="eyebrow flex flex-wrap items-center gap-3 text-on-night-2">
          <span className="text-coral">{number}</span>
          <span>{period}</span>
          {exp.current && (
            <span className="inline-flex items-center gap-2 rounded-full bg-coral px-3 py-1.5 text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
              {t.experience.currentLabel}
            </span>
          )}
        </p>
        <h3 className="display mt-4 text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.02] tracking-[-0.04em] text-on-night">
          {role}
        </h3>
        <p className="serif-i mt-1.5 text-2xl text-on-night-2">{exp.company}</p>
      </motion.div>

      {/* abaixo da linha: o que foi feito */}
      <motion.ul
        className="space-y-2 pt-7"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inViewport}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
      >
        {description.map((item) => (
          <li key={item} className="flex gap-3 text-[13.5px] leading-[1.5] text-on-night-2">
            <span className="mt-[0.62rem] h-px w-3 shrink-0 bg-coral" aria-hidden="true" />
            {item}
          </li>
        ))}
      </motion.ul>
    </li>
  );
}

function HorizontalTimeline() {
  const { t } = useLanguage();
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // quanto a trilha precisa andar = largura dela menos a largura da tela
  const [distance, setDistance] = useState(0);
  const distanceMV = useMotionValue(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const d = Math.max(0, track.scrollWidth - window.innerWidth);
      setDistance(d);
      distanceMV.set(d);
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [distanceMV]);

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  const x = useTransform([scrollYProgress, distanceMV], ([p, d]: number[]) => -p * d);
  const lineScale = useTransform(scrollYProgress, [0, 0.92], [0.08, 1]);

  // começa pela experiência atual e volta no tempo, da esquerda para a direita
  const items = experiences;
  const firstYear = items[items.length - 1].period.match(/\d{4}/)?.[0];

  return (
    // a altura extra é o "trilho" de rolagem: cada px rolado anda 1px de lado
    <div ref={wrapRef} className="relative z-10" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen items-end overflow-hidden px-2 pb-3 pt-[84px] sm:px-3">
        <div className="panel relative flex h-full max-h-[720px] w-full items-center overflow-hidden lg:rounded-[36px]">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="relative flex h-[min(100%,620px)] w-max items-stretch pl-[clamp(20px,4vw,48px)] pr-[18vw] will-change-transform"
          >
            {/* abertura da trilha */}
            <div className="grid w-[300px] shrink-0 grid-rows-2 pr-10">
              <p className="eyebrow self-end pb-7 text-on-night-2">{t.experience.label}</p>
              <p className="display pt-7 text-[clamp(2rem,3.4vw,3rem)] text-on-night">
                {t.experience.currentLabel} —<br />
                <span className="serif-i text-[1.08em]">{firstYear}</span>
              </p>
            </div>

            {/* linha do tempo: desenha conforme a rolagem */}
            <div className="relative flex">
              <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line-night" />
              <motion.div
                aria-hidden="true"
                style={{ scaleX: lineScale }}
                className="absolute inset-x-0 top-1/2 h-px origin-left -translate-y-1/2 bg-coral"
              />

              <ol className="relative flex gap-16">
                {items.map((exp, i) => (
                  <Milestone key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function Experience() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const roomy = useMediaQuery(HORIZONTAL_QUERY);
  const horizontal = roomy && !reduce;

  return (
    <section id="experience" className="section relative">
      <div className="shell">
        <SectionHeader
          index="04"
          label={t.experience.label}
          line1={t.experience.titleLine1}
          line2={t.experience.titleLine2}
        />

        {!horizontal && (
          <div className="border-b border-line">
            {experiences.map((exp, i) => (
              <ExperienceRow key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
            ))}
          </div>
        )}
      </div>

      {horizontal && <HorizontalTimeline />}
    </section>
  );
}
