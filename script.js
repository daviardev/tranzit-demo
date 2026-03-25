/* ═══════════════════════════════════════════
   DATA — Mock legal database
═══════════════════════════════════════════ */
const LEGAL_DB = [
  {
    keywords: ['celular','teléfono','telefono','movil','móvil','dispositivo','whatsapp','escribir manejando'],
    query_clean: 'Comparendo por uso de celular al conducir',
    severity: 'grave',
    severity_label: 'Infracción grave',
    severity_code: 'Código C · Multa 15 SMDLV',
    summary: 'Está prohibido manipular el celular o cualquier dispositivo electrónico mientras conduces.',
    detail: 'La infracción aplica aunque el vehículo esté detenido en un semáforo. El agente está facultado para imponer el comparendo de forma inmediata sin que puedas impedir la retención del documento.',
    multa: '~$574.000',
    descuento: '50% menos si pagas en 5 días',
    articles: [
      { num: 'Art. 131-C18', text: 'Infracción por uso de celulares, radioteléfonos o cualquier dispositivo móvil al conducir. Multa equivalente a 15 SMDLV.' },
      { num: 'Art. 55',      text: 'Obligaciones del conductor: mantener ambas manos sobre el volante y atención plena en la vía.' },
      { num: 'Art. 127',     text: 'Definición de comparendo: orden oficial de citación al infractor para que se presente ante autoridad de tránsito.' },
    ],
    urgent_action: 'Firma el comparendo ahora. No firmar no cancela la deuda y puede agravar tu situación.',
    actions: [
      'Verifica que el comparendo tenga fecha, placa, número del agente y artículo infringido.',
      'Tienes 5 días hábiles para impugnar si consideras que fue mal impuesto.',
      'Pagar en los primeros 5 días hábiles te da derecho al 50% de descuento en la multa.',
    ],
    alert: 'Si el comparendo presenta errores graves de forma (datos incorrectos, artículo equivocado), consulta con un abogado de tránsito para una impugnación formal.',
  },
  {
    keywords: ['velocidad','exceso','velocímetro','veloci','radar','fotomulta'],
    query_clean: 'Comparendo por exceso de velocidad',
    severity: 'grave',
    severity_label: 'Infracción grave',
    severity_code: 'Código D · Multa 30 SMDLV',
    summary: 'Superar los límites de velocidad establecidos es una infracción grave con retención del vehículo posible.',
    detail: 'Los límites son: zona urbana 60 km/h, carretera 80 km/h, autopista 100 km/h salvo señalización diferente. Superar el límite en más del 50% puede implicar suspensión de la licencia.',
    multa: '~$1.148.000',
    descuento: '50% menos si pagas en 5 días',
    articles: [
      { num: 'Art. 131-D21', text: 'Exceder los límites de velocidad. Multa de 30 SMDLV y posible inmovilización del vehículo.' },
      { num: 'Art. 106',     text: 'Velocidades máximas permitidas según zona: urbana, carretera y autopista.' },
      { num: 'Art. 131',     text: 'Superar más del 50% del límite implica suspensión de la licencia de conducción.' },
    ],
    urgent_action: 'Firma el comparendo. Si hubo inmovilización del vehículo, tienes derecho a que se te informe el depósito donde fue llevado.',
    actions: [
      'Solicita al agente el registro de la medición del radar o fotomulta como soporte.',
      'Impugna en los 5 días hábiles siguientes si crees que la medición fue incorrecta.',
      'Pagar dentro de los 5 días hábiles te da el 50% de descuento.',
    ],
    alert: 'Si la infracción supera el 50% del límite, puede implicar la suspensión de tu licencia además de la multa. Considera asesoría legal.',
  },
  {
    keywords: ['cinturón','cinturon','correa','seguridad','cinto'],
    query_clean: 'Comparendo por no usar el cinturón de seguridad',
    severity: 'leve',
    severity_label: 'Infracción leve',
    severity_code: 'Código B · Multa 4 SMDLV',
    summary: 'El cinturón es obligatorio para el conductor y para todos los pasajeros en todo momento.',
    detail: 'Cada pasajero sin cinturón genera un comparendo independiente. La infracción aplica aunque el trayecto sea corto o la velocidad baja. No hay excepciones por distancia.',
    multa: '~$153.000',
    descuento: '50% menos si pagas en 5 días',
    articles: [
      { num: 'Art. 82-B4',  text: 'Uso obligatorio del cinturón de seguridad para conductor y todos los pasajeros.' },
      { num: 'Art. 131-B15', text: 'Infracción por no portar cinturón. Multa de 4 SMDLV por cada infractor.' },
    ],
    urgent_action: 'Firma el comparendo. Recuerda que es uno por cada persona que no usaba cinturón.',
    actions: [
      'Verifica que el comparendo especifique cuántos pasajeros estaban sin cinturón.',
      'Puedes impugnar dentro de los 5 días hábiles si los datos son incorrectos.',
      'Paga en los primeros 5 días para acceder al 50% de descuento.',
    ],
    alert: null,
  },
  {
    keywords: ['inmovilizaron','inmovilizaron','llevaron el carro','grúa','patios','deposito','depósito','retuvieron','retención','retención del vehículo'],
    query_clean: 'Me inmovilizaron o se llevaron el vehículo',
    severity: 'grave',
    severity_label: 'Inmovilización del vehículo',
    severity_code: 'Art. 127 · Proceso obligatorio',
    summary: 'La inmovilización solo es legal bajo causales específicas definidas en el Código de Tránsito.',
    detail: 'Causales válidas: conducir sin licencia, sin SOAT, bajo efectos del alcohol, vehículo reportado como robado, o cuando el conductor es detenido. En cualquier caso, debes recibir un comprobante de inmovilización con el depósito asignado.',
    multa: 'Varía según la causal',
    descuento: 'Aplica según tipo de infracción',
    articles: [
      { num: 'Art. 127',    text: 'Causales de inmovilización de vehículos por autoridades de tránsito.' },
      { num: 'Art. 131-D',  text: 'Infracciones que generan inmovilización obligatoria del vehículo.' },
      { num: 'Res. 3756',   text: 'Procedimiento para retiro del vehículo del depósito y liquidación de costos.' },
    ],
    urgent_action: 'Solicita el comprobante de inmovilización al agente. Tiene que indicar el depósito, la causal y el número del funcionario.',
    actions: [
      'Contacta el depósito indicado en el comprobante para conocer los costos de custodia.',
      'Cada día en el depósito genera costos adicionales: actúa rápido.',
      'Si la inmovilización fue ilegal (sin causal válida), puedes interponer queja ante la Superintendencia de Transporte.',
      'Para retirar el vehículo necesitarás el paz y salvo de la multa y todos los documentos al día.',
    ],
    alert: 'Los costos de depósito se acumulan por día. Retira el vehículo lo antes posible para evitar sobrecostos.',
  },
  {
    keywords: ['licencia','pase','permiso conducir','vencida','sin licencia','no tengo licencia'],
    query_clean: 'Conducir sin licencia o con licencia vencida',
    severity: 'grave',
    severity_label: 'Infracción muy grave',
    severity_code: 'Código D · Inmovilización obligatoria',
    summary: 'Conducir sin licencia vigente o con licencia vencida implica inmovilización del vehículo y multa alta.',
    detail: 'La licencia vencida tiene el mismo tratamiento legal que no tener licencia. El vehículo queda inmovilizado hasta que el conductor legal del propietario lo retire con documentación al día.',
    multa: '~$1.148.000',
    descuento: '50% si pagas en 5 días',
    articles: [
      { num: 'Art. 131-D1',  text: 'Conducir sin licencia de conducción o con licencia vencida. Inmovilización y multa 30 SMDLV.' },
      { num: 'Art. 19',      text: 'Requisito de portar licencia vigente en todo momento durante la conducción.' },
      { num: 'Art. 127',     text: 'Inmovilización obligatoria del vehículo por conducir sin licencia.' },
    ],
    urgent_action: 'Solicita el comprobante de inmovilización y contacta inmediatamente al propietario del vehículo para coordinar el retiro.',
    actions: [
      'El vehículo solo puede retirarlo alguien con licencia vigente y los documentos del vehículo al día.',
      'Renueva tu licencia en el organismo de tránsito antes de volver a conducir.',
      'Puedes impugnar la multa dentro de 5 días hábiles si los datos del comparendo son incorrectos.',
    ],
    alert: 'Reincidencia en conducir sin licencia puede resultar en suspensión definitiva del derecho a obtenerla. No conduzcas hasta tenerla renovada.',
  },
];

