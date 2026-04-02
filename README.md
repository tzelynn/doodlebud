# DoodleBud

> *A place for budding ideas*

DoodleBud is a single-page drawing inspiration app that generates cute, randomized doodle prompts and builds mood boards around them — complete with curated color palettes and inspiration images.

Built with React + Vite. Designed for GitHub Pages.

## Features

- **Prompt Generator** — Combinatorial engine assembling prompts from `[Mood] + [Subject] + [Action] + [Setting]` with 35+ moods, 42+ subjects, 41+ actions, and 41+ settings
- **Lock & Re-roll** — Lock individual prompt parts and re-roll the rest
- **Mood Board** — Auto-generated color palettes and inspiration images matched to each prompt's mood
- **60+ Color Palettes** — Hand-curated, mood-tagged palettes with click-to-copy hex codes
- **Inspiration Images** — Unsplash API integration with SVG placeholder fallbacks
- **Daily Bud** — Date-seeded daily prompt, same for everyone
- **Shareable Links** — Seed-based URL hashes for sharing specific prompts
- **Download** — Export the full mood board as a PNG via html2canvas
- **Rarity System** — ~5% of prompts get a sparkle badge with a bonus challenge
- **Session History** — Last 5 prompts stored in sessionStorage

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
git clone https://github.com/your-username/doodlebud.git
cd doodlebud
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Unsplash API (Optional)

The app works without an API key — it falls back to generated SVG placeholders. For real inspiration images:

1. Create a free account at [unsplash.com/developers](https://unsplash.com/developers)
2. Create a new app to get an Access Key
3. Copy `.env.example` to `.env` and add your key:

```
VITE_UNSPLASH_ACCESS_KEY=your_key_here
```

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

### Deploy to GitHub Pages

Push to `main` — the included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.

## Project Structure

```
src/
  components/       UI components
    Header.jsx        Logo, tagline, Today's Bud button
    PromptCard.jsx    Prompt display with lock toggles
    ImageGrid.jsx     Masonry inspiration image grid
    PalettePanel.jsx  Color palette swatches
    ActionBar.jsx     Copy, download, share buttons
    HistoryDrawer.jsx Recent prompt history
    DailyBud.jsx      Daily prompt banner
    FloatingParticles.jsx  Decorative CSS particles
    Toast.jsx         Toast notifications

  engine/           Core logic
    promptGenerator.js  Combinatorial prompt assembly
    wordBanks.js        Word bank data + affinities
    paletteLibrary.js   60+ curated palettes
    moodMapper.js       Keyword-to-mood mapping
    seedManager.js      URL hash seed management
    unsplashClient.js   Unsplash API + fallback

  hooks/            React hooks
    usePrompt.js      Prompt state + locking
    useMoodBoard.js   Palette + image orchestration
    useHistory.js     Session history

  utils/            Helpers
    seededRandom.js   Mulberry32 PRNG
    clipboard.js      Copy-to-clipboard
    downloadBoard.js  html2canvas export
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite 5 |
| Styling | Plain CSS with custom properties |
| Images | Unsplash API (free tier) + SVG fallbacks |
| Export | html2canvas (lazy-loaded) |
| Fonts | Google Fonts — Patrick Hand, Nunito, JetBrains Mono |
| Hosting | GitHub Pages via GitHub Actions |

## License

MIT
