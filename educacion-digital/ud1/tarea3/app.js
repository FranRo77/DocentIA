"use strict";

/*
 * Tarea 3 · Monta el equipo
 * Todo el estado vive en memoria durante la sesión de la página.
 * No se usa localStorage, sessionStorage, cookies ni peticiones de red.
 */

/* ------------------------------------------------------------------ */
/* Datos de los retos                                                  */
/* ------------------------------------------------------------------ */

const ICONS = {
  cpu: `<svg viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="cpu-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e8edf2"/><stop offset="0.5" stop-color="#c4ccd6"/><stop offset="1" stop-color="#9aa5b1"/>
      </linearGradient>
      <linearGradient id="cpu-pin" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#d8b25c"/><stop offset="1" stop-color="#a67c2e"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="3" fill="#7c8896"/>
    <g opacity="0.9">
      <rect x="1" y="10" width="4" height="3" fill="url(#cpu-pin)"/><rect x="1" y="17" width="4" height="3" fill="url(#cpu-pin)"/>
      <rect x="1" y="24" width="4" height="3" fill="url(#cpu-pin)"/><rect x="1" y="31" width="4" height="3" fill="url(#cpu-pin)"/>
      <rect x="43" y="10" width="4" height="3" fill="url(#cpu-pin)"/><rect x="43" y="17" width="4" height="3" fill="url(#cpu-pin)"/>
      <rect x="43" y="24" width="4" height="3" fill="url(#cpu-pin)"/><rect x="43" y="31" width="4" height="3" fill="url(#cpu-pin)"/>
      <rect x="10" y="1" width="3" height="4" fill="url(#cpu-pin)"/><rect x="17" y="1" width="3" height="4" fill="url(#cpu-pin)"/>
      <rect x="24" y="1" width="3" height="4" fill="url(#cpu-pin)"/><rect x="31" y="1" width="3" height="4" fill="url(#cpu-pin)"/>
      <rect x="10" y="43" width="3" height="4" fill="url(#cpu-pin)"/><rect x="17" y="43" width="3" height="4" fill="url(#cpu-pin)"/>
      <rect x="24" y="43" width="3" height="4" fill="url(#cpu-pin)"/><rect x="31" y="43" width="3" height="4" fill="url(#cpu-pin)"/>
    </g>
    <rect x="6" y="6" width="36" height="36" rx="2" fill="url(#cpu-body)" stroke="#5b6472" stroke-width="0.6"/>
    <path d="M8 8 L14 8 L8 14 Z" fill="#5b6472" opacity="0.55"/>
    <rect x="15" y="15" width="18" height="18" rx="1" fill="#4a5665" opacity="0.35"/>
  </svg>`,

  ram: `<svg viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="ram-pcb" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2f9e7a"/><stop offset="1" stop-color="#1c6a52"/>
      </linearGradient>
      <linearGradient id="ram-gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#f2d385"/><stop offset="1" stop-color="#c99a3f"/>
      </linearGradient>
    </defs>
    <rect x="4" y="10" width="40" height="24" rx="2" fill="url(#ram-pcb)" stroke="#154f3d" stroke-width="0.6"/>
    <rect x="7" y="14" width="7" height="10" rx="0.6" fill="#1c2230"/>
    <rect x="17" y="14" width="7" height="10" rx="0.6" fill="#1c2230"/>
    <rect x="27" y="14" width="7" height="10" rx="0.6" fill="#1c2230"/>
    <rect x="8" y="15.4" width="5" height="1.6" fill="#4b5568"/>
    <rect x="18" y="15.4" width="5" height="1.6" fill="#4b5568"/>
    <rect x="28" y="15.4" width="5" height="1.6" fill="#4b5568"/>
    <path d="M4 34 h40 v3 a2 2 0 0 1 -2 2 h-36 a2 2 0 0 1 -2 -2 Z" fill="url(#ram-gold)"/>
    <rect x="22" y="34" width="2.4" height="5" fill="#2f9e7a"/>
    <g stroke="#0f3a2c" stroke-width="0.6" opacity="0.5">
      <line x1="8" y1="39" x2="8" y2="34"/><line x1="12" y1="39" x2="12" y2="34"/>
      <line x1="17" y1="39" x2="17" y2="34"/><line x1="30" y1="39" x2="30" y2="34"/>
      <line x1="35" y1="39" x2="35" y2="34"/><line x1="40" y1="39" x2="40" y2="34"/>
    </g>
  </svg>`,

  gpu: `<svg viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="gpu-shroud" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a5568"/><stop offset="1" stop-color="#252c38"/>
      </linearGradient>
      <radialGradient id="gpu-fan" cx="0.5" cy="0.4" r="0.65">
        <stop offset="0" stop-color="#6b7688"/><stop offset="1" stop-color="#2f3541"/>
      </radialGradient>
      <linearGradient id="gpu-gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#f2d385"/><stop offset="1" stop-color="#c99a3f"/>
      </linearGradient>
    </defs>
    <rect x="3" y="8" width="42" height="22" rx="3" fill="url(#gpu-shroud)" stroke="#161b24" stroke-width="0.6"/>
    <circle cx="15" cy="19" r="7.5" fill="url(#gpu-fan)" stroke="#161b24" stroke-width="0.5"/>
    <circle cx="33" cy="19" r="7.5" fill="url(#gpu-fan)" stroke="#161b24" stroke-width="0.5"/>
    <g stroke="#9aa5b1" stroke-width="1" opacity="0.8">
      <path d="M15 13 a6 6 0 0 1 5.2 3" fill="none"/>
      <path d="M15 25 a6 6 0 0 1 -5.2 -3" fill="none"/>
      <path d="M33 13 a6 6 0 0 1 5.2 3" fill="none"/>
      <path d="M33 25 a6 6 0 0 1 -5.2 -3" fill="none"/>
    </g>
    <circle cx="15" cy="19" r="1.6" fill="#161b24"/><circle cx="33" cy="19" r="1.6" fill="#161b24"/>
    <rect x="6" y="30" width="30" height="4" fill="#161b24"/>
    <path d="M9 34 h24 v4 a2 2 0 0 1 -2 2 h-20 a2 2 0 0 1 -2 -2 Z" fill="url(#gpu-gold)"/>
  </svg>`,

  ssd: `<svg viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="ssd-pcb" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#2f6690"/><stop offset="1" stop-color="#1d4d72"/>
      </linearGradient>
      <linearGradient id="ssd-gold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f2d385"/><stop offset="1" stop-color="#c99a3f"/>
      </linearGradient>
    </defs>
    <rect x="4" y="17" width="38" height="14" rx="2" fill="url(#ssd-pcb)" stroke="#123047" stroke-width="0.6"/>
    <path d="M42 17 h4 v10 a2 2 0 0 1 -2 2 h-2 Z" fill="none"/>
    <rect x="42" y="19" width="4" height="10" fill="url(#ssd-gold)"/>
    <rect x="9" y="21" width="12" height="7" rx="0.8" fill="#12283b"/>
    <rect x="24" y="21" width="7" height="7" rx="0.8" fill="#12283b"/>
    <circle cx="35" cy="24.5" r="1.4" fill="#0e2030"/>
    <path d="M9 31 a2 2 0 0 0 2 2 h3 a2 2 0 0 0 2 -2" fill="none" stroke="#0e2030" stroke-width="0.6" opacity="0.5"/>
  </svg>`,

  sata: `<svg viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="sata-plastic" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a3f4a"/><stop offset="1" stop-color="#20242c"/>
      </linearGradient>
    </defs>
    <path d="M4 22 h20 a2 2 0 0 1 2 2 v10 a2 2 0 0 1 -2 2 h-20 Z" fill="url(#sata-plastic)"/>
    <g fill="#c94f4f">
      <rect x="8" y="26" width="2.6" height="6"/><rect x="12" y="26" width="2.6" height="6"/>
      <rect x="16" y="26" width="2.6" height="6"/><rect x="20" y="26" width="2.6" height="6"/>
    </g>
    <path d="M28 25 c8 -10 14 -10 16 -16" fill="none" stroke="#161b24" stroke-width="3" stroke-linecap="round"/>
    <path d="M28 25 c8 -10 14 -10 16 -16" fill="none" stroke="#4a5568" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`,
};

