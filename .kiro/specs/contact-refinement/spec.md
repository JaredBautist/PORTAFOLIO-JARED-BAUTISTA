# Contact section refinement

Status: Approved and implemented locally.

## Requirements

- WHEN visitors reach contact, the section SHALL show a concise heading, a short invitation, and direct email, WhatsApp, and GitHub links.
- WHEN rendered in either theme, the section SHALL use the page's existing neutral surface and text tokens, a subtle top divider, and no decorative gradient panel or nested contact cards.
- WHEN viewed on desktop, introductory text SHALL sit beside a compact contact list; on mobile the list SHALL follow the introduction in one column.
- WHEN links receive keyboard focus, the focus indicator SHALL be clearly visible without motion; touch targets SHALL be at least 44px high.
- WHEN a pointer hovers a link, feedback SHALL be subtle and limited to devices supporting hover. Reduced-motion preferences SHALL disable motion.
- WHEN the language changes, all headings, labels, and descriptive text SHALL switch between Spanish and English. Existing destinations SHALL be preserved.

## Approved copy

Spanish: heading "Hablemos."; description "Cuéntame qué necesitas construir o mejorar. Puedes escribirme por correo o WhatsApp."; section label "Contacto".

English: heading "Let's talk."; description "Tell me what you need to build or improve. Reach me by email or WhatsApp."; section label "Contact".

## Design and decision

Use Emil Kowalski's design-engineering principles: clear hierarchy, restrained decoration, purposeful interaction feedback, and precise focus/touch behavior. Keep the existing fonts and color system. Give the email link primary typographic emphasis, with WhatsApp and GitHub as compact secondary rows separated by fine rules. Remove icon tiles, oversized card padding, strong shadow, and decorative background gradients. No entrance choreography or animation dependency is needed.

A flat section integrates with the portfolio and keeps attention on contact details. A smaller version of the current gradient panel was rejected because it retains the nested-card visual pattern the owner dislikes.

## Scope and tasks

- [x] Approve the design and copy.
- [x] Update ContactSection markup, scoped contact CSS, and Spanish/English copy.
- [x] Remove obsolete contact-only styles without affecting other sections.
- [x] Validate links, keyboard focus, touch targets, both themes/languages, and mobile/desktop layout.
- [x] Run lint, typecheck, build, and inspect browser screenshots.

No contact form, backend, external messaging, or deployment is included.

## Validation results

- Lint, TypeScript, production build, and git diff whitespace checks passed.
- Production-server Chromium checks passed for 320px, 390px, 768px, and 1440px in both languages and themes (16 combinations).
- Verified the heading translations, unchanged destinations, external-link protections, minimum 44px target height, responsive column placement, absence of horizontal overflow, and removal of decorative backgrounds and shadows.
- Simulated Tab navigation verified the WhatsApp link receives visible outline focus after email; reduced-motion transition duration remains negligible.
- Desktop light and narrow mobile dark screenshots were visually inspected. Temporary verification artifacts are in `/tmp/portfolio-contact-qa/`. Physical-device interaction was not tested.
- No deployment was performed.
