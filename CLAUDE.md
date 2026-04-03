# CLAUDE.md

## Project Overview

DoodleBud is a single-page React app (Vite) that generates randomized doodle prompts with mood boards. Hosted on GitHub Pages as a static site.

## Commands

- `npm run dev` — Start dev server (port 5173)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build
- No test runner is configured

## Architecture

**Engine layer** (`src/engine/`) — Pure functions, no React dependencies:
- `promptGenerator.js` — Assembles prompts from word banks using seeded PRNG. Handles affinity weighting (30% chance), rarity (5% chance), and difficulty scoring.
- `wordBanks.js` — Static data: moods (35), subjects (42), actions (41), settings (41), affinities (15), rareChallenges (18).
- `paletteLibrary.js` — 60+ palettes, each `{ name, colors: [5 hex], moods: [tags] }`.
- `moodMapper.js` — `extractMoods(prompt)` scans prompt text against ~60 keyword→mood-tag mappings.
- `seedManager.js` — URL hash read/write (`#seed=...`).
- `unsplashClient.js` — Fetches from Unsplash API, falls back to generated SVG data URIs.

**Hooks** (`src/hooks/`) — State management:
- `usePrompt` — Manages prompt, locks, seed. Reads initial seed from URL hash.
- `useMoodBoard` — Derives palettes + images from prompt. Uses AbortController for fetch cleanup.
- `useHistory` — Last 5 prompts in sessionStorage.

**Components** (`src/components/`) — UI layer. `App.jsx` is the root orchestrator.

**Utils** (`src/utils/`) — `seededRandom.js` (mulberry32 PRNG), `clipboard.js`, `downloadBoard.js` (lazy-loads html2canvas).

## Key Design Decisions

- **Seeded PRNG (mulberry32)** — Enables deterministic prompts from seed strings for sharing.
- **Plain CSS** — No CSS framework. Uses custom properties, paper texture via SVG noise filter, washi-tape dividers. Responsive breakpoints at 1024px, 768px, 480px. Reduced-motion media query supported.
- **No router** — Single page, URL hash used only for seed sharing via `history.replaceState`.
- **Unsplash fallback** — SVG placeholders generated with palette colors when API key is missing or requests fail.
- **html2canvas lazy-loaded** — Only imported when user clicks download (~200KB).

## Style / Conventions

- Functional React components with hooks (no classes)
- Named exports for hooks and engine functions, default exports for components
- CSS class naming: BEM-like (`prompt-card__badge--rare`)
- No TypeScript (JSX only), but `@types/react` included for editor support
- Environment variables prefixed with `VITE_` (Vite convention)

## Environment

- Unsplash API key goes in `.env` as `VITE_UNSPLASH_ACCESS_KEY` (optional — app works without it)
- `.env` is gitignored; `.env.example` documents the variable

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`): push to `main` triggers build and deploy to `gh-pages` branch via `peaceiris/actions-gh-pages@v3`.
