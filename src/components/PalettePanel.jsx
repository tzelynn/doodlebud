import { useState } from 'react';
import { copyToClipboard } from '../utils/clipboard.js';

export default function PalettePanel({ palettes, onShuffle, onToast }) {
  return (
    <div className="palette-panel">
      <div className="palette-panel__title">
        <span>🎨 Palette</span>
        <button className="shuffle-btn" onClick={onShuffle} aria-label="Shuffle palette">
          🔀 shuffle
        </button>
      </div>

      {palettes.map((palette, idx) => (
        <PaletteGroup key={`${palette.name}-${idx}`} palette={palette} onToast={onToast} />
      ))}
    </div>
  );
}

function PaletteGroup({ palette, onToast }) {
  const handleCopy = async (hex) => {
    const ok = await copyToClipboard(hex);
    if (ok) onToast(`Copied ${hex}!`);
  };

  return (
    <div className="palette-group">
      <div className="palette-group__name">{palette.name}</div>
      <div className="palette-swatches">
        {palette.colors.map((color) => (
          <button
            key={color}
            className="palette-swatch"
            style={{ backgroundColor: color }}
            onClick={() => handleCopy(color)}
            title={`Copy ${color}`}
            aria-label={`Copy color ${color}`}
          />
        ))}
      </div>
      <div className="palette-hex">
        {palette.colors.map((color) => (
          <button
            key={color}
            className="palette-hex__code"
            onClick={() => handleCopy(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}