const COMPONENTS = [
  { id: "cpu", label: "CPU (procesador)", zone: "1" },
  { id: "ram", label: "Memoria RAM", zone: "2" },
  { id: "gpu", label: "Tarjeta gráfica (GPU)", zone: "3" },
  { id: "ssd", label: "SSD M.2", zone: "4" },
  { id: "sata", label: "Almacenamiento SATA", zone: "5" },
];

const ZONE_LABELS = {
  1: "Zona 1",
  2: "Zona 2",
  3: "Zona 3",
  4: "Zona 4",
  5: "Zona 5",
};

const CONNECTION_OPTIONS = [
  { id: "hdmi", label: "HDMI" },
  { id: "usb", label: "USB" },
  { id: "ethernet", label: "Ethernet / RJ-45" },
  { id: "pcie", label: "PCIe" },
  { id: "m2", label: "M.2" },
];

const SCENARIOS = [
  { id: "s1", text: "Quieres conectar el monitor para ver la imagen del ordenador. ¿Qué conexión usas?", correct: "hdmi" },
  { id: "s2", text: "Quieres conectar el teclado y el ratón al ordenador. ¿Qué conexión usas?", correct: "usb" },
  { id: "s3", text: "Quieres conectar el ordenador a la red mediante un cable. ¿Qué conexión usas?", correct: "ethernet" },
  { id: "s4", text: "Quieres conectar la tarjeta gráfica a la placa base. ¿Qué conexión usas?", correct: "pcie" },
  { id: "s5", text: "Quieres conectar un SSD M.2 a la placa base. ¿Qué conexión usas?", correct: "m2" },
];

