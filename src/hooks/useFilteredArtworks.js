import { useState } from "react";

/**
 * Hook for gallery filtering logic
 * Manages active category and filtered results
 */
export function useFilteredArtworks(artworks) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((artwork) => artwork.categories?.includes(activeCategory));

  return {
    activeCategory,
    setActiveCategory,
    filteredArtworks
  };
}
