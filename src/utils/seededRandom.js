/**
 * Mulberry32 — a fast, seedable 32-bit PRNG.
 * Returns a function that produces numbers in [0, 1).
 */
export function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Convert an arbitrary string to a numeric seed via simple hash.
 */
export function seedFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return hash;
}

/**
 * Pick a random item from an array using the given RNG function.
 */
export function pick(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}

/**
 * Shuffle an array in place using Fisher-Yates with the given RNG.
 */
export function shuffle(arr, rng) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
