import { artworks } from "../../data/artworks";
import { artistBio } from "../../data/site";

/**
 * Hero component
 * Landing section with name, subtitle and CTA
 * Anchor ID: #hero for navigation
 */

const featuredArtwork = artworks[35];

export function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.72), rgba(10, 10, 10, 0.4)), url(${featuredArtwork.image})`
      }}
    >
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">{artistBio.name}</h1>
          <p className="hero__subtitle">{artistBio.subtitle}</p>
          <a href="#gallery" className="hero__cta">
            Ver galería
          </a>
        </div>
      </div>
    </section>
  );
}
