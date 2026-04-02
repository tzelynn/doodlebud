# DoodleBud — Build Plan

> *"A place for budding ideas"*

**DoodleBud** is a single-page drawing inspiration app that generates a cute, randomized doodle prompt and builds an entire mood board around it — complete with a whimsical description, curated inspiration images, and a harmonized color palette. Hosted as a static site on GitHub Pages.

---

## 1. Concept & Personality

DoodleBud should feel like opening a surprise gift box for your sketchbook. The tone is cozy, playful, and encouraging — never intimidating. The UI itself should look like something you'd want to doodle on.

Generate a creative, cute, simple tagline to go with the theme.

---

## 2. Core Features

### 2.1 — Doodle Prompt Generator
A combinatorial engine that assembles a cute, specific drawing prompt from word banks.

**Formula:** `[Mood/Style] + [Subject] + [Action] + [Setting/Prop]`

Examples of generated prompts:
- *"A sleepy otter reading a tiny book in a mushroom forest"*
- *"A grumpy little cactus wearing a beret at a café"*
- *"Two fluffy ducks sharing an oversized scarf on a rainy day"*
- *"A round hedgehog delivering mail on a bicycle through a flower field"*

**Word banks (minimum sizes):**

| Category | Examples | Min Count |
|---|---|---|
| Moods/Styles | sleepy, grumpy, excited, cozy, curious, proud, shy, mischievous, dreamy, brave | 30+ |
| Subjects | otter, cat, frog, hedgehog, bunny, axolotl, duck, bear cub, fox, mushroom creature, ghost, penguin, capybara, snail, hamster | 40+ |
| Actions | reading a book, riding a bicycle, baking cookies, painting, stargazing, napping, running a shop, gardening, knitting, flying a kite, pouring tea | 40+ |
| Settings/Props | in a mushroom forest, at a tiny café, under fairy lights, on a cloud, in a cozy library, during a rainstorm, at sunset, in a flower field, on a lily pad, inside a teacup | 40+ |

**Rules:**
- Some combos should have higher affinity weights (e.g. frog + lily pad, bear + honey) to occasionally produce extra-charming results
- Add a "rarity" system: ~5% of prompts get a ✨ sparkle badge and include a bonus challenge (e.g., "try drawing it in only 3 colors" or "make it fit in a 2-inch square")
- Allow the user to 🔒 lock individual parts (e.g., lock "cat" and re-roll everything else)

### 2.2 — Mood Board Panel
Once a prompt is generated, build a mood board containing:

#### A) The Prompt Card
- Display the full prompt in a hand-lettered or whimsical display font
- Show a small "difficulty" badge (Quickie / Comfy / Challenge) based on scene complexity
- Include a "copy prompt" button

#### B) Inspiration Image Grid
Since this is a static GitHub Pages site with no backend, use the **Unsplash API** (free tier, 50 req/hr for demo) for sourcing images.

**Strategy:**
- Extract 2-3 keywords from the generated prompt (subject + setting)
- Query Unsplash with those keywords
- Display 4-6 images in a Pinterest-style masonry grid
- Each image has a subtle hover overlay showing the photographer credit (Unsplash requirement)
- If Unsplash fails or rate-limits, fall back to a set of pre-bundled placeholder illustrations (include ~30 cute stock-free illustrations in the repo as fallback)

**API integration:**
```
GET https://api.unsplash.com/search/photos?query={keywords}&per_page=6&orientation=squarish
Headers: Authorization: Client-ID {ACCESS_KEY}
```

> **Note:** The Unsplash access key should be stored as a JS constant. Since this is a free public demo site and Unsplash's free tier is designed for this, this is acceptable. Add a `.env.example` and document the setup.

#### C) Color Palette Generator
Generate a 5-color palette that matches the mood of the prompt.

**Approach — curated palette library with mood-matching:**

