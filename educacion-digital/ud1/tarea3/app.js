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
  cpu: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="10" y="10" width="4" height="4" fill="currentColor"/><line x1="2" y1="9" x2="6" y2="9" stroke="currentColor" stroke-width="1.6"/><line x1="2" y1="15" x2="6" y2="15" stroke="currentColor" stroke-width="1.6"/><line x1="18" y1="9" x2="22" y2="9" stroke="currentColor" stroke-width="1.6"/><line x1="18" y1="15" x2="22" y2="15" stroke="currentColor" stroke-width="1.6"/><line x1="9" y1="2" x2="9" y2="6" stroke="currentColor" stroke-width="1.6"/><line x1="15" y1="2" x2="15" y2="6" stroke="currentColor" stroke-width="1.6"/><line x1="9" y1="18" x2="9" y2="22" stroke="currentColor" stroke-width="1.6"/><line x1="15" y1="18" x2="15" y2="22" stroke="currentColor" stroke-width="1.6"/></svg>',
  ram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="9" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="6" y1="16" x2="6" y2="19" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="16" x2="10" y2="19" stroke="currentColor" stroke-width="1.6"/><line x1="14" y1="16" x2="14" y2="19" stroke="currentColor" stroke-width="1.6"/><line x1="18" y1="16" x2="18" y2="19" stroke="currentColor" stroke-width="1.6"/></svg>',
  gpu: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="6" width="20" height="10" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="8" cy="11" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="15" cy="11" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="2" y1="18" x2="8" y2="18" stroke="currentColor" stroke-width="1.6"/></svg>',
  ssd: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="8" width="16" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="7" y="11" width="4" height="2" fill="currentColor"/><rect x="13" y="11" width="4" height="2" fill="currentColor"/><path d="M4 8 L2 6 M20 8 L22 6" stroke="currentColor" stroke-width="1.4" fill="none"/></svg>',
  sata: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="9" width="12" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="15" y="10" width="6" height="4" fill="currentColor"/></svg>',
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
  { id: "s1", text: "El monitor debe mostrar la imagen del ordenador.", correct: "hdmi" },
  { id: "s2", text: "El teclado y el ratón deben conectarse para poder usarlos.", correct: "usb" },
  { id: "s3", text: "El ordenador debe conectarse a la red mediante cable.", correct: "ethernet" },
  { id: "s4", text: "La tarjeta gráfica debe conectarse a la placa base.", correct: "pcie" },
  { id: "s5", text: "El SSD M.2 debe conectarse a la placa base.", correct: "m2" },
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

/* ------------------------------------------------------------------ */
/* Estado en memoria                                                   */
/* ------------------------------------------------------------------ */

const state = {
  studentId: "",
  screen: "inicio",
  reto1: { assignments: {}, selectedComponent: null, firstChecked: false, firstScore: null, corrected: false, allFilledOnce: false },
  reto2: { answers: {}, firstChecked: false, firstScore: null, corrected: false },
  reto3: { answers: {}, firstChecked: false, firstScore: null, corrected: false },
  reto4: { order: ORDER_INITIAL_SEQUENCE.slice(), firstChecked: false, firstScore: null, corrected: false },
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
  if (r1.assignments[componentId] !== undefined) return; // ya colocado; usar la zona para liberarlo
  r1.selectedComponent = r1.selectedComponent === componentId ? null : componentId;
  renderReto1();
}

function onZoneActivate(zoneId) {
  const r1 = state.reto1;
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
    if (occupant) {
      const component = COMPONENTS.find((c) => c.id === occupant[0]);
      zone.setAttribute("data-filled", "true");
      zone.setAttribute(
        "aria-label",
        ZONE_LABELS[zoneId] + ". Contiene: " + component.label + ". Pulsa para liberar esta zona."
      );
      zone.appendChild(document.createTextNode(component.label));
    } else {
      zone.setAttribute("data-filled", "false");
      zone.setAttribute(
        "aria-label",
        ZONE_LABELS[zoneId] + ". Zona vacía. Selecciona un componente y después esta zona."
      );
      zone.appendChild(el("span", { class: "zone-mark" }, [ZONE_LABELS[zoneId]]));
    }
  });
}

