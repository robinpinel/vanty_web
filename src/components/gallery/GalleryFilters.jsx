/**
 * Gallery filters component
 * Category filter buttons
 */
export function GalleryFilters({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="gallery__filters">
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`tag ${
              activeCategory === category.id ? "tag--active" : ""
            }`}
            onClick={() => onFilterChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
