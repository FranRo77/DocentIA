const tectonicData = [
  { id: 1, model: "assets/wikimedia_rift.svg", modelAlt: "Modelo tridimensional dun límite diverxente continental cun val de rift", modelCaption: "Modelo de rift continental · domdomegg / Wikimedia Commons · CC BY 4.0 · non está a escala", image: "assets/rift_africa.jpg", alt: "Fotografía oblicua dun val alongado con lagos e escarpas lineais", caption: "Lago Magadi e áreas próximas, Kenya. Fotografía oblicua desde a ISS." },
  { id: 2, model: "assets/wikimedia_subducion_oceano_continente.svg", modelAlt: "Modelo tridimensional dunha placa oceánica que subduce baixo unha continental", modelCaption: "Modelo de subdución océano–continente · domdomegg / Wikimedia Commons · CC BY 4.0 · non está a escala", image: "assets/andes.jpg", alt: "Imaxe de satélite dunha extensa cordilleira paralela á costa", caption: "Andes centrais e Altiplano. Imaxe de satélite MODIS." },
  { id: 3, model: "assets/wikimedia_colision_continental.svg", modelAlt: "Corte de dúas placas continentais en colisión cunha cordilleira central", modelCaption: "Modelo de colisión continental · USGS, Nefronus e Gretarsson / Wikimedia Commons · CC0 · non está a escala", image: "assets/himalaya.jpg", alt: "Imaxe de satélite en falsa cor dunha cordilleira con numerosos cumios e vales", caption: "Himalaia oriental. Imaxe de satélite ASTER en falsa cor." },
  { id: 4, model: "assets/wikimedia_arco_insular.svg", modelAlt: "Corte dunha placa oceánica que subduce baixo outra e forma un arco insular", modelCaption: "Modelo de subdución océano–océano · Medium69 e Bibar / Wikimedia Commons · CC0 · non está a escala", image: "assets/aleutianas.jpg", alt: "Fotografía oblicua de dúas illas volcánicas no océano", caption: "Illas Aleutianas, Alaska. Fotografía oblicua desde a ISS." },
  { id: 5, model: "assets/wikimedia_transformante.svg", modelAlt: "Modelo tridimensional de dúas placas continentais que se desprazan lateralmente", modelCaption: "Modelo de límite transformante · domdomegg / Wikimedia Commons · CC BY 4.0 · non está a escala", image: "assets/san_andreas.jpg", alt: "Fotografía aérea dunha longa traza lineal que atravesa unha chaira", caption: "Chairas de Carrizo, California. Fotografía aérea." },
  { id: 6, model: "assets/wikimedia_punto_quente.svg", modelAlt: "Corte dunha placa en movemento sobre unha pluma mantélica que orixina unha cadea volcánica", modelCaption: "Modelo de punto quente · Los688 / Wikimedia Commons · licenza libre indicada na fonte · non está a escala", image: "assets/hawaii.jpg", alt: "Imaxe de satélite dunha grande illa volcánica no medio do océano", caption: "Illa de Hawai. Composición de datos Landsat 7." }
];

const deformationData = [
  { id: 1, image: "assets/galeria_pregamento_1.jpg", alt: "Estratos curvados nun corte de estrada", caption: "Fotografía 1 · Corte de estrada." },
  { id: 2, image: "assets/galeria_pregamento_2.jpg", alt: "Estratos intensamente curvados nunha ladeira", caption: "Fotografía 2 · Paisaxe de Campodola-Leixazós, Quiroga." },
  { id: 3, image: "assets/galeria_falla_1.jpg", alt: "Estratos cortados por unha superficie inclinada", caption: "Fotografía 3 · Afloramento de areniscas e conglomerados." },
  { id: 4, image: "assets/galeria_falla_2.jpg", alt: "Veo claro cortado e desprazado nunha rocha escura", caption: "Fotografía 4 · Veo de cuarzo nun afloramento alpino." },
  { id: 5, image: "assets/galeria_diaclasa_1.jpg", alt: "Fractura vertical que atravesa varios estratos", caption: "Fotografía 5 · Afloramento estratificado." },
  { id: 6, image: "assets/galeria_diaclasa_2.jpg", alt: "Afloramento rochoso atravesado por varias familias de fracturas", caption: "Fotografía 6 · Afloramento de diorita." }
];

