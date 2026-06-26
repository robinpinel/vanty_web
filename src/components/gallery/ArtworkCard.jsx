/**
 * Artwork card component
 * Single artwork item display
 */
export function ArtworkCard({ artwork, onSelect }) {
  return (
    <article className="artwork-card">
      <button type="button" className="artwork-card__button" onClick={onSelect}>
        <div className="artwork-card__image-wrapper">
          <img
            src={artwork.thumbnail}
            alt={artwork.alt}
            loading="lazy"
            className="artwork-card__image"
          />
        </div>

        <div className="artwork-card__content">
          <h3 className="artwork-card__title">{artwork.title}</h3>
          <p className="artwork-card__technique text-muted">
            {artwork.techniques.join(" • ")}
         </p>
        </div>
      </button>
    </article>
  );
}
