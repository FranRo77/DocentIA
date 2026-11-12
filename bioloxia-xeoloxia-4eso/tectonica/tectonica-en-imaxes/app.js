const tectonicData = [
  { id: 1, model: "assets/wikimedia_rift.svg", modelAlt: "Modelo tridimensional dun límite diverxente continental cun val de rift", modelCaption: "Modelo de rift continental · domdomegg / Wikimedia Commons · CC BY 4.0 · non está a escala", image: "assets/rift_africa.jpg", alt: "Fotografía oblicua dun val alongado con lagos e escarpas lineais", caption: "Lago Magadi e áreas próximas, Kenya. Fotografía oblicua desde a ISS." },
  { id: 2, model: "assets/wikimedia_subducion_oceano_continente.svg", modelAlt: "Modelo tridimensional dunha placa oceánica que subduce baixo unha continental", modelCaption: "Modelo de subdución océano–continente · domdomegg / Wikimedia Commons · CC BY 4.0 · non está a escala", image: "assets/andes.jpg", alt: "Imaxe de satélite dunha extensa cordilleira paralela á costa", caption: "Andes centrais e Altiplano. Imaxe de satélite MODIS." },
  { id: 3, model: "assets/wikimedia_colision_continental.svg", modelAlt: "Corte de dúas placas continentais en colisión cunha cordilleira central", modelCaption: "Modelo de colisión continental · USGS, Nefronus e Gretarsson / Wikimedia Commons · CC0 · non está a escala", image: "assets/himalaya.jpg", alt: "Imaxe de satélite en falsa cor dunha cordilleira con numerosos cumios e vales", caption: "Himalaia oriental. Imaxe de satélite ASTER en falsa cor." },
  { id: 4, model: "assets/wikimedia_arco_insular.svg", modelAlt: "Corte dunha placa oceánica que subduce baixo outra e forma un arco insular", modelCaption: "Modelo de subdución océano–océano · Medium69 e Bibar / Wikimedia Commons · CC0 · non está a escala", image: "assets/aleutianas.jpg", alt: "Fotografía oblicua de dúas illas volcánicas no océano", caption: "Illas Aleutianas, Alaska. Fotografía oblicua desde a ISS." },
  { id: 5, model: "assets/wikimedia_transformante.svg", modelAlt: "Modelo tridimensional de dúas placas continentais que se desprazan lateralmente", modelCaption: "Modelo de límite transformante · domdomegg / Wikimedia Commons · CC BY 4.0 · non está a escala", image: "assets/san_andreas.jpg", alt: "Fotografía aérea dunha longa traza lineal que atravesa unha chaira", caption: "Chairas de Carrizo, California. Fotografía aérea." },
  { id: 6, model: "assets/wikimedia_punto_quente.svg", modelAlt: "Corte dunha placa en movemento sobre unha pluma mantélica que orixina unha cadea volcánica", modelCaption: "Modelo de punto quente · Los688 / Wikimedia Commons · licenza libre indicada na fonte · non está a escala", image: "assets/hawaii.jpg", alt: "Imaxe de satélite dunha grande illa volcánica no medio do océano", caption: "Illa de Hawai. Composición de datos Landsat 7." }
];

const tectonicAnswers = [
  { id: 1, boundary: "Límite diverxente", process: "Extensión continental, fallas normais e rift", evidence: "Depresión alongada limitada por escarpas e bloques afundidos." },
  { id: 2, boundary: "Límite converxente", process: "Subdución océano–continente, cordilleira e arco volcánico", evidence: "Cordilleira paralela á marxe continental e volcanismo asociado." },
  { id: 3, boundary: "Límite converxente", process: "Colisión continente–continente e oroxenia", evidence: "Cordilleira moi elevada e extensa, sen arco insular oceánico." },
  { id: 4, boundary: "Límite converxente", process: "Subdución océano–océano e arco insular", evidence: "Cadea curva de illas volcánicas no océano." },
  { id: 5, boundary: "Límite transformante ou conservativo", process: "Desprazamento lateral, falla de desgarre e sismos", evidence: "Traza lineal e elementos do terreo desprazados lateralmente." },
  { id: 6, boundary: "Fenómeno intraplaca", process: "Punto quente, ascenso de magma e volcanismo", evidence: "Volcanismo afastado dos límites de placa e cadea de illas volcánicas." }
];