const AMBIGUOUS_QUERIES = ['policía','policia','trató mal','trato mal','agente','abusó','abuso','maltrato','maltrat'];

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let loadingTimer = null;
let currentQuery  = '';

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  const onboarded = localStorage.getItem('ct_onboarded');
  if (onboarded) {
    showScreen('home');
  } else {
    showScreen('onboard');
  }
  renderHistory();
  bindSearch();
});

/* ═══════════════════════════════════════════
   SCREEN MANAGEMENT
═══════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('screen-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ═══════════════════════════════════════════
   ONBOARDING
═══════════════════════════════════════════ */
function completeOnboarding() {
  localStorage.setItem('ct_onboarded', '1');
  showScreen('home');
}

/* ═══════════════════════════════════════════
   SEARCH BINDING
═══════════════════════════════════════════ */
function bindSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('input', function () {
    const chips = document.getElementById('chip-row');
    if (chips) chips.style.display = input.value.length > 3 ? 'none' : '';
    clearFeedback();
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') doSearch();
  });
}

function fillChip(text) {
  const input = document.getElementById('search-input');
  if (input) { input.value = text; input.focus(); }
  const chips = document.getElementById('chip-row');
  if (chips) chips.style.display = 'none';
  clearFeedback();
}

/* ═══════════════════════════════════════════
   SEARCH LOGIC
═══════════════════════════════════════════ */
function doSearch() {
  const input = document.getElementById('search-input');
  const query = input ? input.value.trim() : '';

  if (!query) {
    showFeedback('error', 'Describe tu situación para poder consultar la ley.');
    document.getElementById('search-field').classList.add('error');
    return;
  }

  currentQuery = query;
  clearFeedback();

  const queryL = query.toLowerCase();

  // Check ambiguous
  const isAmbiguous = AMBIGUOUS_QUERIES.some(kw => queryL.includes(kw));

  // Find matching result
  const match = LEGAL_DB.find(entry =>
    entry.keywords.some(kw => queryL.includes(kw))
  );

  // Run loading then show result
  runLoading(query, function () {
    if (isAmbiguous && !match) {
      renderAmbiguous(query);
    } else if (match) {
      saveToHistory(query, match);
      renderResults(query, match);
    } else {
      renderNoResults(query);
    }
  });
}

