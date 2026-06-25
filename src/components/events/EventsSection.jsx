import { getEventsSorted } from "../../data/events";

/**
 * Events section component
 * Exhibitions and news
 * Anchor ID: #events for navigation
 */
export function EventsSection() {
  const sortedEvents = getEventsSorted();

  return (
    <section id="events" className="events">
      <div className="container">
        <h2 className="section__title">Eventos y Noticias</h2>

        {sortedEvents.length > 0 ? (
          <div className="events__grid">
            {/* TODO: Implementar EventCard */}
            {sortedEvents.map((event) => (
              <article key={event.id} className="event-card">
                {event.image && (
                  <div className="event-card__image-wrapper">
                    <img
                      src={event.image}
                      alt={event.alt}
                      loading="lazy"
                      className="event-card__image"
                    />
                  </div>
                )}
                <div className="event-card__content">
                  <span className="event-card__date">{event.displayDate}</span>
                  <h3 className="event-card__title">{event.title}</h3>
                  {event.location && (
                    <p className="event-card__location text-muted">
                      📍 {event.location}
                    </p>
                  )}
                  {event.summary && (
                    <p className="event-card__summary">{event.summary}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted text-center">
            Pronto habrá nuevos eventos
          </p>
        )}
      </div>
    </section>
  );
}
