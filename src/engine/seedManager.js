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