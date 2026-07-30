# PROYECTO TACHOATOMICO

## Estructura del proyecto

```
/
├── index.html              # Página principal web (menú: bio, arte, expo)
├── cv.html                 # CV / Hoja de vida
├── bio.html                # Página interior — biografía
├── arte.html               # Página interior — obras de arte
├── expo.html               # Página interior — exposiciones
│
├── content.js              # TODO el texto centralizado (único lugar para editar)
├── components.js           # Funciones compartidas (headers, navs, renders)
│
├── imagenes/               # Imágenes del sitio
│   ├── logo_sign.png       # Logo principal (fondo claro)
│   ├── logo_sign_white.png # Logo para fondo oscuro
│   ├── atom.png            # Punto decorativo para menús
│   ├── g13.png
│   └── *.jpg, *.jpeg, *.png  # Fotos de obras y exposiciones
│
├── fonts/
│   └── Moonlite Solid.otf  # Tipografía del título y menús
│
├── hojadevida/
│   └── 2025 hv tachoatomico.pdf  # PDF original escaneado
│
└── docs/
    └── CONTEXTO.md         # Este archivo
```

## Arquitectura del sistema

### content.js
Único archivo donde se edita el contenido. Está dividido en secciones:

- `CONTENIDO.bio` — array de párrafos para la biografía
- `CONTENIDO.perfil` — texto del perfil profesional (index)
- `CONTENIDO.academico` — array de objetos {year, role, place}
- `CONTENIDO.arte_trayectoria` — array de objetos {year, role, desc}
- `CONTENIDO.laboral` — array de objetos {year, role, place}
- `CONTENIDO.proyectos` — array de proyectos del portafolio
- `CONTENIDO.exposiciones` — array de exposiciones (para index)
- `CONTENIDO.obras` — array de obras de arte (para arte.html)
- `CONTENIDO.expo_list` — array de exposiciones (para expo.html)

### components.js
Funciones que renderizan HTML compartido:
- `renderMainHeader()` — header para index y tachoatomico
- `renderInnerHeader()` — header para bio, arte, expo
- `agregarPuntos()` — puntos aleatorios alrededor de menús
- `timelineHTML()` — línea de tiempo reutilizable
- `proyectoHTML()` — tarjeta de proyecto
- `expoCardHTML()` — tarjeta de exposición (index)
- `obraHTML()` — bloque completo de obra (arte)
- `expoItemHTML()` — bloque completo de exposición (expo)

### Páginas
Cada página carga `content.js` y `components.js` y llama a las funciones que necesita. Ninguna página tiene texto hardcodeado.

---

## Formato de obra (arte.html)

Cada obra en `CONTENIDO.obras` tiene esta estructura:

```js
{
  titulo: "nombre",
  complemento_titulo: "serie o categoría",
  exposicion: "lugar de exposición (opcional)",
  año: "2025",
  descripcion: "texto descriptivo",
  descripcion_extras: ["párrafo extra 1", "párrafo extra 2"], // opcional
  imgs: ["archivo1.jpg", "archivo2.jpg"],
  videos: [],
  links: [
    { url: "https://...", label: "texto del link" }
  ]
}
```

## Formato de exposición (expo.html)

```js
{
  titulo: "nombre",
  complemento_titulo: "categoría",
  lugar: "lugar físico",
  año: "fecha (ej: Nov/2024)",
  descripcion: "texto descriptivo (separar párrafos con \\n\\n)",
  imgs: ["archivo1.jpg", ...],
  videos: [],
  links: [
    { url: "https://...", label: "texto del link" }
  ]
}
```

---

## Guía: crear una nueva entrada

Cuando digas **"crear nueva entrada"**, se seguirá esta secuencia de preguntas:

### Para una OBRA (arte.html):

1. **título** — nombre de la obra
2. **complemento-titulo** — serie o categoría
3. **exposición** — ¿tuvo exposición asociada? (si no, se omite)
4. **año** — año de creación
5. **descripción** — texto descriptivo
6. **descripción extras** — ¿párrafos adicionales? (si no, se omite)
7. **imágenes** — nombres de archivos en `imagenes/`
8. **videos** — ¿hay videos? (si no, array vacío)
9. **links** — ¿links asociados? (preguntar URL y texto de cada uno)

### Para una EXPOSICIÓN (expo.html):

1. **título** — nombre de la exposición
2. **complemento-titulo** — categoría o colectivo
3. **lugar** — lugar físico donde se realizó
4. **año** — fecha
5. **descripción** — texto descriptivo
6. **imágenes** — nombres de archivos en `imagenes/`
7. **videos** — ¿hay videos?
8. **links** — ¿links asociados? (URL + texto)

---

## Tipografías usadas

- **Moonline Solid** — títulos (@TACHOATOMICO, menús, títulos de sección)
- **Courier New** — tagline y meta-tags en header principal
- **Roboto** — cuerpo de texto en páginas interiores (bio, arte, expo)
- **Inter** — cuerpo general (index)

## Colores

- Fucsia: `#ff0066` / `#c00080` — tagline, meta-tags, complemento-titulo
- Texto general: `#555` / `#333` / `#111`
- Fondos de tarjetas: `#f5f5f5`
- Bordes: `#e0e0e0`
