import { useState } from 'react';

const PARTS = ['mood', 'subject', 'action', 'setting'];

export default function PromptCard({ prompt, locks, onToggleLock, onReroll }) {
  const [spinning, setSpinning] = useState(false);

  if (!prompt) return null;

  const handleReroll = () => {
    setSpinning(true);
    onReroll();
    setTimeout(() => setSpinning(false), 500);
  };

  return (
    <div className="prompt-card" role="region" aria-label="Doodle prompt">
      <span className="prompt-card__tape" aria-hidden="true" />
      <div className="prompt-card__badges">
        <span className="prompt-card__badge prompt-card__badge--difficulty">
          {prompt.difficulty === 'Quickie' && '✏️'}
          {prompt.difficulty === 'Comfy' && '🛋️'}
          {prompt.difficulty === 'Challenge' && '🎨'}
          {' '}{prompt.difficulty}
        </span>
        {prompt.isRare && (
          <span className="prompt-card__badge prompt-card__badge--rare">
            ✨ Rare Bud!
          </span>
        )}
      </div>

      <p className="prompt-card__text">
        &ldquo;
        {PARTS.map((part) => (
          <span key={part}>
            <span
              className={`prompt-word ${locks[part] ? 'prompt-word--locked' : ''}`}
              onClick={() => onToggleLock(part)}
              title={locks[part] ? `Unlock ${part}` : `Lock ${part}`}
              role="button"
              tabIndex={0}
              aria-label={`${locks[part] ? 'Unlock' : 'Lock'} ${part}: ${prompt[part]}`}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onToggleLock(part))}
            >
              {part === 'mood'
                ? (/^[aeiou]/i.test(prompt.mood) ? 'An ' : 'A ') + prompt[part]
                : prompt[part]}
            </span>
            {part !== 'setting' ? ' ' : ''}
          </span>
        ))}
        &rdquo;
      </p>

      {prompt.isRare && prompt.challenge && (
        <div className="prompt-card__challenge">
          ✨ Bonus Challenge: {prompt.challenge}
        </div>
      )}

      <div className="prompt-card__controls">
        {PARTS.map((part) => (
          <button
            key={part}
            className={`lock-btn ${locks[part] ? 'lock-btn--active' : ''}`}
            onClick={() => onToggleLock(part)}
            aria-pressed={!!locks[part]}
          >
            {locks[part] ? '🔒' : '🔓'} {part}
          </button>
        ))}
        <button
          className={`reroll-btn ${spinning ? 'reroll-btn--spinning' : ''}`}
          onClick={handleReroll}
          aria-label="Generate new prompt"
        >
          <span className="reroll-btn__icon" aria-hidden="true">🎲</span>
          Re-roll
        </button>
      </div>
    </div>
  );
}
