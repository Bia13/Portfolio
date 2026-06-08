"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiFigma, SiReact, SiTailwindcss } from "react-icons/si";
import { Layers } from "lucide-react";


const roles = ["Product Designer", "UX Engineer", "Front-end Developer"];

const stats = [
  { value: "5+",  label: "anos de experiência" },
  { value: "35+", label: "projetos entregues"   },
  { value: "B2B", label: "SaaS & Marketplaces"  },
];

const floatingIcons = [
  { id: 1, Icon: SiFigma,       color: "#F24E1E", style: { top: "7%",    left: "5%"  }, delay: 0.0 },
  { id: 2, Icon: SiReact,       color: "#61DAFB", style: { top: "20%",   right: "3%" }, delay: 0.6 },
  { id: 3, Icon: SiTailwindcss, color: "#38BDF8", style: { bottom: "24%",right: "5%" }, delay: 1.1 },
  { id: 4, Icon: Layers,        color: "#c4b5fd", style: { bottom: "9%", left: "5%"  }, delay: 1.6 },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE, delay },
});

// ── Components ────────────────────────────────────────────────────────────────

function AvailableBadge() {
  return (
    <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2.5 mb-8">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-xs font-medium tracking-[0.18em] uppercase text-zinc-400"
      >
        Disponível para projetos
      </span>
    </motion.div>
  );
}

function RoleTag({ index }: { index: number }) {
  return (
    <div className="h-6 overflow-hidden mb-6">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{    y: -24, opacity: 0 }}
          transition={{ duration: 0.38, ease: "easeInOut" }}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="block text-xs tracking-[0.22em] uppercase text-zinc-500 font-medium"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function Headline() {
  return (
    <motion.div {...fadeUp(0.25)}>
      <div className="flex items-center gap-4 mb-5">
        <div className="h-px w-12 bg-white/30" />
        <div className="h-px w-3 bg-white/10" />
      </div>

      <h1
        style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 0.92 }}
        className="text-[clamp(4.5rem,11vw,8.5rem)] font-semibold tracking-tight text-white"
      >
        Beatriz
        <br />
        <span className="italic font-light text-zinc-400">Dantas</span>
      </h1>
    </motion.div>
  );
}

function Description() {
  return (
    <motion.p
      {...fadeUp(0.4)}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="mt-8 max-w-md text-[0.9375rem] leading-relaxed text-zinc-400 font-light"
    >
      Transformando processos complexos em produtos digitais intuitivos,
      escaláveis e orientados a resultados.
    </motion.p>
  );
}

function CTAButtons({ onScrollTo }: { onScrollTo: (id: string) => void }) {
  return (
    <motion.div {...fadeUp(0.52)} className="flex flex-wrap gap-3 mt-10">
      <button
        onClick={() => onScrollTo("projects")}
        className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-zinc-100 hover:scale-[1.03] active:scale-100"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Ver Projetos
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>

      <a
        href="https://www.behance.net/dantasbia"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:scale-[1.03] active:scale-100"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Behance
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

    </motion.div>
  );
}

function StatsRow() {
  return (
    <motion.div
      {...fadeUp(0.64)}
      className="mt-12 pt-10 border-t border-white/[0.07] flex gap-10"
    >
      {stats.map(({ value, label }) => (
        <div key={label}>
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-3xl font-semibold text-white leading-none"
          >
            {value}
          </p>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="mt-1.5 text-[11px] tracking-widest uppercase text-zinc-600 font-medium"
          >
            {label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

function PhotoCard() {
  const [err, setErr] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
      className="relative mx-auto w-full max-w-[400px]"
    >
      {/* corner accents */}
      <div className="absolute -top-3 -left-3 h-8 w-8 border-t border-l border-white/20" />
      <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-white/20" />

      {/* ambient glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-white/[0.03] blur-2xl" />

      {/* photo frame */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/8 bg-zinc-900 shadow-[0_48px_120px_rgba(0,0,0,0.7)]">
        {err ? (
          <div className="flex h-full w-full items-center justify-center">
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-xs text-zinc-700"
            >
              hero.png não encontrada
            </span>
          </div>
        ) : (
          <img
            src="./projects/hero.png"
            alt="Beatriz Dantas — Product Designer"
            onError={() => setErr(true)}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
          />
        )}

        {/* gradient overlay bottom */}
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
      </div>

      {/* floating tool icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ id, Icon, color, style, delay }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay, duration: 0.4 },
              scale:   { delay, duration: 0.4, type: "spring", bounce: 0.4 },
              y:       { delay, duration: 3.8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900/90 shadow-xl shadow-black/60 backdrop-blur-sm"
            style={style}
          >
            <Icon className="h-4 w-4" style={{ color }} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-white/20" />
      </motion.div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* top-right glow */}
      <div className="absolute top-0 right-0 h-[70vh] w-[50vw] bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_65%)]" />
      {/* bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-8 py-28">
        <div className="grid gap-20 lg:grid-cols-[1fr_400px] items-center">
          <div>
            <AvailableBadge />
            <RoleTag index={roleIndex} />
            <Headline />
            <Description />
            <CTAButtons onScrollTo={scrollTo} />
            <StatsRow />
          </div>
          <PhotoCard />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}