const SITUATIONS = [
  {
    id: "a",
    text: "Un alumno intenta colocar una memoria RAM y, como no entra, presiona con mucha fuerza.",
    correct: "problema",
    explanation: "Nunca debe forzarse un componente. Puede estar mal orientado o no ser compatible.",
  },
  {
    id: "b",
    text: "Antes de abrir el ordenador, se apaga y se desconecta de la corriente.",
    correct: "correcto",
    explanation: "Es el primer paso obligatorio antes de manipular cualquier componente interno.",
  },
  {
    id: "c",
    text: "Una tarjeta gráfica se coloca en una ranura PCIe adecuada.",
    correct: "correcto",
    explanation: "La tarjeta gráfica se conecta en su ranura correspondiente sin forzarla.",
  },
  {
    id: "d",
    text: "Para ver qué ocurre dentro, un alumno abre la fuente de alimentación.",
    correct: "problema",
    explanation: "La fuente de alimentación no debe abrirse en esta actividad; puede contener elementos peligrosos incluso desconectada.",
  },
];

const ORDER_STEPS = [
  { id: 1, text: "Apagar y desconectar el equipo." },
  { id: 2, text: "Comprobar que el componente es compatible." },
  { id: 3, text: "Localizar la ranura o conexión correcta." },
  { id: 4, text: "Colocar el componente sin forzarlo." },
  { id: 5, text: "Comprobar que ha quedado correctamente conectado." },
];

const ORDER_INITIAL_SEQUENCE = [3, 5, 1, 4, 2];

const FINAL_QUESTION =
  "¿Por qué que un componente encaje físicamente no significa necesariamente que sea adecuado para ese ordenador?";

// Lista cerrada de IDs autorizados (pseudónimos de clase, incluido el del profesor).
// No son nombres reales; añade o quita códigos aquí para otro grupo.
const ALLOWED_IDS = [
  "FRPENA",
  "NAG13", "DBG8", "CBP9", "MCR8", "ACM13", "DCA10", "MC015", "GCA34",
  "ACV10", "JCL11", "CFG12", "LFP13", "AFC15", "MGT7", "GGF12", "DLG9",
  "NLP6", "JPG14", "SPP11", "SRO22", "NRG51", "ARP9", "ASU16", "PSB53",
  "FVC55", "OVA5", "AVL13", "SVS16",
].map((id) => id.toUpperCase());

/* ------------------------------------------------------------------ */
/* Estado en memoria                                                   */
/* ------------------------------------------------------------------ */

const MAX_ATTEMPTS = 2;

function createRetoState(extra) {
  return Object.assign(
    { firstChecked: false, firstScore: null, corrected: false, attempts: 0, locked: false },
    extra
  );
}

const state = {
  studentId: "",
  screen: "inicio",
  reto1: createRetoState({ assignments: {}, selectedComponent: null }),
  reto2: createRetoState({ answers: {} }),
  reto3: createRetoState({ answers: {} }),
  reto4: createRetoState({ order: ORDER_INITIAL_SEQUENCE.slice() }),
  final: { answered: false, text: "" },
};

const SCREEN_ORDER = ["inicio", "reto1", "reto2", "reto3", "reto4", "final-reto", "resultado"];
const PROGRESS_STEPS = [
  { screen: "reto1", label: "Reto 1" },
  { screen: "reto2", label: "Reto 2" },
  { screen: "reto3", label: "Reto 3" },
  { screen: "reto4", label: "Reto 4" },
  { screen: "final-reto", label: "Reto final" },
  { screen: "resultado", label: "Resultado" },
];

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

function $(selector, root) {
  return (root || document).querySelector(selector);
}

function el(tag, props, children) {
  const node = document.createElement(tag);
  if (props) {
    Object.keys(props).forEach((key) => {
      if (key === "class") node.className = props[key];
      else if (key === "html") node.innerHTML = props[key];
      else if (key.startsWith("data-")) node.setAttribute(key, props[key]);
      else if (key.startsWith("aria-")) node.setAttribute(key, props[key]);
      else node[key] = props[key];
    });
  }
  (children || []).forEach((child) => {
    if (typeof child === "string") node.appendChild(document.createTextNode(child));
    else if (child) node.appendChild(child);
  });
  return node;
}