1. Build a library of ~60 hand-curated palettes, each tagged with moods/themes:
   - `cozy`: warm ambers, cream, soft brown, dusty rose, sage
   - `rainy`: slate blue, lavender, pale grey, soft teal, cloud white
   - `forest`: moss green, bark brown, mushroom beige, fern, golden
   - `sunset`: peach, coral, warm gold, dusty purple, cream
   - `ocean`: deep navy, seafoam, sand, coral accent, sky blue
   - `sweet`: pastel pink, mint, lavender, butter yellow, peach
   - `spooky-cute`: purple, black, orange, ghost white, teal
   - etc.

2. Map prompt keywords to mood tags (e.g., "rainy day" → `rainy`, "café" → `cozy`, "forest" → `forest`)
3. Select 1-2 matching palettes and display them
4. For each palette, show:
   - 5 color swatches in a horizontal row
   - Hex codes (click-to-copy)
   - The palette's cute name (e.g., "Mushroom Morning", "Rainy Café Vibes")
5. Let the user click "shuffle palette" to get another mood-matched option

### 2.3 — Interaction & Polish

#### Re-roll Controls
- **Full re-roll**: Shake/regenerate everything (prompt + images + palette) with a single button — animate it in a stationery-themed way
- **Partial re-roll**: Lock icon on each section; lock the prompt and re-roll just the palette, etc.
- **History**: Keep last 5 generated prompts in a collapsible side drawer so users can go back

#### Save & Share
- **Download mood board**: Use `html2canvas` or similar to render the mood board as a PNG
- **Copy prompt**: One-click copy to clipboard
- **Share URL**: Encode the prompt seed into a URL hash so users can share a specific prompt (e.g., `DoodleBud.xyz/#seed=a3f8c2`)

#### Bonus: Daily Bud
- Use the current date as a seed to generate a consistent "daily prompt" that's the same for everyone
- Show it in a special banner: *"Today's Bud — April 2, 2026"*
- Community feel without needing a backend

---

## 3. Visual Design Direction

### Aesthetic: "Cozy Stationery Store"
Think: Japanese stationery shop meets a warm illustrator's desk. Textured paper backgrounds, washi-tape accents, soft shadows, rounded everything.

### Typography
- **Display / Prompt font**: A hand-drawn or rounded whimsical font — e.g., `Gaegu`, `Patrick Hand`, `Shantell Sans`, or `Architects Daughter` from Google Fonts. Pick ONE and commit.
- **Body / UI font**: A soft, rounded geometric sans — e.g., `Nunito`, `Quicksand`, or `Varela Round`
- **Monospace (hex codes)**: `JetBrains Mono` or `Fira Code` at a small size

### Color Theme
The site itself should use a warm, muted base palette:
- Background: Warm cream / off-white (`#FFF8F0`) with a subtle paper texture overlay (CSS noise or a tiling texture)
- Primary accent: Dusty rose or warm coral
- Secondary accent: Sage green or soft teal
- Text: Warm dark brown, not pure black (`#3D2C2C`)
- Subtle ink-splatter or watercolor decorative elements in corners

### Layout (Desktop)
```
┌──────────────────────────────────────────────────┐
│  🌸 DoodleBud            [Daily Bud] [About] │
├──────────────────────────────────────────────────┤
│                                                  │
│   ┌────────────────────────────────────────┐     │
│   │  ✏️  "A curious axolotl painting a     │     │
│   │      self-portrait in a cozy attic"    │     │
│   │                                        │     │
│   │  [🔒 mood] [🔒 subject] [🎲 re-roll]  │     │
│   └────────────────────────────────────────┘     │
│                                                  │
│   ┌─── Inspiration ──────┐ ┌── Palette ────────┐│
│   │ ┌────┐ ┌────┐ ┌────┐│ │                    ││
│   │ │    │ │    │ │    ││ │  Mushroom Morning  ││
│   │ └────┘ │    │ └────┘│ │  ■ ■ ■ ■ ■        ││
│   │ ┌────┐ └────┘ ┌────┐│ │                    ││
│   │ │    │ ┌────┐ │    ││ │  Rainy Attic       ││
│   │ └────┘ │    │ └────┘│ │  ■ ■ ■ ■ ■        ││
│   │        └────┘       │ │                    ││
│   │  [shuffle images]   │ │  [shuffle palette] ││
│   └─────────────────────┘ └────────────────────┘│
│                                                  │
│   [ 📸 Download Board ]  [ 🔗 Share Link ]      │
│                                                  │
├──────────────────────────────────────────────────┤
│   History: ← prompt 1 | prompt 2 | prompt 3 →   │
└──────────────────────────────────────────────────┘
```

