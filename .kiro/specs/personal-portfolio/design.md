# Personal Portfolio Design

## Product Direction

The portfolio uses a project-first, single-page narrative for recruiters and potential
clients. Its visual identity is **soft editorial tech**: a warm light canvas, dark navy
typography, white surfaces, and pastel lavender, sky, mint, peach, and yellow accents.
Pastels provide identity and grouping; dark text and saturated controls provide WCAG
contrast.

## Information Architecture

1. Sticky navigation and availability status
2. Hero with positioning, primary contact actions, and concise proof points
3. Deployed work with real product captures
4. Engineering case studies: AXOLOT and MIPRES
5. Professional experience
6. Technology stack and AI development tools
7. Specification-driven workflow
8. Education and credentials
9. Contact call to action and footer

## Application Architecture

The application remains a statically renderable Next.js App Router site.

```text
app/
├── layout.tsx                  # Metadata, fonts, global providers
├── page.tsx                    # Thin page composition
└── opengraph-image.tsx         # Repository-owned social preview
components/portfolio/
├── language-provider.tsx     # Locale state, persistence and document language
├── navigation.tsx             # Responsive navigation and theme control
├── hero.tsx                   # Positioning and primary CTAs
├── project-card.tsx           # Reusable deployed-project presentation
├── projects-section.tsx       # Project hierarchy and grid
├── experience-section.tsx     # Professional case narrative
├── toolkit-section.tsx        # Grouped skills and brand marks
├── workflow-section.tsx       # SDD delivery sequence
├── education-section.tsx      # Credentials and current study
├── contact-section.tsx        # Verified contact destinations
└── reveal.tsx                 # Progressive enhancement for motion
lib/
├── portfolio-data.ts          # Typed projects, experience, education and URLs
└── i18n.ts                    # Typed ES/EN interface dictionaries and helpers
public/
├── documents/                 # Downloadable CV with a stable public filename
├── profile/                   # Optimized professional portrait
├── projects/                  # Optimized captures from live products
└── ai-tools/                  # Repository-owned AI tool marks
```

The page and section components remain presentational. Structured content, links, and
technology groups live in `lib/portfolio-data.ts`, preventing content duplication and
keeping external destinations reviewable in one place.

## Data Contracts

```ts
type ProjectKind = "deployed" | "product" | "case-study";

interface PortfolioProject {
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
  readonly kind: ProjectKind;
  readonly featured?: boolean;
}

interface ExperienceEntry {
  readonly organization: string;
  readonly role: string;
  readonly period: string;
  readonly summary: string;
  readonly responsibilities: readonly string[];
  readonly confidentialityNote?: string;
}
```

## Visual System

- Display typography: Space Grotesk, with compact tracking and strong hierarchy.
- Body typography: Archivo, minimum 16 px with a 1.6 line height.
- Canvas: warm off-white with low-opacity pastel radial fields.
- Surfaces: white or softly tinted cards, 20-28 px corners, 1 px borders, and
  restrained shadows.
- Primary action: deep indigo on white for reliable contrast.
- Project accents: pastel tokens assigned by category, never used as the only status
  indicator.
- Motion: 180-450 ms ease-out transitions and staggered entrance for major sections;
  no scroll-jacking or continuous decorative animation.

## Responsive Behavior

- Mobile: one-column project stack, collapsible navigation, full-width primary CTA.
- Tablet: two-column supporting cards with featured work spanning the available width.
- Desktop: twelve-column bento grid with the first projects receiving greater visual
  weight.
- Project images use a fixed aspect-ratio container and `next/image` with responsive
  `sizes` to prevent layout shift.

## Accessibility

- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks.
- One `h1`, sequential section headings, and meaningful link labels.
- 44 px minimum interactive targets and visible `:focus-visible` treatment.
- Project screenshots include contextual alternative text.
- `prefers-reduced-motion` removes reveal transforms and smooth scrolling.
- Contact information is available as text and not communicated through icons alone.

## ADR-001: Single Page vs. Project Detail Routes

### Context

The first release needs to demonstrate multiple deployed products quickly and deploy
without a content backend.

### Options Considered

1. Dedicated route per case study: deeper storytelling but requires substantially more
   verified copy and navigation.
2. Single-page portfolio: faster scanning, lower maintenance, and stronger first-release
   focus.

### Decision

Use a single page with detailed project cards and direct links. Add case-study routes in
a later release when project-specific metrics and long-form material are available.

### Consequences

Recruiters can evaluate the work quickly, but long technical narratives remain concise.

## ADR-002: Project Image Source

### Context

Remote screenshots can change, fail, or cause layout shifts.

### Decision

Capture the verified live applications, crop them consistently, convert them to WebP,
and store them locally. Use `next/image` for sizing and lazy loading.

### Consequences

The portfolio remains visually stable and fast, while captures must be refreshed when a
product's interface changes materially.

## ADR-003: Motion Implementation

### Options Considered

1. GSAP/Framer Motion: expressive but unnecessary bundle weight for a static portfolio.
2. CSS plus a small IntersectionObserver adapter: sufficient for reveal and hover
   feedback with minimal client JavaScript.

### Decision

Use CSS transitions with one client-side reveal adapter. Respect reduced motion at both
the CSS and JavaScript boundaries.

### Consequences

The page gains polish without turning the entire route into a client component.

## ADR-004: Contact Workflow

### Decision

Use `mailto:`, GitHub, and `wa.me` links. Do not add a contact form until a delivery
service, validation contract, privacy notice, and abuse protection are specified.

### Consequences

All contact paths work at launch without secrets, server functions, or stored personal
messages.

## ADR-005: Independent Project Directory

### Context

An existing inventory application lives in a separate workspace and must not share
runtime dependencies, routes, or configuration with the portfolio.

### Decision

Keep the portfolio as an independent Next.js project in
`/home/balckyshadown/Escritorio/portafolio` and preserve the inventory workspace.

### Consequences

The portfolio can be versioned and deployed without carrying unrelated application
code, and changes to either project remain isolated.

## ADR-006: CV and Portrait Delivery

### Context

The supplied CV and portrait must remain available after a static Vercel deployment
without introducing storage services or remote image dependencies.

### Decision

Store the CV under `public/documents/` with a readable filename and expose it through a
semantic anchor using the `download` attribute. Extract the supplied portrait, preserve
its aspect ratio, optimize it as WebP, and render it with `next/image` in the hero.

### Consequences

Both assets deploy with the application and work without an API. Replacing either file
requires updating the repository asset while keeping the public filename stable.

## ADR-007: Client-Side Language Preference

### Context

The portfolio needs complete Spanish and English presentation while remaining a small,
single-page static deployment. Separate locale routes would duplicate the page URL and
require route-aware metadata and navigation for content that has no nested pages.

### Options Considered

1. Locale routes (`/es` and `/en`): strongest locale-specific SEO, but adds routing and
   metadata complexity beyond the current single-page scope.
2. Client language context: preserves the single-page architecture, switches instantly,
   and can persist visitor preference with minimal runtime code.

### Decision

Use a typed `LanguageProvider` with `es` and `en` dictionaries. Spanish is rendered as
the initial fallback. The provider persists only the locale identifier, updates the
root `lang` attribute, and exposes explicit ES/EN controls with `aria-pressed` state.
All visible and accessible copy consumes the same locale contract.

### Consequences

Language switching is instant and works on a static deployment. Search metadata remains
Spanish-first in this release; locale-specific URLs can be introduced later if search
traffic justifies the additional routing surface.