function goTo(screenId) {
  state.screen = screenId;
  SCREEN_ORDER.forEach((id) => {
    const section = document.getElementById("screen-" + id);
    if (section) section.hidden = id !== screenId;
  });
  updateProgressNav();
  const heading = $("#screen-" + screenId + " h2");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus();
  }
  window.scrollTo(0, 0);
}

function updateProgressNav() {
  const nav = document.getElementById("progress-nav");
  const list = document.getElementById("progress-list");
  if (state.screen === "inicio") {
    nav.hidden = true;
    return;
  }
  nav.hidden = false;
  list.innerHTML = "";
  const currentIndex = PROGRESS_STEPS.findIndex((s) => s.screen === state.screen);
  PROGRESS_STEPS.forEach((step, index) => {
    const li = document.createElement("li");
    li.textContent = step.label;
    if (index < currentIndex) li.setAttribute("data-state", "done");
    else if (index === currentIndex) li.setAttribute("data-state", "current");
    else li.setAttribute("data-state", "upcoming");
    list.appendChild(li);
  });
}

/* ------------------------------------------------------------------ */
/* Pantalla inicial                                                    */
/* ------------------------------------------------------------------ */

function validateStudentId(value) {
  const trimmed = value.trim();
  if (trimmed.length < 3 || trimmed.length > 12) {
    return "El ID debe tener entre 3 y 12 caracteres.";
  }
  if (!/^[A-Za-z0-9]+$/.test(trimmed)) {
    return "El ID solo puede contener letras y números, sin espacios.";
  }
  if (!ALLOWED_IDS.includes(trimmed.toUpperCase())) {
    return "Ese ID no está en la lista de la clase. Revisa cómo lo has escrito.";
  }
  return "";
}

function initInicio() {
  const form = document.getElementById("form-inicio");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("input-id");
    const error = validateStudentId(input.value);
    const errorEl = document.getElementById("id-error");
    if (error) {
      errorEl.textContent = error;
      input.setAttribute("aria-invalid", "true");
      input.focus();
      return;
    }
    errorEl.textContent = "";
    input.removeAttribute("aria-invalid");
    state.studentId = input.value.trim();
    goTo("reto1");
  });
}

/* ------------------------------------------------------------------ */
/* Reto 1                                                              */
/* ------------------------------------------------------------------ */

function initReto1() {
  const tray = document.getElementById("reto1-tray");
  tray.innerHTML = "";

  COMPONENTS.forEach((component) => {
    const chip = el(
      "button",
      {
        type: "button",
        class: "component-chip",
        id: "chip-" + component.id,
        draggable: "true",
        "aria-pressed": "false",
        "data-component": component.id,
      },
      [
        el("span", { class: "chip-icon", html: ICONS[component.id] }),
        document.createTextNode(component.label),
      ]
    );
    chip.addEventListener("click", () => onChipClick(component.id));
    chip.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", component.id);
    });
    tray.appendChild(chip);
  });

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.setAttribute("tabindex", "0");
    zone.setAttribute("role", "button");
    zone.setAttribute(
      "aria-label",
      ZONE_LABELS[zone.dataset.zone] + ". Zona vacía. Selecciona un componente y después esta zona."
    );
    zone.addEventListener("click", () => onZoneActivate(zone.dataset.zone));
    zone.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onZoneActivate(zone.dataset.zone);
      }
    });
    zone.addEventListener("dragover", (event) => event.preventDefault());
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      const componentId = event.dataTransfer.getData("text/plain");
      if (componentId) placeComponent(componentId, zone.dataset.zone);
    });
  });

  document.getElementById("reto1-check").addEventListener("click", checkReto1);
  document.getElementById("reto1-reset").addEventListener("click", resetReto1);
  document.getElementById("reto1-next").addEventListener("click", () => goTo("reto2"));

  renderReto1();
}

function onChipClick(componentId) {
  const r1 = state.reto1;
  if (r1.locked) return;
  if (r1.assignments[componentId] !== undefined) return; // ya colocado; usar la zona para liberarlo
  r1.selectedComponent = r1.selectedComponent === componentId ? null : componentId;
  renderReto1();
}

function onZoneActivate(zoneId) {
  const r1 = state.reto1;
  if (r1.locked) return;
  const occupantEntry = Object.entries(r1.assignments).find(([, z]) => z === zoneId);

  if (r1.selectedComponent) {
    placeComponent(r1.selectedComponent, zoneId);
    return;
  }

  if (occupantEntry) {
    delete r1.assignments[occupantEntry[0]];
    renderReto1();
    return;
  }

  const feedback = document.getElementById("reto1-feedback");
  feedback.textContent = "Selecciona primero un componente de la lista.";
}

