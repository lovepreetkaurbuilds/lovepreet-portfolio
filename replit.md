# Lovepreet Kaur — Portfolio

A premium personal portfolio website for Lovepreet Kaur — Technology Builder in Progress · Software · Systems · Automation · AI · Real-World Problem Solving.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (served at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Animations: Framer Motion
- Theming: custom ThemeProvider (dark/light mode, persisted in localStorage)
- Icons: lucide-react, react-icons/si
- Command palette: cmdk
- Routing: wouter

## Where things live

- `artifacts/portfolio/src/` — all portfolio source code
- `artifacts/portfolio/src/data/` — typed content (projects.ts, skills.ts, timeline.ts)
- `artifacts/portfolio/src/context/` — ModeContext (Recruiter/Builder mode toggle)
- `artifacts/portfolio/src/components/sections/` — one component per section
- `artifacts/portfolio/src/components/layout/` — Navbar, Footer, CommandPalette, LoadingScreen
- `artifacts/portfolio/src/index.css` — full design system (colors, fonts, utilities)

## Real Links

- GitHub: https://github.com/lovepreetkaurbuilds
- LinkedIn: https://www.linkedin.com/in/lovepreetkaur10
- Email: lovepreetkaur090gsp@gmail.com

## Sections (in order)

1. Hero — Headline + rotating keywords + 5 CTA buttons (real links)
2. Builder Journey — Detailed timeline from 2019–2026 (education, work, recognition)
3. Why I Build — Narrative + positioning + personal note
4. Builder Toolkit — 9 skill categories (honest: used vs learning vs exploring)
5. Project Lab — 4 expandable projects with filter tabs
6. Work Experience — 5 experience cards + full role history
7. Learning Engine — 7-step cycle (Study → Ship) + 2026 focus
8. How I Approach Problems — 7 philosophy cards with hover reveals
9. Open To Work — Opportunity list + contact links + resume placeholder
10. Contact — Contact form (no backend — shows thank you message) + direct links
11. Footer — Real links throughout

## Special Features

- Dark/light mode toggle (persisted in localStorage)
- Recruiter/Builder mode toggle (Navbar) — condenses or expands narrative sections
- Command palette (Ctrl+K) — navigate all sections + open links
- Loading screen (1.6s fade)
- Rotating hero keywords (animates through 8 keywords)
- Smooth scroll navigation
- Framer Motion scroll-triggered entrance animations throughout
- Responsive (mobile, tablet, desktop)
- Contact form with thank-you state (no backend yet)

## Architecture decisions

- Presentation-first app — no backend required, all data is static TypeScript
- Ivory/navy/gold palette with Playfair Display serif + DM Sans sans-serif
- All content extracted to `src/data/` files for easy editing
- ModeContext drives Recruiter vs Builder view differences

## Gotchas

- Loading screen uses a 1.6s timer — hero animations start after it fades
- Resume download button shows a placeholder alert — replace with a real PDF link when ready
- Contact form simulates submission with a 1s delay — not connected to a backend
- `BuilderDashboard.tsx` is an older file that still exists but is no longer used — safe to delete

## User preferences

- No emojis in UI
- No skill bars or percentage bars
- Premium feel: Apple × Linear × GitHub × Personal Builder Journal
- White/ivory + deep navy + warm gold accent palette
- Real content only — no fake achievements, no placeholder stats
- Confident but humble tone — not senior-expert, not junior-generic
