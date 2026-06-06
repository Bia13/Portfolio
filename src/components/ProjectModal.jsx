import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const images = project.details?.images?.length
    ? project.details.images
    : [project.image];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {/* BACKDROP */}
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center p-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* MODAL */}
        <motion.div
          className="
            bg-zinc-950
            border border-zinc-800
            rounded-3xl
            w-full max-w-6xl
            h-[85vh]
            overflow-hidden
            flex
          "
          initial={{ scale: 0.96, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.96, y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >

          <div className="w-1/2 bg-black relative group">
            <img
              src={images[index]}
              className="w-full h-full object-cover"
            />

            {/* LEFT ARROW */}
            <button
              onClick={() => setIndex((index - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-black p-2 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
            >
              ←
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() => setIndex((index + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-black p-2 rounded-full transition opacity-0 group-hover:opacity-100 z-10"
            >
              →
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT - CONTENT SCROLL */}
          <div className="w-1/2 overflow-y-auto p-10 space-y-6">

            {/* HEADER */}
            <div>
              <span className="text-zinc-500 uppercase text-sm">
                {project.category}
              </span>

              <h2 className="text-4xl font-bold mt-2">
                {project.title}
              </h2>

              <p className="text-zinc-400 mt-4">
                {project.description}
              </p>
            </div>

            {/* SECTIONS */}
            <Section title="Overview">
              {project.details?.overview}
            </Section>

            <Section title="Problem">
              {project.details?.problem}
            </Section>

            <Section title="Process">
              {project.details?.process}
            </Section>

            <Section title="Solution">
              {project.details?.solution}
            </Section>

            <Section title="Impact">
              {project.details?.impact}
            </Section>

            <Section title="Role">
              {project.details?.role}
            </Section>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 pt-4">
              {project.highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs"
                >
                  {h}
                </span>
              ))}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Section({ title, children }) {
  if (!children) return null;

  return (
    <div>
      <h4 className="text-white font-semibold mb-2">
        {title}
      </h4>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {children}
      </p>
    </div>
  );
}