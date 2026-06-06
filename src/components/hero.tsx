import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SiFigma } from "react-icons/si";
import heroPhoto from "../assets/hero.png";

const rotatingTitles = [
  "Product Designer",
  "UX Engineer",
  "Front-end Developer",
];

const floatingIcons = [
  { id: 1, top: "8%", left: "12%", delay: 0 },
  { id: 2, top: "14%", right: "8%", delay: 0.4 },
  { id: 3, bottom: "10%", left: "16%", delay: 0.8 },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((current) => (current + 1) % rotatingTitles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-zinc-950" />
      <div
  className="
    absolute
    top-1/2
    right-20
    -translate-y-1/2
    h-[500px]
    w-[500px]
    rounded-full
    bg-white/5
    blur-3xl
  "
/>

      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <div>
            <div className="text-zinc-400 text-base inline-flex h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingTitles[titleIndex]}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="block"
                >
                  {rotatingTitles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center gap-8">
              <div>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
                  Beatriz
                  <br />
                  Dantas
                </h1>

                <p className="max-w-xl mt-8 text-zinc-400 text-base leading-relaxed">
                  Transformando processos complexos em produtos digitais intuitivos, escaláveis e orientados a resultados.
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <button
                    onClick={() => {
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
                  >
                    Ver Projetos
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => {
                      document
                        .getElementById("about")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                    className="inline-flex items-center px-6 py-3 rounded-full border border-white text-white font-medium hover:scale-105 transition"
                  >
                    Sobre Mim
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <img
                src={heroPhoto}
                alt="Foto da Beatriz"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 shadow-[0_25px_60px_rgba(236,72,153,0.35)]"
              />
            </div>

            <div className="absolute inset-0 pointer-events-none">
              {floatingIcons.map(({ id, delay, ...pos }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay }}
                  className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-lg shadow-black/40"
                  style={pos}
                >
                  <SiFigma className="h-6 w-6 text-[#F24E1E]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}