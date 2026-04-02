/**
 * Read seed from URL hash. Format: #seed=abc123
 */
export function getSeedFromURL() {
  const hash = window.location.hash;
  const match = hash.match(/seed=([^&]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Write seed to URL hash without triggering a page reload.
 */
export function setSeedInURL(seed) {
  window.history.replaceState(null, '', `#seed=${encodeURIComponent(seed)}`);
}

/**
 * Get today's date string for the Daily Bud seed.
 */
export function getDailyBudSeed() {
  const today = new Date();
  return `daily-${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

/**
 * Get a formatted date string for display.
 */
export function getTodayDisplay() {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
