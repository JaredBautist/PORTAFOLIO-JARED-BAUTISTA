# Jade Route project and Founding.dev Hackathon addition

Status: Approved and implemented locally.

## Requirements

- WHEN visitors browse selected projects, the portfolio SHALL display "Jade Route" placed directly after "TutorCúcuta".
- WHEN Jade Route is displayed, its primary link SHALL navigate to `https://jaderoute.foundingdev.com/`.
- WHEN Jade Route is displayed, its card SHALL provide an accessible action to download the Founding.dev Design Hackathon certificate (`/documents/Jared-Bautista-Founding-Dev-Hackathon-Certificate.pdf`).
- WHEN visitors switch between Spanish and English, all project copy (category, summary, contribution, image alt text, certificate link label) SHALL follow the chosen language.
- WHEN selected projects render on desktop/tablet, the 8 deployed projects SHALL form four consistent two-column rows, maintaining visual balance and predictable reading order.
- WHEN the hero proof points render, the count of deployed web experiences SHALL update to 6.
- WHEN education and certifications render, the Founding.dev Design Hackathon certificate SHALL appear with its completion status and certificate link.

## Approved copy

### Spanish
- Title: Jade Route
- Category: Agencia de viajes · Hackathon Founding.dev
- Summary: Landing page para una agencia de viajes boutique especializada en experiencias personalizadas a China, desarrollada y desplegada durante el Design Hackathon de Founding.dev.
- Contribution: Diseño visual, arquitectura de componentes, narrativa de marca, optimización de rendimiento y despliegue completo en la plataforma de Founding.dev.
- Technologies: Next.js, React, TypeScript, Tailwind CSS, Founding.dev, AI-assisted
- Live URL: https://jaderoute.foundingdev.com/
- Certificate URL: /documents/Jared-Bautista-Founding-Dev-Hackathon-Certificate.pdf
- Certificate Label: Descargar certificado

### English
- Title: Jade Route
- Category: Travel agency · Founding.dev Hackathon
- Summary: A landing page for a boutique travel agency specializing in tailor-made journeys to China, built and shipped during the Founding.dev Design Hackathon.
- Contribution: Visual design, component architecture, brand storytelling, performance optimization, and end-to-end deployment on Founding.dev.
- Technologies: Next.js, React, TypeScript, Tailwind CSS, Founding.dev, AI-assisted
- Live URL: https://jaderoute.foundingdev.com/
- Certificate URL: /documents/Jared-Bautista-Founding-Dev-Hackathon-Certificate.pdf
- Certificate Label: Download certificate

## Design and contract

1. Extend `PortfolioProject` in `lib/portfolio-data.ts` with optional `certificateUrl?: string` and `certificateLabel?: string`.
2. Extend `EducationEntry` in `lib/portfolio-data.ts` with optional `certificateUrl?: string`.
3. In `components/portfolio/project-card.tsx`, add an accessible certificate download link using the `Award` icon from `lucide-react` with `download="Jared-Bautista-Founding-Dev-Hackathon-Certificate.pdf"`.
4. In `components/portfolio/projects-section.tsx`, balance the 8 projects into 4 clean 2-column rows so neither TutorCúcuta nor Jade Route creates an awkward isolated half-row.
5. In `lib/i18n.ts`, increment the deployed experiences proof metric from "5" to "6", and add `certificate` / `downloadCertificate` dictionary keys.
6. Centralize Spanish and English content in `lib/portfolio-data.ts` and `lib/portfolio-localization.ts`.

## Decision

Placing Jade Route directly after TutorCúcuta turns the deployed projects count from 7 (an odd count requiring a single horizontal card) to 8 (an even count). Normalizing both TutorCúcuta and Jade Route to standard 2-column cards gives every project equal presence, improves visual symmetry on desktop, and prevents horizontal stretching while preserving mobile stacking.

## Validation results

- Lint, TypeScript typecheck, and production build checks passing.
- Certificate PDF verified at `public/documents/Jared-Bautista-Founding-Dev-Hackathon-Certificate.pdf`.
- Cover WebP image verified at `public/projects/jaderoute.webp` (1200 × 750, 69 KB).
- Bilingual rendering verified in Spanish and English with theme support.
