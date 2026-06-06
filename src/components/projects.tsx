import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  details?: {
    problem: string;
    solution: string;
    role: string;
    images: string[];
  };
};

export default function Projects() {
  // 🔥 FIX PRINCIPAL: tipagem correta do state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <span className="text-zinc-500 uppercase">
          Projects
        </span>

        <h2 className="text-5xl font-bold mt-4 mb-16">
          Produtos que construí.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolio.projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)" }}
              transition={{ duration: 0.2 }}
              className="
                rounded-3xl
                overflow-hidden
                border border-zinc-800
                bg-zinc-900/50
                backdrop-blur
                hover:border-zinc-700
                transition-all
              "
            >
              <div onClick={() => setSelectedProject(project)}>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-8">

                  <span className="text-zinc-500">
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold mt-2">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mt-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="mt-6 text-sm text-zinc-300 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    Ver detalhes →
                  </button>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}