# Botox by Dr. Matla — React + Vite

A luxury aesthetic clinic website built with React 18, Vite 5, TypeScript, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    Header.tsx          — Fixed navigation with scroll-aware styling + mobile menu
    Hero.tsx            — Full-height hero with portrait + floating quote card
    BrandStatement.tsx  — "Less Frozen. More You." editorial section
    ConditionsExperience.tsx — Interactive conditions selector
    TreatmentStories.tsx — Alternating treatment rows with parallax
    DoctorSection.tsx   — Doctor portrait + credentials + stats
    ResultsGallery.tsx  — Before/after panel with area tabs
    Testimonials.tsx    — Editorial quote carousel
    FinalCTA.tsx        — Dark booking CTA section
    Footer.tsx          — Links, contact, socials
  App.tsx
  main.tsx
  index.css             — CSS custom properties (design tokens)
public/
  favicon.svg
  hero-campaign.png     ← ADD YOUR HERO IMAGE HERE
  assets/
    matla.jpg           ← ADD DOCTOR PHOTO HERE
```

## Adding Images

Two images need to be added to the `public/` folder:

| File | Purpose | Recommended size |
|------|---------|-----------------|
| `public/hero-campaign.png` | Hero section background portrait | 1200×1600px |
| `public/assets/matla.jpg` | Doctor portrait in DoctorSection | 800×1000px |

Without these images the sections will still render (gracefully empty), but adding them completes the design.

## Dependencies

- **react** + **react-dom** — UI framework
- **framer-motion** — Animations and scroll effects
- **lucide-react** — Icons (Instagram, Facebook in Footer)
- **vite** + **@vitejs/plugin-react** — Build tooling
- **typescript** — Type checking

## Design Tokens (CSS variables)

Defined in `src/index.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--cream` | `#F7F3EE` | Page background |
| `--cream-deep` | `#EDE8E0` | Section alternates |
| `--ink` | `#111111` | Primary text |
| `--ink-soft` | `#444444` | Body text |
| `--ink-muted` | `#888888` | Secondary text |
| `--gold` | `#B8955A` | Accent colour |
| `--font-display` | Cormorant Garamond | Headings |
| `--font-body` | Inter | Body text |

## Booking Link

All "Book" CTAs link to `https://www.fresha.com` — update this to your actual Fresha booking URL in each component.
