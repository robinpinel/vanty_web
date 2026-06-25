import { useState } from "react";
import { artworks } from "../../data/artworks";
import { artworkCategories } from "../../data/site";
import { useFilteredArtworks } from "../../hooks/useFilteredArtworks";
import { GalleryFilters } from "./GalleryFilters";
import { ArtworkGrid } from "./ArtworkGrid";
import { ArtworkModal } from "./ArtworkModal";

/**
 * Gallery section component
 * Main gallery with filters and artwork grid
 * Anchor ID: #gallery for navigation
 */
export function GallerySection() {
  const { activeCategory, setActiveCategory, filteredArtworks } =
    useFilteredArtworks(artworks);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section__title">Galería</h2>

        <GalleryFilters
          categories={artworkCategories}
          activeCategory={activeCategory}
          onFilterChange={setActiveCategory}
        />

        <ArtworkGrid
          artworks={filteredArtworks}
          onSelectArtwork={setSelectedArtwork}
        />

        {selectedArtwork && (
          <ArtworkModal
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
          />
        )}
      </div>
    </section>
  );
}
