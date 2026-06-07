import { motion } from "framer-motion";
import {
  SiFigma, SiReact, SiTypescript, SiJavascript,
  SiHtml5, SiCss, SiTailwindcss, SiGithub, SiJira, SiNotion,
} from "react-icons/si";

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Data ──────────────────────────────────────────────────────────────────────

const skills = [
  { name: "Figma",      Icon: SiFigma,      color: "#F24E1E", category: "Design"      },
  { name: "React",      Icon: SiReact,      color: "#61DAFB", category: "Dev"         },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", category: "Dev"         },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", category: "Dev"         },
  { name: "HTML",       Icon: SiHtml5,      color: "#E34F26", category: "Dev"         },
  { name: "CSS",        Icon: SiCss,        color: "#1572B6", category: "Dev"         },
  { name: "Tailwind",   Icon: SiTailwindcss,color: "#38B2AC", category: "Dev"         },
  { name: "GitHub",     Icon: SiGithub,     color: "#ffffff", category: "Workflow"    },
  { name: "Jira",       Icon: SiJira,       color: "#0052CC", category: "Workflow"    },
  { name: "Notion",     Icon: SiNotion,     color: "#ffffff", category: "Workflow"    },
];

const floatingSkills = [
  { ...skills[0], style: { top: "8%",    left: "10%"  }, delay: 0.0 },
  { ...skills[1], style: { top: "5%",    right: "14%" }, delay: 0.15 },
  { ...skills[2], style: { top: "36%",   left: "4%"   }, delay: 0.3 },
  { ...skills[3], style: { top: "24%",   right: "8%"  }, delay: 0.45 },
  { ...skills[4], style: { bottom: "22%",left: "14%"  }, delay: 0.6 },
  { ...skills[5], style: { bottom: "20%",right: "10%" }, delay: 0.75 },
  { ...skills[6], style: { top: "56%",   left: "42%"  }, delay: 0.9 },
  { ...skills[7], style: { bottom: "6%", left: "52%"  }, delay: 1.05 },
];

const categories = ["Design", "Dev", "Workflow"] as const;

// ── Sub-components ────────────────────────────────────────────────────────────

function SkillPill({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const { Icon, name, color } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.05 }}
      className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-zinc-900 p-4 transition-colors duration-300 hover:border-white/16"
    >
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/8 bg-zinc-800 transition-colors duration-300 group-hover:border-white/14"
      >
        <Icon className="h-4 w-4" style={{ color }} />
      </div>
      <span
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-sm font-medium text-zinc-300"
      >
        {name}
      </span>
    </motion.div>
  );
}

function FloatingOrb() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-0 top-16 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl"
      />
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-white/30" />
            <div className="h-px w-3 bg-white/10" />
          </div>

          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
          >
            Skills
          </span>

          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.0 }}
            className="mt-3 text-5xl md:text-6xl font-semibold text-white"
          >
            Ferramentas e
            <br />
            <span className="italic font-light text-zinc-400">tecnologias.</span>
          </h2>
        </motion.div>

        {/* Body */}
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] items-start">

          {/* Left — grouped skill list */}
          <div className="space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[0.9375rem] leading-relaxed text-zinc-400 font-light max-w-lg"
            >
              Principais tecnologias e ferramentas que uso no meu fluxo de trabalho — do conceito à entrega.
            </motion.p>

            {categories.map((cat) => {
              const group = skills.filter((s) => s.category === cat);
              return (
                <div key={cat}>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: EASE }}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-600"
                  >
                    {cat}
                  </motion.p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {group.map((skill, i) => (
                      <SkillPill key={skill.name} skill={skill} index={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — floating icons panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="relative h-[440px] overflow-hidden rounded-[2rem] border border-white/8 bg-zinc-950"
          >
            <FloatingOrb />

            {/* dot grid texture */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative h-full">
              {floatingSkills.map(({ name, Icon, color, style, delay }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay }}
                  animate={{ y: [0, -7, 0] }}
                  // @ts-ignore — animate + whileInView coexist fine at runtime
                  whileHover={{ scale: 1.12, y: -10 }}
                  className="absolute flex h-16 w-16 flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-zinc-900/90 shadow-xl shadow-black/50 backdrop-blur-sm cursor-default"
                  style={{
                    ...style,
                    // individual float timing
                    animation: `float-${name} ${3.5 + delay}s ease-in-out infinite`,
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color }} />
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[9px] font-medium text-zinc-500 leading-none"
                  >
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

