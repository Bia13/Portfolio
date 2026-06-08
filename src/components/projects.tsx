import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";
import portfolio from "../data/portfolio";

// ── Types ─────────────────────────────────────────────────────────────────────

type Project = {
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
    link?: string;
    images?: string[];
  };
};

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Sub-components ────────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-500"
    >
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      aria-label={`Ver detalhes de ${project.title}`}
      className="
        group relative overflow-hidden
        rounded-3xl border border-white/8 bg-zinc-900
        cursor-pointer outline-none
        focus-visible:ring-2 focus-visible:ring-white/30
        transition-colors duration-300
        hover:border-white/16
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden h-[260px]">
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="w-full h-full object-cover"
        />

        {/* gradient over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

        {/* category pill — over image */}
        <div className="absolute top-4 left-4">
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="inline-flex items-center rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-400 backdrop-blur-sm"
          >
            {project.category}
          </span>
        </div>

        {/* arrow icon — top right, appears on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm"
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-7 pt-6 space-y-4">
        {/* title */}
        <h3
          style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}
          className="text-3xl font-semibold text-white"
        >
          {project.title}
        </h3>

        {/* description */}
        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-sm leading-relaxed text-zinc-400 font-light line-clamp-2"
        >
          {project.description}
        </p>

        {/* divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* tags + cta row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.highlights.slice(0, 3).map((h) => (
              <Tag key={h} label={h} />
            ))}
            {project.highlights.length > 3 && (
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="inline-flex items-center px-2 text-[11px] text-zinc-600"
              >
                +{project.highlights.length - 3}
              </span>
            )}
          </div>

          <motion.span
            animate={{ x: hovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="flex-shrink-0 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200 flex items-center gap-1"
          >
            Ver detalhes
            <ArrowUpRight className="h-3 w-3" />
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-white/30" />
            <div className="h-px w-3 bg-white/10" />
          </div>

          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
          >
            Projetos
          </span>

          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.0 }}
            className="text-5xl md:text-6xl font-semibold text-white mt-3 mb-16"
          >
            Produtos que
            <br />
            <span className="italic font-light text-zinc-400">construí.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolio.projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}