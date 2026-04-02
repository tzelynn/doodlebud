import { useState } from 'react';

export default function HistoryDrawer({ history, onSelect }) {
  const [open, setOpen] = useState(false);

  if (history.length === 0) return null;

  return (
    <div className="history">
      <button
        className="history__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="history-list"
      >
        <span className={`history__toggle-arrow ${open ? 'history__toggle-arrow--open' : ''}`}>
          ▶
        </span>
        Recent Prompts ({history.length})
      </button>

      {open && (
        <div className="history__list" id="history-list" role="list">
          {history.map((item, i) => (
            <button
              key={item.seed}
              className="history__item"
              onClick={() => onSelect(item.seed)}
              role="listitem"
            >
              {item.fullText}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