function placeComponent(componentId, zoneId) {
  const r1 = state.reto1;
  if (r1.locked) return;
  const previousZoneOccupant = Object.entries(r1.assignments).find(([, z]) => z === zoneId);
  if (previousZoneOccupant) delete r1.assignments[previousZoneOccupant[0]];
  r1.assignments[componentId] = zoneId;
  r1.selectedComponent = null;
  renderReto1();
}

function resetReto1() {
  state.reto1.assignments = {};
  state.reto1.selectedComponent = null;
  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.removeAttribute("data-result");
  });
  document.getElementById("reto1-feedback").textContent = "";
  renderReto1();
}

function renderReto1() {
  const r1 = state.reto1;
  COMPONENTS.forEach((component) => {
    const chip = document.getElementById("chip-" + component.id);
    const placed = r1.assignments[component.id] !== undefined;
    chip.setAttribute("data-placed", placed ? "true" : "false");
    chip.setAttribute("aria-pressed", r1.selectedComponent === component.id ? "true" : "false");
  });

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    const zoneId = zone.dataset.zone;
    const occupant = Object.entries(r1.assignments).find(([, z]) => z === zoneId);
    zone.innerHTML = "";
    zone.appendChild(el("span", { class: "zone-number", "aria-hidden": "true" }, [zoneId]));
    if (occupant) {
      const component = COMPONENTS.find((c) => c.id === occupant[0]);
      zone.setAttribute("data-filled", "true");
      zone.setAttribute(
        "aria-label",
        ZONE_LABELS[zoneId] + ". Contiene: " + component.label + ". Pulsa para liberar esta zona."
      );
      zone.appendChild(el("span", { class: "zone-badge" }, [component.label]));
    } else {
      zone.setAttribute("data-filled", "false");
      zone.setAttribute(
        "aria-label",
        ZONE_LABELS[zoneId] + ". Zona vacía. Selecciona un componente y después esta zona."
      );
    }
  });
}

function checkReto1() {
  const r1 = state.reto1;
  if (r1.locked) return;
  const feedback = document.getElementById("reto1-feedback");

  if (Object.keys(r1.assignments).length < COMPONENTS.length) {
    feedback.textContent = "Coloca los cinco componentes antes de comprobar.";
    return;
  }

  let score = 0;
  COMPONENTS.forEach((component) => {
    const placedZone = r1.assignments[component.id];
    const zoneEl = document.querySelector('.drop-zone[data-zone="' + placedZone + '"]');
    const isCorrect = placedZone === component.zone;
    if (isCorrect) score += 1;
    if (zoneEl) {
      zoneEl.setAttribute("data-result", isCorrect ? "correct" : "incorrect");
      const mark = isCorrect ? " ✓ correcto" : " ✗ revisa";
      zoneEl.setAttribute(
        "aria-label",
        zoneEl.getAttribute("aria-label").replace(/\.\s*$/, "") + "." + mark
      );
    }
  });

  const locked = registerAttempt(r1, score, COMPONENTS.length);
  feedback.textContent = "Aciertos: " + score + " de " + COMPONENTS.length + "." + attemptStatusText(r1, score, COMPONENTS.length);
  document.getElementById("reto1-next").hidden = false;
  if (locked) lockReto1();
}

function lockReto1() {
  document.getElementById("reto1-tray").classList.add("is-locked");
  document.getElementById("reto1-board-wrap").classList.add("is-locked");
  document.querySelectorAll("#reto1-tray .component-chip").forEach((chip) => {
    chip.disabled = true;
    chip.setAttribute("draggable", "false");
  });
  document.querySelectorAll(".drop-zone").forEach((zone) => zone.setAttribute("tabindex", "-1"));
  document.getElementById("reto1-check").disabled = true;
  document.getElementById("reto1-reset").disabled = true;
}

/* ------------------------------------------------------------------ */
/* Reto 2                                                              */
/* ------------------------------------------------------------------ */

