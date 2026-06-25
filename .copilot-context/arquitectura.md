 # Arquitectura del proyecto Vanty

## 1. Propósito del proyecto

Este proyecto es una migración del sitio web actual de Vanty a una aplicación web moderna desarrollada con HTML, CSS y React.

El objetivo es crear una web más rápida, mantenible, accesible y fácil de ampliar, conservando la identidad artística del pintor y mejorando la experiencia de navegación por sus obras, eventos y vías de contacto.

## 2. Contexto del sitio actual

El sitio actual funciona como una página de presentación artística con estas secciones principales:

* Inicio / Hero.
* Sobre mí.
* Galería / Mi trabajo.
* Eventos.
* Contacto.

El contenido gira alrededor de Vanty, pintor vinculado a Salamanca y Pontevedra, con una identidad artística relacionada con la pintura y la música.

La galería actual clasifica las obras en estas categorías:

* Todos.
* Gouache.
* Acrílico.
* Óleo.
* Carboncillo.
* Escultura.

Los eventos actuales incluyen exposiciones pasadas y noticias relacionadas con nuevas muestras o apariciones del artista.

## 3. Objetivos de la migración

La nueva aplicación debe:

* Cargar rápido en móvil y escritorio.
* Ser sencilla de actualizar con nuevas obras, noticias y eventos.
* Separar contenido, componentes y estilos.
* Evitar duplicación de HTML.
* Usar datos estructurados para obras y eventos.
* Mejorar accesibilidad, SEO y rendimiento.
* Mantener una estética artística, sobria y visual.
* Facilitar el contacto con el artista por una obra concreta o consulta general.

## 4. Alcance de la primera versión

La primera versión debe incluir:

* Página principal tipo landing.
* Sección hero con nombre artístico, subtítulo y llamada a la acción.
* Sección biográfica “Sobre mí”.
* Galería filtrable por técnica/categoría.
* Ficha visual de cada obra.
* Modal o vista ampliada para consultar una obra.
* Sección de eventos/noticias.
* Formulario de contacto.
* Footer con copyright y enlaces básicos.

## 5. Fuera de alcance inicial

No implementar en la primera versión salvo petición expresa:

* Tienda online.
* Pasarela de pago.
* Login de usuarios.
* Panel privado de administración.
* CMS externo.
* Blog complejo con comentarios.
* Animaciones pesadas.
* Librerías visuales innecesarias.

## 6. Stack técnico

Usar una arquitectura React sencilla y estática.

Preferencias:

* React con componentes funcionales.
* CSS moderno con variables CSS.
* JavaScript moderno.
* Datos locales en ficheros JS/JSON.
* Despliegue estático en Netlify.
* Sin backend propio en la primera versión.

Si el proyecto ya usa Vite, mantener Vite como herramienta de desarrollo y build.

## 7. Principio arquitectónico principal

La aplicación debe ser “data-driven”.

No hardcodear listas de obras, eventos o categorías directamente dentro del JSX cuando puedan venir de arrays de datos.

Ejemplo conceptual:

* Las obras viven en `src/data/artworks.js`.
* Los eventos/noticias viven en `src/data/events.js`.
* Las categorías pueden derivarse de las obras o definirse en `src/data/categories.js`.

Los componentes reciben datos por props y se limitan a renderizar.

## 8. Estructura recomendada de carpetas

```txt
src/
  assets/
    images/
      artworks/
      events/
      profile/
  components/
    layout/
      Header.jsx
      Footer.jsx
      Section.jsx
    hero/
      Hero.jsx
    about/
      AboutSection.jsx
    gallery/
      GallerySection.jsx
      GalleryFilters.jsx
      ArtworkGrid.jsx
      ArtworkCard.jsx
      ArtworkModal.jsx
    events/
      EventsSection.jsx
      EventCard.jsx
    contact/
      ContactSection.jsx
      ContactForm.jsx
    ui/
      Button.jsx
      Modal.jsx
      Tag.jsx
  data/
    artworks.js
    events.js
    site.js
  hooks/
    useFilteredArtworks.js
  styles/
    variables.css
    base.css
    layout.css
    utilities.css
  App.jsx
  main.jsx
```

## 9. Modelo de datos de una obra

Cada obra debe representarse con una estructura similar:

```js
{
  id: "alivio",
  title: "Alivio",
  slug: "alivio",
  category: "acrilico",
  technique: "Acrílico",
  year: null,
  dimensions: null,
  image: "/images/artworks/alivio.webp",
  alt: "Obra Alivio de Vanty",
  description: "",
  available: null,
  featured: false
}
```

Reglas:

* `id` y `slug` deben ser únicos.
* `alt` siempre debe describir la imagen.
* Si falta un dato real, usar `null` o cadena vacía, no inventarlo.
* No inventar medidas, precios, años ni disponibilidad.
* Mantener los títulos reales de las obras.

## 10. Modelo de datos de un evento o noticia

Cada evento/noticia debe representarse así:

```js
{
  id: "palacete-mendoza-2024",
  type: "exposicion",
  title: "Vanty en la sala de exposiciones Palacete de Mendoza",
  date: "2024-08-08",
  displayDate: "08 agosto, 2024",
  location: "Palacete de Mendoza, Pontevedra",
  image: "/images/events/palacete-mendoza-2024.webp",
  alt: "Exposición de Vanty en Palacete de Mendoza",
  summary: "",
  body: ""
}
```

