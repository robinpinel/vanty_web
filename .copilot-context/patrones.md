 # Patrones de desarrollo del proyecto Vanty

## 1. Principios generales

El código debe ser:

* Claro.
* Simple.
* Mantenible.
* Accesible.
* Rápido.
* Fácil de ampliar.

La web debe transmitir una identidad artística, visual y elegante, pero sin sacrificar rendimiento ni legibilidad.

## 2. Idioma del proyecto

El contenido visible para usuarios debe estar en español.

Los nombres de componentes, funciones y variables pueden estar en inglés técnico si aportan claridad.

Mantener consistencia:

* Componentes en PascalCase.
* Funciones y variables en camelCase.
* Constantes globales en UPPER_SNAKE_CASE solo si son realmente constantes.
* Ficheros de componentes en PascalCase.
* Ficheros de datos en camelCase o kebab-case.

Ejemplos:

```txt
ArtworkCard.jsx
GallerySection.jsx
ContactForm.jsx
artworks.js
events.js
site.js
```

## 3. Patrón de componentes React

Usar componentes funcionales.

Preferir componentes pequeños con una responsabilidad clara.

Ejemplo:

```jsx
export function ArtworkCard({ artwork, onSelect }) {
  return (
    <article className="artwork-card">
      <img
        src={artwork.image}
        alt={artwork.alt}
        loading="lazy"
        className="artwork-card__image"
      />

      <div className="artwork-card__content">
        <h3>{artwork.title}</h3>
        <p>{artwork.technique}</p>

        <button type="button" onClick={() => onSelect(artwork)}>
          Ver obra
        </button>
      </div>
    </article>
  );
}
```

Reglas:

* No mezclar demasiada lógica dentro del JSX.
* No hacer componentes de cientos de líneas.
* Extraer subcomponentes cuando una sección crezca demasiado.
* Las props deben tener nombres claros.
* No mutar datos recibidos por props.

## 4. Patrón para listas

Toda lista debe renderizarse desde datos estructurados.

Correcto:

```jsx
{artworks.map((artwork) => (
  <ArtworkCard
    key={artwork.id}
    artwork={artwork}
    onSelect={handleSelectArtwork}
  />
))}
```

Evitar:

* Repetir HTML manualmente por cada obra.
* Usar índices como `key` si existe `id`.
* Inventar IDs en tiempo de renderizado.

## 5. Patrón para filtros de galería

El estado del filtro activo debe vivir en el componente de la galería.

Ejemplo:

```jsx
const [activeCategory, setActiveCategory] = useState("all");

const filteredArtworks =
  activeCategory === "all"
    ? artworks
    : artworks.filter((artwork) => artwork.category === activeCategory);
```

Reglas:

* La categoría interna debe ser estable, por ejemplo `acrilico`.
* La etiqueta visible puede ser más humana, por ejemplo `Acrílico`.
* Incluir siempre una opción `all` o `todos`.
* No duplicar lógica de filtrado en varios componentes.

## 6. Patrón para datos

Los datos deben estar centralizados.

Ejemplo:

```js
export const artworkCategories = [
  { id: "all", label: "Todos" },
  { id: "gouache", label: "Gouache" },
  { id: "acrilico", label: "Acrílico" },
  { id: "oleo", label: "Óleo" },
  { id: "carboncillo", label: "Carboncillo" },
  { id: "escultura", label: "Escultura" }
];
```

Reglas:

* No inventar contenido real.
* Usar `null` para datos desconocidos.
* Usar textos temporales solo con `TODO`.
* Mantener imágenes y datos sincronizados.
* No mezclar datos de eventos con datos de obras.

## 7. Patrón CSS

Usar CSS claro, modular y predecible.

Preferencias:

* Variables CSS para colores, tamaños y espaciados.
* Clases semánticas.
* Evitar estilos inline.
* Evitar selectores excesivamente específicos.
* Evitar `!important`.
* Usar mobile-first.

Ejemplo de variables:

```css
:root {
  --color-bg: #0f0f0f;
  --color-surface: #181818;
  --color-text: #f5f1e8;
  --color-muted: #b8b0a3;
  --color-accent: #c59d5f;

  --font-base: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --max-width: 1120px;

  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;

  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
}
```

Ejemplo de clase:

```css
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 700px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

## 8. Patrón de diseño responsive

El diseño debe partir de móvil.

Breakpoints orientativos:

* Móvil: desde 320px.
* Tablet: desde 700px.
* Escritorio: desde 1024px.
* Escritorio ancho: desde 1280px.

Reglas:

* La galería debe funcionar bien en una columna.
* El menú debe ser usable en móvil.
* Las imágenes no deben deformarse.
* No usar alturas fijas que rompan contenido.
* Evitar textos demasiado pequeños.

## 9. Patrón para imágenes

Toda imagen debe tener:

* `src`.
* `alt`.
* `loading="lazy"` salvo imágenes principales.
* Clase CSS específica.
* Tamaño controlado por CSS.

Ejemplo:

```jsx
<img
  src={artwork.image}
  alt={artwork.alt}
  loading="lazy"
  className="artwork-card__image"