function initReto2() {
  const list = document.getElementById("reto2-list");
  list.innerHTML = "";

  SCENARIOS.forEach((scenario, index) => {
    const item = el("li", { class: "scenario-item" }, [
      el("p", {}, [(index + 1) + ". " + scenario.text]),
    ]);
    const group = el("div", { class: "option-group", role: "group", "aria-label": "Selecciona la conexión adecuada" });
    CONNECTION_OPTIONS.forEach((option) => {
      const btn = el(
        "button",
        {
          type: "button",
          class: "option-btn",
          "aria-pressed": "false",
          "data-scenario": scenario.id,
          "data-option": option.id,
        },
        [option.label]
      );
      btn.addEventListener("click", () => {
        state.reto2.answers[scenario.id] = option.id;
        renderReto2Selection(scenario.id);
      });
      group.appendChild(btn);
    });
    item.appendChild(group);
    list.appendChild(item);
  });

  document.getElementById("reto2-check").addEventListener("click", checkReto2);
  document.getElementById("reto2-next").addEventListener("click", () => goTo("reto3"));
}

function renderReto2Selection(scenarioId) {
  document.querySelectorAll('.option-btn[data-scenario="' + scenarioId + '"]').forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.option === state.reto2.answers[scenarioId] ? "true" : "false");
  });
}

function checkReto2() {
  const r2 = state.reto2;
  if (r2.locked) return;
  const feedback = document.getElementById("reto2-feedback");
  if (Object.keys(r2.answers).length < SCENARIOS.length) {
    feedback.textContent = "Responde las cinco situaciones antes de comprobar.";
    return;
  }

  let score = 0;
  SCENARIOS.forEach((scenario) => {
    const chosen = r2.answers[scenario.id];
    const isCorrect = chosen === scenario.correct;
    if (isCorrect) score += 1;
    document.querySelectorAll('.option-btn[data-scenario="' + scenario.id + '"]').forEach((btn) => {
      btn.removeAttribute("data-result");
      if (btn.dataset.option === chosen) {
        btn.setAttribute("data-result", isCorrect ? "correct" : "incorrect");
      }
    });
  });

  const locked = registerAttempt(r2, score, SCENARIOS.length);
  feedback.textContent = "Aciertos: " + score + " de " + SCENARIOS.length + "." + attemptStatusText(r2, score, SCENARIOS.length);
  document.getElementById("reto2-next").hidden = false;
  if (locked) lockReto2();
}

function lockReto2() {
  document.querySelectorAll("#reto2-list .option-btn").forEach((btn) => { btn.disabled = true; });
  document.getElementById("reto2-check").disabled = true;
}

/* ------------------------------------------------------------------ */
/* Reto 3                                                              */
/* ------------------------------------------------------------------ */

function initReto3() {
  const list = document.getElementById("reto3-list");
  list.innerHTML = "";

  SITUATIONS.forEach((situation, index) => {
    const item = el("li", { class: "situation-item" }, [
      el("p", {}, [String.fromCharCode(65 + index) + ". " + situation.text]),
    ]);
    const group = el("div", { class: "option-group", role: "group", "aria-label": "¿Correcto o hay un problema?" });
    ["correcto", "problema"].forEach((value) => {
      const label = value === "correcto" ? "Correcto" : "Hay un problema";
      const btn = el(
        "button",
        {
          type: "button",
          class: "option-btn",
          "aria-pressed": "false",
          "data-situation": situation.id,
          "data-option": value,
        },
        [label]
      );
      btn.addEventListener("click", () => {
        state.reto3.answers[situation.id] = value;
        renderReto3Selection(situation.id);
      });
      group.appendChild(btn);
    });
    item.appendChild(group);
    item.appendChild(
      el("p", { class: "situation-explanation", id: "explain-" + situation.id }, [situation.explanation])
    );
    list.appendChild(item);
  });

  document.getElementById("reto3-check").addEventListener("click", checkReto3);
  document.getElementById("reto3-next").addEventListener("click", () => goTo("reto4"));
}

function renderReto3Selection(situationId) {
  document.querySelectorAll('.option-btn[data-situation="' + situationId + '"]').forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.option === state.reto3.answers[situationId] ? "true" : "false");
  });
}

function checkReto3() {
  const r3 = state.reto3;
  if (r3.locked) return;
  const feedback = document.getElementById("reto3-feedback");
  if (Object.keys(r3.answers).length < SITUATIONS.length) {
    feedback.textContent = "Responde las cuatro situaciones antes de comprobar.";
    return;
  }

  let score = 0;
  SITUATIONS.forEach((situation) => {
    const chosen = r3.answers[situation.id];
    const isCorrect = chosen === situation.correct;
    if (isCorrect) score += 1;
    document.querySelectorAll('.option-btn[data-situation="' + situation.id + '"]').forEach((btn) => {
      btn.removeAttribute("data-result");
      if (btn.dataset.option === chosen) {
        btn.setAttribute("data-result", isCorrect ? "correct" : "incorrect");
      }
    });
    document.getElementById("explain-" + situation.id).setAttribute("data-visible", "true");
  });

  const locked = registerAttempt(r3, score, SITUATIONS.length);
  feedback.textContent = "Aciertos: " + score + " de " + SITUATIONS.length + ". Lee la explicación de cada situación." + attemptStatusText(r3, score, SITUATIONS.length);
  document.getElementById("reto3-next").hidden = false;
  if (locked) lockReto3();
}

