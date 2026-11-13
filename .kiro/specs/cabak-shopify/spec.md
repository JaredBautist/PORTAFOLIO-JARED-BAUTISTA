# Cabak and Shopify portfolio addition

Status: Approved and implemented locally.

## Requirements

- WHEN visitors browse the technology stack, the portfolio SHALL show Shopify with its brand icon in the existing Data, Cloud & Delivery group.
- WHEN visitors browse selected projects, the portfolio SHALL show Cabak after TutorCúcuta, with Shopify as its technology and `https://cabak.co/` as its destination.
- WHEN Cabak is displayed, the status SHALL read "En desarrollo" in Spanish or "In development" in English, even though it has a public URL.
- WHEN visitors switch language, the category, description, contribution, status, and image alternative text SHALL follow the selected language.
- WHEN existing projects render, their current status and links SHALL remain unchanged.
- WHEN viewed on mobile or in either theme, the additions SHALL use the existing card and technology-grid styling.

## Approved copy

- Title: Cabak
- Category: E-commerce · Ropa deportiva femenina
- Summary: Tienda online de ropa deportiva femenina desarrollada con Shopify, actualmente en desarrollo.
- Contribution: Desarrollo y configuración de la tienda online en Shopify.
- Status: En desarrollo
- Technologies: Shopify
- Link: https://cabak.co/

## Design and contract

Extend `PortfolioProject` with optional `status?: "in-development"`. An explicit development status takes priority over the existing URL-derived online status. Omission preserves all existing behavior. Render development status with the existing neutral badge styling, without a live indicator.

Add Cabak to `lib/portfolio-data.ts`, its English content to `lib/portfolio-localization.ts`, and the translated status label to `lib/i18n.ts`. Register `SiShopify` in the existing toolkit icon map. Store a real public-site WebP capture at `public/projects/cabak.webp` and describe only what is visible in its alternative text.

## Decision

Use an optional lifecycle status rather than expanding `ProjectKind`: development stage is independent of project category. Reuse the current project card and toolkit group rather than adding a dedicated page or a one-item technology section. No new dependencies or backend work are needed.

## Public-site evidence

On 2026-11-13, the supplied URL redirected to `https://cabak.co/password`, with Shopify response headers. Capture the public password/coming-soon page; do not imply that the product catalog or checkout is publicly available. Do not add a repository link or unverified features.

## Tasks and validation

- [x] Approve scope and copy.
- [x] Capture and inspect the public page; convert it to WebP.
- [x] Implement Shopify, Cabak, translations, and explicit development status.
- [x] Run lint, typecheck, and production build.
- [x] Verify Cabak's development badge in both languages, existing project statuses, website destination, image and icon loading, mobile/desktop layout, and both themes.

Deployment is outside this change.

## Validation results

- Lint, typecheck, production build, and git diff whitespace checks passed.
- Real public coming-soon page captured and inspected; optimized WebP is 1440 × 1000 pixels.
- Chromium checks passed at 390px and 1440px in Spanish/English and light/dark themes: Cabak follows TutorCúcuta, development status overrides the public URL, existing live statuses remain correct, both Cabak links target the approved URL, its image loads, Shopify renders an SVG icon, and there is no horizontal overflow.
- Mobile light and desktop dark screenshots were visually inspected. Browser checks used the local production server; no deployment was performed.
