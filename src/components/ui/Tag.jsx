/**
 * Tag component
 * Category or technique label
 */
export function Tag({ label, isActive = false, onClick }) {
  return (
    <button
      type="button"
      className={`tag ${isActive ? "tag--active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