function lockReto3() {
  document.querySelectorAll("#reto3-list .option-btn").forEach((btn) => { btn.disabled = true; });
  document.getElementById("reto3-check").disabled = true;
}

/* ------------------------------------------------------------------ */
/* Reto 4                                                              */
/* ------------------------------------------------------------------ */

function initReto4() {
  document.getElementById("reto4-check").addEventListener("click", checkReto4);
  document.getElementById("reto4-next").addEventListener("click", () => goTo("final-reto"));
  renderReto4();
}

function renderReto4() {
  const list = document.getElementById("reto4-list");
  list.innerHTML = "";
  const order = state.reto4.order;

  order.forEach((stepId, index) => {
    const step = ORDER_STEPS.find((s) => s.id === stepId);
    const item = el("li", { class: "order-item", "data-step": stepId }, [
      el("span", { class: "order-position" }, [String(index + 1)]),
      el("span", { class: "order-text" }, [step.text]),
    ]);
    const controls = el("div", { class: "order-controls" });
    const upBtn = el("button", { type: "button", "aria-label": "Subir: " + step.text }, ["↑"]);
    const downBtn = el("button", { type: "button", "aria-label": "Bajar: " + step.text }, ["↓"]);
    upBtn.disabled = index === 0;
    downBtn.disabled = index === order.length - 1;
    upBtn.addEventListener("click", () => moveStep(index, -1));
    downBtn.addEventListener("click", () => moveStep(index, 1));
    controls.appendChild(upBtn);
    controls.appendChild(downBtn);
    item.appendChild(controls);
    item.setAttribute("draggable", "true");
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", String(index));
    });
    item.addEventListener("dragover", (event) => event.preventDefault());
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      const fromIndex = Number(event.dataTransfer.getData("text/plain"));
      reorderStep(fromIndex, index);
    });
    list.appendChild(item);
  });
}

function moveStep(index, delta) {
  if (state.reto4.locked) return;
  const order = state.reto4.order;
  const target = index + delta;
  if (target < 0 || target >= order.length) return;
  const tmp = order[index];
  order[index] = order[target];
  order[target] = tmp;
  renderReto4();
}

function reorderStep(fromIndex, toIndex) {
  if (state.reto4.locked) return;
  if (fromIndex === toIndex || Number.isNaN(fromIndex)) return;
  const order = state.reto4.order;
  const [moved] = order.splice(fromIndex, 1);
  order.splice(toIndex, 0, moved);
  renderReto4();
}

function checkReto4() {
  const r4 = state.reto4;
  if (r4.locked) return;
  const feedback = document.getElementById("reto4-feedback");
  const order = r4.order;
  let score = 0;

  document.querySelectorAll("#reto4-list .order-item").forEach((item, index) => {
    const stepId = Number(item.dataset.step);
    const isCorrect = order[index] === ORDER_STEPS[index].id && stepId === ORDER_STEPS[index].id;
    if (order[index] === ORDER_STEPS[index].id) score += 1;
    item.setAttribute("data-result", order[index] === ORDER_STEPS[index].id ? "correct" : "incorrect");
  });

  const locked = registerAttempt(r4, score, ORDER_STEPS.length);
  feedback.textContent = "Pasos en la posición correcta: " + score + " de " + ORDER_STEPS.length + "." + attemptStatusText(r4, score, ORDER_STEPS.length);
  document.getElementById("reto4-next").hidden = false;
  if (locked) lockReto4();
}

function lockReto4() {
  document.querySelectorAll("#reto4-list .order-item").forEach((item) => {
    item.setAttribute("draggable", "false");
  });
  document.querySelectorAll("#reto4-list .order-controls button").forEach((btn) => { btn.disabled = true; });
  document.getElementById("reto4-check").disabled = true;
}

/* ------------------------------------------------------------------ */
/* Reto final                                                          */
/* ------------------------------------------------------------------ */

function initFinalReto() {
  const textarea = document.getElementById("input-razona");
  const counter = document.getElementById("razona-count");
  textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length + " / 250 caracteres";
  });

  document.getElementById("final-reto-save").addEventListener("click", () => {
    const value = textarea.value.trim();
    const feedback = document.getElementById("final-reto-feedback");
    if (!value) {
      feedback.textContent = "Escribe una respuesta antes de continuar.";
      return;
    }
    state.final.answered = true;
    state.final.text = textarea.value.trim();
    renderResultado();
    goTo("resultado");
  });
}

