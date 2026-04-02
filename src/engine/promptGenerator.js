import { moods, subjects, actions, settings, affinities, rareChallenges } from './wordBanks.js';
import { pick, mulberry32, seedFromString } from '../utils/seededRandom.js';

/**
 * Generate a structured prompt object from a seed string.
 * Supports locking individual parts via the `locks` parameter.
 *
 * @param {string} seed - Seed string for deterministic generation.
 * @param {object} locks - Parts to keep locked, e.g. { subject: 'cat' }.
 * @returns {{ mood, subject, action, setting, fullText, isRare, challenge, seed }}
 */
export function generatePrompt(seed, locks = {}) {
  const rng = mulberry32(seedFromString(seed));

  const mood = locks.mood || pick(moods, rng);
  const subject = locks.subject || pick(subjects, rng);
  const action = locks.action || pick(actions, rng);
  const setting = locks.setting || pick(settings, rng);

  // Check affinity — if a natural pair exists, use it sometimes
  let finalAction = action;
  let finalSetting = setting;

  if (!locks.action && !locks.setting) {
    const matchingAffinity = affinities.find(
      (a) => a.subject === subject && (a.setting || a.action)
    );
    if (matchingAffinity && rng() < 0.3) {
      if (matchingAffinity.action) finalAction = matchingAffinity.action;
      if (matchingAffinity.setting) finalSetting = matchingAffinity.setting;
    }
  }

  // Rarity system: ~5% chance
  const isRare = rng() < 0.05;
  const challenge = isRare ? pick(rareChallenges, rng) : null;

  // Determine difficulty based on word count / complexity
  const wordCount = `${finalAction} ${finalSetting}`.split(/\s+/).length;
  let difficulty = 'Comfy';
  if (wordCount <= 5) difficulty = 'Quickie';
  else if (wordCount >= 9) difficulty = 'Challenge';

  const article = /^[aeiou]/i.test(mood) ? 'An' : 'A';
  const fullText = `${article} ${mood} ${subject} ${finalAction} ${finalSetting}`;

  return {
    mood,
    subject,
    action: finalAction,
    setting: finalSetting,
    fullText,
    isRare,
    challenge,
    difficulty,
    seed,
  };
}

/**
 * Generate a random seed string.
 */
export function randomSeed() {
  return Math.random().toString(36).substring(2, 10);
}
