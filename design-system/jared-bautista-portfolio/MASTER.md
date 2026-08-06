# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Jared Bautista Portfolio
**Generated:** 2026-08-06 10:29:10
**Category:** Portfolio/Personal
**Design Dials:** Variance 6/10 (Balanced / Modern) | Motion 5/10 (Standard) | Density 4/10 (Standard)

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#5345BA` | `--primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#F0F1F8` | `--secondary` |
| Accent/CTA | `#5345BA` | `--primary` |
| Background | `#FBFAF8` | `--background` |
| Foreground | `#182035` | `--foreground` |
| Muted | `#EEF0F5` | `--muted` |
| Border | `#D9DCE8` | `--border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring | `#5345BA` | `--ring` |
| Lavender | `#EEEBFF` | `--lavender` |
| Sky | `#E0F7FF` | `--sky` |
| Mint | `#E6F9F0` | `--mint` |
| Peach | `#FFF0E6` | `--peach` |
| Yellow | `#FFF4C7` | `--yellow` |

**Color Notes:** Warm editorial canvas + accessible indigo CTA + pastel technology accents

### Typography

- **Heading Font:** Space Grotesk
- **Body Font:** Archivo
- **Mood:** minimal, portfolio, designer, creative, clean, artistic
- **Google Fonts:** [Archivo + Space Grotesk](https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

*Density: 4/10 — Standard*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #5345BA;
  color: white;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #182035;
  border: 1px solid #D9DCE8;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border: 1px solid #D9DCE8;
  border-radius: 24px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #18181B;
  outline: none;
  box-shadow: 0 0 0 3px #18181B20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Soft UI Evolution

**Keywords:** Evolved soft UI, better contrast, modern aesthetics, subtle depth, accessibility-focused, improved shadows, hybrid

**Best For:** Modern enterprise apps, SaaS platforms, health/wellness, modern business tools, professional, hybrid

**Key Effects:** Improved shadows (softer than flat, clearer than neumorphism), modern (200-300ms), focus visible, WCAG AA/AAA

### Page Pattern

**Pattern Name:** Portfolio Grid

- **Conversion Strategy:** Visuals first. Filter by category. Fast loading essential.
- **CTA Placement:** Project Card Hover + Footer Contact
- **Section Order:** 1. Hero (Name/Role), 2. Project Grid (Masonry), 3. About/Philosophy, 4. Contact

---

## Motion

**Stagger List** (Standard) — Trigger: viewport entry | Duration: 420ms | Easing: `cubic-bezier(0.22, 1, 0.36, 1)`

```js
const observer = new IntersectionObserver(showElement, { threshold: 0.12 });
```

**Framework notes:** A small IntersectionObserver adapter adds CSS classes; the page remains server-rendered and no animation library is shipped.

- ✅ Animate only opacity and transform.
- ✅ Disable transitions under `prefers-reduced-motion`.
- ❌ Do not add continuous decorative motion or scroll-jacking.

---

## Anti-Patterns (Do NOT Use)

- ❌ Corporate templates
- ❌ Generic layouts

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [x] No emojis used as icons (use SVG instead)
- [x] UI icons use Lucide; technology marks use official brand assets
- [x] Pointer and active feedback exist on clickable elements
- [x] Hover states use responsive 150-300ms transitions
- [x] Automated axe scan reports zero accessibility violations
- [x] Focus states are visible for keyboard navigation
- [x] `prefers-reduced-motion` is respected
- [x] Responsive behavior verified at 375px, 768px, 1024px, and 1440px
- [x] No content is hidden behind the sticky navigation
- [x] No horizontal scroll appears on mobile