/>
```

Reglas:

* No usar `alt=""` en obras salvo que la imagen sea puramente decorativa.
* No usar nombres de archivo como texto alternativo.
* No cargar imágenes enormes como miniaturas.
* Mantener consistencia visual entre tarjetas.

## 10. Patrón para modales

Si se usa modal para ampliar una obra:

* Debe poder cerrarse con botón visible.
* Debe poder cerrarse con tecla Escape.
* Debe tener foco gestionado.
* Debe bloquear interacción con el fondo.
* Debe tener título accesible.

Contenido mínimo del modal:

* Imagen de la obra.
* Título.
* Técnica.
* Descripción si existe.
* Botón para preguntar por esa obra.

## 11. Patrón para formulario de contacto

El formulario debe ser controlado o semcontrolado de forma simple.

Campos recomendados:

* `name`
* `email`
* `subject`
* `artwork`
* `message`
* `privacy`

Mensajes de estado:

* “Enviando mensaje…”
* “Mensaje enviado correctamente.”
* “No se pudo enviar el mensaje. Inténtalo de nuevo.”

Reglas:

* Validar antes de enviar.
* No borrar el formulario si falla.
* Deshabilitar el botón durante el envío.
* Mostrar errores de forma accesible.
* No pedir más datos de los necesarios.

## 12. Patrón para accesibilidad

Todo componente interactivo debe ser accesible.

Reglas:

* Usar `<button>` para acciones.
* Usar `<a>` para navegación.
* Añadir `aria-label` solo cuando el texto visible no sea suficiente.
* Mantener orden lógico de encabezados.
* Asegurar foco visible.
* Evitar interacciones solo con hover.
* No usar divs clicables si puede usarse un botón.

## 13. Patrón para eventos/noticias

Los eventos se ordenan por fecha descendente.

Ejemplo:

```js
const sortedEvents = [...events].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
```

Reglas:

* No mezclar fecha técnica con fecha visible.
* `date` debe usar formato ISO `YYYY-MM-DD`.
* `displayDate` puede estar en formato español.
* Diferenciar exposiciones, noticias y nuevas obras mediante `type`.

## 14. Patrón para textos y contenido real

No inventar información.

Cuando falten datos:

```js
dimensions: null,
year: null,
description: ""
```

O dejar comentario explícito:

```js
// TODO: Confirmar medidas reales de la obra.
```

Corregir erratas visibles durante la migración, pero validar cambios sensibles como nombres propios, fechas, lugares o títulos de obras.

## 15. Patrón para commits y cambios

Cada cambio debe ser pequeño y coherente.

Ejemplos de cambios correctos:

* Crear estructura base de carpetas.
* Añadir datos iniciales de obras.
* Crear componente `ArtworkCard`.
* Crear filtros de galería.
* Crear formulario de contacto.
* Optimizar imágenes.

Evitar commits que mezclen:

* Refactor masivo.
* Cambios visuales grandes.
* Nuevas funcionalidades.
* Correcciones de contenido no relacionadas.

## 16. Patrón para pedir ayuda a Copilot

Prompts recomendados:

```txt
Usa la arquitectura definida en .copilot-context/arquitectura.md y los patrones de .copilot-context/patrones.md. Crea el componente GallerySection con filtros por categoría usando los datos de src/data/artworks.js.
```

```txt
Revisa este componente y propón mejoras de accesibilidad sin cambiar la API pública del componente.
```

```txt
Crea el modelo inicial de datos para eventos siguiendo el patrón del proyecto. No inventes fechas ni lugares; usa null o TODO cuando falten datos.
```

```txt
Refactoriza este CSS para hacerlo mobile-first y usar las variables definidas en src/styles/variables.css.
```

## 17. Cosas que Copilot debe evitar

Copilot no debe:

* Añadir dependencias innecesarias.
* Usar Tailwind, Bootstrap o librerías UI sin aprobación.
* Inventar obras o biografía.
* Crear backend si no se ha pedido.
* Mezclar datos y JSX de forma repetitiva.
* Usar estilos inline para layout general.
* Ignorar accesibilidad.
* Crear componentes demasiado grandes.
* Cambiar nombres propios sin indicarlo.
* Sustituir todo el diseño sin una razón clara.

## 18. Criterio de calidad

Antes de considerar terminada una sección, comprobar:

* Se ve correctamente en móvil.
* Se ve correctamente en escritorio.
* No hay errores en consola.
* Las imágenes tienen `alt`.
* Los botones son accesibles.
* Los textos están en español.
* El código no duplica estructuras.
* Los datos están separados del JSX.
* El componente puede reutilizarse o modificarse fácilmente.
