import { getTodayDisplay } from '../engine/seedManager.js';

export default function DailyBud({ onActivate, isActive }) {
  return (
    <div className="daily-bud-banner" role="region" aria-label="Daily Bud prompt">
      <div className="daily-bud-banner__text">
        🌱 <span className="daily-bud-banner__date">Today&apos;s Bud &mdash; {getTodayDisplay()}</span>
        <br />
        <small>Everyone gets the same prompt today. Try it!</small>
      </div>
      <button
        className="daily-bud-banner__btn"
        onClick={onActivate}
        disabled={isActive}
      >
        {isActive ? '✅ Active' : '🌼 Show Daily Bud'}
      </button>
    </div>
  );
}
