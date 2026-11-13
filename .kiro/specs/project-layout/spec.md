# Selected-project layout and ordering

Status: Approved and implemented locally.

## Requirements

- WHEN selected projects render, their visual and DOM order SHALL be Coworking Management Platform, Cabak, MetroPizza, Carta Los Patios, Carta Pinar del Río, Jenny Bautista, TutorCúcuta.
- WHEN viewed on desktop or tablet with sufficient width, the first six projects SHALL form three consistent two-column rows.
- WHEN TutorCúcuta renders last, it SHALL occupy a full-width compact horizontal card, with its screenshot beside its content.
- WHEN viewed on narrow screens, all cards SHALL stack in one column, with images above content and the same reading order.
- WHEN TutorCúcuta or Cabak renders, its status SHALL be "En desarrollo" / "In development". Other project statuses SHALL remain unchanged.
- WHEN either language or theme is selected, content SHALL remain readable with no horizontal overflow, clipped text, or oversized empty card areas.

## Design

Preserve typography, colors, image assets, links, and the engineering-project section. Replace the selected-project grid's positional 6/4-column spans with uniform two-column placement. Use an explicit optional presentation variant for the trailing horizontal card; retain the default ProjectCard layout for all existing callers.

Keep card heights content-driven and reduce excessive vertical stretching in this section. Adapt image sizing hints to the actual two-column and horizontal layouts. Update the section introduction in both languages to acknowledge products in development.

## Decision

A two-column grid gives descriptions and technology tags enough room. A compact full-width trailing card avoids an isolated half-row for the seventh project. Three-column cards and masonry were considered and rejected because they either reproduce narrow, tall cards or make the requested reading order less obvious.

## Tasks and acceptance checks

- [x] Approve the proposed layout.
- [x] Reorder the content and mark TutorCúcuta in development.
- [x] Implement the scoped grid and trailing-card variant; update bilingual section copy.
- [x] Verify order, status labels, links, and image loading in Spanish and English.
- [x] Inspect mobile, tablet, and desktop layouts in both themes; check keyboard order and absence of horizontal overflow.
- [x] Run lint, typecheck, build, and diff validation.

No deployment is included.

## Validation results

- Lint, TypeScript, production build, and whitespace checks passed.
- Production-server Chromium checks passed for 390px, 768px, and 1440px, both languages and both themes (12 combinations).
- Verified all seven project titles in the agreed DOM order; Cabak and TutorCúcuta show development status, while the five published projects retain their online status.
- Verified image loading, HTTPS link destinations, keyboard-focusable links in DOM order, equal column widths and paired row starts, full-width horizontal TutorCúcuta at tablet/desktop sizes, stacked content on mobile, and no horizontal overflow.
- Desktop, tablet, and mobile screenshots were visually inspected. Screenshots and the temporary browser check are in `/tmp/portfolio-layout-qa/`.
- This approved specification supersedes the earlier TutorCúcuta and Cabak positioning requirements. No deployment was performed.