const boundaryOptions = [
  ["", "Selecciona…"],
  ["converxente", "Límite converxente"],
  ["diverxente", "Límite diverxente"],
  ["transformante", "Límite transformante ou conservativo"],
  ["intraplaca", "Fenómeno intraplaca"]
];

const processOptions = [
  ["", "Selecciona…"],
  ["rift", "Extensión continental, fallas normais e rift"],
  ["subducion_continente", "Subdución océano–continente, cordilleira e arco volcánico"],
  ["colision", "Colisión continente–continente e oroxenia"],
  ["subducion_insular", "Subdución océano–océano e arco insular"],
  ["desgarre", "Desprazamento lateral, falla de desgarre e sismos"],
  ["punto_quente", "Punto quente, ascenso de magma e volcanismo"]
];

const structureOptions = [
  ["", "Selecciona…"],
  ["pregamento", "Pregamento"],
  ["falla", "Falla"],
  ["diaclase", "Diáclase"]
];

function optionsMarkup(options) {
  return options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
}

function imageButton(src, alt, caption, label = "") {
  return `<button class="image-button" type="button" data-full="${src}" data-caption="${caption}" aria-label="Ampliar imaxe">
    <img src="${src}" alt="${alt}" loading="lazy">
    ${label ? `<span class="visual-tag">${label}</span>` : ""}
  </button>`;
}

document.querySelector("#tectonicCases").innerHTML = tectonicData.map(item => `
  <article class="case-card">
    <div class="visual-pair">
      ${imageButton(item.model, item.modelAlt, item.modelCaption, "Modelo · Wikimedia")}
      ${imageButton(item.image, item.alt, item.caption, "Imaxe real")}
    </div>
    <div class="card-body">
      <p class="case-label">Caso ${item.id}</p>
      <p class="caption">${item.caption}</p>
      <div class="fields">
        <label>Contexto tectónico
          <select id="boundary-${item.id}" data-field="true">${optionsMarkup(boundaryOptions)}</select>
        </label>
        <label>Proceso principal
          <select id="process-${item.id}" data-field="true">${optionsMarkup(processOptions)}</select>
        </label>
      </div>
    </div>
  </article>`).join("");

document.querySelector("#deformationCases").innerHTML = deformationData.map(item => `
  <article class="gallery-card">
    ${imageButton(item.image, item.alt, item.caption)}
    <div class="card-body">
      <p class="case-label">Fotografía ${item.id}</p>
      <p class="caption">${item.caption}</p>
      <div class="fields">
        <label>Clasificación
          <select id="structure-${item.id}" data-field="true">${optionsMarkup(structureOptions)}</select>
        </label>
        <label>Xustificación
          <textarea id="reason-${item.id}" data-field="true" rows="4" placeholder="Que trazo visible permite distinguila das outras dúas opcións?"></textarea>
        </label>
      </div>
    </div>
  </article>`).join("");

const allInputs = () => [...document.querySelectorAll("input, select, textarea")];
const savedKey = "tectonica-imaxes-v1";

function saveState() {
  const state = {};
  allInputs().forEach(el => state[el.id] = el.value);
  localStorage.setItem(savedKey, JSON.stringify(state));
  updateProgress();
}

function restoreState() {
  try {
    const state = JSON.parse(localStorage.getItem(savedKey) || "{}");
    allInputs().forEach(el => {
      if (Object.prototype.hasOwnProperty.call(state, el.id)) el.value = state[el.id];
    });
  } catch (_) { localStorage.removeItem(savedKey); }
  updateProgress();
}

