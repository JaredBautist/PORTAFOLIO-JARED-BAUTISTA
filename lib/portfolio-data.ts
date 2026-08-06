export type ProjectKind = "deployed" | "product" | "case-study";

export interface PortfolioProject {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly summary: string;
  readonly contribution: string;
  readonly technologies: readonly string[];
  readonly image: string;
  readonly imageAlt: string;
  readonly liveUrl?: string;
  readonly repositoryUrl?: string;
  readonly secondaryUrl?: string;
  readonly secondaryLabel?: string;
  readonly kind: ProjectKind;
  readonly featured?: boolean;
  readonly accent: "lavender" | "sky" | "mint" | "peach" | "yellow";
}

export interface ExperienceEntry {
  readonly organization: string;
  readonly role: string;
  readonly location: string;
  readonly summary: string;
  readonly responsibilities: readonly string[];
  readonly confidentialityNote?: string;
}

export interface EducationEntry {
  readonly title: string;
  readonly institution: string;
  readonly period?: string;
  readonly status: string;
}

export interface TechnologyItem {
  readonly name: string;
  readonly icon: string;
  readonly color: string;
}

export const contactLinks = {
  cv: "/documents/Jared-Bautista-CV.pdf",
  email: "mailto:balckyfureu@gmail.com",
  emailLabel: "balckyfureu@gmail.com",
  github: "https://github.com/JaredBautist",
  whatsapp: "https://wa.me/573208091592",
  whatsappLabel: "+57 320 809 1592",
} as const;

export const deployedProjects = [
  {
    slug: "coworking-management",
    title: "Coworking Management Platform",
    category: "SaaS multi-tenant · Technical challenge",
    summary:
      "Plataforma para coordinar reservas, disponibilidad y uso de espacios compartidos entre empresas, con calendario, reportes y control de acceso.",
    contribution:
      "Diseño de producto, arquitectura frontend, modelo de datos y entrega integral de un prototipo funcional en 72 horas.",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "RLS"],
    image: "/projects/coworking.webp",
    imageAlt: "Pantalla de acceso de Coworking Management Platform en tema oscuro",
    liveUrl: "https://coworking-management-platform.vercel.app/login",
    repositoryUrl: "https://github.com/JaredBautist/Coworking-Management-Platform",
    kind: "deployed",
    featured: true,
    accent: "lavender",
  },
  {
    slug: "metropizza",
    title: "MetroPizza",
    category: "Web comercial · Experiencia de marca",
    summary:
      "Sitio corporativo para una pizzería con dos sedes: historia, carta, galería, reseñas, SEO local y rutas directas de conversión a pedidos.",
    contribution:
      "Dirección visual, desarrollo frontend, arquitectura de contenido, SEO local y despliegue de la experiencia completa.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Vercel"],
    image: "/projects/metropizza.webp",
    imageAlt: "Página principal de MetroPizza con una pizza artesanal como imagen principal",
    liveUrl: "https://metropizzacol.com/",
    repositoryUrl: "https://github.com/JaredBautist/METROPIZZA",
    kind: "deployed",
    featured: true,
    accent: "peach",
  },
  {
    slug: "menu-patios",
    title: "Carta MetroPizza · Los Patios",
    category: "Menú digital · Sede Gourmet",
    summary:
      "Carta digital responsive que organiza categorías, tamaños, ingredientes y precios para consultar el menú desde cualquier dispositivo.",
    contribution:
      "Diseño de información, experiencia mobile-first, componentes de catálogo y despliegue independiente por sede.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/projects/menupatios.webp",
    imageAlt: "Carta digital roja y crema de MetroPizza Los Patios",
    liveUrl: "https://menupatios.vercel.app/",
    repositoryUrl: "https://github.com/JaredBautist/menupatios",
    kind: "deployed",
    accent: "yellow",
  },
  {
    slug: "menu-pinar",
    title: "Carta MetroPizza · Pinar del Río",
    category: "Menú digital · Sede Premium",
    summary:
      "Versión de carta digital para la sede Pinar del Río, con identidad propia y una estructura consistente para mantener precios y productos.",
    contribution:
      "Sistema visual por sede, catálogo responsive, jerarquía de precios y publicación optimizada para consulta rápida.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/projects/menupinar.webp",
    imageAlt: "Carta digital verde y crema de MetroPizza Pinar del Río",
    liveUrl: "https://menupinar.vercel.app/",
    repositoryUrl: "https://github.com/JaredBautist/menupinar",
    kind: "deployed",
    accent: "mint",
  },
  {
    slug: "jenny-bautista-portfolio",
    title: "Portafolio Jenny Bautista",
    category: "Marca profesional · Psicoterapia",
    summary:
      "Portafolio profesional que presenta servicios, formación, precios y una ruta clara para agendar una consulta de psicoterapia.",
    contribution:
      "Diseño y desarrollo de una experiencia cálida, accesible y orientada a generar confianza antes del primer contacto.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/projects/jenny.webp",
    imageAlt: "Página principal en tonos menta del portafolio profesional de Jenny Bautista",
    liveUrl: "https://portafoliojennybautista.vercel.app/",
    repositoryUrl: "https://github.com/JaredBautist/PORTAFOLIO-JENNY-BAUTISTA",
    kind: "deployed",
    accent: "sky",
  },
] as const satisfies readonly PortfolioProject[];

