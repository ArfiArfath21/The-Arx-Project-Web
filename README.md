# Arx — Landing Page

A premium, animation-rich SPA landing page for **Arx**, a personal memory layer for curious people who consume a lot and remember too little.

**Live preview:** Dark, minimal, typography-forward. No product screenshots — the copy carries it.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Animations | Framer Motion 12 (scroll-triggered reveals) |
| Fonts | Inter (body) + Space Grotesk (headlines), self-hosted variable `.woff2` |

No router, no backend, no SSR — it's a single-page static site.

---

## Project Structure

```
src/
  components/
    Navbar.tsx          # Fixed nav, frosted glass, anchor links, mobile hamburger
    Hero.tsx            # Full-viewport hero with staggered text reveals
    Problem.tsx         # Pain-point copy with styled blockquote
    HowItWorks.tsx      # 3-step vertical timeline with numbered badges
    CoreBehaviours.tsx  # 2x2 card grid (single column on mobile)
    Closing.tsx         # Final CTA with email capture
    EmailCapture.tsx    # Reusable email form (hero + closing variants)
    ScrollReveal.tsx    # Framer Motion animation wrapper (fade-up on scroll)
    Footer.tsx          # Minimal footer
  lib/
    constants.ts        # All page copy, centralized for easy editing
    api.ts              # Placeholder email submit (swap for real endpoint)
  styles/
    globals.css         # Tailwind import, @theme design tokens, @font-face
  App.tsx               # Page shell composing all sections
  main.tsx              # Entry point
public/
  fonts/                # Self-hosted Inter + Space Grotesk variable fonts
  favicon.svg           # Arx "A" favicon
landing_page.md         # Original copy & design brief
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build (http://localhost:4173)
npm run preview
```

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0a0a0a` | Page background |
| `--color-surface` | `#141414` | Cards, navbar |
| `--color-text` | `#e8e8e8` | Primary text |
| `--color-text-muted` | `#8a8a8a` | Secondary text |
| `--color-accent` | `#d4a853` | CTAs, highlights, brand |
| `--color-accent-hover` | `#e6be6a` | Hover state |

### Typography

- **Headlines:** Space Grotesk, 600-700 weight, fluid sizing via `clamp()`
- **Body:** Inter, 18px base, 1.7 line-height
- **Max content width:** `max-w-3xl` (~768px) for readable line lengths

### Animations

All scroll animations use Framer Motion's `useInView` with `once: true`:

- **Sections:** Fade up (y: 30 to 0), 700ms, custom ease-out
- **Staggered items:** 100-200ms delay between siblings
- **Pull quotes:** Fade + subtle scale (0.97 to 1.0)
- **Reduced motion:** Fully respected — animations disabled when `prefers-reduced-motion` is set

---

## Page Sections

1. **Hero** — Full-viewport with headline, subheadline, email capture CTA, and scroll hint
2. **The Problem** — Pain-point narrative with styled pull quote
3. **How It Works** — 3-step timeline (Capture → Build → Retrieve)
4. **Core Behaviours** — 4 cards: Capture, Active Recall, Thread, Daily Brief
5. **Closing** — Final CTA with waitlist email capture

---

## Key Architecture Decisions

### Centralized Copy (`lib/constants.ts`)
All page text lives in one file as typed constants. Edit copy without touching components. Sets up the pattern for future i18n.

### Reusable `EmailCapture` Component
Two variants (`hero` and `closing`) driven by props. Form state, validation, loading spinner, and success/error states are self-contained. The submit function in `lib/api.ts` is a placeholder — swap it for Resend, Mailchimp, Supabase, or any endpoint.

### `ScrollReveal` Wrapper
A single animation component wraps all content. Configurable `delay`, `direction`, and `once` props. Respects `prefers-reduced-motion` via Framer Motion's `useReducedMotion()`.

### No Build-Time Dependencies
No SSR framework needed. `vite build` outputs a static `dist/` folder deployable anywhere (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront).

---

## Accessibility

- Single `<h1>` in Hero, `<h2>` for each section
- Skip-to-content link (visible on focus)
- `aria-label` on forms and navigation
- Focus-visible ring on all interactive elements (accent color)
- WCAG AA color contrast (accent `#d4a853` on `#0a0a0a` = ~8.5:1)
- `prefers-reduced-motion` disables all animations
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<blockquote>`

---

## Deployment

Build produces a static `dist/` folder:

```bash
npm run build
```

Deploy to any static host. No server-side runtime needed.

**Vercel:** `npx vercel` (auto-detects Vite)
**Netlify:** Set build command to `npm run build`, publish directory to `dist`
**Cloudflare Pages:** Connect repo, build command `npm run build`, output `dist`

---

## Connecting Email Capture

The email form currently uses a placeholder in `src/lib/api.ts`. To connect a real service:

```ts
// src/lib/api.ts
export async function submitEmail(email: string): Promise<{ success: boolean }> {
  const res = await fetch("https://your-api.com/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return { success: res.ok };
}
```

---

## License

Private. All rights reserved.
