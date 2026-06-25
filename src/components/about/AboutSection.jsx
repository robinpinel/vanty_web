import { artistBio } from "../../data/site";

/**
 * About section component
 * Biographical information about the artist
 * Anchor ID: #about for navigation
 */
export function AboutSection() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <h2 className="section__title">Sobre mí</h2>

        <div className="about__content">
          <div className="about__bio">
            {artistBio.bioTitle && (
              <p className="about__subtitle">{artistBio.bioTitle}</p>
            )}

            {artistBio.bioText && (
              <p className="about__text">{artistBio.bioText}</p>
            )}

            {artistBio.bioQuote && (
              <blockquote className="about__quote">
                <p>
                  <em>“{artistBio.bioQuote}”</em>
                </p>
              </blockquote>
            )}

            {artistBio.locations && artistBio.locations.length > 0 && (
              <div className="about__locations">
                <h3>Ubicaciones</h3>
                <p>{artistBio.locations.join(' • ')}</p>
              </div>
            )}
          </div>

          <div className="about__image">
            {artistBio.profileImage ? (
              <img
                src={artistBio.profileImage}
                alt={`Retrato de ${artistBio.name}`}
                className="about__photo"
              />
            ) : (
              <div className="about__image-placeholder">
                Foto de Vanty
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