### Layout (Mobile)
Stack vertically: Prompt card → Image grid (2-col) → Palettes → Actions. Sticky re-roll button at bottom of screen.

### Animations & Micro-interactions
- **Bud animation**: When generating, the prompt card should resemble a notebook opening, or some stationery-related unboxing.
- **Image grid**: Cards fade in with a staggered delay (masonry waterfall effect)
- **Palette swatches**: Slide in from the left, one after another
- **Re-roll button**: Wobble/shake on hover, spin on click
- **Color swatch click**: Brief "pop" scale animation + toast showing "Copied #FFA07A!"
- **Page load**: Subtle floating particles (tiny flowers, stars, or ink drops) using CSS-only animation — NOT a heavy canvas/particle library
- **Hover on prompt words**: Gentle underline or highlight to indicate they're lockable

### Decorative Details
- Washi-tape strips as section dividers (CSS pseudo-elements with a semi-transparent patterned image)
- Subtle paper-fold corner on the prompt card
- Tiny doodle icons (hand-drawn SVG style) for UI elements: a pencil for "generate", a camera for "download", a chain-link for "share"

---

## 4. Technical Architecture

### Stack
| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Vanilla HTML + CSS + JS** or **Single-file React (Vite)** | GitHub Pages serves static files. Vanilla keeps it zero-build if desired; Vite+React enables component structure if preferred. |
| Styling | **CSS Modules** or **Tailwind** (if using Vite) | Keep it scoped and maintainable |
| Image API | **Unsplash API** (free tier) | CORS-friendly, free, high-quality, attribution-friendly |
| Screenshot | **html2canvas** | Client-side mood board export |
| Hosting | **GitHub Pages** | Free, static, custom domain support |
| Font loading | **Google Fonts** | Free, reliable CDN |

### Recommended: Vite + React SPA
Since GitHub Pages supports SPAs via a `404.html` trick or `HashRouter`, and the site has meaningful interactive state (locks, history, palette shuffling), a lightweight React app via Vite is recommended.

```
DoodleBud/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg          # Doodle favicon
│   ├── og-image.png          # Social preview image
│   └── fallback-images/      # ~30 bundled illustration fallbacks
│       ├── cozy-01.webp
│       ├── forest-01.webp
│       └── ...
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              # Global styles, CSS variables, paper texture
│   │
│   ├── components/
│   │   ├── Header.jsx         # Logo, nav, daily bud badge
│   │   ├── PromptCard.jsx     # The main prompt display + lock toggles
│   │   ├── ImageGrid.jsx      # Masonry grid of inspiration images
│   │   ├── PalettePanel.jsx   # Color palette display + shuffle
│   │   ├── ActionBar.jsx      # Download, share, copy buttons
│   │   ├── HistoryDrawer.jsx  # Collapsible prompt history
│   │   ├── DailyBud.jsx     # Daily prompt banner
│   │   └── FloatingParticles.jsx  # Decorative background elements (CSS-driven)
│   │
│   ├── engine/
│   │   ├── promptGenerator.js    # Combinatorial prompt assembly
│   │   ├── wordBanks.js          # All word bank data
│   │   ├── paletteLibrary.js     # 60+ curated palettes with mood tags
│   │   ├── moodMapper.js         # Maps prompt keywords → mood tags
│   │   ├── seedManager.js        # Seeded RNG for shareable URLs + daily bud
│   │   └── unsplashClient.js     # Unsplash API wrapper with fallback logic
│   │
│   ├── hooks/
│   │   ├── usePrompt.js          # Prompt generation + locking state
│   │   ├── useMoodBoard.js       # Orchestrates prompt → images + palette
│   │   └── useHistory.js         # Manages last 5 prompts in sessionStorage
│   │
│   └── utils/
│       ├── clipboard.js          # Copy-to-clipboard helper
│       ├── downloadBoard.js      # html2canvas screenshot logic
│       └── seededRandom.js       # Deterministic RNG from seed string
│
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Actions: build Vite → deploy to gh-pages
```