Tipos posibles:

* `exposicion`
* `noticia`
* `nueva-obra`
* `prensa`

## 11. Componentes principales

### App

Responsable de montar la estructura general:

* Header.
* Main.
* Footer.

No debe contener lógica compleja.

### Header

Responsable de:

* Logo/nombre Vanty.
* Navegación interna.
* Estado responsive del menú móvil.
* Enlaces a secciones con anclas.

### Hero

Responsable de:

* Presentación visual inicial.
* Nombre del artista.
* Subtítulo.
* Botón hacia la galería o contacto.

### AboutSection

Responsable de:

* Mostrar imagen del artista.
* Mostrar texto biográfico.
* Mostrar cita o declaración artística.

### GallerySection

Responsable de:

* Gestionar filtro activo.
* Renderizar categorías.
* Renderizar grid de obras.
* Abrir modal o detalle de obra.

### EventsSection

Responsable de:

* Mostrar eventos/noticias ordenados por fecha descendente.
* Diferenciar visualmente eventos recientes e históricos si procede.

### ContactSection

Responsable de:

* Mostrar texto de contacto.
* Renderizar formulario.
* Permitir seleccionar o mencionar una obra si el usuario viene desde una ficha.

## 12. Formulario de contacto

El formulario debe permitir consultas generales o consultas sobre una obra.

Campos mínimos:

* Nombre.
* Email.
* Asunto.
* Obra de interés, opcional.
* Mensaje.
* Consentimiento de privacidad.

Estados del formulario:

* Inicial.
* Enviando.
* Enviado correctamente.
* Error.

Validaciones mínimas:

* Nombre obligatorio.
* Email obligatorio y con formato válido.
* Mensaje obligatorio.
* Consentimiento obligatorio si se incluye política de privacidad.

Si se mantiene Netlify como hosting, valorar Netlify Forms para evitar backend propio.

## 13. Gestión de imágenes

Las imágenes son críticas para el rendimiento.

Reglas:

* Usar formatos optimizados como WebP o AVIF cuando sea posible.
* Mantener versiones comprimidas.
* Definir `width` y `height` cuando sea posible.
* Usar `loading="lazy"` en imágenes fuera del primer viewport.
* Usar textos `alt` descriptivos.
* No usar imágenes gigantes si se muestran como miniaturas.
* Separar imágenes de obras, eventos y perfil.

## 14. SEO

La aplicación debe cuidar:

* `title` de la página.
* `meta description`.
* Encabezados jerárquicos.
* Textos indexables.
* URLs o anclas claras.
* Datos estructurados básicos si se añaden páginas de detalle.
* Open Graph para compartir.

Contenido SEO base:

* Vanty.
* Pintura.
* Música.
* Galería de cuadros.
* Exposiciones.
* Salamanca.
* Pontevedra.
* Realismo.
* Surrealismo.

## 15. Accesibilidad

Requisitos mínimos:

* Usar HTML semántico.
* Un solo `h1` principal.
* Botones reales para acciones.
* Enlaces reales para navegación.
* Navegación usable con teclado.
* Contraste suficiente.
* Estados `focus-visible`.
* Texto alternativo en imágenes.
* Modal accesible con cierre por teclado.
* No depender solo del color para comunicar estados.

## 16. Rendimiento

Evitar:

* Librerías pesadas para tareas simples.
* Animaciones costosas.
* Imágenes sin optimizar.
* Renderizados innecesarios.
* Duplicación de componentes.

Priorizar:

* Componentes pequeños.
* CSS ligero.
* Lazy loading de imágenes.
* Datos locales simples.
* Build estática.

## 17. Estrategia de migración

Fase 1: Inventario

* Revisar el sitio actual.
* Guardar textos existentes.
* Descargar y clasificar imágenes.
* Detectar erratas o inconsistencias.
* Listar obras reales con título y técnica.

Fase 2: Base técnica

* Crear estructura de carpetas.
* Crear variables CSS.
* Crear layout general.
* Crear datos base.

Fase 3: Galería

* Crear modelo de obra.
* Crear filtros.
* Crear grid responsive.
* Crear tarjeta de obra.
* Crear modal o vista ampliada.

Fase 4: Eventos/noticias

* Crear modelo de evento.
* Migrar eventos existentes.
* Preparar estructura para nuevas noticias.

Fase 5: Contacto

* Crear formulario.
* Validar campos.
* Conectar envío.
* Añadir mensajes de estado.

Fase 6: Calidad

* Revisar responsive.
* Revisar accesibilidad.
* Optimizar imágenes.
* Revisar SEO.
* Revisar textos finales.

## 18. Reglas para Copilot

Cuando Copilot genere código para este proyecto debe:

* Respetar esta arquitectura.
* No inventar contenido artístico.
* No inventar obras, fechas, medidas ni precios.
* Crear componentes pequeños y reutilizables.
* Separar datos de presentación.
* Usar nombres claros en español o inglés consistente.
* Mantener HTML semántico.
* Priorizar rendimiento y accesibilidad.
* No añadir dependencias salvo necesidad justificada.
* No convertir el proyecto en una arquitectura compleja sin motivo.
* Preguntar o dejar `TODO` cuando falte información real.
