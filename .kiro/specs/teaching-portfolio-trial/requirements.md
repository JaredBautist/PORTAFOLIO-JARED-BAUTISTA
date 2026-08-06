# Teaching Portfolio Trial Requirements

## Purpose

Prototype a local-only teaching profile for Jared Bautista without diluting the primary
software-engineering portfolio or publishing any change.

## Acceptance Criteria

1. WHEN a visitor views the software portfolio, the system SHALL present teaching as a
   compact secondary professional facet after education and SHALL NOT add it to the
   primary navigation or hero.
2. WHEN the teaching facet is selected, the system SHALL open an independent
   `/docencia` route with a clear path back to the software portfolio.
3. WHEN the teaching page opens, the system SHALL identify Jared as a private
   mathematics and English teacher.
4. WHEN teaching experience is presented, the system SHALL state that Jared has four
   years of private-teaching experience in remote and in-person settings.
5. WHEN the methodology is presented, the system SHALL describe alignment with the
   applicable Basic Learning Rights (DBA), personalized diagnosis, progressive practice,
   and autonomous learning supported by responsible AI use.
6. WHEN services are presented, the system SHALL distinguish mathematics and English
   support without inventing grade ranges, prices, schedules, testimonials, credentials,
   or other delivery modalities that Jared has not supplied.
7. WHEN a visitor selects a contact action, the system SHALL open WhatsApp for
   `+57 320 809 1592` with a prefilled message about private classes.
8. WHEN the active portfolio language changes, the teaching teaser and complete
   teaching page SHALL switch between professional Spanish and English using the
   existing persisted preference.
9. WHEN the route is used on mobile or desktop, the system SHALL preserve readable
   hierarchy, 44 px interactive targets, keyboard navigation, visible focus, meaningful
   image alternatives, and no horizontal scrolling.
10. WHEN the trial is implemented, the system SHALL remain local: no commit, push,
   GitHub mutation, or deployment is authorized.

## Out of Scope

- Scheduling, payments, accounts, forms, databases, or automated WhatsApp messaging.
- Claims about student outcomes, official teaching licenses, or specific grade-level
  coverage.
- Replacing the existing software portfolio positioning.
