import profileImage from '../assets/images/profile/foto_perfil.jpg';

/**
 * Site metadata and global configuration
 */

export const siteInfo = {
  title: "Vanty - Galería de Arte",
  description: "Galería artística de Vanty",
  author: "Vanty",
  year: new Date().getFullYear()
};

/**
 * Artwork categories
 */
export const artworkCategories = [
  { id: "all", label: "Todos" },
  { id: "gouache", label: "Gouache" },
  { id: "acrilico", label: "Acrílico" },
  { id: "oleo", label: "Óleo" },
  { id: "carboncillo", label: "Carboncillo" },
  { id: "escultura", label: "Escultura" }
];

/**
 * Navigation sections
 */
export const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Galería", href: "#gallery" },
  { label: "Eventos", href: "#events" },
  { label: "Contacto", href: "#contact" }
];

/**
 * Artist bio (TODO: completar con información real)
 */
export const artistBio = {
  name: "Vanty",
  subtitle: 'Pintura • Música',
  bioTitle: '"Vanty” (Santiago Piñel Hernández)"',
  bioText: "Pintor nacido en Salamanca y afincado desde hace muchos años en Pontevedra. Empezó a pintar desde pequeño, aunque su verdadera vocación fue la música. Cantante profesional durante cincuenta años, conocido con el nombre artístico de Lenny.",
  bioQuote: 'Si tengo que definir mi estilo de pintura lo encuadraría entre el “Realismo” y el “Surrealismo”, pero no soy yo el observador adecuado de mis cuadros, porque no sería muy objetivo. Puedo decir que tienen mucho de emociones y respuestas subjetivas, que los objetos y acontecimientos me despiertan y que luego se convierten en fantasías.',
  profileImage,
};

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/lenny.pinelhernandez',
    label: 'Visitar Facebook de Vanty',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/vanty_lenny',
    label: 'Visitar Instagram de Vanty',
  },
];
 