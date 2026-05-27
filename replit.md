# Lovepreet Kaur — Portfolio

A premium personal portfolio website for Lovepreet Kaur — Technology Builder, Systems Thinker, Practical Problem Solver.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (served at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Animations: Framer Motion
- Theming: next-themes (dark/light mode)
- Icons: lucide-react, react-icons/si
- Command palette: cmdk
- Routing: wouter

## Where things live

- `artifacts/portfolio/src/` — all portfolio source code
- `artifacts/portfolio/src/data/` — typed content data (projects, skills, timeline)
- `artifacts/portfolio/src/components/sections/` — one component per section
- `artifacts/portfolio/src/components/layout/` — Navbar, Footer, CommandPalette, LoadingScreen
- `artifacts/portfolio/src/index.css` — full design system (colors, fonts, utilities)

## Architecture decisions

- Presentation-first app — no backend required, all data is static TypeScript
- Ivory/navy/gold palette with Playfair Display serif + DM Sans sans-serif
- All section content extracted to `src/data/` files for easy editing
- Command palette (Ctrl+K) for keyboard navigation between sections
- Loading screen fades out after 1.6s before hero appears

## Product

A single-page portfolio with 8 sections: cinematic hero, WHY I BUILD narrative with timeline, Builder Dashboard (skills as interactive cards), Project Lab (OS-dashboard style with expandable projects), Learning Engine (interactive roadmap), How I Think (process philosophy), Current Mission (2026 focus), and Work With Me (contact).

## User preferences

- No emojis in UI
- No skill bars or percentage bars
- Premium feel: Apple × Linear × GitHub × Personal Builder Journal
- White/ivory + deep navy + warm gold accent palette
- Real content only — no fake achievements, no placeholder stats

## Gotchas

- Loading screen uses a 1.6s timer — hero animations are delayed to start after it fades
- Hero canvas animation uses requestAnimationFrame — performance-safe
- All social links (GitHub, LinkedIn, email) use placeholder URLs — update in `WorkWithMe.tsx` and `CommandPalette.tsx`
- Resume download button in WorkWithMe.tsx shows an alert — replace with a real PDF link

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