/* ═══════════════════════════════════════════
   LOADING
═══════════════════════════════════════════ */
function runLoading(query, onDone) {
  if (loadingTimer) clearTimeout(loadingTimer);

  document.getElementById('loading-query-text').textContent = '\u201C' + query + '\u201D';
  ['ls-0','ls-1','ls-2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = 'l-step';
  });
  document.getElementById('ls-0').className = 'l-step active';
  showScreen('loading');

  loadingTimer = setTimeout(() => {
    document.getElementById('ls-0').className = 'l-step done';
    document.getElementById('ls-1').className = 'l-step active';
    loadingTimer = setTimeout(() => {
      document.getElementById('ls-1').className = 'l-step done';
      document.getElementById('ls-2').className = 'l-step active';
      loadingTimer = setTimeout(() => {
        document.getElementById('ls-2').className = 'l-step done';
        loadingTimer = setTimeout(onDone, 300);
      }, 700);
    }, 800);
  }, 900);
}

/* ═══════════════════════════════════════════
   RENDER RESULTS
═══════════════════════════════════════════ */
function renderResults(query, data) {
  document.getElementById('mini-query').textContent = query;

  const sevClass = data.severity === 'grave' ? 'sev-grave-band' : 'sev-leve-band';
  const sevIconClass = data.severity === 'grave' ? 'si-grave' : 'si-leve';
  const sevLabelClass = data.severity;
  const sevIcon = data.severity === 'grave'
    ? `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2L1.5 12.5h11L7 2z" stroke="#D97706" stroke-width="1.2" stroke-linejoin="round"/><path d="M7 6v3" stroke="#D97706" stroke-width="1.2" stroke-linecap="round"/><circle cx="7" cy="10.5" r=".65" fill="#D97706"/></svg>`
    : `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.5l3 3L11 4" stroke="#059669" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const articlesHTML = data.articles.map(a =>
    `<div class="art-item">
      <span class="art-num">${a.num}</span>
      <span class="art-txt">${a.text}</span>
    </div>`
  ).join('');

  const actionsHTML = data.actions.map(a =>
    `<div class="act-row">
      <div class="act-num">✓</div>
      <span class="act-text">${a}</span>
    </div>`
  ).join('');

  const alertHTML = data.alert
    ? `<div class="alert-block rcard" style="border-radius:var(--radius-md);">
        <svg class="alert-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L1.5 14h13L8 2z" stroke="#92400E" stroke-width="1.3" stroke-linejoin="round"/><path d="M8 7v3" stroke="#92400E" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="11.5" r=".7" fill="#92400E"/></svg>
        <span class="alert-text">${data.alert}</span>
      </div>`
    : '';

  const html = `
    <div class="query-heading">
      <div class="query-eyebrow">Tu consulta</div>
      <h2 class="query-title">${data.query_clean}</h2>
    </div>

    <div class="rcard">
      <div class="rcard-head">
        <span class="rcard-badge badge-resp">Respuesta</span>
        <span class="rcard-head-title">¿Qué dice la ley?</span>
      </div>
      <div class="severity-band ${sevClass}">
        <div class="sev-icon ${sevIconClass}">${sevIcon}</div>
        <div>
          <div class="sev-label ${sevLabelClass}">${data.severity_label}</div>
          <div class="sev-sub ${sevLabelClass}">${data.severity_code}</div>
        </div>
      </div>
      <div class="answer-summary">${data.summary}</div>
      <div class="answer-detail">${data.detail}</div>
      <div class="key-facts">
        <div class="key-fact">
          <div class="kf-label">MULTA ESTIMADA</div>
          <div class="kf-value">${data.multa}</div>
        </div>
        <div class="key-fact">
          <div class="kf-label">DESCUENTO PRONTO PAGO</div>
          <div class="kf-value green">${data.descuento}</div>
        </div>
      </div>
    </div>

    <div class="rcard">
      <div class="rcard-head">
        <span class="rcard-badge badge-law">Base legal</span>
        <span class="rcard-head-title">Artículos aplicables</span>
      </div>
      <div class="rcard-body">
        <div class="art-list">${articlesHTML}</div>
      </div>
    </div>

    <div class="rcard">
      <div class="rcard-head">
        <span class="rcard-badge badge-act">Qué puedes hacer</span>
        <span class="rcard-head-title">Acciones recomendadas</span>
      </div>
      <div class="rcard-body">
        <div class="act-list">
          <div class="act-urgent">
            <div class="act-num-u">!</div>
            <span class="act-text-u">${data.urgent_action}</span>
          </div>
          ${actionsHTML}
        </div>
      </div>
    </div>

    ${alertHTML}

    <div class="results-footer">
      <span class="foot-note">Basado en Ley 769 de 2002 y sus modificaciones</span>
      <div class="foot-actions">
        <button class="btn-share" onclick="shareResult()">Compartir</button>
        <button class="btn-new" onclick="goHome()">Nueva consulta</button>
      </div>
    </div>
  `;

  document.getElementById('results-body').innerHTML = html;
  showScreen('results');
}

/* ═══════════════════════════════════════════
   RENDER AMBIGUOUS
═══════════════════════════════════════════ */
function renderAmbiguous(query) {
  document.getElementById('mini-query').textContent = query;

  const options = [
    { label: 'Me insultó o amenazó verbalmente', sub: 'Derechos del ciudadano ante un funcionario público' },
    { label: 'Me retuvo sin justificación',       sub: 'Retención ilegal · Art. 59 Código Nacional de Policía' },
    { label: 'Me exigió dinero o favores',         sub: 'Denuncia por corrupción · Policía Nacional' },
    { label: 'Usó fuerza innecesaria contra mí',  sub: 'Violencia policial · Procuraduría General' },
  ];

  const optsHTML = options.map((o, i) =>
    `<div class="ambig-opt" onclick="fillAndSearch('${o.label}')">
      <div>
        <div class="ambig-opt-label">${o.label}</div>
        <div class="ambig-opt-sub">${o.sub}</div>
      </div>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3.5l4 3.5L5 10.5" stroke="#9CA3AF" stroke-width="1.3" stroke-linecap="round"/></svg>
    </div>`
  ).join('');

  const html = `
    <div class="query-heading">
      <div class="query-eyebrow">Tu consulta</div>
      <h2 class="query-title">"${query}"</h2>
    </div>

    <div class="ambig-card">
      <div class="ambig-header">
        <div class="ambig-icon-wrap">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.5" stroke="#1B5EAE" stroke-width="1.4"/><path d="M9 7C9 5.5 11 5 11 7C11 8.5 9 8.5 9 9.5" stroke="#1B5EAE" stroke-width="1.4" stroke-linecap="round"/><circle cx="9" cy="12" r=".8" fill="#1B5EAE"/></svg>
        </div>
        <div>
          <div class="ambig-title">Tu consulta puede referirse a varias situaciones</div>
          <div class="ambig-sub">Selecciona la que mejor describe lo que pasó para darte la respuesta exacta:</div>
        </div>
      </div>
      <div class="ambig-options">${optsHTML}</div>
      <div class="ambig-rephrase">
        También puedes reformular tu búsqueda. Ejemplo: <strong onclick="fillAndSearch('derechos en un retén de tránsito')">"derechos en un retén"</strong> o <strong onclick="fillAndSearch('cómo denunciar a un agente de tránsito')">"cómo denunciar a un agente"</strong>
      </div>
    </div>

    <div class="results-footer">
      <span class="foot-note">Basado en Ley 769 de 2002 y Código Nacional de Policía</span>
      <div class="foot-actions">
        <button class="btn-new" onclick="goHome()">Nueva consulta</button>
      </div>
    </div>
  `;

  document.getElementById('results-body').innerHTML = html;
  showScreen('results');
}

/* ═══════════════════════════════════════════
   RENDER NO RESULTS
═══════════════════════════════════════════ */
function renderNoResults(query) {
  document.getElementById('mini-query').textContent = query;

  const suggestions = ['celular al conducir', 'exceso de velocidad', 'sin cinturón', 'me llevaron el carro', 'comparendo multa'];

  const chipsHTML = suggestions.map(s =>
    `<button class="nr-chip" onclick="fillAndSearch('${s}')">${s}</button>`
  ).join('');

  const html = `
    <div class="query-heading">
      <div class="query-eyebrow">Tu consulta</div>
      <h2 class="query-title">"${query}"</h2>
    </div>

    <div class="no-results-card">
      <svg class="nr-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="21" cy="21" r="13" stroke="#D1D5DB" stroke-width="2"/>
        <path d="M32 32l10 10" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round"/>
        <path d="M16 21h10M21 16v10" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <h3 class="nr-title">No encontramos artículos para esa consulta</h3>
      <p class="nr-sub">Intenta con otras palabras o selecciona una de estas situaciones comunes:</p>
      <div class="nr-suggestions">${chipsHTML}</div>
    </div>

    <div class="results-footer">
      <span class="foot-note">Ley 769 de 2002</span>
      <div class="foot-actions">
        <button class="btn-new" onclick="goHome()">Nueva consulta</button>
      </div>
    </div>
  `;

  document.getElementById('results-body').innerHTML = html;
  showScreen('results');
}

/* ═══════════════════════════════════════════
   HISTORY
═══════════════════════════════════════════ */
function saveToHistory(query, data) {
  let history = getHistory();
  history = history.filter(h => h.query.toLowerCase() !== query.toLowerCase());
  history.unshift({
    query: data.query_clean,
    meta: data.articles[0] ? data.articles[0].num : '',
    severity: data.severity,
    ts: Date.now(),
    data_key: data.keywords[0],
  });
  if (history.length > 5) history = history.slice(0, 5);
  localStorage.setItem('ct_history', JSON.stringify(history));
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem('ct_history')) || []; }
  catch { return []; }
}

function clearHistory() {
  localStorage.removeItem('ct_history');
  renderHistory();
}

function renderHistory() {
  const list = document.getElementById('history-list');
  const clearBtn = document.getElementById('clear-btn');
  if (!list) return;

  const history = getHistory();

  if (history.length === 0) {
    clearBtn.style.display = 'none';
    list.innerHTML = `
      <div class="empty-state">
        <svg class="empty-icon" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="15" cy="15" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M23 23l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p class="empty-text">Tus consultas aparecerán aquí para retomar rápidamente.</p>
      </div>`;
    return;
  }

  clearBtn.style.display = '';

  list.innerHTML = history.map(h => {
    const sevClass = h.severity === 'grave' ? 'sev-grave' : 'sev-leve';
    const sevLabel = h.severity === 'grave' ? 'Grave' : 'Leve';
    const timeLabel = formatTime(h.ts);
    return `
      <div class="history-item" onclick="replayHistory('${h.data_key}', '${escHtml(h.query)}')">
        <div class="history-icon">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="6.5" cy="6.5" r="4" stroke="#1B5EAE" stroke-width="1.3"/>
            <path d="M9.5 9.5L13 13" stroke="#1B5EAE" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="history-content">
          <div class="history-q">${escHtml(h.query)}</div>
          <div class="history-meta">${timeLabel}${h.meta ? ' · ' + h.meta : ''}</div>
        </div>
        <span class="sev-badge ${sevClass}">${sevLabel}</span>
        <svg class="history-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 3.5l4 3.5L5 10.5" stroke="#D1D5DB" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
      </div>`;
  }).join('');
}

function replayHistory(dataKey, query) {
  const match = LEGAL_DB.find(e => e.keywords[0] === dataKey || e.keywords.includes(dataKey));
  currentQuery = query;
  if (match) {
    runLoading(query, () => renderResults(query, match));
  }
}

function formatTime(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1)   return 'Ahora mismo';
  if (mins < 60)  return `Hace ${mins} min`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)   return `Hace ${hrs} h`;
  return `Hace ${Math.floor(hrs / 24)} días`;
}

/* ═══════════════════════════════════════════
   UTILS
═══════════════════════════════════════════ */
function goHome() {
  if (loadingTimer) { clearTimeout(loadingTimer); loadingTimer = null; }
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  const chips = document.getElementById('chip-row');
  if (chips) chips.style.display = '';
  const field = document.getElementById('search-field');
  if (field) field.classList.remove('error');
  clearFeedback();
  renderHistory();
  showScreen('home');
}

function fillAndSearch(text) {
  goHome();
  setTimeout(() => {
    const input = document.getElementById('search-input');
    if (input) input.value = text;
    doSearch();
  }, 50);
}

function showFeedback(type, msg) {
  const fb = document.getElementById('search-feedback');
  if (!fb) return;
  fb.className = 'search-feedback visible feedback-' + type;
  fb.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.2"/>
      <path d="M7 4.5v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="7" cy="9.5" r=".65" fill="currentColor"/>
    </svg>
    ${msg}`;
}

function clearFeedback() {
  const fb = document.getElementById('search-feedback');
  if (fb) fb.className = 'search-feedback';
  const field = document.getElementById('search-field');
  if (field) field.classList.remove('error');
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function shareResult() {
  if (navigator.share) {
    navigator.share({ title: 'TransitoLegal · ' + currentQuery, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = event.target;
      const orig = btn.textContent;
      btn.textContent = '¡Enlace copiado!';
      setTimeout(() => btn.textContent = orig, 2000);
    });
  }
}

function showAbout() {
  alert('TransitoLegal es una herramienta informativa basada en la Ley 769 de 2002 (Código Nacional de Tránsito Terrestre). No constituye asesoría legal. Para casos complejos, consulta un abogado de tránsito.');
}
