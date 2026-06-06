import { motion } from "framer-motion";
const experiences = [
  {
    company: "Procfit",
    role: "Product Designer Pleno",
    period: "Jan 2026 — Atual",
    current: true,
    description: [
      "Definição e evolução da identidade visual e Design System dos produtos",
      "Atuação end-to-end em UX/UI mobile",
      "Condução de pesquisas qualitativas e quantitativas",
      "Mapeamento e otimização de jornadas",
      "Integração com desenvolvimento",
    ],
  },

  {
    company: "Mamba Digital",
    role: "Assistente UI/UX Designer",
    period: "Jul 2025 — Jan 2026",
    description: [
      "Criação de interfaces e protótipos",
      "Estruturação de Design Systems",
      "Colaboração com produto e desenvolvimento",
    ],
  },

  {
    company: "Mamba Digital",
    role: "Auxiliar em Design Gráfico e Front-end",
    period: "Jan 2025 — Jun 2025",
    description: [
      "React",
      "Tailwind",
      "HTML",
      "CSS",
      "UX/UI",
    ],
  },

  {
    company: "Mamba Digital",
    role: "Estagiária em Design Gráfico",
    period: "Set 2024 — Jan 2025",
    description: [
      "Criação de peças para marketplaces",
      "Design gráfico",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <span className="text-zinc-500 uppercase">
          Experience
        </span>

        <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-20">
          Minha trajetória
        </h2>

        <div className="relative">

          <div
            className="
              absolute
              left-3
              top-0
              bottom-0
              w-px
              bg-zinc-800
            "
          />

          {experiences.map((exp) => (
  <motion.div
    key={`${exp.company}-${exp.role}`}
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.5,
    }}
    className="
      relative
      pl-16
      pb-16
    "
  >
    <div
      className="
        absolute
        left-0
        top-2
        h-6
        w-6
        rounded-full
        border-4
        border-zinc-950
        bg-white
      "
    />

    <div
      className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        backdrop-blur
        p-8
      "
    >
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-zinc-500">
          {exp.period}
        </span>

        {exp.current && (
          <span
            className="
              px-3
              py-1
              rounded-full
              text-xs
              bg-green-500/10
              text-green-400
            "
          >
            Atual
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold mt-3">
        {exp.role}
      </h3>

      <p className="text-zinc-400 mt-1">
        {exp.company}
      </p>

      <ul className="mt-6 space-y-2">
        {exp.description.map((item) => (
          <li
            key={item}
            className="text-zinc-400"
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
))}
        </div>

      </div>
    </section>
  );
}