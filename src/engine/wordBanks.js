export const moods = [
  'sleepy', 'grumpy', 'excited', 'cozy', 'curious', 'proud', 'shy',
  'mischievous', 'dreamy', 'brave', 'cheerful', 'clumsy', 'tiny',
  'fluffy', 'determined', 'gentle', 'goofy', 'graceful', 'jolly',
  'lazy', 'lively', 'mysterious', 'nervous', 'peaceful', 'playful',
  'polite', 'round', 'silly', 'sparkly', 'stubborn', 'thoughtful',
  'whimsical', 'wise', 'wobbly', 'adventurous',
];

export const subjects = [
  'otter', 'cat', 'frog', 'hedgehog', 'bunny', 'axolotl', 'duck',
  'bear cub', 'fox', 'mushroom creature', 'ghost', 'penguin', 'capybara',
  'snail', 'hamster', 'owl', 'raccoon', 'deer', 'red panda', 'seal',
  'squirrel', 'turtle', 'bee', 'jellyfish', 'octopus', 'corgi',
  'chinchilla', 'bat', 'sheep', 'koala', 'chameleon', 'dragon',
  'panda', 'kitten', 'duckling', 'puppy', 'mouse', 'sparrow',
  'whale', 'starfish', 'ladybug', 'fennec fox',
];

export const actions = [
  'reading a tiny book', 'riding a bicycle', 'baking cookies',
  'painting a self-portrait', 'stargazing', 'napping in a hammock',
  'running a little shop', 'gardening', 'knitting a scarf',
  'flying a kite', 'pouring tea', 'writing a letter',
  'playing the ukulele', 'building a blanket fort', 'delivering mail',
  'having a picnic', 'making soup', 'arranging flowers',
  'doing laundry on a clothesline', 'ice skating',
  'catching fireflies', 'taking a bubble bath', 'mixing potions',
  'exploring a cave', 'dancing in the rain', 'opening a gift',
  'selling lemonade', 'learning to fly', 'cloud watching',
  'collecting seashells', 'roasting marshmallows', 'blowing bubbles',
  'drawing a map', 'watering plants', 'carrying an umbrella',
  'juggling fruit', 'stacking books', 'chasing butterflies',
  'feeding birds', 'folding origami', 'making friendship bracelets',
];

export const settings = [
  'in a mushroom forest', 'at a tiny café', 'under fairy lights',
  'on a cloud', 'in a cozy library', 'during a rainstorm',
  'at sunset', 'in a flower field', 'on a lily pad',
  'inside a teacup', 'in a treehouse', 'at a farmers market',
  'on a rooftop garden', 'in a hot air balloon', 'by a campfire',
  'in a snowy village', 'at the beach', 'in a greenhouse',
  'on a train', 'in a bakery', 'under a cherry blossom tree',
  'in a lantern-lit alley', 'at a night market', 'on a dock at dawn',
  'in an enchanted garden', 'inside a snow globe', 'at a pond',
  'in a cozy attic', 'under a rainbow', 'in a candy shop',
  'on a mossy log', 'at a lighthouse', 'in a meadow',
  'inside a hollow tree', 'at a carnival', 'in a secret garden',
  'on a windowsill', 'in a paper boat', 'under the stars',
  'at a bookshop', 'in a sunflower patch',
];

/** Affinity pairs: when subject + setting/action combo is found, boost charm. */
export const affinities = [
  { subject: 'frog', setting: 'on a lily pad' },
  { subject: 'bear cub', action: 'making soup' },
  { subject: 'owl', setting: 'in a cozy library' },
  { subject: 'bee', setting: 'in a flower field' },
  { subject: 'cat', action: 'napping in a hammock' },
  { subject: 'otter', setting: 'at a pond' },
  { subject: 'penguin', setting: 'in a snowy village' },
  { subject: 'bunny', setting: 'in a meadow' },
  { subject: 'fox', setting: 'in a mushroom forest' },
  { subject: 'duck', action: 'taking a bubble bath' },
  { subject: 'snail', action: 'delivering mail' },
  { subject: 'ghost', setting: 'in a lantern-lit alley' },
  { subject: 'jellyfish', setting: 'under fairy lights' },
  { subject: 'squirrel', action: 'stacking books' },
  { subject: 'corgi', action: 'running a little shop' },
];

/** Rare challenge strings (~5% chance). */
export const rareChallenges = [
  'Try drawing it in only 3 colors!',
  'Make it fit in a 2-inch square!',
  'Draw it without lifting your pen!',
  'Use only circles and curves — no straight lines!',
  'Draw it from a bird\'s-eye view!',
  'Make the whole scene fit inside a jar!',
  'Draw it as a rubber stamp design!',
  'Use only warm colors!',
  'Use only cool colors!',
  'Draw it as a postage stamp!',
  'Draw it upside down!',
  'Try a monochrome palette!',
  'Add a tiny hidden heart somewhere!',
  'Draw it as a sticker sheet!',
  'Make everything extra round and squishy!',
  'Draw it as a cozy pattern tile!',
  'Include a speech bubble with a single word!',
  'Draw it in a retro pixel style!',
];
