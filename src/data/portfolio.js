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
      slug: "mamba-nexus",
      title: "Mamba Nexus",
      category: "AI Marketplace Platform",
      image: "/projects/nexus.webp",

      description:
        "Ecossistema para vendedores de marketplaces com automações e IA.",

      highlights: ["Branding", "UX/UI", "Design System", "AI", "Chatbot", "SaaS", "Desktop", "Mobile"],

      details: {
        overview:
          "Plataforma completa para vendedores de marketplaces, unindo gestão operacional, automações e um assistente com IA para reduzir fricção no dia a dia. O produto foi pensado para concentrar tarefas dispersas em um único fluxo, com foco em velocidade, clareza e confiança na execução.",
        problem:
          "Os vendedores precisavam alternar entre várias ferramentas para acompanhar pedidos, ajustar precificação e responder a clientes, o que gerava retrabalho e erros manuais.",
        solution:
          "Criei uma experiência centralizada com dashboards, automações inteligentes e chat integrado, permitindo acompanhar operações e agir com mais agilidade em poucos cliques.",
        role:
          "Responsável por branding, UX, UI, design system e front-end, além da estruturação da jornada do produto.",
        workReduction:
          "Reduziu em cerca de 60% o esforço manual de rotina para os times de operação e suporte.",
        metrics: [
          { label: "Tempo de execução", value: "-60%", description: "na execução de tarefas operacionais" },
          { label: "Centralização", value: "3x", description: "mais funções em uma única experiência" },
        ],
        images: [
          "/projects/mamba-nexus.webp",
          "/projects/mamba-nexus-2.webp",
          "/projects/mamba-nexus-3.webp",
        ],
      },
      translations: {
        en: {
          title: "Mamba Nexus",
          category: "AI Marketplace Platform",
          description:
            "Ecosystem for marketplace sellers with automations and AI.",
          highlights: ["Branding", "UX/UI", "Design System", "AI", "Chatbot", "SaaS", "Desktop", "Mobile"],
          details: {
            overview:
              "A complete platform for marketplace sellers, combining operational management, automations and an AI assistant to reduce everyday friction. The product was designed to bring scattered tasks into a single flow, focused on speed, clarity and confidence in execution.",
            problem:
              "Sellers had to switch between several tools to track orders, adjust pricing and respond to customers, which created rework and manual errors.",
            solution:
              "I created a centralized experience with dashboards, smart automations and integrated chat, allowing sellers to track operations and act faster in just a few clicks.",
            role:
              "Responsible for branding, UX, UI, design system and front-end, as well as structuring the product journey.",
            workReduction:
              "Reduced routine manual effort by around 60% for the operations and support teams.",
            metrics: [
              { label: "Execution time", description: "in operational task execution" },
              { label: "Centralization", description: "more functions in a single experience" },
            ],
          },
        },
        es: {
          title: "Mamba Nexus",
          category: "AI Marketplace Platform",
          description:
            "Ecosistema para vendedores de marketplaces con automatizaciones e IA.",
          highlights: ["Branding", "UX/UI", "Design System", "AI", "Chatbot", "SaaS", "Desktop", "Mobile"],
          details: {
            overview:
              "Plataforma completa para vendedores de marketplaces, que combina gestión operativa, automatizaciones y un asistente con IA para reducir la fricción del día a día. El producto fue pensado para concentrar tareas dispersas en un único flujo, con foco en velocidad, claridad y confianza en la ejecución.",
            problem:
              "Los vendedores tenían que alternar entre varias herramientas para hacer seguimiento de pedidos, ajustar precios y responder a clientes, lo que generaba retrabajo y errores manuales.",
            solution:
              "Creé una experiencia centralizada con dashboards, automatizaciones inteligentes y chat integrado, permitiendo hacer seguimiento de las operaciones y actuar con más agilidad en pocos clics.",
            role:
              "Responsable de branding, UX, UI, design system y front-end, además de estructurar el recorrido del producto.",
            workReduction:
              "Redujo en cerca de un 60% el esfuerzo manual de rutina para los equipos de operaciones y soporte.",
            metrics: [
              { label: "Tiempo de ejecución", description: "en la ejecución de tareas operativas" },
              { label: "Centralización", description: "más funciones en una única experiencia" },
            ],
          },
        },
      },
    },

    {
      slug: "nest-ops",
      title: "Nest Ops",
      category: "Internal Operations Platform",
      image: "/projects/nest.webp",

      description:
        "Sistema interno de CRM, dashboards e gestão operacional.",

      highlights: ["CRM", "Dashboards", "UX/UI", "Data Analytics", "Desktop"],

      details: {
        overview:
          "Solução de operação interna para equipes, reunindo dashboards analíticos, CRM e fluxos de acompanhamento para facilitar a análise de dados e tomada de decisão. O foco principal foi transformar informações dispersas em uma interface mais objetiva para o dia a dia da operação.",
        problem:
          "A equipe precisava lidar com dados fragmentados e muitas telas para acompanhar clientes e indicadores, o que impactava a velocidade de resposta e a clareza do acompanhamento.",
        solution:
          "Estruturei uma interface desktop mais coesa, com dashboards claros e fluxos de CRM que deixaram a operação mais previsível e menos dependente de processos improvisados.",
        role:
          "UX/UI e estruturação de dashboards e fluxos, com foco em produtividade e clareza operacional.",
        workReduction:
          "Eliminou boa parte do retrabalho de consulta manual e consolidou o acompanhamento em um único ambiente.",
        metrics: [
          { label: "Visão operacional", value: "+2x", description: "mais contexto em uma única tela" },
          { label: "Tempo de análise", value: "-45%", description: "na leitura de indicadores" },
        ],
        images: [
          "/projects/nest-ops.webp",
          "/projects/nest-ops-3.webp",
        ],
      },
      translations: {
        en: {
          title: "Nest Ops",
          category: "Internal Operations Platform",
          description:
            "Internal operations system for CRM, dashboards and team workflow management.",
          highlights: ["CRM", "Dashboards", "UX/UI", "Data Analytics", "Desktop"],
          details: {
            overview:
              "Internal operations solution for teams combining analytical dashboards, CRM and follow-up flows to make data analysis and decision-making easier. The main focus was transforming dispersed information into a more objective interface for everyday operations.",
            problem:
              "The team had to deal with fragmented data and many screens to track customers and metrics, which reduced response speed and clarity.",
            solution:
              "I structured a more cohesive desktop interface with clear dashboards and CRM workflows that made operations more predictable and less reliant on improvised processes.",
            role:
              "UX/UI and dashboard/flow structuring focused on productivity and operational clarity.",
            workReduction:
              "Eliminated much of the manual consultation overhead and consolidated tracking into a single environment.",
            metrics: [
              {
                label: "Operational insight",
                description: "more context in one screen",
              },
              {
                label: "Analysis time",
                description: "time to read indicators",
              },
            ],
          },
        },
        es: {
          title: "Nest Ops",
          category: "Internal Operations Platform",
          description:
            "Sistema interno de CRM, dashboards y gestión operativa.",
          highlights: ["CRM", "Dashboards", "UX/UI", "Data Analytics", "Desktop"],
          details: {
            overview:
              "Solución de operación interna para equipos, que reúne dashboards analíticos, CRM y flujos de seguimiento para facilitar el análisis de datos y la toma de decisiones. El foco principal fue transformar información dispersa en una interfaz más clara para el día a día de la operación.",
            problem:
              "El equipo debía lidiar con datos fragmentados y muchas pantallas para hacer seguimiento a clientes e indicadores, lo que afectaba la velocidad de respuesta y la claridad del seguimiento.",
            solution:
              "Estructuré una interfaz de escritorio más coherente, con dashboards claros y flujos de CRM que hicieron la operación más previsible y menos dependiente de procesos improvisados.",
            role:
              "UX/UI y estructuración de dashboards y flujos, con foco en productividad y claridad operativa.",
            workReduction:
              "Eliminó gran parte del retrabajo de consulta manual y consolidó el seguimiento en un único entorno.",
            metrics: [
              { label: "Visión operativa", description: "más contexto en una única pantalla" },
              { label: "Tiempo de análisis", description: "en la lectura de indicadores" },
            ],
          },
        },
      },
    },
      {
      slug: "b2c-sales-plus",
      title: "B2C Sales Plus",
      category: "Pharmaceutical Sales Platform",
      image: "/projects/b2c.webp",

      description:
        "Modernização da experiência de vendas para o setor farmacêutico.",

      highlights: ["UI/UX", "Smart POS", "Retail", "Desktop", "Product Design"],

      details: {
        overview:
        "Solução utilizada por balconistas e vendedores para conduzir toda a jornada comercial, desde a pré-venda até o checkout final do consumidor. A proposta foi tornar a venda mais fluida, confiável e menos dependente de decisões improvisadas no ponto de venda.",

        problem:
        "O produto tinha uma experiência fragmentada e pouco consistente, o que dificultava a condução da venda e gerava lentidão na operação.",

        solution:
        "Refatorei a experiência de ponta a ponta, simplificando fluxos, fortalecendo consistência visual e tornando a jornada mais intuitiva para desktop e Smart POS.",

        role:
        "Atuei na refatoração completa da experiência do produto, melhorando usabilidade, fluxos e consistência visual para desktop e Smart POS.",

        workReduction:
        "Ajudou a reduzir a dependência de orientações manuais e tornou o processo de venda mais intuitivo para a equipe.",

        metrics: [
          { label: "Fluxo de venda", value: "+35%", description: "mais fluidez na jornada comercial" },
          { label: "Consistência", value: "100%", description: "dos principais passos alinhados visualmente" },
        ],

        images: [

          "/projects/b2c-3.webp",
        ],
      },
      translations: {
        en: {
          title: "B2C Sales Plus",
          category: "Pharmaceutical Sales Platform",
          description:
            "Modernizing the sales experience for the pharmaceutical sector.",
          highlights: ["UI/UX", "Smart POS", "Retail", "Desktop", "Product Design"],
          details: {
            overview:
              "Solution used by pharmacy attendants and salespeople to guide the entire sales journey, from pre-sale to the customer's final checkout. The goal was to make selling more fluid, reliable and less dependent on improvised decisions at the point of sale.",
            problem:
              "The product had a fragmented, inconsistent experience, which made it harder to guide the sale and slowed down operations.",
            solution:
              "I refactored the end-to-end experience, simplifying flows, strengthening visual consistency and making the journey more intuitive for desktop and Smart POS.",
            role:
              "I led the complete refactor of the product experience, improving usability, flows and visual consistency for desktop and Smart POS.",
            workReduction:
              "Helped reduce reliance on manual guidance and made the sales process more intuitive for the team.",
            metrics: [
              { label: "Sales flow", description: "more fluidity in the sales journey" },
              { label: "Consistency", description: "of key steps visually aligned" },
            ],
          },
        },
        es: {
          title: "B2C Sales Plus",
          category: "Pharmaceutical Sales Platform",
          description:
            "Modernización de la experiencia de ventas para el sector farmacéutico.",
          highlights: ["UI/UX", "Smart POS", "Retail", "Desktop", "Product Design"],
          details: {
            overview:
              "Solución utilizada por dependientes y vendedores para conducir todo el recorrido comercial, desde la preventa hasta el checkout final del consumidor. La propuesta fue hacer la venta más fluida, confiable y menos dependiente de decisiones improvisadas en el punto de venta.",
            problem:
              "El producto tenía una experiencia fragmentada y poco consistente, lo que dificultaba conducir la venta y generaba lentitud en la operación.",
            solution:
              "Refactoricé la experiencia de punta a punta, simplificando flujos, fortaleciendo la consistencia visual y haciendo el recorrido más intuitivo para escritorio y Smart POS.",
            role:
              "Lideré la refactorización completa de la experiencia del producto, mejorando la usabilidad, los flujos y la consistencia visual para escritorio y Smart POS.",
            workReduction:
              "Ayudó a reducir la dependencia de orientaciones manuales e hizo el proceso de venta más intuitivo para el equipo.",
            metrics: [
              { label: "Flujo de venta", description: "más fluidez en el recorrido comercial" },
              { label: "Consistencia", description: "de los pasos principales alineados visualmente" },
            ],
          },
        },
      },
    },
    {
      slug: "cosmos-pro",
      title: "Cosmos Pro",
      category: "Enterprise Mobile Platform",
      image: "/projects/login-page.webp",

      description:
      "Aplicativo corporativo com múltiplas funcionalidades para operações empresariais.",

      highlights: [ "Mobile",
      "UX/UI",
      "Product Design",
      "Enterprise",],

      details: {
        overview:
        "Aplicativo desenvolvido para empresas que necessitam concentrar diferentes serviços e processos em uma única experiência mobile. O objetivo foi criar uma base mais clara e escalável para operações empresariais recorrentes.",

        problem:
        "A navegação não estava alinhada com as necessidades reais de uso, o que dificultava a localização de serviços e aumentava a fricção da experiência.",

        solution:
        "Refatorei a arquitetura da informação, a navegação e a interface para tornar o app mais intuitivo e eficiente em uso diário.",

        role:
        "Responsável pela refatoração da experiência mobile, melhorias de navegação, arquitetura da informação e interface.",

        workReduction:
        "Reduziu o tempo de navegação e tornou o acesso às principais ações mais direto para os usuários.",

        metrics: [
          { label: "Acesso rápido", value: "-40%", description: "no tempo para encontrar serviços principais" },
          { label: "Consistência", value: "+3x", description: "mais padronização visual entre telas" },
        ],

        images: [
          "/projects/cosmos2.webp",
          "/projects/cosmos3.webp",
        ],
      },
      translations: {
        en: {
          title: "Cosmos Pro",
          category: "Enterprise Mobile Platform",
          description:
            "Corporate app with multiple features for business operations.",
          highlights: ["Mobile", "UX/UI", "Product Design", "Enterprise"],
          details: {
            overview:
              "App developed for companies that need to bring together different services and processes into a single mobile experience. The goal was to create a clearer, more scalable foundation for recurring business operations.",
            problem:
              "Navigation wasn't aligned with real usage needs, making it harder to find services and increasing friction in the experience.",
            solution:
              "I refactored the information architecture, navigation and interface to make the app more intuitive and efficient for daily use.",
            role:
              "Responsible for refactoring the mobile experience, navigation improvements, information architecture and interface.",
            workReduction:
              "Reduced navigation time and made access to key actions more direct for users.",
            metrics: [
              { label: "Quick access", description: "in time to find key services" },
              { label: "Consistency", description: "more visual standardization across screens" },
            ],
          },
        },
        es: {
          title: "Cosmos Pro",
          category: "Enterprise Mobile Platform",
          description:
            "Aplicación corporativa con múltiples funcionalidades para operaciones empresariales.",
          highlights: ["Mobile", "UX/UI", "Product Design", "Enterprise"],
          details: {
            overview:
              "Aplicación desarrollada para empresas que necesitan concentrar diferentes servicios y procesos en una única experiencia móvil. El objetivo fue crear una base más clara y escalable para operaciones empresariales recurrentes.",
            problem:
              "La navegación no estaba alineada con las necesidades reales de uso, lo que dificultaba encontrar servicios y aumentaba la fricción de la experiencia.",
            solution:
              "Refactoricé la arquitectura de la información, la navegación y la interfaz para hacer la app más intuitiva y eficiente en el uso diario.",
            role:
              "Responsable de la refactorización de la experiencia móvil, mejoras de navegación, arquitectura de la información e interfaz.",
            workReduction:
              "Redujo el tiempo de navegación e hizo el acceso a las acciones principales más directo para los usuarios.",
            metrics: [
              { label: "Acceso rápido", description: "en el tiempo para encontrar servicios principales" },
              { label: "Consistencia", description: "más estandarización visual entre pantallas" },
            ],
          },
        },
      },
    },
    {
    slug: "mmc-web",
    title: "MMC Web",
    category: "Procurement Intelligence Platform",
    image: "/projects/mmc.webp",

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
        "Sistema criado para apoiar equipes de compras na análise de dados e tomada de decisões estratégicas, oferecendo indicadores e ferramentas de apoio à negociação. O desafio era transformar uma interface carregada em uma plataforma mais facilitadora de decisão.",

      problem:
        "As equipes precisavam interpretar muitos dados e encontrar rapidamente os pontos mais relevantes para negociação, mas a interface dificultava essa leitura.",

      solution:
        "Modernizei a interface, reorganizei os fluxos principais e priorizei a visualização de indicadores para acelerar a compreensão e a tomada de decisão.",

      role:
        "Atuei na modernização do produto através da refatoração da interface, melhoria da experiência do usuário e reorganização dos fluxos principais.",

      workReduction:
        "Ajudou a reduzir a necessidade de validações manuais e tornou a análise mais direta para a equipe.",

      metrics: [
        { label: "Leitura de dados", value: "-35%", description: "na curva de interpretação" },
        { label: "Decisões rápidas", value: "+2x", description: "mais velocidade na análise" },
      ],

      images: [
        "/projects/mmc1.webp",
      ],
    },
    translations: {
      en: {
        title: "MMC Web",
        category: "Procurement Intelligence Platform",
        description:
          "Platform to support strategic corporate procurement decisions.",
        highlights: ["Procurement", "UX/UI", "Data Visualization", "Enterprise", "Desktop"],
        details: {
          overview:
            "System built to support procurement teams in data analysis and strategic decision-making, offering indicators and negotiation support tools. The challenge was turning a cluttered interface into a platform that makes decisions easier.",
          problem:
            "Teams needed to interpret large amounts of data and quickly find the most relevant points for negotiation, but the interface made that reading difficult.",
          solution:
            "I modernized the interface, reorganized the main flows and prioritized indicator visualization to speed up understanding and decision-making.",
          role:
            "I modernized the product by refactoring the interface, improving the user experience and reorganizing the main flows.",
          workReduction:
            "Helped reduce the need for manual validation and made analysis more straightforward for the team.",
          metrics: [
            { label: "Data reading", description: "in the interpretation learning curve" },
            { label: "Faster decisions", description: "more speed in analysis" },
          ],
        },
      },
      es: {
        title: "MMC Web",
        category: "Procurement Intelligence Platform",
        description:
          "Plataforma para apoyar decisiones estratégicas de compras corporativas.",
        highlights: ["Procurement", "UX/UI", "Data Visualization", "Enterprise", "Desktop"],
        details: {
          overview:
            "Sistema creado para apoyar a los equipos de compras en el análisis de datos y la toma de decisiones estratégicas, ofreciendo indicadores y herramientas de apoyo a la negociación. El desafío era transformar una interfaz sobrecargada en una plataforma que facilitara la decisión.",
          problem:
            "Los equipos necesitaban interpretar muchos datos y encontrar rápidamente los puntos más relevantes para la negociación, pero la interfaz dificultaba esa lectura.",
          solution:
            "Modernicé la interfaz, reorganicé los flujos principales y prioricé la visualización de indicadores para acelerar la comprensión y la toma de decisiones.",
          role:
            "Trabajé en la modernización del producto a través de la refactorización de la interfaz, la mejora de la experiencia del usuario y la reorganización de los flujos principales.",
          workReduction:
            "Ayudó a reducir la necesidad de validaciones manuales e hizo el análisis más directo para el equipo.",
          metrics: [
            { label: "Lectura de datos", description: "en la curva de interpretación" },
            { label: "Decisiones rápidas", description: "más velocidad en el análisis" },
          ],
        },
      },
    },
  },

    {
      slug: "design-systems",
      title: "Design Systems",
      category: "Scalable Design System",
      image: "/projects/ds.webp",

      description:
        "Sistema de design escalável com tokens, componentes e documentação.",

      highlights: ["Figma", "Tokens", "Components", "Docs", "Style Guide"],

      details: {
        overview:
          "Criação e documentação de sistemas de design — tokens, componentes, guidelines e bibliotecas reutilizáveis para garantir consistência visual e agilidade no desenvolvimento de produtos. A proposta foi reduzir retrabalho e fortalecer a escalabilidade entre times.",

        problem:
          "A consistência visual e a velocidade de entrega eram impactadas por inconsistências entre componentes e falta de padronização entre projetos.",

        solution:
          "Estruturei um sistema de design escalável com tokens, componentes e documentação clara, facilitando manutenção e aceleração na criação de novas interfaces.",

        role:
          "Criação do sistema de design e documentação.",

        workReduction:
          "Ajudou a reduzir retrabalho de design e desenvolvimento e acelerou a entrega de novas telas.",

        metrics: [
          { label: "Padronização", value: "+4x", description: "mais consistência entre produtos" },
          { label: "Velocidade", value: "-50%", description: "na criação de novas interfaces" },
        ],

        images: [
          "/projects/design-system.webp",
          "/projects/design-system-2.webp",
          "/projects/design-system-3.webp",
        ],
      },
      translations: {
        en: {
          title: "Design Systems",
          category: "Scalable Design System",
          description:
            "Scalable design system with tokens, components and documentation.",
          highlights: ["Figma", "Tokens", "Components", "Docs", "Style Guide"],
          details: {
            overview:
              "Creation and documentation of design systems — tokens, components, guidelines and reusable libraries to ensure visual consistency and agility in product development. The goal was to reduce rework and strengthen scalability across teams.",
            problem:
              "Visual consistency and delivery speed were impacted by inconsistencies between components and a lack of standardization across projects.",
            solution:
              "I structured a scalable design system with tokens, components and clear documentation, making maintenance easier and speeding up the creation of new interfaces.",
            role:
              "Design system creation and documentation.",
            workReduction:
              "Helped reduce design and development rework and sped up delivery of new screens.",
            metrics: [
              { label: "Standardization", description: "more consistency across products" },
              { label: "Speed", description: "in creating new interfaces" },
            ],
          },
        },
        es: {
          title: "Design Systems",
          category: "Scalable Design System",
          description:
            "Sistema de diseño escalable con tokens, componentes y documentación.",
          highlights: ["Figma", "Tokens", "Components", "Docs", "Style Guide"],
          details: {
            overview:
              "Creación y documentación de sistemas de diseño — tokens, componentes, guías y bibliotecas reutilizables para garantizar consistencia visual y agilidad en el desarrollo de productos. La propuesta fue reducir el retrabajo y fortalecer la escalabilidad entre equipos.",
            problem:
              "La consistencia visual y la velocidad de entrega se veían afectadas por inconsistencias entre componentes y falta de estandarización entre proyectos.",
            solution:
              "Estructuré un sistema de diseño escalable con tokens, componentes y documentación clara, facilitando el mantenimiento y acelerando la creación de nuevas interfaces.",
            role:
              "Creación del sistema de diseño y documentación.",
            workReduction:
              "Ayudó a reducir el retrabajo de diseño y desarrollo y aceleró la entrega de nuevas pantallas.",
            metrics: [
              { label: "Estandarización", description: "más consistencia entre productos" },
              { label: "Velocidad", description: "en la creación de nuevas interfaces" },
            ],
          },
        },
      },
    },
  ],

  graphicDesignGallery: [
    {
      image: "/projects/softfacil_1.webp",
      thumb: "/projects/softfacil_1-thumb.webp",
    },
    {
      image: "/projects/softfacil_2.webp",
      thumb: "/projects/softfacil_2-thumb.webp",
    },
    {
      image: "/projects/softfacil_3.webp",
      thumb: "/projects/softfacil_3-thumb.webp",
    },
        {
      image: "/projects/rheon_1.webp",
      thumb: "/projects/rheon_1-thumb.webp",
    },
        {
      image: "/projects/rheon_2.webp",
      thumb: "/projects/rheon_2-thumb.webp",
    },
        {
      image: "/projects/rheon_3.webp",
      thumb: "/projects/rheon_3-thumb.webp",
    },
    {
      image: "/projects/reals_1.webp",
      thumb: "/projects/reals_1-thumb.webp",
    },
        {
      image: "/projects/reals_2.webp",
      thumb: "/projects/reals_2-thumb.webp",
    },
        {
      image: "/projects/reals_3.webp",
      thumb: "/projects/reals_3-thumb.webp",
    },
        {
      image: "/projects/reals_4.webp",
      thumb: "/projects/reals_4-thumb.webp",
    },
        {
      image: "/projects/reals_5.webp",
      thumb: "/projects/reals_5-thumb.webp",
    },
        {
      image: "/projects/big.webp",
      thumb: "/projects/big-thumb.webp",
    },
  ],
};

export default portfolio;