### Seeded Randomness (Critical for Sharing + Daily Bud)
Use a simple seeded PRNG (e.g., mulberry32 or sfc32) so that:
- A seed string deterministically produces the same prompt + palette
- The share URL encodes the seed: `https://DoodleBud.github.io/#seed=a8f3c1`
- Daily Bud uses `YYYY-MM-DD` as the seed

```js
// Example: seededRandom.js
export function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return hash;
}
```

### Unsplash Integration
```js
// unsplashClient.js
const UNSPLASH_ACCESS_KEY = 'YOUR_KEY_HERE'; // from .env or config
const FALLBACK_IMAGES = import.meta.glob('/public/fallback-images/*.webp');

export async function fetchInspirationImages(keywords, count = 6) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keywords)}&per_page=${count}&orientation=squarish`,
      { headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` } }
    );
    if (!res.ok) throw new Error('Unsplash API error');
    const data = await res.json();
    return data.results.map(img => ({
      url: img.urls.small,
      alt: img.alt_description,
      credit: img.user.name,
      creditLink: img.user.links.html,
    }));
  } catch {
    // Graceful fallback to bundled images
    return getRandomFallbackImages(count);
  }
}
```

### GitHub Actions Deploy
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 5. Implementation Order

Build in this sequence so every phase produces a working, demoable site:

### Phase 1 — Core Engine (no UI yet)
1. Implement `seededRandom.js` with mulberry32
2. Build `wordBanks.js` with all four word banks (30-40+ entries each)
3. Build `promptGenerator.js` — takes a seed, returns a structured prompt object `{ mood, subject, action, setting, fullText, isRare }`
4. Build `paletteLibrary.js` — 60 curated palettes with mood tags
5. Build `moodMapper.js` — keyword-to-mood-tag mapping
6. Write unit tests / console demos for the engine

### Phase 2 — Static Layout & Styling
1. Set up Vite + React project scaffold
2. Implement `index.css` with full CSS variable system, paper texture background, font imports
3. Build `Header.jsx` with logo and placeholder nav
4. Build `PromptCard.jsx` — displays a hardcoded prompt, styled fully
5. Build `PalettePanel.jsx` — displays a hardcoded palette
6. Build placeholder `ImageGrid.jsx` with grey boxes
7. Responsive layout: test mobile + desktop
8. Add all decorative details: washi tape, paper fold, doodle icons

### Phase 3 — Wire Up Interactivity
1. Connect `usePrompt` hook → PromptCard (generation, re-roll, locking)
2. Connect `useMoodBoard` hook → palette selection via mood mapping
3. Implement lock toggles on prompt segments
4. Implement re-roll animations (shake, stagger)
5. Implement palette shuffle within mood-matched set
6. Build `HistoryDrawer.jsx` with sessionStorage persistence

### Phase 4 — Image Integration
1. Set up Unsplash API key and `unsplashClient.js`
2. Bundle ~30 fallback images in `/public/fallback-images/`
3. Wire `ImageGrid.jsx` to real Unsplash results with loading states
4. Implement masonry layout (CSS `columns` or a lightweight lib)
5. Add photographer credit overlays (Unsplash TOS compliance)
6. Implement image shuffle button

### Phase 5 — Sharing & Export
1. Implement `seedManager.js` — encode/decode seed from URL hash
2. Implement `DailyBud.jsx` using date-based seed
3. Implement "copy prompt" with clipboard API + toast notification
4. Implement "download board" using html2canvas
5. Implement "share link" — generate URL with seed hash, copy to clipboard
6. Add Open Graph meta tags for social previews

### Phase 6 — Polish & Deploy
1. Add all micro-interactions and transitions (see animation spec above)
2. Add `FloatingParticles.jsx` background
3. Accessibility pass: keyboard navigation, ARIA labels, color contrast, reduced-motion media query
4. Performance pass: lazy-load images, font-display: swap, preconnect to Unsplash/Google Fonts
5. SEO: meta tags, favicon, manifest.json
6. Set up GitHub Actions deploy pipeline
7. Test on mobile (iOS Safari, Android Chrome) and desktop (Chrome, Firefox, Safari)
8. Write `README.md` with setup instructions, Unsplash key config, and screenshots

---

## 6. Key Technical Decisions to Make Before Coding

| Decision | Option A | Option B | Recommendation |
|---|---|---|---|
| Framework | Vanilla JS | Vite + React | **React** — state management for locks, history, and mood board orchestration is cleaner |
| CSS approach | Plain CSS with variables | Tailwind | **Plain CSS** — more control over the handcrafted stationery aesthetic, avoids Tailwind's utility-class look |
| Image grid | CSS `columns` | `react-masonry-css` | **CSS columns** — zero dependency, good enough for 4-6 images |
| Screenshot | `html2canvas` | `dom-to-image` | **html2canvas** — more actively maintained, better browser support |
| Unsplash fallback | Pre-bundled images only | Unsplash + fallback | **Unsplash + fallback** — richer experience when online, graceful offline |

---

## 7. Content to Prepare Before Coding

These are pure data tasks that can be done in parallel or pre-generated:

- [ ] **Word banks**: 4 JSON arrays, 30-40+ items each, with optional affinity tags
- [ ] **Palette library**: 60 palettes, each with: `{ name, colors: [5 hex], moods: [tags] }`
- [ ] **Mood mapping table**: keyword → mood tag dictionary
- [ ] **Fallback images**: 30 freely-licensed cute/cozy illustrations (check Unsplash collections, unDraw, or generate with AI)
- [ ] **Rare prompt challenges**: 15-20 special challenge strings
- [ ] **Favicon & OG image**: Design a small cute doodle icon

---

## 8. Sample Palette Data (Starter Set)

```js
{
  name: "Mushroom Morning",
  colors: ["#C9B99A", "#E8D5B7", "#8B7355", "#A4C3A2", "#F5EDE0"],
  moods: ["forest", "cozy", "earthy"]
},
{
  name: "Rainy Window",
  colors: ["#7B9EB3", "#C4D4DF", "#4A6670", "#E8E4E1", "#A8C0C7"],
  moods: ["rainy", "calm", "dreamy"]
},
{
  name: "Strawberry Milk",
  colors: ["#F4A6B0", "#FCDEE2", "#D4708F", "#FFF5E8", "#F9D1C4"],
  moods: ["sweet", "playful", "cute"]
},
{
  name: "Midnight Garden",
  colors: ["#2C3E50", "#1ABC9C", "#E8D5B7", "#8E44AD", "#F39C12"],
  moods: ["magical", "night", "whimsical"]
}
```

---

## 9. Stretch Goals (Post-Launch)

- **Prompt categories**: Let users filter by theme (animals, food, fantasy, everyday)
- **Community gallery**: A simple GitHub-backed gallery where users submit their doodles via PR
- **Timer mode**: Optional 5/10/15-minute drawing timer with a gentle chime
- **Seasonal prompts**: Holiday-themed word banks that activate on certain dates
- **Palette from image**: Let users upload their own reference image and extract a palette using canvas color sampling
- **PWA**: Add service worker for offline prompt generation (images degrade to fallback)

---