# Dental Clinic SaaS portfolio addition

Status: Approved and implemented locally.

## Requirements

- WHEN visitors browse selected projects, the portfolio SHALL display "Dental Clinic SaaS" placed directly after "Cabak".
- WHEN Dental Clinic SaaS is displayed, its live destination link SHALL target `https://dental-clinic-saas-five.vercel.app/` and its code link SHALL target `https://github.com/JaredBautist/Dental-Clinic-SaaS`.
- WHEN Dental Clinic SaaS renders, its status SHALL be online/live (no in-development indicator).
- WHEN visitors switch between Spanish and English, all project copy (category, summary, contribution, and image alt text) SHALL follow the chosen language.
- WHEN selected projects render on desktop/tablet, the 9 deployed projects SHALL layout as 4 balanced two-column rows (8 cards) followed by Jade Route as a full-width horizontal trailing card, preventing orphan single-column rows.
- WHEN the hero proof points render, the count of deployed web experiences SHALL update from 6 to 7.

## Approved copy

### Spanish
- Title: Dental Clinic SaaS
- Category: SaaS multi-tenant · Salud & Gestión Odontológica
- Summary: Plataforma SaaS multi-tenant para consultorios y clínicas odontológicas que centraliza la administración de clínicas, profesionales de la salud, recepcionistas, pacientes, agendas de citas, historias clínicas inmutables y odontograma digital con aislamiento completo de datos.
- Contribution: Diseño de arquitectura multi-tenant, modelo de datos relacional en PostgreSQL con Supabase, control de acceso basado en roles (RBAC), odontograma digital interactivo, historias clínicas inmutables e interfaz responsive con Next.js y Tailwind CSS.
- Technologies: Next.js, React 19, TypeScript, Tailwind CSS, Python, FastAPI, Supabase, PostgreSQL, Zod, Vitest
- Live URL: https://dental-clinic-saas-five.vercel.app/
- Repository URL: https://github.com/JaredBautist/Dental-Clinic-SaaS
- Accent: sky

### English
- Title: Dental Clinic SaaS
- Category: Multi-tenant SaaS · Healthcare & Dental Management
- Summary: A multi-tenant SaaS platform for dental offices and clinics that centralizes clinic administration, dental practitioners, receptionists, patients, appointment scheduling, immutable clinical records, and a digital odontogram with complete organizational data isolation.
- Contribution: Multi-tenant architecture design, PostgreSQL relational data modeling with Supabase, role-based access control (RBAC), interactive digital odontogram, immutable clinical records, and responsive UI built with Next.js and Tailwind CSS.
- Technologies: Next.js, React 19, TypeScript, Tailwind CSS, Python, FastAPI, Supabase, PostgreSQL, Zod, Vitest
- Live URL: https://dental-clinic-saas-five.vercel.app/
- Repository URL: https://github.com/JaredBautist/Dental-Clinic-SaaS
- Accent: sky

## Design and contract

Add `dental-clinic-saas` to `deployedProjects` in `lib/portfolio-data.ts` immediately after `cabak`. Add English localization to `lib/portfolio-localization.ts`. In `components/portfolio/projects-section.tsx`, set `jade-route` as `project-grid__wide` and `variant="horizontal"` so the 9 cards form 4 full two-column rows plus 1 full-width horizontal card, maintaining visual symmetry. Increment the hero proof metric to 7 in `lib/i18n.ts`. Store the real hero capture at `public/projects/dental-clinic.webp` (1200 × 750).

## Validation results

- Real public site inspected and verified live.
- Real public repository at `https://github.com/JaredBautist/Dental-Clinic-SaaS` verified.
- Hero capture optimized to WebP (65 KB).
- Lint, TypeScript typecheck, and production build checks passing.
