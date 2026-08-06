# Jared Bautista — Personal Portfolio

Project-first personal portfolio for Jared Bautista, a full-stack software engineer in
Colombia. It presents deployed products, engineering case studies, professional
experience, technology stack, AI-assisted workflow, education, and direct contact
channels.

## Stack

- Next.js 16 with App Router
- React 19 and TypeScript
- Tailwind CSS
- `next-themes` for light and dark modes
- Typed Spanish and English interface with persisted language preference
- Lucide and React Icons
- Local WebP project captures optimized by `next/image`

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
app/                         Routes, metadata, fonts and global styles
components/portfolio/        Presentational portfolio sections
lib/portfolio-data.ts        Typed content, projects and external links
lib/i18n.ts                  Typed Spanish and English interface dictionaries
lib/portfolio-localization.ts  Localized professional and project content
public/projects/             Local captures of deployed work
public/ai-tools/             AI development tool marks
public/profile/              Optimized professional portrait
public/documents/            Downloadable CV
.kiro/specs/personal-portfolio/  Requirements, design and task trace
design-system/               Visual-system decisions
```

## Content updates

Project details, technologies, contact links, education, experience, and workflow steps
are centralized in `lib/portfolio-data.ts`. Update that file instead of duplicating
content inside components.

## Deploy to Vercel

1. Import the repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Optionally set `NEXT_PUBLIC_SITE_URL` to the final production URL so social metadata
   uses the canonical domain.
4. Deploy. No database, secret, or server-side service is required.

## Specification trail

The implementation follows the versioned acceptance criteria, architecture decisions,
and task list under `.kiro/specs/personal-portfolio/`.
