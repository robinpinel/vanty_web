/**
 * Artwork modal component
 * Detailed view of an artwork
 */
export function ArtworkModal({ artwork, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Cerrar modal de obra"
        >
          ✕
        </button>

        <img
          src={artwork.image}
          alt={artwork.alt}
          className="modal__image"
        />

        <div className="modal__info">
          <h2>{artwork.title}</h2>
          <p className="text-muted">{artwork.techniques.join(" • ")}</p>
          {artwork.year && <p>Año: {artwork.year}</p>}
          {artwork.dimensions && <p>Dimensiones: {artwork.dimensions}</p>}
          {artwork.description && <p>{artwork.description}</p>}
        </div>
      </div>
    </div>
  );
}
