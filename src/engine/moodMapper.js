/**
 * Maps prompt keywords to mood tags for palette matching.
 */
const keywordToMoods = {
  // Settings
  'mushroom': ['forest', 'earthy', 'whimsical'],
  'forest': ['forest', 'earthy'],
  'café': ['cozy', 'warm'],
  'cafe': ['cozy', 'warm'],
  'library': ['cozy', 'calm'],
  'rain': ['rainy', 'calm'],
  'rainstorm': ['rainy', 'calm'],
  'sunset': ['sunset', 'warm', 'dreamy'],
  'flower': ['garden', 'sweet'],
  'lily pad': ['ocean', 'calm', 'garden'],
  'teacup': ['cozy', 'sweet', 'whimsical'],
  'cloud': ['dreamy', 'calm'],
  'fairy lights': ['magical', 'whimsical', 'night'],
  'treehouse': ['forest', 'adventurous'],
  'campfire': ['cozy', 'warm', 'night'],
  'snow': ['snowy', 'calm'],
  'beach': ['ocean', 'warm'],
  'greenhouse': ['garden', 'calm'],
  'train': ['adventurous', 'cozy'],
  'bakery': ['cozy', 'sweet', 'warm'],
  'cherry blossom': ['garden', 'sweet', 'dreamy'],
  'lantern': ['night', 'magical', 'warm'],
  'night market': ['night', 'bright', 'adventurous'],
  'rainbow': ['bright', 'playful', 'dreamy'],
  'candy': ['sweet', 'playful', 'cute'],
  'lighthouse': ['ocean', 'calm', 'adventurous'],
  'meadow': ['garden', 'calm', 'dreamy'],
  'garden': ['garden', 'calm'],
  'bookshop': ['cozy', 'calm'],
  'stars': ['night', 'dreamy', 'magical'],
  'sunflower': ['garden', 'warm', 'bright'],
  'hot air balloon': ['adventurous', 'dreamy', 'whimsical'],
  'pond': ['calm', 'garden'],
  'attic': ['cozy', 'mysterious'],
  'snow globe': ['snowy', 'whimsical', 'dreamy'],
  'carnival': ['bright', 'playful'],
  'windowsill': ['cozy', 'calm'],

  // Moods / styles
  'sleepy': ['calm', 'cozy', 'dreamy'],
  'cozy': ['cozy', 'warm'],
  'dreamy': ['dreamy', 'calm', 'magical'],
  'mischievous': ['playful', 'whimsical'],
  'brave': ['adventurous', 'bright'],
  'mysterious': ['mysterious', 'night', 'magical'],
  'shy': ['calm', 'sweet'],
  'sparkly': ['magical', 'whimsical', 'bright'],
  'playful': ['playful', 'bright', 'cute'],
  'grumpy': ['cozy', 'earthy'],
  'excited': ['bright', 'playful'],
  'curious': ['whimsical', 'adventurous'],
  'gentle': ['calm', 'sweet'],
  'silly': ['playful', 'cute', 'whimsical'],
  'whimsical': ['whimsical', 'dreamy'],
  'wise': ['calm', 'earthy', 'mysterious'],

  // Subjects
  'ghost': ['spooky', 'cute', 'whimsical'],
  'dragon': ['magical', 'adventurous'],
  'jellyfish': ['ocean', 'dreamy', 'magical'],
  'octopus': ['ocean', 'mysterious'],
  'whale': ['ocean', 'calm', 'dreamy'],
  'starfish': ['ocean', 'bright'],
  'bee': ['garden', 'sweet', 'bright'],
  'mushroom creature': ['forest', 'whimsical', 'earthy'],
  'bat': ['spooky', 'night', 'cute'],

  // Actions
  'stargazing': ['night', 'dreamy', 'magical'],
  'potions': ['magical', 'spooky', 'whimsical'],
  'bubble': ['playful', 'dreamy', 'sweet'],
  'fireflies': ['night', 'magical', 'dreamy'],
  'marshmallow': ['cozy', 'warm', 'sweet'],
  'baking': ['cozy', 'sweet', 'warm'],
  'cookies': ['cozy', 'sweet', 'warm'],
  'tea': ['cozy', 'calm', 'warm'],
  'knitting': ['cozy', 'warm'],
  'painting': ['whimsical', 'calm'],
  'dancing': ['playful', 'bright'],
  'ice skating': ['snowy', 'playful'],
  'origami': ['calm', 'whimsical'],
};

/**
 * Extract mood tags from a prompt object.
 * Returns an array of mood tags sorted by frequency (most relevant first).
 */
export function extractMoods(prompt) {
  const moodCounts = {};
  const text = `${prompt.mood} ${prompt.subject} ${prompt.action} ${prompt.setting}`.toLowerCase();

  // Check each keyword against the text
  for (const [keyword, moods] of Object.entries(keywordToMoods)) {
    if (text.includes(keyword.toLowerCase())) {
      for (const mood of moods) {
        moodCounts[mood] = (moodCounts[mood] || 0) + 1;
      }
    }
  }

  // Sort by count descending
  return Object.entries(moodCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([mood]) => mood);
}
