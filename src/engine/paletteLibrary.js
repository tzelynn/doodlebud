const palettes = [
  // --- Cozy ---
  { name: 'Mushroom Morning', colors: ['#C9B99A', '#E8D5B7', '#8B7355', '#A4C3A2', '#F5EDE0'], moods: ['forest', 'cozy', 'earthy'] },
  { name: 'Cinnamon Toast', colors: ['#D4A373', '#FAEDCD', '#E9EDC9', '#CCD5AE', '#FEFAE0'], moods: ['cozy', 'warm', 'sweet'] },
  { name: 'Knitted Blanket', colors: ['#B07D62', '#E6CDB5', '#F0E5D8', '#C4A882', '#8B6F47'], moods: ['cozy', 'warm', 'earthy'] },
  { name: 'Honey & Oats', colors: ['#E8A87C', '#D27D2D', '#FFF1D0', '#C38D4A', '#F5E6CC'], moods: ['cozy', 'warm', 'sweet'] },
  { name: 'Fireside Chat', colors: ['#A0522D', '#CD853F', '#FFE4C4', '#DEB887', '#8B4513'], moods: ['cozy', 'warm', 'night'] },

  // --- Rainy ---
  { name: 'Rainy Window', colors: ['#7B9EB3', '#C4D4DF', '#4A6670', '#E8E4E1', '#A8C0C7'], moods: ['rainy', 'calm', 'dreamy'] },
  { name: 'Petrichor', colors: ['#6B8F9E', '#9DB4C0', '#C2D3DA', '#445B65', '#DDE7EB'], moods: ['rainy', 'earthy', 'calm'] },
  { name: 'Puddle Jumper', colors: ['#5F7A8A', '#8FAAB8', '#B5CCD6', '#3D5A6E', '#D6E4EB'], moods: ['rainy', 'playful', 'calm'] },
  { name: 'Grey Skies Latte', colors: ['#9EAEB5', '#D4C5A9', '#7A8B92', '#E8DCC8', '#5C6D74'], moods: ['rainy', 'cozy', 'calm'] },
  { name: 'Misty Morning', colors: ['#B0C4CE', '#DDE6EB', '#8AA2AE', '#6B8A99', '#EDF2F4'], moods: ['rainy', 'dreamy', 'calm'] },

  // --- Forest ---
  { name: 'Mossy Path', colors: ['#4A6741', '#8FBC8F', '#2E4A2E', '#C8D5B9', '#6B8E5A'], moods: ['forest', 'earthy', 'calm'] },
  { name: 'Fern & Bark', colors: ['#556B2F', '#8B7355', '#9ACD32', '#D2B48C', '#3A5F0B'], moods: ['forest', 'earthy', 'cozy'] },
  { name: 'Enchanted Grove', colors: ['#2D5A27', '#7CB342', '#A5D6A7', '#1B3B19', '#C8E6C9'], moods: ['forest', 'magical', 'dreamy'] },
  { name: 'Woodland Tea', colors: ['#5D7A4A', '#A8C08E', '#E8DCC8', '#3E5230', '#C9B99A'], moods: ['forest', 'cozy', 'earthy'] },
  { name: 'Acorn Basket', colors: ['#6B4226', '#A67B5B', '#4A7C59', '#D4B896', '#8D6E4C'], moods: ['forest', 'earthy', 'warm'] },

  // --- Sweet / Cute ---
  { name: 'Strawberry Milk', colors: ['#F4A6B0', '#FCDEE2', '#D4708F', '#FFF5E8', '#F9D1C4'], moods: ['sweet', 'playful', 'cute'] },
  { name: 'Pastel Dream', colors: ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF'], moods: ['sweet', 'playful', 'dreamy'] },
  { name: 'Cotton Candy', colors: ['#F8C8DC', '#C3B1E1', '#A7D8DE', '#F0E68C', '#F5F5DC'], moods: ['sweet', 'dreamy', 'cute'] },
  { name: 'Macaron Box', colors: ['#E8B4BC', '#C5D5EA', '#D4E09B', '#F6D186', '#B8D8D8'], moods: ['sweet', 'cute', 'playful'] },
  { name: 'Bubble Gum Pop', colors: ['#FF69B4', '#FF91A4', '#FFB6C1', '#FFC0CB', '#FFE4E1'], moods: ['sweet', 'playful', 'cute'] },

  // --- Sunset ---
  { name: 'Golden Hour', colors: ['#F4845F', '#F79D65', '#F7B267', '#F7D6A8', '#FAF0CA'], moods: ['sunset', 'warm', 'dreamy'] },
  { name: 'Peach Horizon', colors: ['#FFCBA4', '#FF9A76', '#F4A460', '#FFE0B2', '#FFF3E0'], moods: ['sunset', 'warm', 'calm'] },
  { name: 'Coral Sky', colors: ['#FF6F61', '#FF9A8B', '#FECFB8', '#F6D8AE', '#FDEFF4'], moods: ['sunset', 'warm', 'sweet'] },
  { name: 'Amber Glow', colors: ['#D4A017', '#E8B960', '#F0D58C', '#FFF8DC', '#BF8B2E'], moods: ['sunset', 'warm', 'cozy'] },
  { name: 'Dusk Palette', colors: ['#C56183', '#D4848C', '#E1A892', '#F0CCA8', '#FCF0C8'], moods: ['sunset', 'dreamy', 'calm'] },

  // --- Ocean / Beach ---
  { name: 'Tide Pool', colors: ['#1A535C', '#4ECDC4', '#F7FFF7', '#FF6B6B', '#FFE66D'], moods: ['ocean', 'playful', 'bright'] },
  { name: 'Sea Glass', colors: ['#A8D8DC', '#6FBDB5', '#448C8A', '#E0F2F1', '#2D6A6A'], moods: ['ocean', 'calm', 'dreamy'] },
  { name: 'Sandy Shore', colors: ['#F4E1C1', '#C4A77D', '#7EC8C8', '#436F8F', '#EDE0D4'], moods: ['ocean', 'warm', 'calm'] },
  { name: 'Deep Dive', colors: ['#0D1B2A', '#1B4965', '#5FA8D3', '#BEE9E8', '#62B6CB'], moods: ['ocean', 'mysterious', 'calm'] },
  { name: 'Coral Reef', colors: ['#FF7F50', '#40E0D0', '#FFD700', '#1E90FF', '#FFF8DC'], moods: ['ocean', 'bright', 'playful'] },

  // --- Night / Magical ---
  { name: 'Midnight Garden', colors: ['#2C3E50', '#1ABC9C', '#E8D5B7', '#8E44AD', '#F39C12'], moods: ['magical', 'night', 'whimsical'] },
  { name: 'Stargazer', colors: ['#191970', '#483D8B', '#B8860B', '#F5F5DC', '#6A5ACD'], moods: ['night', 'dreamy', 'magical'] },
  { name: 'Firefly Meadow', colors: ['#1A2030', '#2D4059', '#FFD460', '#F07B3F', '#EA5455'], moods: ['night', 'magical', 'warm'] },
  { name: 'Aurora Dreams', colors: ['#1B1464', '#3F51B5', '#00BCD4', '#8BC34A', '#CDDC39'], moods: ['night', 'magical', 'dreamy'] },
  { name: 'Moonlit Path', colors: ['#2C3E50', '#5D6D7E', '#AEB6BF', '#D5D8DC', '#F2F4F4'], moods: ['night', 'calm', 'mysterious'] },

  // --- Spooky-Cute ---
  { name: 'Friendly Ghost', colors: ['#6C3483', '#1C1C2E', '#F39C12', '#F5F5F5', '#1ABC9C'], moods: ['spooky', 'cute', 'whimsical'] },
  { name: 'Pumpkin Patch', colors: ['#FF8C00', '#4B0082', '#F5F5DC', '#228B22', '#DAA520'], moods: ['spooky', 'playful', 'earthy'] },
  { name: 'Witchy Brew', colors: ['#2D1B2E', '#6B3FA0', '#4CAF50', '#FF9800', '#E0E0E0'], moods: ['spooky', 'magical', 'mysterious'] },

  // --- Whimsical ---
  { name: 'Paper Crane', colors: ['#E8D5B7', '#D4A373', '#C97B63', '#8BAEA2', '#F5EDE0'], moods: ['whimsical', 'warm', 'cozy'] },
  { name: 'Stationery Set', colors: ['#F0C987', '#E8A87C', '#85C1DC', '#95D5B2', '#F5E6CC'], moods: ['whimsical', 'playful', 'cute'] },
  { name: 'Watercolor Wash', colors: ['#DCBFFF', '#B5D8FF', '#FFECB3', '#FFD6D6', '#C8F7C5'], moods: ['whimsical', 'dreamy', 'sweet'] },
  { name: 'Chalk Doodles', colors: ['#FFB5BA', '#A0D2FF', '#BFFCC6', '#FFFFBA', '#DCC6FF'], moods: ['whimsical', 'playful', 'cute'] },
  { name: 'Fairy Floss', colors: ['#E0BBE4', '#957DAD', '#D291BC', '#FEC8D8', '#FFDFD3'], moods: ['whimsical', 'dreamy', 'sweet'] },

  // --- Calm / Zen ---
  { name: 'Morning Zen', colors: ['#E8E4E1', '#C9C0B6', '#A39B8B', '#7D7568', '#F5F2EF'], moods: ['calm', 'earthy', 'cozy'] },
  { name: 'Soft Linen', colors: ['#F5F0EB', '#E8DDD3', '#D4C5B2', '#BFA88F', '#A89074'], moods: ['calm', 'warm', 'cozy'] },
  { name: 'Cloud Nine', colors: ['#F0F4F8', '#D9E2EC', '#BCCCDC', '#9FB3C8', '#829AB1'], moods: ['calm', 'dreamy', 'rainy'] },
  { name: 'Lavender Fields', colors: ['#E6E6FA', '#D8BFD8', '#DDA0DD', '#BA55D3', '#9370DB'], moods: ['calm', 'dreamy', 'magical'] },

  // --- Bright / Adventurous ---
  { name: 'Explorer\'s Pack', colors: ['#2E86AB', '#A23B72', '#F18F01', '#C73E1D', '#3B1F2B'], moods: ['bright', 'adventurous', 'playful'] },
  { name: 'Festival Day', colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'], moods: ['bright', 'playful', 'cute'] },
  { name: 'Juice Box', colors: ['#FF6F61', '#FFD166', '#06D6A0', '#118AB2', '#EF476F'], moods: ['bright', 'playful', 'sweet'] },
  { name: 'Crayon Box', colors: ['#FF4444', '#FF8844', '#FFDD44', '#44DD44', '#4488FF'], moods: ['bright', 'playful', 'whimsical'] },

  // --- Snowy / Winter ---
  { name: 'First Snowfall', colors: ['#E8EDF0', '#C7D3D9', '#94A7B0', '#5B7B8A', '#3A5564'], moods: ['snowy', 'calm', 'cozy'] },
  { name: 'Hot Cocoa', colors: ['#5C3317', '#8B6347', '#D4A76A', '#F5E6CC', '#FFFAF0'], moods: ['snowy', 'cozy', 'warm'] },
  { name: 'Frosted Berries', colors: ['#C9414D', '#8B1A2B', '#E8D5D5', '#4A7C7E', '#D4E6E7'], moods: ['snowy', 'sweet', 'bright'] },

  // --- Garden / Spring ---
  { name: 'Cherry Blossom', colors: ['#FFB7C5', '#FF85A1', '#FFF0F3', '#8DB48E', '#F5E6CC'], moods: ['garden', 'sweet', 'dreamy'] },
  { name: 'Herb Garden', colors: ['#6B8E23', '#9ACD32', '#F0E68C', '#DEB887', '#8FBC8F'], moods: ['garden', 'earthy', 'calm'] },
  { name: 'Sunflower Field', colors: ['#FFD700', '#DAA520', '#228B22', '#8B4513', '#FFF8DC'], moods: ['garden', 'warm', 'bright'] },
  { name: 'Wildflower Mix', colors: ['#DA70D6', '#FF6347', '#FFD700', '#32CD32', '#6495ED'], moods: ['garden', 'bright', 'playful'] },
  { name: 'Dewy Morning', colors: ['#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#E8F5E9'], moods: ['garden', 'calm', 'dreamy'] },

  // --- Marketplace / Urban ---
  { name: 'Night Market', colors: ['#1A1A2E', '#E94560', '#F0A500', '#16213E', '#F5F5F5'], moods: ['night', 'bright', 'adventurous'] },
  { name: 'Café Corner', colors: ['#6F4E37', '#C4A77D', '#ECE0D1', '#DBC1AC', '#967259'], moods: ['cozy', 'warm', 'earthy'] },
  { name: 'Bookshop Nook', colors: ['#654321', '#A0522D', '#DEB887', '#F5F5DC', '#8B7355'], moods: ['cozy', 'earthy', 'calm'] },
];

export default palettes;
