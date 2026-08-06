import {
  deployedProjects,
  education,
  engineeringProjects,
  experience,
  technologyGroups,
  workflowSteps,
  type EducationEntry,
  type ExperienceEntry,
  type PortfolioProject,
} from "@/lib/portfolio-data";
import type { Language } from "@/lib/i18n";

type ProjectCopy = Pick<PortfolioProject, "category" | "summary" | "contribution" | "imageAlt"> & {
  readonly secondaryLabel?: string;
};

const englishProjectCopy: Readonly<Record<string, ProjectCopy>> = {
  "coworking-management": {
    category: "Multi-tenant SaaS · PrimeWorks LLC",
    summary: "A SaaS product developed for PrimeWorks LLC that centralizes booking, availability, and shared workspace usage across companies.",
    contribution: "End-to-end product creation: booking experience, frontend architecture, data model, calendar, reporting, and access control.",
    imageAlt: "Dark-themed sign-in screen for Coworking Management Platform",
  },
  metropizza: {
    category: "Commercial website · Brand experience",
    summary: "Corporate website for a two-location pizzeria featuring its story, menu, gallery, reviews, local SEO, and direct ordering paths.",
    contribution: "Visual direction, frontend development, content architecture, local SEO, and deployment of the complete experience.",
    imageAlt: "MetroPizza home page featuring an artisan pizza",
  },
  "menu-patios": {
    category: "Digital menu · Gourmet location",
    summary: "A responsive digital menu that organizes categories, sizes, ingredients, and prices for easy browsing on any device.",
    contribution: "Information design, mobile-first experience, catalog components, and independent deployment for the location.",
    imageAlt: "Red and cream digital menu for MetroPizza Los Patios",
  },
  "menu-pinar": {
    category: "Digital menu · Premium location",
    summary: "A digital menu for the Pinar del Río location with its own identity and a consistent structure for maintaining products and prices.",
    contribution: "Location-specific visual system, responsive catalog, price hierarchy, and optimized publishing for quick access.",
    imageAlt: "Green and cream digital menu for MetroPizza Pinar del Río",
  },
  "jenny-bautista-portfolio": {
    category: "Professional brand · Psychotherapy & SEO",
    summary: "A digital presence for a psychotherapist that organizes services, education, and pricing around a clear path to consultation.",
    contribution: "Design, development, and an on-page positioning foundation through content architecture, descriptive metadata, an accessible experience, and contact conversion.",
    imageAlt: "Mint-colored home page of Jenny Bautista's professional portfolio",
  },
  axolot: {
    category: "Developer tooling · Open source",
    summary: "An AI coding assistant for the terminal that connects directly to multiple providers and combines tools, memory, sessions, and SDD workflows.",
    contribution: "Provider adapter architecture, CLI/TUI experience, skill system, persistence, and cross-platform distribution through npm.",
    imageAlt: "AXOLOT terminal interface with its ASCII illustration and provider selector",
    secondaryLabel: "View on npm",
  },
  mipres: {
    category: "Healthcare operations · Protected case study",
    summary: "An operational workflow for centralizing token generation and recording deliveries, reports, and billing through official MIPRES services.",
    contribution: "Process analysis, REST integration, request validation, response traceability, and evolution toward a React and NestJS architecture.",
    imageAlt: "Technical evidence of MIPRES workflow traceability with sensitive data concealed",
  },
};

const englishExperience: ExperienceEntry = {
  organization: "Clínica San José de Cúcuta S.A.",
  role: "IT Support Intern and Medical Fees Data Analyst",
  location: "Cúcuta, Colombia",
  summary: "Work spanning technology support, operational automation, and information analysis for administrative and healthcare processes.",
  responsibilities: [
    "Preventive and corrective maintenance of computer equipment to support operational continuity.",
    "Development of the MIPRES workflow to reduce manual work across deliveries, reporting, and billing.",
    "Cross-referencing and validation of clinical records, patients, healthcare insurers, rates, and procedure types for medical fees.",
    "Automation of analysis and development support with Claude Code, with human review of rules and results.",
    "Creation of a registration system and dashboard for administrative and medical personnel check-ins and check-outs.",
  ],
  confidentialityNote: "Repositories, data, and internal artifacts are protected by the policies and licenses of Clínica San José de Cúcuta S.A.",
};