function requiredFields() {
  return [
    document.querySelector("#studentName"),
    document.querySelector("#studentGroup"),
    ...document.querySelectorAll("[data-field='true']"),
    document.querySelector("#synthesisCase"),
    document.querySelector("#synthesisText")
  ];
}

function updateProgress() {
  const fields = requiredFields();
  const done = fields.filter(el => el.value.trim()).length;
  const pct = Math.round(done / fields.length * 100);
  document.querySelector("#progressBar").style.width = pct + "%";
  document.querySelector("#progressText").textContent = pct + " %";
}

allInputs().forEach(el => el.addEventListener("input", saveState));
restoreState();

const dialog = document.querySelector("#imageDialog");
document.addEventListener("click", event => {
  const button = event.target.closest(".image-button");
  if (!button) return;
  const image = document.querySelector("#dialogImage");
  image.src = button.dataset.full;
  image.alt = button.querySelector("img").alt;
  document.querySelector("#dialogCaption").textContent = button.dataset.caption;
  dialog.showModal();
});
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

function textValue(id) { return document.querySelector(id).value.trim(); }
function selectedLabel(id) {
  const el = document.querySelector(id);
  return el.value ? el.options[el.selectedIndex].text : "Sen responder";
}
function cleanFilename(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toLowerCase() || "alumno";
}

function validate() {
  const missing = requiredFields().filter(el => !el.value.trim());
  requiredFields().forEach(el => el.classList.toggle("missing", missing.includes(el)));
  const message = document.querySelector("#validationMessage");
  if (missing.length) {
    message.textContent = `Faltan ${missing.length} campos por completar.`;
    missing[0].scrollIntoView({ behavior: "smooth", block: "center" });
    missing[0].focus({ preventScroll: true });
    return false;
  }
  message.textContent = "A actividade está completa e pode descargarse.";
  return true;
}

function buildSubmission() {
  const lines = [
    "TECTÓNICA EN IMAXES",
    "====================",
    `Nome e apelidos: ${textValue("#studentName")}`,
    `Grupo: ${textValue("#studentGroup")}`,
    `Data de xeración: ${new Date().toLocaleString("gl-ES")}`,
    "",
    "PARTE 1 · PROCESOS TECTÓNICOS",
    "------------------------------"
  ];
  tectonicData.forEach(item => {
    lines.push(
      `Caso ${item.id}: ${item.caption}`,
      `  Contexto: ${selectedLabel("#boundary-" + item.id)}`,
      `  Proceso: ${selectedLabel("#process-" + item.id)}`,
      ""
    );
  });
  lines.push(
    "Explicación dun caso:",
    `  Caso escollido: ${selectedLabel("#synthesisCase")}`,
    `  Explicación: ${textValue("#synthesisText")}`,
    "",
    "PARTE 2 · DEFORMACIÓN",
    "---------------------"
  );
  deformationData.forEach(item => {
    lines.push(
      `Fotografía ${item.id}: ${item.caption}`,
      `  Clasificación: ${selectedLabel("#structure-" + item.id)}`,
      `  Xustificación: ${textValue("#reason-" + item.id)}`,
      ""
    );
  });
  lines.push("Declaración: estas respostas recollen a miña interpretación individual das imaxes.");
  return lines.join("\r\n");
}

document.querySelector("#downloadBtn").addEventListener("click", () => {
  if (!validate()) return;
  const blob = new Blob(["\uFEFF" + buildSubmission()], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${cleanFilename(textValue("#studentName"))}_tectonica_imaxes.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
});

document.querySelector("#clearBtn").addEventListener("click", () => {
  if (!confirm("Queres borrar todas as respostas gardadas neste navegador?")) return;
  allInputs().forEach(el => el.value = "");
  localStorage.removeItem(savedKey);
  document.querySelector("#validationMessage").textContent = "";
  requiredFields().forEach(el => el.classList.remove("missing"));
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

