# Teaching Portfolio Trial Design

## Information Architecture

```text
/                          Software engineering remains primary
└── compact teaching teaser
    └── /docencia          Dedicated teaching presentation
        ├── teaching hero and WhatsApp CTA
        ├── four-year private-teaching credential
        ├── methodology
        ├── mathematics and English support
        ├── four-step learning process
        └── final WhatsApp CTA
```

## Module Boundaries

```text
app/docencia/page.tsx                       Static route metadata and composition
components/teaching/teaching-page.tsx       Bilingual teaching presentation
components/teaching/teaching-page.module.css Route-owned visual system
components/teaching/teaching-teaser.tsx     Secondary link from the main portfolio
components/teaching/teaching-teaser.module.css Isolated compact teaser styles
lib/teaching-content.ts                     Typed ES/EN copy and WhatsApp contract
```

The route consumes the existing `LanguageProvider`, portrait asset, font system, theme
tokens, and contact number. Teaching copy remains outside React markup so it can be
reviewed or removed independently.

## Visual Direction

- Preserve Space Grotesk and Archivo for continuity with Jared's engineering brand.
- Use the established warm canvas and indigo controls, adding sky, mint, and yellow as
  educational accents.
- Prefer editorial diagrams and Lucide icons over playful cartoons or stock classroom
  photography.
- Keep the main-portfolio teaser compact and visually subordinate.
- Present four years of experience and remote/in-person delivery as one concise
  credibility block in the hero, not as an oversized metric or unsupported claim wall.
- Use restrained reveal and hover feedback already supported by the application.

## ADR-001: Separate Route in the Same Application

### Context

Teaching needs enough space to explain methodology and services, but it must not compete
with deployed software projects on the main page.

### Decision

Create `/docencia` inside the existing Next.js application and add one compact teaser
after education. Do not create another repository or deployment for this trial.

### Consequences

The teaching concept can be evaluated in isolation while sharing language, theme,
assets, and contact infrastructure. The new modules and the single composition change
can be removed cleanly if the trial is rejected.

## ADR-002: Direct WhatsApp Conversion

### Decision

Use a normal `wa.me` link with a locale-specific prefilled message. Do not add a form or
collect student data in the portfolio.

### Consequences

The trial has a functional contact path without backend, secrets, or stored personal
information.