const englishEducation: readonly EducationEntry[] = [
  {
    title: "Software Development Technologist",
    institution: "Fundación de Estudios Superiores Comfanorte · Dual degree",
    period: "2023 — 2025",
    status: "Completed",
  },
  {
    title: "Diploma in AI-Powered Software Architecture",
    institution: "Fundación de Estudios Superiores Comfanorte",
    status: "Completed",
  },
  {
    title: "Specification-Driven Development with Amazon Kiro",
    institution: "Technical training and certification",
    status: "Certified",
  },
  {
    title: "Software Engineering",
    institution: "Fundación de Estudios Superiores Comfanorte · Professional continuation",
    period: "2026 — 2027",
    status: "In progress",
  },
];

const englishTechnologyGroupCopy = [
  {
    title: "Frontend & Product UI",
    description: "Fast, accessible interfaces with a deliberate visual identity.",
  },
  {
    title: "Backend & APIs",
    description: "Clear contracts, boundary validation, and maintainable services.",
  },
  {
    title: "Data, Cloud & Delivery",
    description: "Reliable data and repeatable delivery from development to production.",
  },
  {
    title: "Auditing, accessibility & SEO",
    description: "Measurable quality, discoverability, and technical validation before and after release.",
    practices: [
      "TAW Accessibility",
      "WAVE Accessibility",
      "Technical SEO",
      "robots.txt & sitemap.xml",
      "Canonical URLs",
      "Structured Data (Schema.org)",
      "Rich Results Test",
      "hreflang",
      "Open Graph & Meta Tags",
      "AI-assisted DOM review with Antigravity",
      "AI-assisted use-case simulation",
    ],
  },
  {
    title: "Productivity & planning",
    description: "Tools for turning requirements, priorities, and tracking into traceable delivery.",
    practices: ["Backlogs and prioritization", "User stories", "Technical documentation", "Agile boards", "Task traceability"],
  },
] as const;

const englishWorkflowCopy = [
  {
    title: "Understand",
    description: "I turn the problem and its constraints into verifiable requirements before choosing technology.",
    output: "Requirements · EARS criteria",
  },
  {
    title: "Design",
    description: "I define contracts, data, module boundaries, risks, and architecture decisions with their trade-offs.",
    output: "Design · API contracts · ADRs",
  },
  {
    title: "Build",
    description: "I implement in small units while keeping business logic outside controllers and visual components.",
    output: "React · APIs · Data",
  },
  {
    title: "Validate and deliver",
    description: "I test critical flows, review accessibility and performance, document decisions, and deploy with traceability.",
    output: "Tests · CI/CD · Vercel/Docker",
  },
] as const;

/** Returns project content localized without changing verified URLs or technology facts. */
export function getDeployedProjects(language: Language): readonly PortfolioProject[] {
  if (language === "es") return deployedProjects;
  return deployedProjects.map((project) => ({ ...project, ...englishProjectCopy[project.slug] }));
}

/** Returns engineering case studies localized without changing their evidence links. */
export function getEngineeringProjects(language: Language): readonly PortfolioProject[] {
  if (language === "es") return engineeringProjects;
  return engineeringProjects.map((project) => ({ ...project, ...englishProjectCopy[project.slug] }));
}

/** Returns the professional experience narrative for the active language. */
export function getExperience(language: Language): readonly ExperienceEntry[] {
  return language === "es" ? experience : [englishExperience];
}

/** Returns education entries for the active language. */
export function getEducation(language: Language): readonly EducationEntry[] {
  return language === "es" ? education : englishEducation;
}

/** Returns translated group headings while preserving the verified technology inventory. */
export function getTechnologyGroups(language: Language) {
  if (language === "es") return technologyGroups;
  return technologyGroups.map((group, index) => {
    const localizedCopy = englishTechnologyGroupCopy[index];
    return {
      ...group,
      title: localizedCopy.title,
      description: localizedCopy.description,
      ...(localizedCopy && "practices" in localizedCopy ? { practices: localizedCopy.practices } : {}),
    };
  });
}

/** Returns the SDD workflow narrative for the active language. */
export function getWorkflowSteps(language: Language) {
  if (language === "es") return workflowSteps;
  return workflowSteps.map((step, index) => ({ ...step, ...englishWorkflowCopy[index] }));
}
