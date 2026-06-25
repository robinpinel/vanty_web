/**
 * Artwork grid component
 * Renders filtered artworks
 */
import { ArtworkCard } from "./ArtworkCard";

export function ArtworkGrid({ artworks, onSelectArtwork }) {
  if (artworks.length === 0) {
    return (
      <p className="text-muted text-center">
        No hay obras en esta categoría
      </p>
    );
  }

  return (
    <div className="gallery__grid">
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          onSelect={() => onSelectArtwork(artwork)}
        />
      ))}
    </div>
  );
}