export const engineeringProjects = [
  {
    slug: "axolot",
    title: "AXOLOT",
    category: "Developer tooling · Open source",
    summary:
      "Asistente de programación con IA para terminal que conecta directamente con múltiples proveedores y combina herramientas, memoria, sesiones y flujos SDD.",
    contribution:
      "Arquitectura de adaptadores de proveedores, experiencia CLI/TUI, sistema de skills, persistencia y distribución multiplataforma mediante npm.",
    technologies: ["TypeScript", "Node.js", "Bun", "MCP", "AI APIs", "npm"],
    image: "/projects/axolot.webp",
    imageAlt: "Interfaz de terminal de AXOLOT con su ilustración ASCII y selector de proveedor",
    repositoryUrl: "https://github.com/JaredBautist/AXOLOT",
    secondaryUrl: "https://www.npmjs.com/package/axolot-ai",
    secondaryLabel: "Ver en npm",
    kind: "product",
    featured: true,
    accent: "lavender",
  },
  {
    slug: "mipres",
    title: "MIPRES Delivery Optimization",
    category: "Healthcare operations · Caso protegido",
    summary:
      "Flujo operativo para centralizar la generación de tokens y el registro de entregas, reportes y facturación contra los servicios oficiales de MIPRES.",
    contribution:
      "Análisis del proceso, integración REST, validación de solicitudes, trazabilidad de respuestas y evolución hacia una arquitectura React + NestJS.",
    technologies: ["NestJS", "React", "Vite", "Bootstrap", "JWT", "REST APIs"],
    image: "/projects/mipres.webp",
    imageAlt: "Evidencia técnica de trazabilidad del flujo MIPRES con datos sensibles ocultos",
    repositoryUrl: "https://github.com/JaredBautist/OPTIMIZACION-DE-ENTREGA-Y-ENVIO-A-EL-MIPRES",
    kind: "case-study",
    featured: true,
    accent: "mint",
  },
] as const satisfies readonly PortfolioProject[];

export const experience = [
  {
    organization: "Clínica San José de Cúcuta S.A.",
    role: "Practicante de Soporte TI y Analista de Datos de Honorarios Médicos",
    location: "Cúcuta, Colombia",
    summary:
      "Trabajo entre soporte tecnológico, automatización operativa y análisis de información para procesos administrativos y asistenciales.",
    responsibilities: [
      "Mantenimiento preventivo y correctivo de equipos de cómputo para la continuidad operativa.",
      "Desarrollo del flujo MIPRES para reducir tareas manuales en entregas, reportes y facturación.",
      "Cruce y validación de datos clínicos, pacientes atendidos, EPS, tarifas y tipos de procedimiento para honorarios médicos.",
      "Automatización del análisis y apoyo al desarrollo mediante Claude Code, con revisión humana de reglas y resultados.",
      "Creación de un sistema de registro y dashboard para entradas y salidas del personal administrativo y médico.",
    ],
    confidentialityNote:
      "Los repositorios, datos y artefactos internos están protegidos por las políticas y licencias de la Clínica San José de Cúcuta S.A.",
  },
] as const satisfies readonly ExperienceEntry[];

