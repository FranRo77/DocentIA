# Tarea 3 · Monta el equipo

Actividad interactiva de la **UD1 (Dispositivos digitales y sistemas
operativos)** de Educación Digital, 3.º ESO. Criterio curricular CA1.1.

## Finalidad

Comprobar de forma breve (20–25 minutos) que el alumnado sabe:

1. identificar componentes de un ordenador de sobremesa;
2. localizar/conectar de forma básica esos componentes;
3. reconocer conexiones elementales (HDMI, USB, Ethernet, PCIe, M.2);
4. reconocer manipulación segura frente a situaciones problemáticas;
5. ordenar los pasos de un montaje seguro.

No es una ficha teórica ni repite el contenido de las Tareas 1 y 2
(hardware/software/firmware, placa base, CPU, RAM, almacenamiento en T1;
GPU, fuente de alimentación, refrigeración, puertos, UEFI/BIOS en T2).

## Intentos y entrega

Cada reto admite como máximo **dos intentos** (`MAX_ATTEMPTS` en
`app.js`): al primer «Comprobar» se marca qué está bien o mal (sin
revelar la respuesta correcta) y, si no es todo correcto, el alumnado
dispone de un único intento más para corregir. Al segundo intento —o en
cuanto acierta todo— el reto queda bloqueado (controles deshabilitados)
y solo puede continuar. El resultado final siempre muestra la
puntuación del **primer intento**, nunca la corregida.

La pantalla final incluye un bloque de texto de solo lectura con el
resultado ya formateado y un botón «Copiar resultado» (API de
portapapeles del navegador, con reserva mediante selección de texto y
`execCommand('copy')` si el navegador no admite la API). El alumnado
debe copiar y pegar ese texto en la tarea de Microsoft Teams; «Preparar
captura» se mantiene como alternativa visual opcional.

## Estructura de archivos

```
educacion-digital/ud1/tarea3/
  index.html   → estructura de las 7 pantallas (inicio, 4 retos, reto final, resultado)
  styles.css   → estilos
  app.js       → datos de las preguntas y toda la lógica interactiva
  assets/
    ATTRIBUTIONS.md → créditos y licencias (ver nota más abajo)
    logo.png, favicon-32.png, favicon-180.png → logo e iconos de pestaña
  README.md    → este archivo
```

No hay backend, build, npm ni dependencias externas. Es HTML + CSS + JS
vanilla, pensado para funcionar directamente en GitHub Pages.

## Cómo modificar las preguntas

Todo el contenido editable está en la parte superior de `app.js`, en
bloques de datos claramente separados de la lógica:

- `COMPONENTS` y las zonas del esquema (`data-zone` en `index.html`) → Reto 1.
- `CONNECTION_OPTIONS` y `SCENARIOS` → Reto 2.
- `SITUATIONS` (texto, respuesta correcta `"correcto"`/`"problema"` y
  explicación) → Reto 3.
- `ORDER_STEPS` (el orden correcto es el orden del array) y
  `ORDER_INITIAL_SEQUENCE` (el orden en que se muestran desordenados al
  empezar) → Reto 4.
- `FINAL_QUESTION` → texto de la pregunta del reto final. Se muestra tal
  cual en `index.html` (`#final-reto-question`); si se cambia el texto,
  actualízalo en los dos sitios.

Para añadir o quitar preguntas de un reto con lista (2, 3 y 4), añade o
elimina elementos del array correspondiente: el renderizado y el cálculo
de la puntuación sobre el máximo se adaptan automáticamente.

## Lista de IDs autorizados

El campo "ID del alumno o alumna" de la pantalla de inicio solo acepta
los códigos que aparecen en `ALLOWED_IDS` (en `app.js`, justo debajo de
`FINAL_QUESTION`). Para otro grupo, sustituye esa lista por los códigos
correspondientes; la comparación no distingue mayúsculas/minúsculas. Si
prefieres no restringir el ID a una lista cerrada, elimina la comprobación
`ALLOWED_IDS.includes(...)` dentro de `validateStudentId()`.

## Cómo sustituir imágenes

El esquema de la placa base y los iconos de componentes son SVG propios,
generados directamente en `app.js` (constante `ICONS`) y en el
`<svg class="board">` de `index.html`; no proceden de ningún banco de
imágenes. `assets/logo.png` es la única imagen bitmap: el logo de la
cabecera, proporcionado directamente por el propietario del proyecto (no
descargado de internet). Motivo y detalle completo en
`assets/ATTRIBUTIONS.md`.

Si se quiere incorporar una imagen real con licencia verificada
(por ejemplo, de Wikimedia Commons):

1. Verificar documentalmente su licencia (nombre de archivo, autor, URL
   original, licencia exacta, URL de la licencia).
2. Guardar el archivo en `assets/` (formato ligero: SVG, PNG o JPG
   optimizado).
3. Rellenar la tabla de `assets/ATTRIBUTIONS.md` con esos datos.
4. Referenciar el archivo desde `index.html` o `app.js` y documentar en
   `ATTRIBUTIONS.md` cualquier modificación realizada (recorte, cambio de
   tamaño, etc.).

No añadas ninguna imagen sin completar antes ese paso.

## Cómo desplegar

El sitio se sirve directamente desde GitHub Pages a partir de la rama
`main`, carpeta raíz del repositorio `DocentIA`. No requiere ningún paso
de compilación: basta con hacer commit y push de los archivos.

URL de esta actividad una vez publicada:

```
https://franro77.github.io/DocentIA/educacion-digital/ud1/tarea3/
```

Para probarla en local antes de publicar, sirve la carpeta con cualquier
servidor estático, por ejemplo:

```
python3 -m http.server 8000
```

y abre `http://localhost:8000/educacion-digital/ud1/tarea3/`.

## Privacidad

No se usa `localStorage`, `sessionStorage`, cookies, analítica, ni
peticiones de red para guardar resultados. Todo el estado (respuestas,
puntuaciones, ID introducido) vive únicamente en memoria durante la
sesión de la página y se pierde al recargar. Es intencionado: el ID que
introduce el alumnado es un pseudónimo, nunca su nombre real.
