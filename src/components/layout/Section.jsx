/**
 * Section component
 * Reusable wrapper for page sections
 */
export function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
}
