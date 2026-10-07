# TutorCúcuta portfolio entry

Status: Approved and implemented locally.

## Requirements

- WHEN visitors view deployed projects, the portfolio SHALL display TutorCúcuta after Coworking Management Platform, using the existing project card.
- WHEN visitors open its image or website action, the portfolio SHALL open `https://tutor-cucuta.vercel.app/` in a new tab with the existing external-link protections.
- WHEN visitors switch between Spanish and English, the category, summary, contribution, and image alternative text SHALL use the selected language.
- WHEN the card renders, it SHALL show an optimized local WebP capture of the public site and technologies verified in the source project.
- WHEN viewed on mobile or in either color theme, the entry SHALL follow the existing grid and card styling.

## Approved content

- Title: TutorCúcuta
- Category: Plataforma educativa · Búsqueda de docentes
- Summary: Plataforma para encontrar tu docente ideal en Cúcuta y su área metropolitana, comparando materias, tarifas, disponibilidad y cercanía mediante filtros y un mapa interactivo.
- Contribution: Desarrollo integral de la plataforma: búsqueda y compatibilidad de docentes, mapa interactivo, perfiles de estudiantes y tutores e integración con Supabase.
- Technologies: React 19, TypeScript, Vite, Tailwind CSS, Supabase, MapLibre GL JS.
- Website: https://tutor-cucuta.vercel.app/
- Repository: https://github.com/JaredBautist/TUTOR-CUCUTA (public URL returned HTTP 200).

The source project's local package.json verifies the listed dependencies. Its README describes the product features; these are not an end-to-end verification of the deployment. The public URL returned HTTP 200 during preparation.

## Design and decision

Reuse the existing `PortfolioProject` interface and `ProjectCard` component. Add the Spanish entry in `lib/portfolio-data.ts`, the English copy in `lib/portfolio-localization.ts`, and its screenshot in `public/projects/tutor-cucuta.webp`. Use the existing sky accent.

Decision: represent this as another deployed project. A dedicated case-study route was considered and rejected because the requested scope is a portfolio listing. This preserves existing component boundaries and requires no new dependencies or API contracts.

## Tasks and validation

- [x] Confirm scope and contribution copy with the owner before implementation.
- [x] Capture the public site, inspect the result, and optimize it to WebP.
- [x] Add the typed entry and English translation; verify any repository link before inclusion.
- [x] Run lint, typecheck, and production build.
- [x] Check card content, screenshot loading, destinations, both languages, mobile layout, and both themes in the browser.

## Validation results

- Lint, TypeScript, production build, and whitespace validation passed.
- Headless Chromium checks passed for all eight combinations of 390px/1440px, Spanish/English, and light/dark themes: project order, translated summary and image alternative text, image loading, website/repository destinations, external-link protections, and absence of horizontal overflow.
- No browser runtime exceptions were recorded. The temporary browser profile needed a cleanup retry after successful assertions; cleanup then passed.
- Desktop dark and mobile light captures were visually inspected. The project image is a real public sign-in-page capture (1440 × 1000, 52,806 bytes); alternative text describes the sign-in page rather than claiming the illustration is the interactive map.
- No deployment was performed.

No changes to the TutorCúcuta application or deployment are included.
