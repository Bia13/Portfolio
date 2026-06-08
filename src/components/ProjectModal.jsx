import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

function NavButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Imagem anterior" : "Próxima imagem"}
      className="
        absolute top-1/2 -translate-y-1/2
        flex h-9 w-9 items-center justify-center
        rounded-full border border-white/15 bg-zinc-900/80 text-white
        backdrop-blur-sm transition-all duration-200
        opacity-0 group-hover:opacity-100
        hover:bg-zinc-800 hover:border-white/30
        active:scale-95
      "
      style={{ [direction === "left" ? "left" : "right"]: "1rem" }}
    >
      {direction === "left" ? (
        <ArrowLeft className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
    </button>
  );
}

function Dots({ count, active, onSelect }) {
  if (count <= 1) return null;

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`Imagem ${i + 1}`}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === active ? "w-5 bg-white" : "w-1.5 bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + images.length) % images.length);
  };

  return (
    <div className="relative h-64 md:h-full w-full overflow-hidden bg-zinc-900 group md:rounded-l-3xl">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Imagem ${index + 1}`}
          custom={direction}
          variants={{
            enter: (d) => ({ x: d * 40, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit:  (d) => ({ x: d * -40, opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: EASE }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {images.length > 1 && (
        <>
          <NavButton direction="left"  onClick={() => go(index - 1)} />
          <NavButton direction="right" onClick={() => go(index + 1)} />
          <Dots count={images.length} active={index} onSelect={go} />
          <div className="absolute top-4 right-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] text-white/60 backdrop-blur-sm">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-400">
      {label}
    </span>
  );
}

function Section({ title, children }) {
  if (!children) return null;

  return (
    <div className="space-y-2">
      <h4
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
      >
        {title}
      </h4>
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-sm leading-relaxed text-zinc-400"
      >
        {children}
      </p>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.details?.images?.length
    ? project.details.images
    : [project.image];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <motion.div
          className="
            relative w-full max-w-6xl
            h-[90vh] md:h-[82vh]
            flex flex-col md:flex-row
            overflow-hidden
            rounded-3xl
            border border-white/8
            bg-zinc-950
            shadow-[0_48px_120px_rgba(0,0,0,0.8)]
          "
          initial={{ scale: 0.97, y: 32, opacity: 0 }}
          animate={{ scale: 1,    y: 0,  opacity: 1 }}
          exit={{    scale: 0.97, y: 32, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="
              absolute top-4 right-4 z-20
              flex h-8 w-8 items-center justify-center
              rounded-full border border-white/10 bg-zinc-900/80
              text-zinc-400 backdrop-blur-sm
              transition-all duration-200
              hover:bg-zinc-800 hover:text-white hover:border-white/20
              active:scale-95
            "
          >
            <X className="h-4 w-4" />
          </button>

          {/* Left — carousel */}
          <div className="md:w-1/2 flex-shrink-0">
            <ImageCarousel images={images} />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/[0.06] flex-shrink-0" />

          {/* Right — content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
            <div>
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
              >
                {project.category}
              </span>

              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.05 }}
                className="mt-3 text-4xl md:text-5xl font-semibold text-white"
              >
                {project.title}
              </h2>

              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="mt-4 text-[0.9375rem] leading-relaxed text-zinc-400 font-light"
              >
                {project.description}
              </p>
            </div>

            <div className="h-px bg-white/[0.06]" />

            <div className="space-y-6">
              <Section title="Overview">{project.details?.overview}</Section>
              <Section title="Meu papel">{project.details?.role}</Section>
            </div>

            {project.highlights?.length > 0 && (
              <div>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
                >
                  Tecnologias & entregas
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <Tag key={h} label={h} />
                  ))}
                </div>
              </div>
            )}

            {project.details?.link && (
              <a
                href={project.details.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-white/15 bg-white/5
                  px-5 py-2.5 text-sm font-medium text-white
                  transition-all duration-200
                  hover:bg-white/10 hover:border-white/25 hover:scale-[1.02]
                  active:scale-100
                "
              >
                Ver projeto
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}