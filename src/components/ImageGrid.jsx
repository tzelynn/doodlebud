export default function ImageGrid({ images, loading, onShuffle }) {
  return (
    <div className="image-panel">
      <div className="image-panel__title">
        <span>🎨 Inspiration</span>
        <button className="shuffle-btn" onClick={onShuffle} aria-label="Shuffle images">
          🔀 shuffle
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
              <div key={i} className="image-grid__item" role="listitem">
                <img
                  className="image-grid__img"
                  src={img.url}
                  alt={img.alt || 'Inspiration image'}
                  loading="lazy"
                />
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