/* ------------------------------------------------------------------ */
/* Registro de primer intento (regla pedagógica común)                 */
/* ------------------------------------------------------------------ */

function registerAttempt(retoState, score, max) {
  retoState.attempts += 1;
  if (!retoState.firstChecked) {
    retoState.firstChecked = true;
    retoState.firstScore = score;
  } else {
    retoState.corrected = true;
  }
  retoState.lastMax = max;
  if (score === max || retoState.attempts >= MAX_ATTEMPTS) {
    retoState.locked = true;
  }
  return retoState.locked;
}

function attemptStatusText(retoState, score, max) {
  if (score === max) return " Todo correcto.";
  if (retoState.locked) return " Se han agotado los intentos disponibles para este reto.";
  return " Te queda un intento más para corregir lo marcado en rojo.";
}

/* ------------------------------------------------------------------ */
/* Resultado final                                                     */
/* ------------------------------------------------------------------ */

function renderResultado() {
  document.getElementById("result-id").textContent = "ID: " + state.studentId;

  const grid = document.getElementById("result-grid");
  grid.innerHTML = "";
  const rows = [
    ["Componentes", state.reto1.firstScore, COMPONENTS.length],
    ["Conexiones", state.reto2.firstScore, SCENARIOS.length],
    ["Situaciones", state.reto3.firstScore, SITUATIONS.length],
    ["Montaje seguro", state.reto4.firstScore, ORDER_STEPS.length],
  ];

  let total = 0;
  let maxTotal = 0;
  rows.forEach(([label, score, max]) => {
    total += score || 0;
    maxTotal += max;
    grid.appendChild(el("dt", {}, [label]));
    grid.appendChild(el("dd", {}, [(score == null ? "—" : score) + "/" + max]));
  });

  document.getElementById("result-total").textContent = "TOTAL PRIMER INTENTO: " + total + "/" + maxTotal;

  const anyCorrected = [state.reto1, state.reto2, state.reto3, state.reto4].some((r) => r.corrected);
  document.getElementById("result-corrected").hidden = !anyCorrected;

  document.getElementById("result-final-answer-text").textContent = state.final.text;

  document.getElementById("result-plain-text").value = buildResultPlainText(rows, total, maxTotal, anyCorrected);
}

function buildResultPlainText(rows, total, maxTotal, anyCorrected) {
  const lines = [
    "TAREA 3 · MONTA EL EQUIPO",
    "ID: " + state.studentId,
    "",
    "PRIMER INTENTO",
  ];
  rows.forEach(([label, score, max]) => {
    lines.push(label + ": " + (score == null ? "—" : score) + "/" + max);
  });
  lines.push("TOTAL PRIMER INTENTO: " + total + "/" + maxTotal);
  if (anyCorrected) lines.push("Actividad corregida: completada");
  lines.push("");
  lines.push("Respuesta final:");
  lines.push(state.final.text);
  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/* Captura, créditos y reinicio                                        */
/* ------------------------------------------------------------------ */

function initResultadoActions() {
  const captureBtn = document.getElementById("btn-capture");
  captureBtn.addEventListener("click", () => {
    const active = document.body.classList.toggle("capture-mode");
    captureBtn.textContent = active ? "Salir de modo captura" : "Preparar captura";
  });

  document.getElementById("btn-restart").addEventListener("click", () => {
    window.location.reload();
  });

  const copyBtn = document.getElementById("btn-copy-result");
  const textarea = document.getElementById("result-plain-text");
  const confirm = document.getElementById("copy-confirm");
  copyBtn.addEventListener("click", async () => {
    let copied = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textarea.value);
        copied = true;
      } catch (err) {
        copied = false;
      }
    }
    if (!copied) {
      textarea.focus();
      textarea.select();
      try {
        copied = document.execCommand("copy");
      } catch (err) {
        copied = false;
      }
    }
    confirm.textContent = copied
      ? "Copiado. Ya puedes pegarlo en Teams."
      : "No se pudo copiar automáticamente: selecciona el texto y copia con Ctrl+C.";
  });
}

function initCredits() {
  const modal = document.getElementById("credits-modal");
  document.getElementById("btn-credits").addEventListener("click", () => {
    modal.hidden = false;
    document.getElementById("credits-close").focus();
  });
  document.getElementById("credits-close").addEventListener("click", () => {
    modal.hidden = true;
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.hidden = true;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) modal.hidden = true;
  });
}

/* ------------------------------------------------------------------ */
/* Arranque                                                             */
/* ------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  initInicio();
  initReto1();
  initReto2();
  initReto3();
  initReto4();
  initFinalReto();
  initResultadoActions();
  initCredits();
  goTo("inicio");
});