const deformationData = [
  { id: 1, image: "assets/galeria_pregamento_1.jpg", alt: "Estratos curvados nun corte de estrada", caption: "Fotografía 1 · Corte de estrada.", category: "Pregamento", precise: "Anticlinais e sinclinais", evidence: "Os estratos son continuos e aparecen curvados en arcos e cubetas." },
  { id: 2, image: "assets/galeria_pregamento_recto.jpg", alt: "Estratos moi curvados cun plano axial aproximadamente vertical", caption: "Fotografía 2 · Shuce Cliff.", category: "Pregamento", precise: "Pregamento recto", evidence: "Os dous flancos mergullan en sentidos opostos e o plano axial é aproximadamente vertical." },
  { id: 3, image: "assets/galeria_pregamento_asimetrico.jpg", alt: "Pregamento con flancos desiguais e plano axial moi inclinado", caption: "Fotografía 3 · Pregamento de Almora.", category: "Pregamento", precise: "Pregamento asimétrico tumbado", evidence: "Os flancos teñen inclinacións moi diferentes e o plano axial está case deitado." },
  { id: 4, image: "assets/galeria_pregamento_2.jpg", alt: "Estratos intensamente curvados nunha ladeira", caption: "Fotografía 4 · Campodola-Leixazós, Quiroga.", category: "Pregamento", precise: "Sinclinal tumbado", evidence: "As capas describen unha gran curvatura a escala de paisaxe; a interpretación completa require seguir os estratos." },
  { id: 5, image: "assets/galeria_falla_1.jpg", alt: "Estratos cortados e desprazados por unha superficie inclinada", caption: "Fotografía 5 · Afloramento de areniscas e conglomerados.", category: "Falla", precise: "Falla normal ou directa", evidence: "Un mesmo nivel aparece cortado e desprazado a ambos os lados da fractura." },
  { id: 6, image: "assets/galeria_falla_inversa.jpg", alt: "Bandas claras e escuras cortadas e desprazadas", caption: "Fotografía 6 · Mostra de xeso de Novo México.", category: "Falla", precise: "Falla inversa", evidence: "As láminas claras e escuras están interrompidas e repetidas por un desprazamento compresivo." },
  { id: 7, image: "assets/galeria_falla_2.jpg", alt: "Veo claro cortado e desprazado nunha rocha escura", caption: "Fotografía 7 · Veo de cuarzo nun afloramento alpino.", category: "Falla", precise: "Falla de desgarre dextral", evidence: "O veo de cuarzo funciona como marcador e mostra un salto lateral moi claro." },
  { id: 8, image: "assets/galeria_falla_salto.jpg", alt: "Capas cortadas cun salto visible", caption: "Fotografía 8 · Afloramento con salto de falla.", category: "Falla", precise: "Falla; subtipo non determinable só con esta vista", evidence: "As capas están interrompidas e desprazadas, pero a fotografía non resolve con seguridade o movemento tridimensional." },
  { id: 9, image: "assets/galeria_diaclasa_1.jpg", alt: "Fractura vertical que atravesa varios estratos", caption: "Fotografía 9 · Afloramento estratificado.", category: "Diáclase", precise: "Diáclase vertical", evidence: "A fractura corta as capas sen salto apreciable entre os dous lados." },
  { id: 10, image: "assets/galeria_diaclasa_2.jpg", alt: "Afloramento rochoso atravesado por varias familias de fracturas", caption: "Fotografía 10 · Afloramento de diorita.", category: "Diáclase", precise: "Sistema de diáclases", evidence: "Varias familias de fracturas compartimentan a rocha sen desprazamento visible." },
  { id: 11, image: "assets/galeria_diaclasas_cuenca.jpg", alt: "Bloques de dolomía separados por fracturas abertas", caption: "Fotografía 11 · Diáclases en dolomías de Cuenca.", category: "Diáclase", precise: "Familia de diáclases", evidence: "As fracturas abertas dividen a rocha en bloques, pero non desprazan marcadores." },
  { id: 12, image: "assets/galeria_diaclasas_granito.jpg", alt: "Afloramento granítico atravesado por fracturas e meteorizado", caption: "Fotografía 12 · Granito diaclasado da Serra Nevada.", category: "Diáclase", precise: "Sistema de diáclases en granito", evidence: "As fracturas organizadas favorecen a meteorización e separan bloques sen salto observable." }
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
const savedKey = "tectonica-imaxes-v2";
const submissionKey = "tectonica-imaxes-entregas-v2";

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
    document.querySelector("#studentId"),
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
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toLowerCase() || "id";
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

function buildSubmission(attempt) {
  const lines = [
    "TECTÓNICA EN IMAXES",
    "====================",
    `Entrega: ${attempt} de 2`,
    `ID do alumnado: ${textValue("#studentId")}`,
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

const downloadBtn = document.querySelector("#downloadBtn");
const revealBtn = document.querySelector("#revealBtn");
const attemptStatus = document.querySelector("#attemptStatus");
const answersPanel = document.querySelector("#answersPanel");

function submissionCount() {
  return Math.min(2, Number(localStorage.getItem(submissionKey) || 0));
}

function updateAttemptUI() {
  const count = submissionCount();
  attemptStatus.textContent = `Entregas descargadas neste navegador: ${count} de 2.`;
  downloadBtn.disabled = count >= 2;
  downloadBtn.textContent = count === 0 ? "Descargar entrega 1" : count === 1 ? "Descargar entrega 2" : "Dúas entregas realizadas";
  revealBtn.hidden = count < 2;
}

function renderAnswers() {
  answersPanel.innerHTML = `
    <h2>Respostas correctas e criterios de identificación</h2>
    <p>Compáraas coas túas dúas entregas. Nas fotografías, a clasificación baséase no trazo que realmente se pode observar.</p>
    <h3>Procesos tectónicos</h3>
    <div class="answer-grid">${tectonicAnswers.map(item => `
      <article><strong>Caso ${item.id}</strong><p>${item.boundary} · ${item.process}</p><p><b>Indicio:</b> ${item.evidence}</p></article>`).join("")}</div>
    <h3>Deformación</h3>
    <div class="answer-grid">${deformationData.map(item => `
      <article><strong>Fotografía ${item.id} · ${item.category}</strong><p>${item.precise}</p><p><b>Indicio:</b> ${item.evidence}</p></article>`).join("")}</div>`;
  answersPanel.hidden = false;
  answersPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

downloadBtn.addEventListener("click", () => {
  if (!validate()) return;
  const count = submissionCount();
  if (count >= 2) return;
  const attempt = count + 1;
  const blob = new Blob(["\uFEFF" + buildSubmission(attempt)], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${cleanFilename(textValue("#studentId"))}_tectonica_imaxes_entrega_${attempt}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
  localStorage.setItem(submissionKey, String(attempt));
  document.querySelector("#validationMessage").textContent = attempt === 1
    ? "Entrega 1 descargada. Podes revisar as respostas e preparar a entrega 2."
    : "Entrega 2 descargada. Xa podes consultar as respostas correctas.";
  updateAttemptUI();
});

revealBtn.addEventListener("click", renderAnswers);

document.querySelector("#clearBtn").addEventListener("click", () => {
  if (!confirm("Queres borrar todas as respostas gardadas neste navegador?")) return;
  allInputs().forEach(el => el.value = "");
  localStorage.removeItem(savedKey);
  document.querySelector("#validationMessage").textContent = "";
  requiredFields().forEach(el => el.classList.remove("missing"));
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updateAttemptUI();

