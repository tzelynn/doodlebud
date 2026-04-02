const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || '';

const fallbackImages = [
  { url: '', alt: 'Cozy illustration', credit: 'DoodleBud', creditLink: '#', isFallback: true, mood: 'cozy' },
  { url: '', alt: 'Forest illustration', credit: 'DoodleBud', creditLink: '#', isFallback: true, mood: 'forest' },
  { url: '', alt: 'Rainy day illustration', credit: 'DoodleBud', creditLink: '#', isFallback: true, mood: 'rainy' },
  { url: '', alt: 'Sweet illustration', credit: 'DoodleBud', creditLink: '#', isFallback: true, mood: 'sweet' },
  { url: '', alt: 'Ocean illustration', credit: 'DoodleBud', creditLink: '#', isFallback: true, mood: 'ocean' },
  { url: '', alt: 'Night illustration', credit: 'DoodleBud', creditLink: '#', isFallback: true, mood: 'night' },
];

/**
 * Generate placeholder SVG data URIs as fallback images.
 */
function generatePlaceholderSvg(text, colors) {
  const bg = colors[0] || '#F5EDE0';
  const fg = colors[1] || '#8B7355';
  const accent = colors[2] || '#A4C3A2';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect width="400" height="400" fill="${bg}"/>
    <circle cx="200" cy="160" r="80" fill="${accent}" opacity="0.5"/>
    <circle cx="160" cy="200" r="60" fill="${fg}" opacity="0.3"/>
    <circle cx="240" cy="220" r="50" fill="${accent}" opacity="0.4"/>
    <text x="200" y="340" text-anchor="middle" font-family="Patrick Hand, cursive" font-size="20" fill="${fg}">${text}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Fetch inspiration images from Unsplash, falling back to generated placeholders.
 */
export async function fetchInspirationImages(keywords, count = 6, paletteColors = []) {
  if (UNSPLASH_ACCESS_KEY) {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keywords)}&per_page=${count}&orientation=squarish&order_by=relevant&content_filter=high`,
        { headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` } }
      );
      if (!res.ok) throw new Error('Unsplash API error');
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        return data.results.map((img) => ({
          url: img.urls.small,
          alt: img.alt_description || keywords,
          credit: img.user.name,
          creditLink: `${img.user.links.html}?utm_source=doodlebud&utm_medium=referral`,
        }));
      }
    } catch {
      // Fall through to fallback
    }
  }

  return getPlaceholderImages(keywords, count, paletteColors);
}

function getPlaceholderImages(keywords, count, colors) {
  const words = keywords.split(' ');
  const images = [];
  for (let i = 0; i < count; i++) {
    const word = words[i % words.length] || 'inspire';
    images.push({
      url: generatePlaceholderSvg(word, colors.length ? colors : ['#F5EDE0', '#8B7355', '#A4C3A2']),
      alt: `${word} inspiration`,
      credit: 'DoodleBud',
      creditLink: '#',
      isFallback: true,
    });
  }
  return images;
}
