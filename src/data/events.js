export const events = [
  {
    id: "evento-1",
    type: "exposicion",
    title: '"Vanty" en la sala de Exposiciones Palacete de Mendoza',
    date: "2024-08-08",
    displayDate: "08 Agosto, 2024",
    location: "Sala de Exposiciones Palacete de Mendoza, en la Plaza de Santa María de Pontevedra",
    image: new URL("../assets/images/events/Carmen Touza y Vanty.jpg", import.meta.url).href,
    alt: '"Vanty" en la sala de Exposiciones Palacete de Mendoza',
    summary: 'La Sala de Exposiciones Palacete de Mendoza, en la Plaza de Santa María de Pontevedra, acoge la exposición "Fantasías" del artista Santiago Pichel Hernández, conocido como "Vanty". Entre los títulos de sus obras, destacan "Alivio", "Caminantes", "De algo hay que morir", "El Niño", "El otro lado", "El trompeta", "Los monjes" y "Ray Charles".',
    body: ""
  },
  {
    id: "evento-2",
    type: "exposicion",
    title: '"Vanty" en Tandem Art Gallery International "Autumn Color"',
    date: "2016-11-04",
    displayDate: "04 Noviembre, 2016",
    location: "Tandem Art Gallery International",
    image: new URL("../assets/images/events/Autum.jpg", import.meta.url).href,
    alt: '"Vanty" en Tandem Art Gallery International "Autumn Color"',
    summary: "Exposición internacional de arte contemporáneo del 4 al 18 de noviembre del 2016. Exposición multidisciplinar que contó con artistas nacionales e internacionales. El tema principal fue la Abstracción y el Neofigurativismo.",
    body: ""
  }
];

/**
 * Get events sorted by date (most recent first)
 */
export function getEventsSorted() {
  return [...events].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get single event by id
 */
export function getEventById(id) {
  return events.find((event) => event.id === id);
}

/**
 * Get events of a specific type
 */
export function getEventsByType(type) {
  return events.filter((event) => event.type === type);
}
 