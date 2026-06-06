import { motion } from "framer-motion";
import {
  SiFigma,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGithub,
  SiJira,
  SiNotion,
} from "react-icons/si";

const skills = [
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss, color: "text-[#1572B6]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "Jira", icon: SiJira, color: "text-[#0052CC]" },
  { name: "Notion", icon: SiNotion, color: "text-white" },
];

const logoCloud = [
  { ...skills[0], position: { top: "8%", left: "12%" } },
  { ...skills[1], position: { top: "4%", right: "10%" } },
  { ...skills[2], position: { top: "34%", left: "6%" } },
  { ...skills[3], position: { top: "22%", right: "10%" } },
  { ...skills[4], position: { bottom: "10%", left: "16%" } },
  { ...skills[5], position: { bottom: "16%", right: "18%" } },
  { ...skills[6], position: { top: "52%", left: "44%" } },
  { ...skills[7], position: { bottom: "6%", left: "50%" } },
];

export default function Skills() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <span className="text-zinc-500 uppercase">
          Skills
        </span>

        <h2 className="text-5xl font-bold mt-4 mb-12">
          Ferramentas e Tecnologias
        </h2>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="space-y-6">
            <p className="max-w-2xl text-zinc-400 leading-relaxed">
              Aqui estão algumas das principais tecnologias e ferramentas que uso no meu fluxo. 
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all"
                  >
                    <Icon size={24} className={skill.color} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 shadow-[0_40px_120px_rgba(15,23,42,0.45)]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob" />
              <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-blob delay-2000" />
              <div className="absolute left-1/2 bottom-0 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl animate-blob delay-4000" />
            </div>

            <div className="relative h-full">
              {logoCloud.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 24, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ y: -6, scale: 1.08 }}
                    className="absolute flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-zinc-950/90 shadow-lg shadow-black/30"
                    style={skill.position}
                  >
                    <Icon className={`${skill.color} h-8 w-8`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}