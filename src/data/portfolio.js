const portfolio = {
  name: "Beatriz Dantas",

  role: "Product Designer, Brand Designer & AI Products",

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
      image: "/projects/nexus.png",

      description:
        "Ecossistema para vendedores de marketplaces com automações e IA.",

      highlights: ["Branding", "UX/UI", "Design System", "AI", "Chatbot", "SaaS", "Desktop", "Mobile"],

      details: {
        overview:
          "Plataforma completa para vendedores de marketplaces. Foco na criação de ferramentas que facilitassem o dia a dia, como: gestão de pedidos, precificação inteligente, relatórios e um chatbot integrado com LLM para suporte e automação de respostas.",
   
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
      image: "/projects/nest.png",

      description:
        "Sistema interno de CRM, dashboards e gestão operacional.",

      highlights: ["CRM", "Dashboards", "UX/UI", "Data Analytics", "Desktop"],

      details: {
        overview:
          "Solução de operação interna para equipes. Dashboards analíticos, CRM integrado e ferramentas para facilitar a análise de dados e tomada de decisão. Produto exclusivo para ambiente desktop com foco em produtividade.",

        role:
          "UX/UI e estruturação de dashboards e fluxos.",

        images: [
          "/projects/nest-ops.png",
          // "/projects/nest-ops-2.png",
          "/projects/nest-ops-3.png",
        ],
      },
    },
      {
      title: "B2C Sales Plus",
      category: "Pharmaceutical Sales Platform",
      image: "/projects/b2c.png",

      description:
        "Modernização da experiência de vendas para o setor farmacêutico.",

      highlights: ["UI/UX", "Smart POS", "Retail", "Desktop", "Product Design"],

      details: {
        overview:
        "Solução utilizada por balconistas e vendedores para conduzir toda a jornada comercial, desde a pré-venda até o checkout final do consumidor.",

        role:
        "Atuei na refatoração completa da experiência do produto, melhorando usabilidade, fluxos e consistência visual para desktop e Smart POS.",

        images: [

          "/projects/b2c-3.png",
        ],
      },
    },
    {
      title: "Cosmos Pro",
      category: "Enterprise Mobile Platform",
      image: "/projects/Login Page.png",

      description:
      "Aplicativo corporativo com múltiplas funcionalidades para operações empresariais.",

      highlights: [ "Mobile",
      "UX/UI",
      "Product Design",
      "Enterprise",],

      details: {
        overview:
        "Aplicativo desenvolvido para empresas que necessitam concentrar diferentes serviços e processos em uma única experiência mobile.",

        role:
        "Responsável pela refatoração da experiência mobile, melhorias de navegação, arquitetura da informação e interface.",

        images: [
          "/projects/cosmos2.png",
          "/projects/cosmos3.png",
        ],
      },
    },
    {
    title: "MMC Web",
    category: "Procurement Intelligence Platform",
    image: "/projects/mmc.png",

    description:
      "Plataforma para apoiar decisões estratégicas de compras corporativas.",

    highlights: [
      "Procurement",
      "UX/UI",
      "Data Visualization",
      "Enterprise",
      "Desktop",
    ],

    details: {
      overview:
        "Sistema criado para apoiar equipes de compras na análise de dados e tomada de decisões estratégicas, oferecendo indicadores e ferramentas de apoio à negociação.",

      role:
        "Atuei na modernização do produto através da refatoração da interface, melhoria da experiência do usuário e reorganização dos fluxos principais.",

      images: [
        "/projects/mmc1.png",
      ],
    },
  },

    {
      title: "Design Systems",
      category: "Scalable Design System",
      image: "/projects/ds.png",

      description:
        "Sistema de design escalável com tokens, componentes e documentação.",

      highlights: ["Figma", "Tokens", "Components", "Docs", "Style Guide"],

      details: {
        overview:
          "Criação e documentação de sistemas de design — tokens, componentes, guidelines e bibliotecas reutilizáveis para garantir consistência visual e agilidade no desenvolvimento de produtos.",


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