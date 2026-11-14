import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import portfolio from "../data/portfolio";
import { useLanguage } from "./LanguageContext";
import { RollButton, SectionHeader } from "./ui";

type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  details?: {
    overview?: string;
    problem?: string;
    solution?: string;
    role?: string;
    workReduction?: string;
    metrics?: { label: string; value: string; description: string }[];
    images?: string[];
    link?: string;
  };
  translations?: {
    [locale in "pt" | "en" | "es"]?: {
      title?: string;
      category?: string;
      description?: string;
      highlights?: string[];
      details?: {
        overview?: string;
        problem?: string;
        solution?: string;
        role?: string;
        workReduction?: string;
        metrics?: { label?: string; description?: string }[];
      };
    };
  };
};

// mesma condição do CSS de .stack-card (ver index.css)
const STACK_QUERY =
  "(min-width: 1024px) and (min-height: 680px), (max-width: 1023px) and (min-height: 760px)";

function useStackEnabled() {
  const [enabled, setEnabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia(STACK_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(STACK_QUERY);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return enabled;
}

function ProjectCard({
  project,
  index,
  total,
  progress,
  shrink,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  shrink: boolean;
  onOpen: () => void;
}) {
  const { t, locale } = useLanguage();
  const localeProject = project.translations?.[locale as "pt" | "en" | "es"] || project;
  const title = localeProject.title || project.title;
  const category = localeProject.category || project.category;
  const description = localeProject.description || project.description;
  const highlights = localeProject.highlights || project.highlights;
  const number = String(index + 1).padStart(2, "0");

  // conforme os próximos cards sobem, este encolhe um pouco e fica "atrás"
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.03]);

  return (
    <div className="stack-card" style={{ "--i": index } as CSSProperties}>
      <motion.article
        onClick={onOpen}
        style={shrink ? { scale, transformOrigin: "50% 0%" } : undefined}
        className="panel group relative grid cursor-pointer overflow-hidden shadow-[0_-24px_60px_-40px_rgba(0,0,0,0.55)] ring-1 ring-line-night lg:h-[540px] lg:grid-cols-2 lg:rounded-[36px]"
      >
        <div className="flex flex-col p-[clamp(20px,4vw,48px)]">
          <p className="eyebrow flex items-center justify-between gap-4 text-on-night-2">
            <span>{category}</span>
            <span>
              {number} / {String(total).padStart(2, "0")}
            </span>
          </p>

          <h3 className="display mt-6 text-[clamp(2.25rem,5.4vw,4rem)] text-on-night">{title}</h3>

          <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.55] text-on-night-2">{description}</p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line-night pt-5">
            {highlights.slice(0, 6).map((h) => (
              <li key={h} className="eyebrow text-on-night">
                {h}
              </li>
            ))}
            {highlights.length > 6 && (
              <li className="eyebrow text-on-night-2">+{highlights.length - 6}</li>
            )}
          </ul>

          <div className="mt-8 lg:mt-auto lg:pt-8">
            {/* o clique no botão sobe até o <article>, que abre a drawer */}
            <RollButton follow icon={<ArrowRight />}>
              {t.projects.detailsButton}
            </RollButton>
          </div>
        </div>

        <div className="relative h-[200px] overflow-hidden bg-night-3 lg:h-auto">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const listRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const stackEnabled = useStackEnabled();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });
  const total = portfolio.projects.length;

  return (
    <section id="projects" className="section relative">
      <div className="shell">
        <SectionHeader
          index="02"
          label={t.projects.label}
          line1={t.projects.titleLine1}
          line2={t.projects.titleLine2}
        />
      </div>

      <div ref={listRef} className="relative z-10 mx-auto grid max-w-[1400px] gap-4 px-2 sm:px-3">
        {portfolio.projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            total={total}
            progress={scrollYProgress}
            shrink={stackEnabled && !reduce}
            onOpen={() => navigate(`/projects/${project.slug}`, { state: { fromHome: true } })}
          />
        ))}
      </div>
    </section>
  );
}
