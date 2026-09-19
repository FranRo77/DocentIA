# DocentIA

Materiales docentes: actividades web interactivas estáticas por materia,
desplegadas con GitHub Pages. Sin backend, sin build y sin datos
personales.

## Estructura

```
/<materia>/<unidad>/<tarea>/
```

Cada actividad es autocontenida (su propio `index.html`, `styles.css`,
`app.js` y `assets/`) para poder mantenerla, copiarla o archivarla de
forma independiente.

Materias y actividades disponibles:

- **Educación Digital**
  - UD1 · Dispositivos digitales y sistemas operativos
    - [Tarea 3 · Monta el equipo](educacion-digital/ud1/tarea3/) — actividad interactiva (CA1.1)

## Despliegue

El repositorio se publica con GitHub Pages desde la rama `main`
(carpeta raíz). Cada actividad es una carpeta con su propio `index.html`,
accesible en:

```
https://franro77.github.io/DocentIA/<materia>/<unidad>/<tarea>/
```

## Añadir una nueva actividad

1. Crea la carpeta `<materia>/<unidad>/<tarea>/` con su propio
   `index.html`, `styles.css`, `app.js` y `assets/` (si usa imágenes,
   añade también `assets/ATTRIBUTIONS.md` con los créditos y licencias).
2. Añade un enlace a la nueva actividad en este README.
3. Haz commit y push a `main`: GitHub Pages la publica automáticamente,
   sin pasos de compilación.

## Privacidad

Ninguna actividad de este repositorio debe usar cookies, analítica,
`localStorage`, `sessionStorage`, bases de datos externas ni peticiones de
red para registrar datos del alumnado. Cuando una actividad pida algún
identificador, debe ser un pseudónimo, nunca el nombre real del alumnado.
