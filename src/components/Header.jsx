export default function Header({ onDailyBud, isDailyMode }) {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-icon" aria-hidden="true">🌸</span>
        <span className="header__logo-text">DoodleBud</span>
        <span className="header__tagline">small ideas for big doodles</span>
      </div>
      <nav className="header__nav" aria-label="Main navigation">
        <button
          className={`header__btn ${isDailyMode ? 'header__btn--active' : ''}`}
          onClick={onDailyBud}
          aria-pressed={isDailyMode}
        >
          🌱 Today&apos;s Bud
        </button>
      </nav>
    </header>
  );
}