function checkReto1() {
  const r1 = state.reto1;
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

  registerAttempt(r1, score, COMPONENTS.length);
  feedback.textContent =
    "Aciertos: " + score + " de " + COMPONENTS.length + "." +
    (score < COMPONENTS.length ? " Las zonas marcadas en rojo no son correctas: puedes corregirlas." : " Todo correcto.");
  document.getElementById("reto1-next").hidden = false;
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
  const feedback = document.getElementById("reto2-feedback");
  if (Object.keys(state.reto2.answers).length < SCENARIOS.length) {
    feedback.textContent = "Responde las cinco situaciones antes de comprobar.";
    return;
  }

  let score = 0;
  SCENARIOS.forEach((scenario) => {
    const chosen = state.reto2.answers[scenario.id];
    const isCorrect = chosen === scenario.correct;
    if (isCorrect) score += 1;
    document.querySelectorAll('.option-btn[data-scenario="' + scenario.id + '"]').forEach((btn) => {
      btn.removeAttribute("data-result");
      if (btn.dataset.option === chosen) {
        btn.setAttribute("data-result", isCorrect ? "correct" : "incorrect");
      }
    });
  });

  registerAttempt(state.reto2, score, SCENARIOS.length);
  feedback.textContent = "Aciertos: " + score + " de " + SCENARIOS.length + "." +
    (score < SCENARIOS.length ? " Puedes corregir las respuestas marcadas en rojo." : " Todo correcto.");
  document.getElementById("reto2-next").hidden = false;
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
  const feedback = document.getElementById("reto3-feedback");
  if (Object.keys(state.reto3.answers).length < SITUATIONS.length) {
    feedback.textContent = "Responde las cuatro situaciones antes de comprobar.";
    return;
  }

  let score = 0;
  SITUATIONS.forEach((situation) => {
    const chosen = state.reto3.answers[situation.id];
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

  registerAttempt(state.reto3, score, SITUATIONS.length);
  feedback.textContent = "Aciertos: " + score + " de " + SITUATIONS.length + ". Lee la explicación de cada situación.";
  document.getElementById("reto3-next").hidden = false;
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
  const order = state.reto4.order;
  const target = index + delta;
  if (target < 0 || target >= order.length) return;
  const tmp = order[index];
  order[index] = order[target];
  order[target] = tmp;
  renderReto4();
}

function reorderStep(fromIndex, toIndex) {
  if (fromIndex === toIndex || Number.isNaN(fromIndex)) return;
  const order = state.reto4.order;
  const [moved] = order.splice(fromIndex, 1);
  order.splice(toIndex, 0, moved);
  renderReto4();
}

function checkReto4() {
  const feedback = document.getElementById("reto4-feedback");
  const order = state.reto4.order;
  let score = 0;

  document.querySelectorAll("#reto4-list .order-item").forEach((item, index) => {
    const stepId = Number(item.dataset.step);
    const isCorrect = order[index] === ORDER_STEPS[index].id && stepId === ORDER_STEPS[index].id;
    if (order[index] === ORDER_STEPS[index].id) score += 1;
    item.setAttribute("data-result", order[index] === ORDER_STEPS[index].id ? "correct" : "incorrect");
  });

  registerAttempt(state.reto4, score, ORDER_STEPS.length);
  feedback.textContent = "Pasos en la posición correcta: " + score + " de " + ORDER_STEPS.length + ". Puedes reordenar y volver a comprobar.";
  document.getElementById("reto4-next").hidden = false;
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
  if (!retoState.firstChecked) {
    retoState.firstChecked = true;
    retoState.firstScore = score;
  } else {
    retoState.corrected = true;
  }
  retoState.lastMax = max;
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
