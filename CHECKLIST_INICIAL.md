## 🚀 CHECKLIST INICIAL - QUÉ SE NECESITA

### 1️⃣ CONFIGURACIÓN DEL PROYECTO

#### ❌ FALTA - Ficheros de configuración raíz
- [ ] **package.json** (raíz) - Está vacío en src/
  - Necesita: name, version, type: "module"
  - Scripts: dev, build, preview
  - Dependencies: react, react-dom
  - DevDependencies: vite, @vitejs/plugin-react, etc.

- [ ] **vite.config.js** (raíz) - Está vacío en src/
  - Necesita: import react from '@vitejs/plugin-react'
  - export default { plugins: [react()] }

#### ⚠️ INCOMPLETO - Fichero HTML principal
- [ ] **src/index.html**
  - Solo tiene `<script src="/src/main.jsx">`
  - Falta: DOCTYPE, meta tags (charset, viewport)
  - Falta: title, meta description
  - Falta: `<div id="root">` para React
  - Falta: SEO meta tags (og:, twitter:, etc.)

---

### 2️⃣ ESTRUCTURA DE CARPETAS

#### ✅ CORRECTA
- src/components (con subcarpetas temáticas)
- src/data
- src/hooks
- src/styles
- src/assets/images

#### ⚠️ FALTA - .gitignore
- [ ] **.gitignore** (raíz)
  - node_modules/, dist/, .env, etc.

#### ⚠️ FALTA - Ficheros raíz estándar
- [ ] **README.md** (raíz)
  - Descripción del proyecto
  - Instrucciones de instalación
  - Scripts disponibles

---

### 3️⃣ COMPONENTES PENDIENTES DE DETALLES

#### ⚠️ STUBS QUE NECESITAN IMPLEMENTACIÓN VISUAL
- [ ] **GalleryFilters.jsx** - TODO: Botones de filtro (mapear categories)
- [ ] **ArtworkGrid.jsx** - TODO: Grid que mapee artworks
- [ ] **ArtworkCard.jsx** - TODO: Card individual con imagen y info
- [ ] **ArtworkModal.jsx** - TODO: Modal con detalles de obra

- [ ] **EventCard.jsx** - TODO: Card de evento
- [ ] **ContactForm.jsx** - TODO: Formulario (campos y validación)

- [ ] **UI components** - TODO: Button, Modal, Tag (detalles visuales)

---

### 4️⃣ DATOS INICIALES

#### ❌ INFORMACIÓN DEL ARTISTA (site.js)
- [ ] **artistBio.subtitle** - "Pintor especializado en [técnicas]"
- [ ] **artistBio.bio** - Biografía completa de Vanty
- [ ] **artistBio.image** - Foto del artista

#### ⚠️ OBRAS (artworks.js)
- [ ] Eliminar obra de ejemplo "Alivio" o mantenerla como referencia
- [ ] Agregar estructura completa de obras reales cuando esté disponible
- [ ] Imágenes optimizadas en .webp

#### ⚠️ EVENTOS (events.js)
- [ ] Array vacío está correcto (esperando eventos)
- [ ] Estructura lista cuando haya eventos reales

---

### 5️⃣ ESTILOS

#### ✅ CSS BASE COMPLETO
- variables.css ✅
- base.css ✅
- layout.css ✅
- utilities.css ✅
- components.css ✅

#### ⚠️ PENDIENTE DE REVISAR
- [ ] Componentes stub (GalleryFilters, ArtworkCard, EventCard) aún no tienen estilos visuales
- [ ] Necesitan clases CSS relacionadas en components.css

---

### 6️⃣ ACCESIBILIDAD Y SEO

#### ⚠️ FALTA - Meta tags en index.html
- [ ] `<meta charset="UTF-8">`
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] `<meta name="description" content="...">`
- [ ] `<title>Vanty - Galería de Arte</title>`
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags

#### ⚠️ FALTA - Ficheros para SEO/Web (raíz/public)
- [ ] **robots.txt** - Instrucciones para buscadores
- [ ] **sitemap.xml** - Mapa del sitio
- [ ] **favicon.ico** - Icono del navegador

#### ✅ HTML SEMÁNTICO YA IMPLEMENTADO
- Header, nav, main, section, footer
- alt text en imágenes
- aria-label en elementos interactivos

---

### 7️⃣ ASSETS/IMÁGENES

#### ❌ FALTA - Imágenes reales
- [ ] **src/assets/images/artworks/**.webp - Obras del artista
- [ ] **src/assets/images/events/**.webp - Fotos de eventos
- [ ] **src/assets/images/profile/vanty.webp** - Foto del artista

#### 📝 IMPORTANTE
- Usar formato .webp (optimizado)
- Nombrar descriptivamente
- Agregar alt text adecuado en componentes

---

### 8️⃣ FUNCIONALIDAD BACKEND

#### ⚠️ FALTA - Envío de formulario
- [ ] ContactSection.jsx tiene lógica pero no hace nada
- [ ] Necesita integración con:
  - Email directo (emailjs, etc.)
  - API backend propia
  - Servicio cloud (Firebase, etc.)

---

### 9️⃣ TESTING Y BUILD

#### ⚠️ FALTA - Scripts de desarrollo
- [ ] Scripts en package.json (dev, build, preview, lint)

#### ⚠️ FALTA - Validación
- [ ] Linter (ESLint)
- [ ] Formatter (Prettier)
- [ ] Tests unitarios (opcional para MVP)

---

### 🔟 DESPLIEGUE

#### ⚠️ FALTA - Configuración de deployment
- [ ] **netlify.toml** (si se despliega en Netlify)
- [ ] **vercel.json** (si se despliega en Vercel)
- [ ] Variables de entorno (.env, .env.production)

---

## 📊 RESUMEN PRIORIDAD

### 🔴 BLOQUEANTES (Sin estos, no funciona)
1. package.json y vite.config.js en raíz (configuración)
2. index.html completo (entry point de HTML)
3. Imágenes reales o placeholders (para ver la UI)

### 🟡 IMPORTANTES (Sin estos, se ve feo o incompleto)
1. Detalles visuales de stubs (GalleryFilters, ArtworkCard, etc.)
2. Información real del artista (bio, foto)
3. Meta tags y SEO en index.html

### 🟢 NICE TO HAVE (Para producción)
1. robots.txt, sitemap.xml, favicon
2. Funcionalidad de email en formulario
3. Linter, formatter, tests
4. Configuración de despliegue

---

## ✅ ESTADO ACTUAL

```
🟢 LISTO PARA USAR:
- Estructura de componentes
- Datos preparados
- Estilos base
- Navegación
- Accesibilidad

🟡 REQUIERE FINALIZACIÓN:
- Configuración del proyecto
- Contenido real
- Detalles visuales de componentes
- SEO

🔴 CRÍTICO:
- package.json (raíz)
- vite.config.js (raíz)
- index.html completo
```

---

## 📋 ORDEN RECOMENDADO PARA INICIAR

1. **Crear package.json y vite.config.js** → instalar dependencias
2. **Completar index.html** → meta tags y estructura HTML
3. **Agregar imágenes placeholders** → para visualizar
4. **Completar datos iniciales** → bio, ubicaciones
5. **Implementar stubs visuales** → GalleryFilters, Cards, etc.
6. **Pruebas locales** → `npm run dev`
7. **SEO y despliegue** → robots.txt, netlify.toml, etc.
