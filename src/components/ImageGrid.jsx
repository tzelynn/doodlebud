const TAPE_POSITIONS = ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'top-left top-right'];
const ROTATIONS = [-3, 2, -1.5, 3, -2, 1];

export default function ImageGrid({ images, loading, onShuffle }) {
  return (
    <div className="image-panel">
      <div className="image-panel__title">
        <span>Inspiration</span>
        <button className="shuffle-btn" onClick={onShuffle} aria-label="Shuffle images">
          shuffle
        </button>
      </div>

      <div className="image-grid" role="list" aria-label="Inspiration images">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="image-grid__item" role="listitem">
                <div className="image-skeleton" />
              </div>
            ))
          : images.map((img, i) => (
              <div
                key={i}
                className={`image-grid__item image-grid__item--tape-${TAPE_POSITIONS[i % TAPE_POSITIONS.length].split(' ')[0]}`}
                role="listitem"
                style={{ '--rotation': `${ROTATIONS[i % ROTATIONS.length]}deg` }}
              >
                <div className="image-grid__frame">
                  {TAPE_POSITIONS[i % TAPE_POSITIONS.length].split(' ').map((pos, j) => (
                    <span key={j} className={`tape tape--${pos} tape--color-${(i + j) % 4}`} aria-hidden="true" />
                  ))}
                  <img
                    className="image-grid__img"
                    src={img.url}
                    alt={img.alt || 'Inspiration image'}
                    loading="lazy"
                  />
                </div>
                {!img.isFallback && (
                  <div className="image-grid__credit">
                    Photo by{' '}
                    <a href={img.creditLink} target="_blank" rel="noopener noreferrer">
                      {img.credit}
                    </a>
                  </div>
                )}
              </div>
            ))}
      </div>
    </div>
  );
}
