const portfolio = {
  name: "Beatriz Dantas",

  role: "Product Designer, Brand Designer & Front-end Developer",

  description:
    "Construindo produtos digitais de ponta a ponta através de pesquisa, estratégia, design systems e desenvolvimento front-end.",

  about: `
Product Designer e Front-end Developer especializada na construção de produtos digitais de ponta a ponta.

Atuo desde a definição estratégica, naming e branding até UX, Design Systems e implementação front-end.

Nos últimos projetos liderei a criação de plataformas SaaS, ferramentas para marketplaces, sistemas internos e experiências com inteligência artificial aplicada.
  `,

  socials: {
    linkedin: "https://www.linkedin.com/in/dantasbia/",
    behance: "https://www.behance.net/dantasbia",
    github: "https://github.com/Bia13",
  },

  projects: [
    {
      title: "Mamba Nexus",
      category: "AI Marketplace Platform",
      image: "/projects/mamba-nexus.png",

      description:
        "Ecossistema para vendedores de marketplaces com automações e IA.",

      highlights: ["Branding", "UX/UI", "Design System", "AI", "Front-end"],

      details: {
        overview:
          "Plataforma centralizada para vendedores de marketplace com automações e assistente IA.",

        problem:
          "Vendedores operavam múltiplas ferramentas desconectadas para tarefas diárias.",

        process:
          "Pesquisa com usuários, mapeamento de fluxos e criação de design system escalável.",

        solution:
          "Unificação de operações em um sistema com IA e automações inteligentes.",

        impact:
          "Redução significativa do tempo operacional e aumento de eficiência dos vendedores.",

        role:
          "Responsável por branding, UX, UI, design system e front-end.",

        images: [
          "/projects/mamba-nexus.png",
          "/projects/mamba-nexus-2.png",
          "/projects/mamba-nexus-3.png",
        ],
      },
    },

    {
      title: "Nest Ops",
      category: "Internal Operations Platform",
      image: "/projects/nest-ops.png",

      description:
        "Sistema interno de CRM, dashboards e gestão operacional.",

      highlights: ["CRM", "Dashboards", "UX/UI", "Data Viz"],

      details: {
        overview:
          "Plataforma interna para gestão operacional e comercial.",

        problem:
          "Falta de centralização de dados e processos internos fragmentados.",

        process:
          "Arquitetura de informação, definição de KPIs e design de dashboards.",

        solution:
          "Sistema unificado com CRM, calendário e dashboards analíticos.",

        impact:
          "Melhoria na tomada de decisão e eficiência operacional.",

        role:
          "UX/UI e estruturação de dashboards e fluxos.",

        images: [
          "/projects/nest-ops.png",
          "/projects/nest-ops-2.png",
          "/projects/nest-ops-3.png",
        ],
      },
    },

    {
      title: "Design Systems",
      category: "Scalable Design System",
      image: "/projects/design-system.png",

      description:
        "Sistema de design escalável com tokens, componentes e documentação.",

      highlights: ["Figma", "Tokens", "Components", "Docs"],

      details: {
        overview:
          "Sistema de design para múltiplos produtos e times.",

        problem:
          "Inconsistência visual e retrabalho entre produtos.",

        process:
          "Criação de tokens, componentes e guidelines reutilizáveis.",

        solution:
          "Design system modular e escalável com documentação clara.",

        impact:
          "Aumento de velocidade de desenvolvimento e consistência visual.",

        role:
          "Criação do sistema de design e documentação.",

        images: [
          "/projects/design-system.png",
          "/projects/design-system-2.png",
          "/projects/design-system-3.png",
        ],
      },
    },
  ],
};

export default portfolio;