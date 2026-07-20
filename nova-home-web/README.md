# Nova Home — Website

Official marketing site for **Nova Home**, a personal AI-powered smart home
ecosystem. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and
Framer Motion.

## Getting Started

Requires **Node.js 20+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project Structure

```
app/
  layout.tsx               Root layout — fonts, metadata, JSON-LD, SkipLink, MotionProvider
  page.tsx                 Home page — composes all sections, code-splits below-the-fold ones
  globals.css               Tailwind layers + global CSS (focus ring, scroll offset, color tokens)
  opengraph-image.tsx        Dynamically generated OG/social preview image (edge runtime)
  robots.ts / sitemap.ts     SEO routes
  not-found.tsx               Custom 404

components/
  layout/
    Navbar.tsx                Fixed glass navbar, active-section highlighting
    MobileMenu.tsx             Mobile nav drawer (dialog semantics, focus/scroll lock, Esc-to-close)
    SkipLink.tsx                "Skip to content" link for keyboard/screen-reader users
    Footer.tsx                  Site footer
    ClosingCta.tsx               Final call-to-action band before the footer
  providers/
    MotionProvider.tsx          Wraps the app in MotionConfig so Framer Motion respects
                                 prefers-reduced-motion (CSS overrides alone can't reach it)
  hero/
    Hero.tsx                    Hero copy, layout, entrance animation
    AiOrb.tsx                    Signature animated orb — pure CSS keyframes, zero client JS
    ParticleField.tsx            Ambient particle drift — pure CSS keyframes, zero client JS
  features/                    FeatureGrid, FeatureCard
  ecosystem/                   EcosystemSection, EcosystemDiagram (hub-and-spoke, the site's
                                signature element — mirrors the real Nova architecture)
  screenshots/                 ScreenshotsShowcase, PhoneMockup
  roadmap/                     RoadmapTimeline
  faq/                         FaqAccordion
  ui/
    Section.tsx                 Shared section wrapper (id, padding, optional Container)
    Container.tsx                Max-width layout primitive
    SectionHeading.tsx            Eyebrow + title + description, with scroll-reveal built in
    Button.tsx                    Primary/ghost pill button

hooks/
  useActiveSection.ts          IntersectionObserver-based "which section is in view" tracker

lib/
  data.ts                      All site copy & content: features, ecosystem nodes, roadmap
                                items, FAQ. Edit this file to change content without touching
                                component code.
  motion.ts                    Single source of truth for easing, durations, viewport
                                thresholds, and reveal variants — every scroll animation on
                                the site pulls from here instead of hardcoding literals.

public/logo/                   Official Nova logo assets (provided, unedited)
```

## Design System

Tokens live in `tailwind.config.ts` under `theme.extend.colors.nova` /
`fontFamily` / `boxShadow` / `keyframes`. `app/globals.css` derives its own
colors from the same tokens via Tailwind's `theme()` CSS function instead of
duplicating hex values — there is exactly one place that defines the
palette. Do not hardcode hex values or one-off animations inside
components; extend the config instead so the system stays consistent as the
site grows.

- **Colors**: `nova-bg`, `nova-surface`, `nova-cyan` (#00E5FF), `nova-violet`
  (#6E56CF), plus muted text tones. Dark background is fixed, no light theme.
- **Type**: `font-display` (Space Grotesk, headlines), `font-body` (Inter,
  copy), `font-mono` (JetBrains Mono, eyebrows/labels/data — reinforces the
  "system readout" feel appropriate for a smart-home OS).
- **Motion**: `lib/motion.ts` exports `EASE_STANDARD`, `VIEWPORT_ONCE`,
  `transition()`, `fadeUp()`, `fadeScale()` — every scroll-triggered reveal
  in the codebase uses these instead of inline easing curves, so timing
  stays identical everywhere by construction, not by convention.
- **Signature element**: the hub-and-spoke diagram in `EcosystemDiagram.tsx`
  mirrors the real Nova architecture (Nova Core at the center, every module
  as a spoke) rather than a generic illustration.

## Performance

- Ambient, always-on motion (the hero orb's rings, the orbiting node, the
  36-particle field) runs as plain CSS `@keyframes`, not Framer Motion
  tweens — it's handled by the compositor instead of ticking on the main
  thread every frame. `AiOrb` and `ParticleField` need zero client JS.
- Framer Motion is reserved for what actually needs it: one-shot entrance
  animations and scroll-triggered reveals.
- Below-the-fold sections (`Ecosystem`, `Screenshots`, `Roadmap`, `FAQ`,
  `ClosingCta`) are code-split with `next/dynamic` so the hero isn't
  waiting behind JS for content the user hasn't scrolled to yet. They still
  render on the server — this only changes bundle splitting.
- Fonts load via `next/font/google`, which self-hosts and subsets them at
  build time — no render-blocking font requests, no layout shift.

## Accessibility

- Skip-to-content link, landmark roles (`header`, `nav`, `main`, `footer`),
  visible focus rings on every interactive element.
- `MotionConfig reducedMotion="user"` in `MotionProvider` makes Framer
  Motion — not just CSS — defer to the OS `prefers-reduced-motion` setting.
  A matching CSS block in `globals.css` catches everything else (native
  `animation`/`transition`, including the orb and particle keyframes).
- FAQ accordion uses the standard heading-wraps-button pattern with
  `aria-expanded` / `aria-controls` / `aria-labelledby`.
- Decorative visuals (particle field, orb rings, phone mockup UI, diagram
  connector lines) are marked `aria-hidden`; the ecosystem diagram's module
  list and roadmap timeline use real `<ul>`/`<ol>` semantics.
- Mobile nav is a proper dialog: focus stays sensible, body scroll locks
  while open, `Escape` closes it.

## SEO

- Per-page metadata via the App Router `metadata`/`viewport` exports,
  canonical URL, `robots.ts`/`sitemap.ts` routes.
- `app/opengraph-image.tsx` generates the social preview image on the fly
  (edge runtime, no static asset to keep in sync with the design).
- Organization JSON-LD in the root layout.

## Replacing Placeholders

| Placeholder | Location | Replace with |
|---|---|---|
| Phone mockup UI | `components/screenshots/PhoneMockup.tsx` | Real app screenshots via `next/image`, keep the phone frame markup |
| Logo assets | `public/logo/*.png` | Already the real Nova logo — swap only if the brand mark changes |
| Documentation / GitHub links | `components/layout/Footer.tsx`, `Navbar.tsx` | Real URLs once published |
| Copy (features, roadmap, FAQ) | `lib/data.ts` | Edit directly, no component changes needed |
| `novahome.my.id` | `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx` | Final production domain |

Nothing renders broken if left as-is — every placeholder is a working
component with realistic content, not a TODO stub.

## Notes

- No component exceeds a single responsibility — sections are composed in
  `app/page.tsx`, not built as one large file.
- If self-hosting (not deploying to Vercel), consider adding `sharp` as a
  dependency for faster production image optimization — Next falls back to
  a slower WASM path without it, but works correctly either way.

---

Built with ❤️ by Ragil.