export const education = [
  {
    title: "Tecnología en Desarrollo de Software",
    institution: "Fundación de Estudios Superiores Comfanorte · Doble titulación",
    period: "2023 — 2025",
    status: "Completado",
  },
  {
    title: "Diplomado en Arquitectura de Software impulsada con IA",
    institution: "Fundación de Estudios Superiores Comfanorte",
    status: "Completado",
  },
  {
    title: "Specification-Driven Development con Amazon Kiro",
    institution: "Formación y certificación técnica",
    status: "Certificado",
  },
  {
    title: "Ingeniería de Software",
    institution: "Fundación de Estudios Superiores Comfanorte · Continuidad profesional",
    period: "2026 — 2027",
    status: "En curso",
  },
] as const satisfies readonly EducationEntry[];

export const technologyGroups = [
  {
    title: "Frontend & Product UI",
    description: "Interfaces rápidas, accesibles y con una identidad visual deliberada.",
    items: [
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#C8A900" },
      { name: "React", icon: "react", color: "#087EA4" },
      { name: "Next.js", icon: "nextjs", color: "#111827" },
      { name: "Vite", icon: "vite", color: "#7357FF" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#0891B2" },
      { name: "HTML5", icon: "html", color: "#E34F26" },
      { name: "CSS3", icon: "css", color: "#1572B6" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
      { name: "Material UI", icon: "mui", color: "#007FFF" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Contratos claros, validación en los bordes y servicios mantenibles.",
    items: [
      { name: "Node.js", icon: "node", color: "#339933" },
      { name: "Express", icon: "express", color: "#374151" },
      { name: "NestJS", icon: "nestjs", color: "#E0234E" },
      { name: "Python", icon: "python", color: "#3776AB" },
    ],
    practices: ["REST APIs", "JWT", "OAuth", "WebSockets", "Repository Pattern", "Dependency Injection"],
  },
  {
    title: "Data, Cloud & Delivery",
    description: "Datos confiables y entregas repetibles desde desarrollo hasta producción.",
    items: [
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "SQL Server", icon: "sqlserver", color: "#CC2927" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Nginx", icon: "nginx", color: "#009639" },
      { name: "Linux", icon: "linux", color: "#111827" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub Actions", icon: "githubactions", color: "#2088FF" },
      { name: "Vercel", icon: "vercel", color: "#111827" },
    ],
  },
] as const;

export const architecturePractices = [
  "Clean Architecture",
  "SOLID",
  "Domain-Driven Design",
  "Specification-Driven Development",
  "Unit Testing",
  "Integration Testing",
] as const;

export const aiTools = [
  { name: "Claude Code", image: "/ai-tools/claude.png" },
  { name: "Codex", image: "/ai-tools/codex.png" },
  { name: "Antigravity", image: "/ai-tools/antigravity.png" },
  { name: "Kiro", image: "/ai-tools/kiro.png" },
] as const;

export const workflowSteps = [
  {
    number: "01",
    title: "Entender",
    description: "Convierto el problema y sus restricciones en requisitos verificables antes de elegir tecnología.",
    output: "Requirements · EARS criteria",
  },
  {
    number: "02",
    title: "Diseñar",
    description: "Defino contratos, datos, límites de módulos, riesgos y decisiones de arquitectura con sus trade-offs.",
    output: "Design · API contracts · ADRs",
  },
  {
    number: "03",
    title: "Construir",
    description: "Implemento por unidades pequeñas, manteniendo la lógica fuera de controladores y componentes visuales.",
    output: "React · APIs · Data",
  },
  {
    number: "04",
    title: "Validar y entregar",
    description: "Pruebo los flujos críticos, reviso accesibilidad y rendimiento, documento y despliego con trazabilidad.",
    output: "Tests · CI/CD · Vercel/Docker",
  },
] as const;
