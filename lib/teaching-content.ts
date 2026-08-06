import type { Language } from "@/lib/i18n";

interface TeachingCopy {
  readonly navigation: {
    readonly label: string;
    readonly back: string;
  };
  readonly teaser: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly link: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly titleAccent: string;
    readonly description: string;
    readonly portraitAlt: string;
    readonly experience: {
      readonly value: string;
      readonly detail: string;
    };
    readonly whatsapp: string;
    readonly methodology: string;
    readonly tags: readonly string[];
  };
  readonly methodology: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly cards: readonly {
      readonly label: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly services: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly math: {
      readonly title: string;
      readonly description: string;
      readonly items: readonly string[];
    };
    readonly english: {
      readonly title: string;
      readonly description: string;
      readonly items: readonly string[];
    };
  };
  readonly process: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly steps: readonly {
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly ai: {
    readonly label: string;
    readonly title: string;
    readonly description: string;
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly button: string;
    readonly whatsappMessage: string;
  };
  readonly footer: string;
}

export const teachingContent: Readonly<Record<Language, TeachingCopy>> = {
  es: {
    navigation: {
      label: "Navegación de docencia",
      back: "Volver al portafolio de software",
    },
    teaser: {
      eyebrow: "Otra faceta profesional",
      title: "También enseño matemáticas e inglés.",
      description: "4 años impartiendo clases particulares de forma remota y presencial, con metodología alineada a los DBA y un uso responsable de IA.",
      link: "Conocer mi propuesta docente",
    },
    hero: {
      eyebrow: "Docencia privada · Matemáticas & Inglés",
      title: "Aprender con claridad, método y",
      titleAccent: "autonomía.",
      description: "Acompaño procesos de aprendizaje personalizados, conectando los Derechos Básicos de Aprendizaje (DBA) con práctica progresiva, comprensión real y herramientas de IA usadas con criterio.",
      portraitAlt: "Jared Bautista, docente privado de matemáticas e inglés",
      experience: {
        value: "4 años de experiencia",
        detail: "Clases particulares · modalidad remota y presencial",
      },
      whatsapp: "Consultar clases por WhatsApp",
      methodology: "Ver metodología",
      tags: ["Atención personalizada", "Matemáticas", "Inglés", "Autonomía con IA"],
    },
    methodology: {
      eyebrow: "Metodología",
      title: "Un proceso pensado para comprender, no solo completar tareas.",
      description: "Cada acompañamiento parte de las necesidades del estudiante y convierte los objetivos académicos en un camino claro, practicable y verificable.",
      cards: [
        {
          label: "01 · Punto de partida",
          title: "Diagnóstico y objetivos",
          description: "Identificamos conocimientos previos, dificultades y metas para construir una ruta de aprendizaje pertinente.",
        },
        {
          label: "02 · Referente académico",
          title: "Alineación con los DBA",
          description: "Organizamos habilidades y aprendizajes fundamentales de acuerdo con los Derechos Básicos de Aprendizaje aplicables.",
        },
        {
          label: "03 · Proyección",
          title: "Autonomía acompañada por IA",
          description: "Enseño a usar la IA para preguntar, practicar y revisar, sin reemplazar el razonamiento ni la responsabilidad del estudiante.",
        },
      ],
    },
    services: {
      eyebrow: "Áreas de acompañamiento",
      title: "Dos áreas, un mismo objetivo: aprender con confianza.",
      description: "El contenido y el ritmo se adaptan al punto de partida y a los objetivos acordados con cada estudiante.",
      math: {
        title: "Matemáticas",
        description: "Comprensión de conceptos y resolución razonada de problemas, avanzando de lo concreto a lo abstracto.",
        items: ["Refuerzo de fundamentos", "Resolución paso a paso", "Razonamiento y estrategias", "Preparación de actividades y evaluaciones"],
      },
      english: {
        title: "Inglés",
        description: "Desarrollo equilibrado de bases, comprensión y comunicación mediante práctica contextualizada.",
        items: ["Gramática con propósito", "Lectura y comprensión", "Escritura guiada", "Práctica oral y construcción de confianza"],
      },
    },
    process: {
      eyebrow: "Cómo empezamos",
      title: "Del primer mensaje a un plan de aprendizaje claro.",
      description: "Sin formularios ni procesos complicados: conversamos por WhatsApp y definimos el acompañamiento de manera directa.",
      steps: [
        { title: "Conversamos", description: "Conozco la necesidad, el contexto y el objetivo principal." },
        { title: "Ubicamos el punto de partida", description: "Revisamos fortalezas, vacíos y prioridades de aprendizaje." },
        { title: "Diseñamos la ruta", description: "Organizamos contenidos, práctica y recursos de apoyo." },
        { title: "Acompañamos el progreso", description: "Revisamos comprensión, hábitos y autonomía de forma continua." },
      ],
    },
    ai: {
      label: "IA con propósito educativo",
      title: "La tecnología apoya el aprendizaje; no piensa por el estudiante.",
      description: "El objetivo es que cada estudiante aprenda a formular mejores preguntas, contrastar respuestas, detectar errores y tomar control de su propio proceso.",
    },
    contact: {
      eyebrow: "Clases privadas",
      title: "Cuéntame qué necesitas aprender o reforzar.",
      description: "Escríbeme por WhatsApp para conversar sobre matemáticas, inglés y los objetivos del estudiante.",
      button: "Hablar por WhatsApp",
      whatsappMessage: "Hola Jared, vi tu propuesta de clases privadas y quisiera información sobre el acompañamiento en matemáticas o inglés.",
    },
    footer: "Volver al portafolio de ingeniería de software",
  },
  en: {
    navigation: {
      label: "Teaching navigation",
      back: "Back to the software portfolio",
    },
    teaser: {
      eyebrow: "Another professional facet",
      title: "I also teach mathematics and English.",
      description: "4 years teaching private lessons remotely and in person, with a methodology aligned with Colombia's Basic Learning Rights and responsible AI use.",
      link: "Explore my teaching approach",
    },
    hero: {
      eyebrow: "Private teaching · Mathematics & English",
      title: "Learn with clarity, method, and",
      titleAccent: "autonomy.",
      description: "I guide personalized learning processes by connecting Colombia's Basic Learning Rights (DBA) with progressive practice, genuine understanding, and thoughtfully used AI tools.",
      portraitAlt: "Jared Bautista, private mathematics and English teacher",
      experience: {
        value: "4 years of experience",
        detail: "Private lessons · remote and in person",
      },
      whatsapp: "Ask about lessons on WhatsApp",
      methodology: "View methodology",
      tags: ["Personalized guidance", "Mathematics", "English", "AI-supported autonomy"],
    },
    methodology: {
      eyebrow: "Methodology",
      title: "A process designed for understanding, not just completing assignments.",
      description: "Every learning plan starts from the student's needs and turns academic goals into a clear, practical, and verifiable path.",
      cards: [
        {
          label: "01 · Starting point",
          title: "Diagnosis and goals",
          description: "We identify prior knowledge, challenges, and goals to build a relevant learning path.",
        },
        {
          label: "02 · Academic reference",
          title: "Alignment with the DBA",
          description: "We organize core skills and learning outcomes according to the applicable Basic Learning Rights.",
        },
        {
          label: "03 · Growth",
          title: "AI-supported autonomy",
          description: "I teach students to use AI to ask, practice, and review without replacing their reasoning or responsibility.",
        },
      ],
    },
    services: {
      eyebrow: "Areas of support",
      title: "Two subjects, one goal: learning with confidence.",
      description: "Content and pace adapt to each student's starting point and agreed objectives.",
      math: {
        title: "Mathematics",
        description: "Conceptual understanding and reasoned problem-solving, moving from concrete ideas to abstract thinking.",
        items: ["Core concept reinforcement", "Step-by-step problem solving", "Reasoning and strategies", "Assignment and assessment preparation"],
      },
      english: {
        title: "English",
        description: "Balanced development of foundations, comprehension, and communication through contextualized practice.",
        items: ["Grammar with purpose", "Reading comprehension", "Guided writing", "Speaking practice and confidence building"],
      },
    },
    process: {
      eyebrow: "How we begin",
      title: "From the first message to a clear learning plan.",
      description: "No complicated forms or processes: we talk on WhatsApp and define the support directly.",
      steps: [
        { title: "We talk", description: "I learn about the need, context, and primary goal." },
        { title: "We identify the starting point", description: "We review strengths, gaps, and learning priorities." },
        { title: "We design the path", description: "We organize content, practice, and supporting resources." },
        { title: "We support progress", description: "We continuously review understanding, habits, and autonomy." },
      ],
    },
    ai: {
      label: "AI with educational purpose",
      title: "Technology supports learning; it does not think for the student.",
      description: "The goal is for each student to learn how to ask better questions, compare answers, identify errors, and take ownership of their learning process.",
    },
    contact: {
      eyebrow: "Private lessons",
      title: "Tell me what you need to learn or reinforce.",
      description: "Message me on WhatsApp to discuss mathematics, English, and the student's learning goals.",
      button: "Chat on WhatsApp",
      whatsappMessage: "Hi Jared, I saw your private teaching profile and would like information about mathematics or English lessons.",
    },
    footer: "Back to the software engineering portfolio",
  },
};

/** Builds the direct WhatsApp destination for the active teaching language. */
export function getTeachingWhatsAppUrl(language: Language) {
  const message = teachingContent[language].contact.whatsappMessage;
  return `https://wa.me/573208091592?text=${encodeURIComponent(message)}`;
}
