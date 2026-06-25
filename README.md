# Vanty - Galería de Arte

Galería artística de Vanty, pintor vinculado a Salamanca y Pontevedra.

## 📋 Descripción

Este proyecto es una migración del sitio web de Vanty a una aplicación web moderna desarrollada con React + Vite. El objetivo es crear una galería rápida, accesible y mantenible que permita exponer obras, eventos/noticias y recibir consultas mediante formulario de contacto.

## 🎨 Características

- **Galería filtrable** por técnica (Gouache, Acrílico, Óleo, Carboncillo, Escultura)
- **Ficha visual** de cada obra con modal expandible
- **Sección de eventos/noticias** con información de exposiciones
- **Formulario de contacto** para consultas e interés en obras
- **Diseño responsivo** y mobile-first
- **HTML semántico** y accesible
- **Navegación por anclajes** suave
- **Optimización SEO** e imágenes en WebP

## 🛠️ Stack Técnico

- **Frontend:** React 18 (componentes funcionales)
- **Build:** Vite 5
- **Estilos:** CSS moderno con variables CSS
- **Datos:** Archivos JS locales (data-driven)
- **Despliegue:** Netlify (estático)

## 📦 Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd vanty

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/        # Componentes React organizados por funcionalidad
├── data/             # Archivos de datos (obras, eventos, configuración)
├── hooks/            # Hooks personalizados (useFilteredArtworks)
├── styles/           # CSS moderno con variables
├── App.jsx           # Componente raíz
└── main.jsx          # Entry point

public/              # Archivos estáticos (favicon, robots.txt, etc.)
```

## 🚀 Uso

### Agregar nuevas obras

Edita `src/data/artworks.js`:

```javascript
{
  id: "id-unico",
  title: "Título de la obra",
  slug: "titulo-de-la-obra",
  category: "acrilico",
  technique: "Acrílico",
  year: 2024,
  dimensions: "100x150 cm",
  image: "/images/artworks/titulo.webp",
  alt: "Descripción para accesibilidad",
  description: "Descripción de la obra",
  available: true,
  featured: false
}
```

### Agregar eventos

Edita `src/data/events.js`:

```javascript
{
  id: "id-evento",
  type: "exposicion",
  title: "Nombre del evento",
  date: "2024-08-08",
  displayDate: "08 agosto, 2024",
  location: "Lugar del evento",
  image: "/images/events/evento.webp",
  alt: "Foto del evento",
  summary: "Resumen breve"
}
```

## 🎯 Categorías de Obras

- Todos
- Gouache
- Acrílico
- Óleo
- Carboncillo
- Escultura

## ♿ Accesibilidad

- HTML semántico (<header>, <nav>, <main>, <section>, <footer>)
- Atributos `alt` obligatorios en imágenes
- Etiquetas `aria-label` en elementos interactivos
- Navegación por teclado
- Contraste de colores suficiente
- Responsive design para todos los dispositivos

## 🔍 SEO

- Meta tags en HTML (description, og:, twitter:)
- Títulos descriptivos en componentes
- URL semánticas con anclajes
- Imágenes optimizadas en WebP
- Sitemap y robots.txt (configurables)

## 📱 Diseño Responsive

- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Tipografía escalable con clamp()
- Grid y flexbox responsive

## 📄 Licencia

MIT

## 👤 Autor

Vanty - Pintor y artista plástico
"# vanty_web" 
