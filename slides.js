/* ═══════════════════════════════════════════
   IA para Arquitectos — Slide Data + Engine
   Isthmus Norte, Chihuahua
   255 slides across 10 days
   ═══════════════════════════════════════════ */

// ── Slide Data ──────────────────────────────
const slides = [
  // ═══════════════════════════════════════════
  // DÍA 1 — EL DÍA DEL FUEGO
  // ═══════════════════════════════════════════

  // Slide 1
  {
    day: 1,
    type: "course-title",
    timing: "8:00-8:45",
    content: `
    <div class="main-title">IA para Arquitectos</div>
    <div class="main-subtitle">De Cero a Claude Code</div>
    <div class="main-meta">ISTHMUS NORTE · CHIHUAHUA · DÍA 1 DE 10</div>
  `,
  },
  // Slide 2
  {
    day: 1,
    type: "concept",
    timing: "8:00-8:45",
    content: `
    <p class="concept-text">En 45 minutos van a ver un croquis feo convertirse en render, video, presentación y sitio web.</p>
    <p class="concept-sub">No les estoy pidiendo que crean nada. Les pido que observen.</p>
  `,
  },
  // Slide 3
  {
    day: 1,
    type: "demo",
    timing: "8:00-8:45",
    content: `
    <span class="demo-badge">DEMO EN VIVO</span>
    <h2 class="demo-title">Paso 1: El Croquis</h2>
    <p class="demo-description">Un croquis rápido a mano — sin pulir, sin pretensiones.</p>
    <p class="concept-sub" style="margin-top:16px;">Si ESTE dibujo puede convertirse en algo profesional, imaginen lo que haría con sus habilidades.</p>
    <div class="slide-timer" data-duration="3">03:00</div>
  `,
  },
  // Slide 4
  {
    day: 1,
    type: "demo",
    timing: "8:00-8:45",
    content: `
    <span class="demo-badge">DEMO EN VIVO</span>
    <h2 class="demo-title">Paso 2: Croquis → Render</h2>
    <p class="demo-description">Subir foto del croquis a ChatGPT o Bing Image Creator → render fotorrealista</p>
    <ul class="demo-steps">
      <li>Subir foto del croquis</li>
      <li>Pedir render fotorrealista con descripción detallada</li>
      <li>Resultado: render profesional en segundos</li>
    </ul>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🤖</span> ChatGPT</span>
      <span class="meta-tag"><span class="icon">🖼️</span> Bing Image Creator</span>
    </div>
  `,
  },
  // Slide 5
  {
    day: 1,
    type: "demo",
    timing: "8:00-8:45",
    content: `
    <span class="demo-badge">DEMO EN VIVO</span>
    <h2 class="demo-title">Paso 3: Render → Narrativa</h2>
    <p class="demo-description">Claude genera una narrativa de diseño profesional en 30 segundos</p>
    <ul class="demo-steps">
      <li>Abrir Claude</li>
      <li>Prompt: "Escribe una narrativa de diseño profesional de 100 palabras para este proyecto arquitectónico"</li>
      <li>Resultado: narrativa lista para presentar</li>
    </ul>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🧠</span> Claude</span>
    </div>
  `,
  },
  // Slide 6
  {
    day: 1,
    type: "demo",
    timing: "8:00-8:45",
    content: `
    <span class="demo-badge">DEMO EN VIVO</span>
    <h2 class="demo-title">Paso 4: Imagen → Video</h2>
    <p class="demo-description">Imagen estática → video de 5 seg con movimiento de cámara</p>
    <ul class="demo-steps">
      <li>Subir render a Kling o Veo</li>
      <li>Generar clip con dolly forward o pan lento</li>
      <li>Resultado: el edificio cobra vida</li>
    </ul>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🎬</span> Kling</span>
      <span class="meta-tag"><span class="icon">🎬</span> Veo</span>
    </div>
  `,
  },
  // Slide 7
  {
    day: 1,
    type: "demo",
    timing: "8:00-8:45",
    content: `
    <span class="demo-badge">DEMO EN VIVO</span>
    <h2 class="demo-title">Paso 5: Todo → Presentación</h2>
    <p class="demo-description">Gamma genera una presentación profesional de 5 slides en un minuto</p>
    <ul class="demo-steps">
      <li>Pegar descripción del proyecto + narrativa en Gamma</li>
      <li>Generar presentación automáticamente</li>
      <li>Resultado: pitch profesional listo para editar</li>
    </ul>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">📊</span> Gamma</span>
    </div>
  `,
  },
  // Slide 8
  {
    day: 1,
    type: "demo",
    timing: "8:00-8:45",
    content: `
    <span class="demo-badge">DEMO EN VIVO</span>
    <h2 class="demo-title">Paso 6: Prompt → Sitio Web</h2>
    <p class="demo-description">Hablando con la computadora → sitio web en vivo</p>
    <ul class="demo-steps">
      <li>Terminal con Claude Code</li>
      <li>Prompt: "Crea un sitio web para este proyecto arquitectónico con hero image, descripción y galería"</li>
      <li>Resultado: sitio web funcional en minutos</li>
    </ul>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">💻</span> Claude Code</span>
    </div>
  `,
  },
  // Slide 9
  {
    day: 1,
    type: "concept",
    timing: "8:00-8:45",
    content: `
    <p class="concept-text">45 minutos. $0.</p>
    <div class="flow-diagram">
      <div class="flow-step">Croquis</div><span class="flow-arrow">→</span>
      <div class="flow-step">Render</div><span class="flow-arrow">→</span>
      <div class="flow-step">Narrativa</div><span class="flow-arrow">→</span>
      <div class="flow-step">Video</div><span class="flow-arrow">→</span>
      <div class="flow-step">Presentación</div><span class="flow-arrow">→</span>
      <div class="flow-step">Sitio Web</div>
    </div>
  `,
  },
  // Slide 10
  {
    day: 1,
    type: "transition",
    timing: "8:00-8:45",
    content: `
    <div class="transition-text">¿Qué más quieren ver?</div>
    <div class="transition-sub">Pídanme lo que sea. No hay preguntas tontas.</div>
  `,
  },
  // Slide 11
  {
    day: 1,
    type: "exercise",
    timing: "8:45-9:30",
    duration: 10,
    tools: ["Claude", "ChatGPT"],
    content: `
    <div class="exercise-badge">EJERCICIO <span class="duration">10 min</span></div>
    <h2 class="exercise-title">Pregúntale lo que Quieras</h2>
    <ol class="exercise-steps">
      <li>Abre Claude o ChatGPT en tu teléfono o laptop</li>
      <li>Pregúntale CUALQUIER COSA sobre arquitectura</li>
      <li>No hay reglas. No hay límites. Lo que sea.</li>
    </ol>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🧠</span> Claude</span>
      <span class="meta-tag"><span class="icon">🤖</span> ChatGPT</span>
    </div>
  `,
  },
  // Slide 12
  {
    day: 1,
    type: "concept",
    timing: "8:45-9:30",
    content: `
    <p class="segment-badge">TARJETAS DE PROMPTS</p>
    <ol class="num-list">
      <li>"Explícame cómo se calcula el área de construcción..."</li>
      <li>"¿Qué debería saber sobre sustentabilidad en clima desértico?"</li>
      <li>"Dame 5 ideas de concepto para una casa de 120m²..."</li>
      <li>"¿Qué opinas del brutalismo?"</li>
      <li>"Ayúdame a escribir una justificación de diseño..."</li>
    </ol>
  `,
  },
  // Slide 13
  {
    day: 1,
    type: "transition",
    timing: "8:45-9:30",
    content: `
    <div class="transition-text">¿Quién obtuvo algo...?</div>
    <div class="transition-sub">
      <ul class="bullet-list" style="text-align:left;display:inline-block;">
        <li>Sorprendente</li>
        <li>Incorrecto</li>
        <li>Útil</li>
      </ul>
    </div>
  `,
  },
  // Slide 14
  {
    day: 1,
    type: "table",
    timing: "8:45-9:30",
    content: `
    <h2 class="table-title">El Patrón Clave</h2>
    <table class="comparison-table">
      <thead><tr><th></th><th>Google</th><th>IA</th></tr></thead>
      <tbody>
        <tr><td>Qué hace</td><td>Te da LINKS a respuestas de OTROS</td><td>PIENSA contigo y genera UNA respuesta para TI</td></tr>
        <tr><td>Metáfora</td><td>Biblioteca — buscas el libro</td><td>Colega senior — piensa contigo</td></tr>
      </tbody>
    </table>
  `,
  },
  // Slide 15
  {
    day: 1,
    type: "break",
    timing: "9:30-9:50",
    duration: 20,
    content: `
    <div class="break-text">PAUSA</div>
    <div class="break-duration">20 minutos — Levántense. Caminen.</div>
    <div class="break-timer" data-duration="20">20:00</div>
  `,
  },
  // Slide 16
  {
    day: 1,
    type: "exercise",
    timing: "9:50-10:30",
    duration: 5,
    tools: ["Cualquier IA"],
    content: `
    <div class="exercise-badge">EJERCICIO <span class="duration">5 min</span></div>
    <h2 class="exercise-title">Reto Relámpago</h2>
    <ol class="exercise-steps">
      <li>Formen equipos de 3-4</li>
      <li>Produzcan el mejor concepto posible usando SOLO IA</li>
      <li>Cualquier herramienta, cualquier dispositivo</li>
      <li>Entregable: 1 imagen + 1 párrafo</li>
    </ol>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">⏱️</span> 5 minutos</span>
      <span class="meta-tag"><span class="icon">👥</span> Equipos de 3-4</span>
    </div>
  `,
  },
  // Slide 17
  {
    day: 1,
    type: "concept",
    timing: "9:50-10:30",
    content: `
    <p class="segment-badge">EL BRIEF</p>
    <div class="activity-box">
      <div class="activity-icon">BRIEF</div>
      <div class="activity-text">Biblioteca comunitaria para Colonia X, Chihuahua</div>
      <p style="margin-top:12px;font-size:22px;color:var(--text-dim);">200 m² · Presupuesto limitado · Niños + adultos mayores</p>
      <div class="timer-badge">⏱ 5 minutos</div>
    </div>
  `,
  },
  // Slide 18
  {
    day: 1,
    type: "transition",
    timing: "9:50-10:30",
    content: `
    <div class="transition-text">60 segundos por equipo</div>
    <div class="transition-sub">1 imagen + 1 párrafo. Votación con stickers al final.</div>
  `,
  },
  // Slide 19
  {
    day: 1,
    type: "concept",
    timing: "9:50-10:30",
    content: `
    <p class="concept-text">¿La IA AMPLIFICÓ sus ideas o las hizo genéricas?</p>
    <p class="concept-sub">La IA es un amplificador. Si le dan una idea débil, amplifica la debilidad. Si le dan una idea fuerte, amplifica la fuerza. Ustedes son el ingrediente crítico.</p>
  `,
  },
  // Slide 20
  {
    day: 1,
    type: "exercise",
    timing: "10:30-11:20",
    duration: 50,
    tools: ["Bing Image Creator"],
    deliverable: "3 renders de tu proyecto",
    content: `
    <div class="exercise-badge">EJERCICIO <span class="duration">50 min</span></div>
    <h2 class="exercise-title">Tu Portafolio del Futuro</h2>
    <ol class="exercise-steps">
      <li>Elige UN proyecto tuyo (actual o pasado)</li>
      <li>Descríbelo en 2-3 oraciones</li>
      <li>Genera 5+ imágenes con Bing Image Creator</li>
      <li>Guarda las mejores 3</li>
    </ol>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🖼️</span> Bing Image Creator</span>
    </div>
    <p style="margin-top:16px;font-size:20px;color:var(--orange);">Estas 3 imágenes son la SEMILLA de tu portafolio de Entrega</p>
  `,
  },
  // Slide 21
  {
    day: 1,
    type: "concept",
    timing: "10:30-11:20",
    content: `
    <div class="warning-box">¿Internet lento? Escribe tus prompts detallados mientras esperas. Aprovecha para refinar antes de ejecutar.</div>
  `,
  },
  // Slide 22 (was Slide 23 in source)
  {
    day: 1,
    type: "exercise",
    timing: "11:20-11:50",
    duration: 15,
    content: `
    <div class="exercise-badge">EJERCICIO <span class="duration">15 min</span></div>
    <h2 class="exercise-title">Tu Manifiesto IA</h2>
    <p class="slide-quote">Después de hoy, ¿qué creo que la IA puede hacer por MI práctica de arquitectura?</p>
    <ol class="exercise-steps" style="margin-top:24px;">
      <li>¿Qué me emociona?</li>
      <li>¿Qué me preocupa?</li>
      <li>3-5 oraciones. Privado.</li>
    </ol>
  `,
  },
  // Slide 23 (was Slide 24)
  {
    day: 1,
    type: "summary",
    timing: "11:50-12:00",
    content: `
    <h2 class="summary-header">La Entrega del Día 10</h2>
    <p style="font-size:24px;color:var(--text-dim);margin-bottom:20px;">En 9 días, presentan un proyecto completo aumentado con IA.</p>
    <div class="flow-diagram">
      <div class="flow-step" style="background:var(--terracotta);color:#fff;">Día 1<br>HOY</div>
      <span class="flow-arrow">→</span>
      <div class="flow-step">···</div>
      <span class="flow-arrow">→</span>
      <div class="flow-step">Día 10<br>Entrega</div>
    </div>
  `,
  },
  // Slide 24 (was Slide 25)
  {
    day: 1,
    type: "summary",
    timing: "11:50-12:00",
    content: `
    <h2 class="summary-header">Mañana</h2>
    <p style="font-size:28px;color:var(--text);margin-bottom:20px;">¿Por qué la IA NO es Google?</p>
    <div class="preview-terms">
      <span class="term-chip">LLM</span>
      <span class="term-chip">Token</span>
      <span class="term-chip">Prompt</span>
    </div>
    <p style="margin-top:24px;font-size:20px;color:var(--text-muted);">8:00 AM. Traigan laptop cargada.</p>
  `,
  },

  // Additional Day 1 slides for completeness
  {
    day: 1,
    type: "concept",
    timing: "10:30-11:20",
    content: `<p class="segment-badge">INSTRUCCIONES</p><ol class="num-list"><li>Describe tu proyecto en 2-3 oraciones</li><li>Genera 5+ imágenes (Bing Image Creator)</li><li>Guarda las mejores 3</li></ol><div class="warning-box" style="margin-top:16px;">Estas 3 imágenes son la SEMILLA de tu portafolio de Entrega</div>`,
  },

  // ═══════════════════════════════════════════
  // DÍA 2 — LOS LLMs NO SON GOOGLE
  // ═══════════════════════════════════════════

  // Slide 25 (was 26)
  {
    day: 2,
    type: "title",
    content: `
    <div class="day-number">02</div>
    <div class="day-theme">Los LLMs No Son Google</div>
    <div class="day-tagline">La IA no es un buscador más rápido. Es una máquina de pensamiento.</div>
    <div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>
  `,
  },
  // Slide 26 (was 27)
  {
    day: 2,
    type: "retrieval",
    timing: "8:00-8:15",
    content: `
    <span class="retrieval-badge">RETRIEVAL — DÍA 1</span>
    <h2 class="retrieval-title">¿Qué recuerdan de ayer?</h2>
    <ol class="retrieval-questions">
      <li>¿Qué les sorprendió?</li>
      <li>¿Alguien probó la IA después de clase?</li>
      <li>¿Qué descubrieron por su cuenta?</li>
    </ol>
  `,
  },
  // Slide 27 (was 28)
  {
    day: 2,
    type: "agenda",
    timing: "8:15-10:00",
    content: `
    <h2 class="agenda-header">Hoy van a aprender:</h2>
    <ol class="agenda-items">
      <li>La diferencia entre buscar y pensar</li>
      <li>Cómo "piensa" una IA (sin matemáticas)</li>
      <li>Quién hace qué en el mundo de la IA</li>
    </ol>
  `,
  },
  // Slide 28 (was 29)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">SEGMENTO 1 · BUSCAR VS PENSAR</p>
    <p class="concept-text">¿Google o IA?</p>
    <p class="concept-sub">Si necesitan saber la altura máxima de un edificio, ¿usan Google o IA? Y si necesitan analizar si su concepto es viable para el clima de Chihuahua?</p>
  `,
  },
  // Slide 29 (was 30)
  {
    day: 2,
    type: "table",
    timing: "8:15-10:00",
    content: `
    <h2 class="table-title">La Gran Diferencia</h2>
    <table class="comparison-table">
      <thead><tr><th>GOOGLE</th><th>LLM</th></tr></thead>
      <tbody>
        <tr><td>Indexa páginas existentes</td><td>Procesó millones de textos</td></tr>
        <tr><td>Te da LINKS a respuestas de OTROS</td><td>Genera UNA respuesta para TI</td></tr>
        <tr><td>Biblioteca — buscas el libro</td><td>Colega senior — piensa contigo</td></tr>
      </tbody>
    </table>
  `,
  },
  // Slide 30 (was 31)
  {
    day: 2,
    type: "demo",
    timing: "8:15-10:00",
    content: `
    <span class="demo-badge">DEMO EN VIVO</span>
    <h2 class="demo-title">Misma Pregunta, Dos Mundos</h2>
    <p class="demo-description">"Estrategias de ventilación pasiva para clima desértico de Chihuahua"</p>
    <div class="two-col" style="margin-top:24px;">
      <div><div class="col-header">Google</div><div class="col-body">10 links. Abrir, leer, filtrar, sintetizar.</div></div>
      <div><div class="col-header">Claude</div><div class="col-body">Respuesta directa, contextualizada, con opciones.</div></div>
    </div>
  `,
  },
  // Slide 31 (was 32)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <div class="activity-box">
      <div class="activity-icon">ACTIVIDAD</div>
      <div class="activity-text">En parejas: explíquenle a su compañero la diferencia entre buscar y pensar.</div>
      <div class="timer-badge">⏱ 3 minutos</div>
    </div>
  `,
  },
  // Slide 32 (was 33)
  {
    day: 2,
    type: "transition",
    timing: "8:15-10:00",
    content: `
    <div class="transition-text">¿Cómo "piensa" un LLM?</div>
    <div class="transition-sub">Sin matemáticas. Lo prometo.</div>
  `,
  },
  // Slide 33 (was 34)
  {
    day: 2,
    type: "term",
    timing: "8:15-10:00",
    content: `
    <div class="term-word">LLM</div>
    <div class="term-translation">Large Language Model · Modelo de Lenguaje Grande</div>
    <div class="term-definition">Red neuronal entrenada con millones de textos para entender y generar lenguaje</div>
    <div class="term-analogy">Como un arquitecto junior que vio 10,000 edificios. No le dijeron reglas — desarrolló intuición por repetición.</div>
  `,
  },
  // Slide 34 (was 35)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="concept-text">Vio 10,000 edificios. No le dijeron reglas. Desarrolló intuición.</p>
    <p class="concept-sub">A veces brillante. A veces un disparate seguro de sí mismo.</p>
  `,
  },
  // Slide 35 (was 36)
  {
    day: 2,
    type: "term",
    timing: "8:15-10:00",
    content: `
    <div class="term-word">TOKEN</div>
    <div class="term-translation">La unidad de texto que el modelo procesa</div>
    <div class="term-definition">"arquitectura" = 3-4 tokens. Todo en IA se mide en tokens: costo, velocidad, contexto.</div>
    <div class="term-analogy">Como ladrillos de LEGO — la IA divide las palabras en pedazos para procesarlas.</div>
  `,
  },
  // Slide 36 (was 37)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <div class="warning-box">El español usa ~60% más tokens que el inglés para decir lo mismo. Nuestras conversaciones cuestan más y ocupan más espacio.</div>
  `,
  },
  // Slide 37 (was 38)
  {
    day: 2,
    type: "term",
    timing: "8:15-10:00",
    content: `
    <div class="term-word">PARÁMETRO</div>
    <div class="term-translation">Los "botones" del cerebro de la IA</div>
    <div class="term-definition">Más parámetros = más capacidad. Más grande no siempre es mejor para tu tarea.</div>
    <div class="term-analogy">7B → casa · 70B → edificio de oficinas · 405B → hospital</div>
  `,
  },
  // Slide 38 (was 39)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <div class="activity-box">
      <div class="activity-icon">ACTIVIDAD</div>
      <div class="activity-text">¿Cuántos tokens creen que tiene la descripción de su proyecto? Prueben en el tokenizador.</div>
      <div class="timer-badge">⏱ 3 minutos</div>
    </div>
  `,
  },
  // Slide 39 (was 40)
  {
    day: 2,
    type: "transition",
    timing: "8:15-10:00",
    content: `
    <div class="transition-text">¿Qué pasa cuando la IA miente?</div>
    <div class="transition-sub">Segmento 3 · Context Window y Alucinaciones</div>
  `,
  },
  // Slide 40 (was 41)
  {
    day: 2,
    type: "term",
    timing: "8:15-10:00",
    content: `
    <div class="term-word">CONTEXT WINDOW</div>
    <div class="term-translation">Ventana de Contexto</div>
    <div class="term-definition">Cuánto puede "ver" la IA en una conversación. Claude: 200K tokens ≈ 500 páginas.</div>
    <div class="term-analogy">El tamaño de tu mesa de dibujo — todo debe caber en la mesa para que la IA lo vea.</div>
  `,
  },
  // Slide 41 (was 42)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="concept-text">MÁS CONTEXTO = MEJOR RESULTADO</p>
    <div class="two-col" style="margin-top:24px;">
      <div><div class="col-header">2 oraciones</div><div class="col-body">→ Respuesta genérica</div></div>
      <div><div class="col-header">2 páginas (sitio, cliente, presupuesto, clima)</div><div class="col-body">→ Respuesta brillante</div></div>
    </div>
  `,
  },
  // Slide 42 (was 43)
  {
    day: 2,
    type: "term",
    timing: "8:15-10:00",
    content: `
    <div class="term-word" style="color:var(--orange);">ALUCINACIÓN</div>
    <div class="term-translation">Cuando la IA dice algo falso con total confianza</div>
    <div class="term-definition">No es un bug — es la naturaleza del sistema. Predice palabras probables, no hechos verificados.</div>
    <div class="term-analogy">Como un becario que NUNCA dice "no sé" pero a veces inventa datos con cara de poker.</div>
  `,
  },
  // Slide 43 (was 44)
  {
    day: 2,
    type: "demo",
    timing: "8:15-10:00",
    content: `
    <span class="demo-badge">DEMO EN VIVO</span>
    <h2 class="demo-title">Alucinación en Vivo</h2>
    <p class="demo-description">¿Qué pasa cuando le preguntas a Claude por un reglamento que NO existe?</p>
    <p class="concept-sub" style="margin-top:16px;">"NOM-427-SEMARNAT sobre alturas en zona desértica"</p>
    <div class="warning-box" style="margin-top:24px;">Verificar SIEMPRE. Su expertise es el firewall.</div>
  `,
  },
  // Slide 44 (was 45)
  {
    day: 2,
    type: "term",
    timing: "8:15-10:00",
    content: `
    <div class="term-word">TEMPERATURA</div>
    <div class="term-translation">Cuán creativa o predecible es la IA</div>
    <div class="term-definition">Baja (0) = predecible, "construye exacto a los planos". Alta (2.0) = creativo/caótico, "modo Gaudí".</div>
    <div class="term-analogy">Investigación de códigos → temp baja. Brainstorming de conceptos → temp alta.</div>
  `,
  },
  // Slide 45 (was 46)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <div class="activity-box">
      <div class="activity-icon">ACTIVIDAD</div>
      <div class="activity-text">¿Cuándo es peligroso confiar en la IA sin verificar? Den un ejemplo de arquitectura.</div>
      <div class="timer-badge">⏱ 3 minutos</div>
    </div>
  `,
  },
  // Slide 46 (was 47)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">SEGMENTO 4 · EL ECOSISTEMA</p>
    <p class="concept-text">Los 3 Grandes</p>
    <div class="flow-diagram" style="margin-top:24px;">
      <div class="flow-step">Claude<br><small style="color:var(--text-muted)">Anthropic</small></div>
      <div class="flow-step">ChatGPT<br><small style="color:var(--text-muted)">OpenAI</small></div>
      <div class="flow-step">Gemini<br><small style="color:var(--text-muted)">Google</small></div>
    </div>
  `,
  },
  // Slide 47 (was 48)
  {
    day: 2,
    type: "table",
    timing: "8:15-10:00",
    content: `
    <h2 class="table-title">Comparativa: Los 3 Grandes</h2>
    <table class="comparison-table">
      <thead><tr><th></th><th>Claude</th><th>ChatGPT</th><th>Gemini</th></tr></thead>
      <tbody>
        <tr><td>Mejor para</td><td>Texto largo, análisis</td><td>Popular, genera imágenes</td><td>Integrado con Google</td></tr>
        <tr><td>Gratis</td><td>Sí (Sonnet)</td><td>Sí (limitado)</td><td>Sí (generoso)</td></tr>
        <tr><td>Súper poder</td><td>Instrucciones complejas</td><td>Ecosistema amplio</td><td>Búsqueda en tiempo real</td></tr>
      </tbody>
    </table>
  `,
  },
  // Slide 48 (was 49)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <div class="two-col">
      <div><div class="col-header" style="color:var(--terracotta);">Cerrado</div><div class="col-body">Coca-Cola — usas el producto pero no ves la receta.<br><br>ChatGPT, Claude, Gemini</div></div>
      <div><div class="col-header" style="color:var(--teal);">Abierto (Open Source)</div><div class="col-body">Libro de cocina público — cualquiera puede usarlo y modificarlo.<br><br>Llama, Mistral</div></div>
    </div>
  `,
  },
  // Slide 49 (was 50)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">SÍNTESIS · EL VIAJE DE UN PROMPT</p>
    <div class="flow-diagram">
      <div class="flow-step">Escribes un prompt</div><span class="flow-arrow">→</span>
      <div class="flow-step">Se convierte en tokens</div><span class="flow-arrow">→</span>
      <div class="flow-step">Entra al modelo</div><span class="flow-arrow">→</span>
      <div class="flow-step">Predice la siguiente palabra</div><span class="flow-arrow">→</span>
      <div class="flow-step">Ves la respuesta</div>
    </div>
  `,
  },
  // Slide 50 (was 51)
  {
    day: 2,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">NÚMEROS QUE IMPORTAN</p>
    <ul class="bullet-list">
      <li>1 página ≈ 500 tokens</li>
      <li>Claude context = 200K tokens ≈ 500 páginas</li>
      <li>1 conversación ≈ $0.01-0.10 USD</li>
      <li>1 render DALL-E ≈ $0.04 USD</li>
      <li>Los tiers gratuitos alcanzan para TODO el curso</li>
    </ul>
  `,
  },
  // Slide 51 (was 52)
  {
    day: 2,
    type: "break",
    timing: "10:00-10:15",
    duration: 15,
    content: `
    <div class="break-text">PAUSA</div>
    <div class="break-duration">15 minutos — Movimiento físico obligatorio</div>
    <div class="break-timer" data-duration="15">15:00</div>
  `,
  },
  // Slide 52 (was 53)
  {
    day: 2,
    type: "exercise",
    timing: "10:15-11:15",
    duration: 60,
    tools: ["Google", "Claude"],
    deliverable: "Worksheet comparativo + screenshot de mejor conversación",
    content: `
    <div class="exercise-badge">EJERCICIO <span class="duration">60 min</span></div>
    <h2 class="exercise-title">"Google vs Claude: La Pelea"</h2>
    <ol class="exercise-steps">
      <li>Formen parejas — Persona A usa Google, Persona B usa Claude</li>
      <li>Respondan las mismas 5 preguntas de arquitectura</li>
      <li>Registren: tiempo, calidad, follow-up necesario</li>
      <li>Llenen el worksheet comparativo</li>
      <li>Pregunta 5: tengan 3 turnos de conversación con Claude</li>
    </ol>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🔍</span> Google</span>
      <span class="meta-tag"><span class="icon">🧠</span> Claude</span>
    </div>
    <p style="margin-top:12px;font-size:18px;color:var(--green);">Entregable: Worksheet completo + screenshot de mejor conversación</p>
  `,
  },
  // Slide 53 (was 54)
  {
    day: 2,
    type: "concept",
    timing: "10:15-11:15",
    content: `
    <p class="segment-badge">LAS 5 PREGUNTAS</p>
    <ol class="num-list">
      <li>¿Altura máxima para edificio Tipo V-A según IBC?</li>
      <li>Escuela en Chihuahua con calor extremo — ¿estrategias?</li>
      <li>Tapial vs concreto aislado en climas áridos</li>
      <li>Casa "moderna pero cálida" — define la estética</li>
      <li>Terreno 15x30m, orientación norte, zona residencial — analiza</li>
    </ol>
  `,
  },
  // Slide 54 (was 55 - example)
  {
    day: 2,
    type: "example",
    content: `
    <span class="example-badge">EJEMPLO — WORKSHEET</span>
    <h2 class="example-title">Google vs Claude: Worksheet Comparativo</h2>
    <div class="example-grid grid-2">
      <div class="example-frame large">
        <div class="frame-icon">📝</div>
        <div class="frame-label">Pregunta | Google (tiempo/calidad) | Claude (tiempo/calidad) | Ganador<br><br>1. Altura máxima IBC...<br>2. Escuela Chihuahua...<br>3. Tapial vs concreto...<br>4. Estética moderna cálida...<br>5. Terreno 15x30m...</div>
      </div>
      <div class="example-frame">
        <div class="frame-icon">💬</div>
        <div class="frame-label">Screenshot de conversación<br>con 3 turnos iterativos<br>sobre la Pregunta 5</div>
      </div>
    </div>
  `,
  },
  // Slide 55 (was 56)
  {
    day: 2,
    type: "concept",
    timing: "10:15-11:15",
    content: `
    <p class="segment-badge">EL PATRÓN</p>
    <ul class="bullet-list">
      <li style="color:var(--text-dim);">Dato factual = Google empata o gana ✓</li>
      <li style="color:var(--teal);">Razonamiento contextual = Claude gana 🧠</li>
      <li style="color:var(--green);">Creativo/subjetivo = Claude gana abrumadoramente ⭐</li>
    </ul>
  `,
  },
  // Slide 56 (was 58)
  {
    day: 2,
    type: "break",
    timing: "11:15-11:30",
    duration: 15,
    content: `
    <div class="break-text">PAUSA</div>
    <div class="break-duration">15 minutos</div>
    <div class="break-timer" data-duration="15">15:00</div>
  `,
  },
  // Slide 57 (was 59)
  {
    day: 2,
    type: "exercise",
    timing: "11:30-1:00",
    duration: 90,
    tools: ["Claude"],
    deliverable: "Memo de Factibilidad de 1 página",
    content: `
    <div class="exercise-badge">EJERCICIO PROFUNDO <span class="duration">90 min</span></div>
    <h2 class="exercise-title">"El Arquitecto Interrogador"</h2>
    <p style="font-size:22px;color:var(--text-dim);margin-bottom:16px;">Una maquiladora abandonada. Un brief real. Tu análisis profesional.</p>
    <ol class="exercise-steps">
      <li>Escribe tu reacción INICIAL en papel (15 min)</li>
      <li>Ronda 1 — Sitio y Contexto con Claude (15 min)</li>
      <li>Ronda 2 — Programa y Diseño. EMPUJA DE VUELTA (15 min)</li>
      <li>Ronda 3 — Factibilidad y Riesgos (15 min)</li>
      <li>Compila Memo de Factibilidad (20 min)</li>
    </ol>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🧠</span> Claude</span>
    </div>
    <p style="margin-top:12px;font-size:18px;color:var(--green);">Entregable: Memo de factibilidad + reflexión antes/después</p>
  `,
  },
  // Slide 58 (was 60)
  {
    day: 2,
    type: "concept",
    timing: "11:30-1:00",
    content: `
    <p class="segment-badge">EL BRIEF</p>
    <div class="activity-box">
      <div class="activity-icon">BRIEF — MAQUILADORA ABANDONADA</div>
      <div class="activity-text">50×80m · 1 planta · 6m altura</div>
      <p style="margin-top:8px;font-size:20px;color:var(--text-dim);">Presupuesto: $8-12M MXN</p>
      <p style="margin-top:8px;font-size:20px;color:var(--text-dim);">Programa: galería, talleres, cocina comunitaria, anfiteatro exterior, oficinas</p>
    </div>
  `,
  },
  // Slide 59 (example: feasibility memo)
  {
    day: 2,
    type: "example",
    content: `
    <span class="example-badge">EJEMPLO — MEMO DE FACTIBILIDAD</span>
    <h2 class="example-title">Estructura del Memo (1 página)</h2>
    <div class="example-grid grid-2">
      <div class="example-frame">
        <div class="frame-icon">📋</div>
        <div class="frame-label">Resumen del proyecto (2 oraciones)<br><br>Oportunidades clave (3 bullets)<br>• Estructura industrial reutilizable<br>• Altura para galería de arte<br>• Ubicación con potencial</div>
      </div>
      <div class="example-frame">
        <div class="frame-icon">⚠️</div>
        <div class="frame-label">Riesgos clave (3 bullets)<br>• Remediación ambiental<br>• Costo de adaptación estructural<br>• Zonificación industrial→cultural<br><br>Siguientes pasos (3 bullets)</div>
      </div>
      <div class="example-frame large">
        <div class="frame-icon">🖼️</div>
        <div class="frame-label">Imagen generada con IA:<br>render conceptual del centro cultural</div>
      </div>
    </div>
  `,
  },
  // Additional Day 2 slides
  {
    day: 2,
    type: "concept",
    timing: "10:15-11:15",
    content: `<div class="activity-box"><div class="activity-icon">ITERACIÓN — PREGUNTA 5</div><div class="activity-text">Tomen la Pregunta 5 (terreno 15x30m). Tengan 3 turnos de conversación con Claude. Vean cómo mejora la calidad.</div><div class="timer-badge">⏱ 15 minutos</div></div>`,
  },
  {
    day: 2,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">PASO 1 — TU INSTINTO</p><div class="activity-box"><div class="activity-icon">ANTES DE USAR IA</div><div class="activity-text">¿Qué preguntas harías? ¿Cuál es tu instinto? Escribe en papel.</div><div class="timer-badge">⏱ 15 minutos</div></div>`,
  },
  {
    day: 2,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">PASO 2 — LAS 3 RONDAS</p><ol class="num-list"><li><strong>Ronda 1 — Sitio y Contexto</strong> (15 min): precedentes, clima, zonificación</li><li><strong>Ronda 2 — Programa y Diseño</strong> (15 min): organización espacial, conflictos</li><li><strong>Ronda 3 — Factibilidad y Riesgos</strong> (15 min): costos, estructura, fases</li></ol><div class="warning-box" style="margin-top:16px;">EMPUJA DE VUELTA: "Eso no funciona porque..."</div>`,
  },
  {
    day: 2,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">PASO 3 — EL MEMO</p><ul class="bullet-list"><li>Resumen del proyecto (2 oraciones)</li><li>Oportunidades clave (3 bullets)</li><li>Riesgos clave (3 bullets)</li><li>Siguientes pasos (3 bullets)</li><li>1 imagen generada con IA</li></ul>`,
  },
  {
    day: 2,
    type: "transition",
    timing: "11:30-1:00",
    content: `<div class="transition-text">Crit</div><div class="transition-sub">¿Qué te ayudó la IA a pensar que NO habrías considerado solo?</div>`,
  },
  // Slide 60 (was 65)
  {
    day: 2,
    type: "summary",
    timing: "11:30-1:00",
    content: `
    <h2 class="summary-header">Mañana</h2>
    <p style="font-size:28px;color:var(--text);margin-bottom:20px;">Prompting: la habilidad que lo desbloquea todo</p>
    <div class="preview-terms">
      <span class="term-chip">CO-STAR</span>
      <span class="term-chip">Framework</span>
      <span class="term-chip">Few-shot</span>
    </div>
    <p style="margin-top:24px;font-size:20px;color:var(--text-muted);">Traigan su proyecto de taller en mente</p>
  `,
  },

  // ═══════════════════════════════════════════
  // DÍA 3 — PROMPTING
  // ═══════════════════════════════════════════

  // Slide 61 (was 66)
  {
    day: 3,
    type: "title",
    content: `
    <div class="day-number">03</div>
    <div class="day-theme">Prompting: La Habilidad que lo Desbloquea Todo</div>
    <div class="day-tagline">Cómo hablas con la IA determina lo que obtienes.</div>
    <div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>
  `,
  },
  // Slide 62 (was 67)
  {
    day: 3,
    type: "retrieval",
    timing: "8:00-8:15",
    content: `
    <span class="retrieval-badge">QUIZ DE RETRIEVAL</span>
    <h2 class="retrieval-title">Respondan en papel. Sin notas.</h2>
    <ol class="retrieval-questions">
      <li>¿Qué es un LLM? (1 oración)</li>
      <li>¿Qué es un token?</li>
      <li>¿Cuántas páginas puede "ver" Claude?</li>
      <li>¿Qué es una alucinación?</li>
      <li>¿Diferencia entre Google y Claude?</li>
    </ol>
  `,
  },
  // Slide 63 (was 68)
  {
    day: 3,
    type: "concept",
    timing: "8:00-8:15",
    content: `
    <p class="segment-badge">RESPUESTAS</p>
    <ol class="num-list">
      <li>Red neuronal entrenada para generar lenguaje</li>
      <li>Unidad mínima de texto que procesa la IA</li>
      <li>~500 páginas (200K tokens)</li>
      <li>Cuando la IA dice algo falso con confianza</li>
      <li>Google busca links; Claude piensa contigo</li>
    </ol>
  `,
  },
  // Slide 64 (was 69)
  {
    day: 3,
    type: "agenda",
    timing: "8:15-10:00",
    content: `
    <h2 class="agenda-header">Hoy van a aprender:</h2>
    <ol class="agenda-items">
      <li>Por qué "diseña una casa" NO funciona</li>
      <li>El framework CO-STAR</li>
      <li>Cómo iterar hasta obtener algo excelente</li>
    </ol>
  `,
  },
  // Slide 65 (was 70)
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">SEGMENTO 1 · EL ERROR #1</p>
    <p class="concept-text">Tratar la IA como Google</p>
    <p class="concept-sub">Keywords sueltos y esperar magia. No funciona así.</p>
  `,
  },
  // Slide 66 (was 71)
  {
    day: 3,
    type: "table",
    timing: "8:15-10:00",
    content: `
    <h2 class="table-title">Vago vs Específico</h2>
    <table class="comparison-table">
      <thead><tr><th style="color:var(--orange);">MALO</th><th style="color:var(--green);">BUENO</th></tr></thead>
      <tbody>
        <tr>
          <td>"diseña una casa"</td>
          <td>"Casa de 120m² en clima desértico de Chihuahua, familia de 4, patio central, ladrillo + cantera, presupuesto medio, 2 plantas, orientación norte, contemporáneo mexicano"</td>
        </tr>
      </tbody>
    </table>
  `,
  },
  // Slide 67 (was 72)
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">10 ERRORES DE PRINCIPIANTE</p>
    <div class="two-col">
      <div>
        <ol class="num-list">
          <li>Muy vago</li>
          <li>Keywords sueltos</li>
          <li>Esperar perfección al 1er intento</li>
          <li>No iterar</li>
          <li>Sin contexto profesional</li>
        </ol>
      </div>
      <div>
        <ol class="num-list" style="counter-reset:nlist 5;">
          <li>Sin formato de salida</li>
          <li>Sin audiencia</li>
          <li>Prompt largo sin estructura</li>
          <li>No corregir el "casi"</li>
          <li>Usar IA para confirmar, no desafiar</li>
        </ol>
      </div>
    </div>
  `,
  },
  // Slide 68 (was 73)
  {
    day: 3,
    type: "transition",
    timing: "8:15-10:00",
    content: `
    <div class="transition-text">CO-STAR</div>
    <div class="transition-sub">El Framework</div>
  `,
  },
  // Slide 69 (was 74)
  {
    day: 3,
    type: "table",
    timing: "8:15-10:00",
    content: `
    <h2 class="table-title">CO-STAR</h2>
    <table class="comparison-table">
      <thead><tr><th>Letra</th><th>Qué es</th></tr></thead>
      <tbody>
        <tr><td style="color:var(--teal);font-weight:700;font-size:24px;">C</td><td>Contexto — información de fondo</td></tr>
        <tr><td style="color:var(--teal);font-weight:700;font-size:24px;">O</td><td>Objetivo — qué quieres que haga</td></tr>
        <tr><td style="color:var(--teal);font-weight:700;font-size:24px;">S</td><td>Style — estilo de escritura</td></tr>
        <tr><td style="color:var(--teal);font-weight:700;font-size:24px;">T</td><td>Tono — calidad emocional</td></tr>
        <tr><td style="color:var(--teal);font-weight:700;font-size:24px;">A</td><td>Audiencia — quién lo leerá</td></tr>
        <tr><td style="color:var(--teal);font-weight:700;font-size:24px;">R</td><td>Respuesta — formato deseado</td></tr>
      </tbody>
    </table>
  `,
  },
  // Slide 70 (was 75)
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">EJEMPLO CO-STAR COMPLETO</p>
    <div class="prompt-box">
      <div class="prompt-text">C: Soy estudiante de 4° trabajando en tesis de biblioteca en Chihuahua, terreno 800m², junto a parque...
O: Desarrollar programa arquitectónico
S: Documento profesional
T: Formal pero empático con la comunidad
A: Comité de tesis + stakeholders comunitarios
R: Tabla con m², lista de principios, constraints</div>
    </div>
  `,
  },
  // Slide 71 (was 76-77)
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <div class="warning-box">Para la IA, "arquitectura" = SOFTWARE por default. SIEMPRE aclarar: "Como arquitecto de EDIFICIOS en Chihuahua..."</div>
  `,
  },
  // Slide 72 (was 78)
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <div class="activity-box">
      <div class="activity-icon">ACTIVIDAD</div>
      <div class="activity-text">Escribe UN prompt CO-STAR sobre tu proyecto. Solo escribir. No ejecutar aún.</div>
      <div class="timer-badge">⏱ 5 minutos</div>
    </div>
  `,
  },
  // Slide 73 (was 79)
  {
    day: 3,
    type: "transition",
    timing: "8:15-10:00",
    content: `
    <div class="transition-text">Iteración</div>
    <div class="transition-sub">El Superpoder que Nadie Usa</div>
  `,
  },
  // Slide 74 (was 80)
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">5 TÉCNICAS DE ITERACIÓN</p>
    <ol class="num-list">
      <li><strong style="color:var(--terracotta);">REDIRECT</strong> — "Eso no es lo que busco..."</li>
      <li><strong style="color:var(--teal);">ZOOM</strong> — "Profundiza en el punto 3..."</li>
      <li><strong style="color:var(--blue);">TRIM</strong> — "Resúmelo en 3 bullets"</li>
      <li><strong style="color:var(--purple);">TONE SHIFT</strong> — "Reescríbelo para un cliente"</li>
      <li><strong style="color:var(--green);">YES, AND</strong> — "Me gusta X. ¿Y si además...?"</li>
    </ol>
  `,
  },
  // Additional Day 3 slides - Demo and activities
  {
    day: 3,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">CO-STAR en Acción</h2><p class="demo-description">Un prompt CO-STAR construido paso a paso</p><ul class="demo-steps"><li>C — contexto del proyecto</li><li>O — análisis de orientación solar</li><li>S — informe técnico</li><li>T — profesional</li><li>A — director de taller</li><li>R — tabla con recomendaciones</li></ul>`,
  },
  {
    day: 3,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Iteración en 3 Turnos</h2><p class="demo-description">Cómo un prompt mejora con cada iteración</p><div class="flow-diagram"><div class="flow-step">Turno 1<br><small>Ok</small></div><span class="flow-arrow">→</span><div class="flow-step">Turno 2<br><small>Bueno</small></div><span class="flow-arrow">→</span><div class="flow-step">Turno 3<br><small style="color:var(--green)">Excelente</small></div></div>`,
  },
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="activity-box"><div class="activity-icon">ACTIVIDAD</div><div class="activity-text">Ejecuten su prompt CO-STAR. Luego iteren una vez usando una de las 5 técnicas.</div><div class="timer-badge">⏱ 5 minutos</div></div>`,
  },
  // Slide 75 (was 82)
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">SEGMENTO 4 · PROMPTS AVANZADOS</p>
    <div class="two-col">
      <div><div class="col-header" style="color:var(--teal);">Few-Shot</div><div class="col-body">Darle EJEMPLOS de lo que quieres. "Aquí van 2 ejemplos del formato..."</div></div>
      <div><div class="col-header" style="color:var(--teal);">Chain of Thought</div><div class="col-body">Pedirle que piense paso a paso. "Antes de responder, analiza el problema..."</div></div>
    </div>
  `,
  },
  // Slide 76 (was 84)
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `
    <p class="segment-badge">4 TEMPLATES DE ARQUITECTURA</p>
    <div class="two-col">
      <div>
        <div class="col-header" style="color:var(--terracotta);">A: Crítico de Diseño</div>
        <div class="col-body">¿Qué mejorar?</div>
        <div class="col-header" style="color:var(--blue);margin-top:20px;">B: Consultor de Código</div>
        <div class="col-body">¿Qué verificar?</div>
      </div>
      <div>
        <div class="col-header" style="color:var(--green);">C: Comunicador con Cliente</div>
        <div class="col-body">Narrativa lista para pulir</div>
        <div class="col-header" style="color:var(--purple);margin-top:20px;">D: Explorador de Diseño</div>
        <div class="col-body">Ideas nuevas para explorar</div>
      </div>
    </div>
  `,
  },
  // Slide 77 (was 85)
  {
    day: 3,
    type: "break",
    timing: "10:00-10:15",
    duration: 15,
    content: `
    <div class="break-text">PAUSA</div>
    <div class="break-duration">15 minutos</div>
    <div class="break-timer" data-duration="15">15:00</div>
  `,
  },
  // Slide 78 (was 86)
  {
    day: 3,
    type: "exercise",
    timing: "10:15-11:15",
    duration: 60,
    tools: ["Bing Image Creator", "ChatGPT"],
    deliverable: "10 imágenes con prompts + reflexión mejor vs peor",
    content: `
    <div class="exercise-badge">EJERCICIO <span class="duration">60 min</span></div>
    <h2 class="exercise-title">"El Mismo Edificio, 10 Versiones"</h2>
    <p style="font-size:22px;color:var(--text-dim);margin-bottom:16px;">Sujeto: Una parada de autobús para Chihuahua</p>
    <ol class="exercise-steps">
      <li>Genera 10 versiones cambiando SOLO el prompt (20 min)</li>
      <li>Selecciona tu MEJOR y tu PEOR imagen (5 min)</li>
      <li>Escribe: "¿Por qué mi mejor prompt es mejor?" (10 min)</li>
      <li>Gallery walk + votación (15 min)</li>
    </ol>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🖼️</span> Bing Image Creator</span>
      <span class="meta-tag"><span class="icon">🤖</span> ChatGPT</span>
    </div>
    <p style="margin-top:12px;font-size:18px;color:var(--green);">Entregable: 10 imágenes con prompts + reflexión mejor vs peor</p>
  `,
  },
  // Slide 79 (example: 10 bus stop variations)
  {
    day: 3,
    type: "example",
    content: `
    <span class="example-badge">EJEMPLO — 10 VERSIONES</span>
    <h2 class="example-title">Una Parada de Autobús para Chihuahua</h2>
    <div class="example-grid grid-10">
      <div class="example-frame"><div class="frame-label">v1<br>Básica</div></div>
      <div class="example-frame"><div class="frame-label">v2<br>Concreto</div></div>
      <div class="example-frame"><div class="frame-label">v3<br>Acero corten</div></div>
      <div class="example-frame"><div class="frame-label">v4<br>Vernácula</div></div>
      <div class="example-frame"><div class="frame-label">v5<br>Minimalista</div></div>
      <div class="example-frame"><div class="frame-label">v6<br>Paramétrica</div></div>
      <div class="example-frame"><div class="frame-label">v7<br>Biomimética</div></div>
      <div class="example-frame"><div class="frame-label">v8<br>Brutalista</div></div>
      <div class="example-frame"><div class="frame-label">v9<br>Sustentable</div></div>
      <div class="example-frame"><div class="frame-label">v10<br>Wild card</div></div>
    </div>
    <p style="margin-top:16px;font-size:18px;color:var(--text-muted);">Mejor ✓ vs Peor ✗ — "¿Por qué mi mejor prompt es mejor?"</p>
  `,
  },
  // Slide 80 (was 90)
  {
    day: 3,
    type: "concept",
    timing: "10:15-11:15",
    content: `
    <p class="segment-badge">PATRONES DESCUBIERTOS</p>
    <ul class="bullet-list">
      <li><strong>Especificidad > longitud</strong></li>
      <li><strong>Contexto (clima, cultura, materiales) > palabras de estilo</strong></li>
      <li><strong>Restricciones producen creatividad</strong></li>
    </ul>
  `,
  },
  // Slide 81 (was 91)
  {
    day: 3,
    type: "break",
    timing: "11:15-11:30",
    duration: 15,
    content: `
    <div class="break-text">PAUSA</div>
    <div class="break-duration">15 minutos</div>
    <div class="break-timer" data-duration="15">15:00</div>
  `,
  },
  // Slide 82 (was 92)
  {
    day: 3,
    type: "exercise",
    timing: "11:30-1:00",
    duration: 90,
    tools: ["Claude"],
    deliverable:
      "Project Identity Card + 4 conversaciones + Intelligence Report",
    content: `
    <div class="exercise-badge">EJERCICIO PROFUNDO <span class="duration">90 min</span></div>
    <h2 class="exercise-title">"Tu Proyecto, Reimaginado"</h2>
    <ol class="exercise-steps">
      <li>Llena Tarjeta de Identidad del Proyecto (10 min)</li>
      <li>Aplica Template A: Crítico de Diseño</li>
      <li>Aplica Template B: Consultor de Código</li>
      <li>Aplica Template C: Comunicador con Cliente</li>
      <li>Aplica Template D: Explorador de Diseño</li>
      <li>Compila Project Intelligence Report (20 min)</li>
    </ol>
    <div class="exercise-meta">
      <span class="meta-tag"><span class="icon">🧠</span> Claude</span>
    </div>
    <p style="margin-top:12px;font-size:18px;color:var(--green);">Regla: Iterar al menos 1 vez en cada conversación</p>
  `,
  },
  // Slide 83 (example: Intelligence Report)
  {
    day: 3,
    type: "example",
    content: `
    <span class="example-badge">EJEMPLO — PROJECT INTELLIGENCE REPORT</span>
    <h2 class="example-title">Report de 1 Página</h2>
    <div class="example-grid grid-2">
      <div class="example-frame">
        <div class="frame-icon">🔍</div>
        <div class="frame-label">Resumen de crítica<br>(Template A)<br><br>• Proporción fachada principal<br>• Circulación vertical<br>• Relación con contexto</div>
      </div>
      <div class="example-frame">
        <div class="frame-icon">📐</div>
        <div class="frame-label">Banderas de código<br>(Template B)<br><br>• Egreso<br>• Accesibilidad<br>• Seguridad contra incendio</div>
      </div>
      <div class="example-frame">
        <div class="frame-icon">💬</div>
        <div class="frame-label">Borrador de narrativa<br>(Template C)<br><br>"El proyecto responde al clima desértico de Chihuahua..."</div>
      </div>
      <div class="example-frame">
        <div class="frame-icon">💡</div>
        <div class="frame-label">Ideas nuevas<br>(Template D)<br><br>• Patio hundido<br>• Celosía paramétrica<br>• Jardín xerófilo</div>
      </div>
    </div>
  `,
  },
  // Additional Day 3 exercise slides
  {
    day: 3,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">3 Niveles de Calidad</h2><div class="flow-diagram"><div class="flow-step">Básico<br><small>Genérico</small></div><span class="flow-arrow">→</span><div class="flow-step">CO-STAR<br><small>Bueno</small></div><span class="flow-arrow">→</span><div class="flow-step">CO-STAR + few-shot + CoT<br><small style="color:var(--green)">Excelente</small></div></div><p class="concept-sub" style="margin-top:16px;">2 minutos extra en el prompt ahorran horas de corrección.</p>`,
  },
  {
    day: 3,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="activity-box"><div class="activity-icon">ACTIVIDAD</div><div class="activity-text">Tomen su mejor prompt y agréguenle UN ejemplo (few-shot). Ejecuten. ¿Mejoró?</div><div class="timer-badge">⏱ 5 minutos</div></div>`,
  },
  {
    day: 3,
    type: "demo",
    timing: "10:15-11:15",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">El Espectro del Prompt</h2><div class="two-col" style="margin-top:24px;"><div><div class="col-header" style="color:var(--orange);">Vago</div><div class="col-body">"Una parada de bus"</div></div><div><div class="col-header" style="color:var(--green);">Específico</div><div class="col-body">"Parada de autobús en esquina de Chihuahua, concreto y acero corten, sombra para 40°C, estilo contemporáneo, contexto urbano desértico"</div></div></div>`,
  },
  {
    day: 3,
    type: "transition",
    timing: "10:15-11:15",
    content: `<div class="transition-text">Gallery Walk + Votación</div><div class="transition-sub">Más interesante · Más realista · Prompt más creativo</div>`,
  },
  {
    day: 3,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">TARJETA DE IDENTIDAD</p><ul class="bullet-list"><li>Nombre del proyecto</li><li>Tipo y ubicación</li><li>Clima</li><li>Concepto (1 oración)</li><li>Mayor reto</li><li>Fase actual</li></ul>`,
  },
  {
    day: 3,
    type: "transition",
    timing: "11:30-1:00",
    content: `<div class="transition-text">Peer Share</div><div class="transition-sub">Intercambien Reports con un partner. "¿Cuál es el insight más útil? ¿Qué falta?"</div>`,
  },
  // Slide 84 (was 97)
  {
    day: 3,
    type: "summary",
    content: `
    <h2 class="summary-header">Mañana</h2>
    <p style="font-size:28px;color:var(--text);margin-bottom:20px;">Generación de Imágenes con IA</p>
    <div class="preview-terms">
      <span class="term-chip">Difusión</span>
      <span class="term-chip">Espacio Latente</span>
      <span class="term-chip">Las 7 Capas</span>
    </div>
    <p style="margin-top:24px;font-size:20px;color:var(--text-muted);">Traigan su Atmosphere Board mental — mañana lo hacen real</p>
  `,
  },

  // ═══════════════════════════════════════════
  // DÍA 4 — GENERACIÓN DE IMÁGENES CON IA
  // ═══════════════════════════════════════════

  {
    day: 4,
    type: "title",
    content: `<div class="day-number">04</div><div class="day-theme">Generación de Imágenes con IA</div><div class="day-tagline">Visualización como herramienta de diseño</div><div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>`,
  },
  {
    day: 4,
    type: "retrieval",
    timing: "8:00-8:15",
    content: `<span class="retrieval-badge">RETRIEVAL</span><h2 class="retrieval-title">Sketch It</h2><ol class="retrieval-questions"><li>Dibujen el framework CO-STAR de memoria (2 min)</li><li>Escriban un mini-prompt CO-STAR para: "necesito un render de mi proyecto" (1 min)</li><li>Comparen con el vecino: ¿quién fue más específico?</li></ol>`,
  },
  {
    day: 4,
    type: "agenda",
    timing: "8:15-10:00",
    content: `<h2 class="agenda-header">Hoy van a aprender:</h2><ol class="agenda-items"><li>Cómo la IA genera imágenes (no es collage)</li><li>La fórmula de 7 capas para prompts de imagen</li><li>Qué herramienta usar para qué</li></ol>`,
  },
  {
    day: 4,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">SEGMENTO 1 · DIFUSIÓN</p><p class="concept-text">No Es un Collage</p><p class="concept-sub">La IA NO busca fotos y las combina. Empieza con ruido puro y lo REFINA hasta que parece una imagen.</p>`,
  },
  {
    day: 4,
    type: "term",
    timing: "8:15-10:00",
    content: `<div class="term-word">DIFUSIÓN</div><div class="term-translation">El proceso de generar imágenes desde ruido</div><div class="term-definition">Empieza con ruido total y paso a paso lo refina hasta una imagen clara.</div><div class="term-analogy">Escultor con bloque de mármol — la imagen ya "está ahí", el proceso la revela.</div>`,
  },
  {
    day: 4,
    type: "term",
    timing: "8:15-10:00",
    content: `<div class="term-word">ESPACIO LATENTE</div><div class="term-translation">El "espacio de imaginación" de la IA</div><div class="term-definition">Un mapa infinito donde cada punto es una combinación de conceptos.</div><div class="term-analogy">"Casa + madera + Japón" ocupa un punto. "Casa + concreto + Chihuahua" ocupa otro. Tu prompt le dice a qué punto ir.</div>`,
  },
  {
    day: 4,
    type: "term",
    timing: "8:15-10:00",
    content: `<div class="term-word">SEED</div><div class="term-translation">Número que determina el punto de inicio</div><div class="term-definition">Mismo prompt + mismo seed = misma imagen. Diferente seed = variación.</div><div class="term-analogy">Útil cuando encuentras algo bueno y quieres explorar variaciones.</div>`,
  },
  {
    day: 4,
    type: "transition",
    timing: "8:15-10:00",
    content: `<div class="transition-text">La Fórmula de 7 Capas</div><div class="transition-sub">El orden importa. Cada capa agrega precisión.</div>`,
  },
  {
    day: 4,
    type: "table",
    timing: "8:15-10:00",
    content: `<h2 class="table-title">Las 7 Capas para Prompts de Imagen</h2><table class="comparison-table"><thead><tr><th>#</th><th>Capa</th><th>Vocabulario Clave</th></tr></thead><tbody><tr><td>1</td><td>Tipo de toma</td><td>eye-level, aerial, worm's eye, panoramic</td></tr><tr><td>2</td><td>Sujeto + estilo</td><td>"minimalist concrete house", "brutalist center"</td></tr><tr><td>3</td><td>Materiales</td><td>exposed concrete, warm wood, corten steel, cantera</td></tr><tr><td>4</td><td>Iluminación</td><td>golden hour, overcast, harsh noon, interior glow</td></tr><tr><td>5</td><td>Contexto</td><td>"arid Chihuahua landscape", "dense urban corner"</td></tr><tr><td>6</td><td>Atmósfera</td><td>serene, monumental, intimate, playful</td></tr><tr><td>7</td><td>Parámetros</td><td>"architectural photography", "35mm lens", "--ar 16:9"</td></tr></tbody></table>`,
  },
  {
    day: 4,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Prompt Capa por Capa</h2><p class="demo-description">Cada capa transforma el resultado</p><ul class="demo-steps"><li>Solo capa 1: "eye-level shot" → Genérico</li><li>+ capa 2: "...of a minimalist cultural center" → Mejor</li><li>+ capa 3: "...with exposed concrete and warm wood" → Textura</li><li>+ capas 4-7: resultado final transformado</li></ul>`,
  },
  {
    day: 4,
    type: "table",
    timing: "8:15-10:00",
    content: `<h2 class="table-title">Herramientas de Imagen</h2><table class="comparison-table"><thead><tr><th>Herramienta</th><th>Costo</th><th>Mejor para</th></tr></thead><tbody><tr><td>Bing Image Creator</td><td>Gratis, ilimitado</td><td>Exploración rápida</td></tr><tr><td>ChatGPT (DALL-E)</td><td>Gratis (limitado/día)</td><td>Mejor comprensión del prompt</td></tr><tr><td>Krea.ai</td><td>Gratis</td><td>Canvas en tiempo real</td></tr><tr><td>Midjourney v7</td><td>$10/mes</td><td>Máxima calidad</td></tr><tr><td>Flux 2</td><td>Open source</td><td>Alta calidad gratuita</td></tr><tr><td>ReRender AI</td><td>Free tier</td><td>SketchUp → render</td></tr></tbody></table>`,
  },
  {
    day: 4,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">6 ERRORES COMUNES EN IMAGEN</p><ol class="num-list"><li><strong>Estructuras imposibles</strong> → Especificar sistema estructural</li><li><strong>Escala incorrecta</strong> → Dar dimensiones explícitas</li><li><strong>Patrones repetitivos</strong> → Describir variación</li><li><strong>Estilo genérico "Pinterest"</strong> → Referencias culturales específicas</li><li><strong>Interior sin lógica</strong> → Describir orientación y función</li><li><strong>Contexto desconectado</strong> → Describir el sitio ESPECÍFICO</li></ol>`,
  },
  {
    day: 4,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="concept-text">Consistencia entre imágenes</p><p class="concept-sub">Vocabulario consistente · Referencias de estilo · "Style guide" verbal que copias al inicio de cada prompt</p>`,
  },
  {
    day: 4,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Krea.ai — Canvas en Tiempo Real</h2><p class="demo-description">La imagen se forma mientras escribes. El futuro del boceto digital.</p>`,
  },
  {
    day: 4,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="activity-box"><div class="activity-icon">ACTIVIDAD</div><div class="activity-text">Escriban un prompt de 7 capas para el espacio más importante de su proyecto.</div><div class="timer-badge">⏱ 5 minutos</div></div>`,
  },
  {
    day: 4,
    type: "concept",
    timing: "10:15-11:15",
    content: `<p class="segment-badge">SPEED PRESENTATIONS</p><p class="concept-sub">Cada mesa elige su Material Mood Board favorito. 30 segundos de explicación.</p><p style="margin-top:16px;font-size:22px;color:var(--text);">¿Notaron cómo sus skills de prompting de ayer mejoraron las imágenes de hoy?</p>`,
  },
  {
    day: 4,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">VISUAL BRIEF</p><ol class="num-list"><li>¿Cuál es tu espacio más importante?</li><li>¿Qué hora del día lo muestra mejor?</li><li>¿Qué tono emocional?</li><li>¿Quién está en la escena?</li></ol>`,
  },
  {
    day: 4,
    type: "transition",
    timing: "11:30-1:00",
    content: `<div class="transition-text">Gallery Critique</div><div class="transition-sub">"¿La atmósfera coincide con el concepto?"<br>"¿Cuál vista es más fuerte? ¿Cuál necesita trabajo?"</div>`,
  },
  {
    day: 4,
    type: "break",
    timing: "10:00-10:15",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 4,
    type: "exercise",
    timing: "10:15-11:15",
    duration: 60,
    tools: ["Bing Image Creator", "ChatGPT"],
    deliverable: "Material Mood Board (5 imágenes + labels)",
    content: `<div class="exercise-badge">EJERCICIO <span class="duration">60 min</span></div><h2 class="exercise-title">"Alquimia de Materiales"</h2><p style="font-size:22px;color:var(--text-dim);margin-bottom:16px;">1 forma geométrica · 5 paletas de materiales</p><ol class="exercise-steps"><li>Concreto crudo + madera (Tadao Ando)</li><li>Ladrillo + acero (industrial)</li><li>Piedra local + tierra (vernáculo Chihuahua)</li><li>Vidrio + acero blanco (minimalista)</li><li>Wild card: tu combinación</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">🖼️</span> Bing Image Creator</span><span class="meta-tag"><span class="icon">🤖</span> ChatGPT</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Entregable: Material Mood Board (5 imágenes + labels)</p>`,
  },
  // Example: Material Mood Board
  {
    day: 4,
    type: "example",
    content: `<span class="example-badge">EJEMPLO — MATERIAL MOOD BOARD</span><h2 class="example-title">5 Variaciones de Material</h2><div class="example-grid grid-5"><div class="example-frame"><div class="frame-icon">🪨</div><div class="frame-label">Concreto + Madera<br><em style="color:var(--text-muted);font-size:11px;">Austero, meditativo</em></div></div><div class="example-frame"><div class="frame-icon">🧱</div><div class="frame-label">Ladrillo + Acero<br><em style="color:var(--text-muted);font-size:11px;">Industrial, honesto</em></div></div><div class="example-frame"><div class="frame-icon">🏔️</div><div class="frame-label">Piedra + Tierra<br><em style="color:var(--text-muted);font-size:11px;">Vernáculo, enraizado</em></div></div><div class="example-frame"><div class="frame-icon">🪟</div><div class="frame-label">Vidrio + Acero<br><em style="color:var(--text-muted);font-size:11px;">Ligero, etéreo</em></div></div><div class="example-frame"><div class="frame-icon">✨</div><div class="frame-label">Wild Card<br><em style="color:var(--text-muted);font-size:11px;">Tu exploración</em></div></div></div>`,
  },
  {
    day: 4,
    type: "break",
    timing: "11:15-11:30",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 4,
    type: "exercise",
    timing: "11:30-1:00",
    duration: 90,
    tools: ["Bing Image Creator", "ChatGPT", "Krea.ai"],
    deliverable: "Project Atmosphere Board (4 vistas + prompts + concepto)",
    content: `<div class="exercise-badge">EJERCICIO PROFUNDO <span class="duration">90 min</span></div><h2 class="exercise-title">"El Render Imposible"</h2><ol class="exercise-steps"><li>Prepara tu Visual Brief (15 min)</li><li>Vista 1 — HERO SHOT: exterior, ángulo dramático</li><li>Vista 2 — INTERIOR: espacio clave, luz natural</li><li>Vista 3 — CONTEXTO: edificio en su entorno</li><li>Vista 4 — DETALLE: material o elemento único</li><li>Compila Project Atmosphere Board (20 min)</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">🖼️</span> Bing / ChatGPT / Krea</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Para cada vista: 3+ opciones → seleccionar mejor → iterar</p>`,
  },
  // Example: Atmosphere Board (4 views)
  {
    day: 4,
    type: "example",
    content: `<span class="example-badge">EJEMPLO — ATMOSPHERE BOARD</span><h2 class="example-title">4 Vistas del Proyecto</h2><div class="example-grid grid-4"><div class="example-frame"><div class="frame-icon">🏛️</div><div class="frame-label">HERO SHOT<br>Exterior · Ángulo dramático<br>Golden hour · eye-level</div></div><div class="example-frame"><div class="frame-icon">🪟</div><div class="frame-label">INTERIOR<br>Espacio clave<br>Luz natural · Atmósfera</div></div><div class="example-frame"><div class="frame-icon">🌵</div><div class="frame-label">CONTEXTO<br>Edificio en Chihuahua<br>Relación con entorno</div></div><div class="example-frame"><div class="frame-icon">🧱</div><div class="frame-label">DETALLE<br>Material · Textura<br>Macro architectural</div></div></div>`,
  },
  {
    day: 4,
    type: "summary",
    content: `<h2 class="summary-header">Mañana</h2><p style="font-size:28px;color:var(--text);margin-bottom:20px;">Video con IA</p><div class="preview-terms"><span class="term-chip">Image-to-video</span><span class="term-chip">Motion Intensity</span><span class="term-chip">Promenade Architecturale</span></div><p style="margin-top:24px;font-size:20px;color:var(--text-muted);">Traigan su mejor render — lo vamos a animar</p>`,
  },

  // ═══════════════════════════════════════════
  // DÍA 5 — VIDEO CON IA
  // ═══════════════════════════════════════════

  {
    day: 5,
    type: "title",
    content: `<div class="day-number">05</div><div class="day-theme">Video con IA</div><div class="day-tagline">La promenade architecturale en movimiento</div><div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>`,
  },
  {
    day: 5,
    type: "retrieval",
    timing: "8:00-8:15",
    content: `<span class="retrieval-badge">RETRIEVAL — PAIR</span><h2 class="retrieval-title">En 2 minutos, díganle a su compañero:</h2><ol class="retrieval-questions"><li>¿Cuáles son las 7 capas de un prompt de imagen?</li><li>¿Cuál fue el error más común en sus renders de ayer?</li></ol>`,
  },
  {
    day: 5,
    type: "agenda",
    timing: "8:15-10:00",
    content: `<h2 class="agenda-header">Hoy van a aprender:</h2><ol class="agenda-items"><li>Image-to-video vs text-to-video</li><li>La regla 0.3-0.5 (por qué los edificios se derriten)</li><li>El arco narrativo arquitectónico</li></ol>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">SEGMENTO 1 · VIDEO IA</p><p class="concept-text">Image-to-video > Text-to-video</p><p class="concept-sub">La imagen ya tiene tus materiales, proporciones y estilo. El video los preserva.</p>`,
  },
  {
    day: 5,
    type: "table",
    timing: "8:15-10:00",
    content: `<h2 class="table-title">Las 3 Herramientas Top</h2><table class="comparison-table"><thead><tr><th>Herramienta</th><th>Fortaleza</th><th>Costo</th></tr></thead><tbody><tr><td>Kling 3.0</td><td>Mejor física, multi-shot</td><td>66 créditos gratis/día</td></tr><tr><td>Veo 3.1</td><td>Más fotorrealista</td><td>Gratis vía Gemini</td></tr><tr><td>Runway Gen-4.5</td><td>Mejor control de cámara</td><td>Free tier limitado</td></tr></tbody></table><div class="warning-box" style="margin-top:16px;">Sora cierra abril 2026. NO invertir tiempo.</div>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">SEGMENTO 2 · LA REGLA CRÍTICA</p><div class="big-number" style="color:var(--orange);">0.3–0.5</div><p style="font-size:28px;color:var(--text);margin-top:16px;">Motion Intensity para arquitectura</p><p class="concept-sub">El default (1.0) DERRITE los edificios. La arquitectura es RÍGIDA — solo la cámara, la luz y la atmósfera deben moverse.</p>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">VOCABULARIO DE MOVIMIENTO</p><ul class="bullet-list"><li><strong>Dolly forward</strong> — avanzar hacia el edificio</li><li><strong>Orbit</strong> — girar alrededor</li><li><strong>Crane up</strong> — subir verticalmente</li><li><strong>Tracking shot</strong> — seguir lateralmente</li><li><strong>Push in</strong> — acercar lentamente</li><li><strong>Pull out</strong> — alejar revelando contexto</li></ul>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">SEGMENTO 3 · PIPELINE COMPLETO</p><div class="flow-diagram"><div class="flow-step">Render<br>(Día 4)</div><span class="flow-arrow">→</span><div class="flow-step">Video clip<br>(Kling/Veo)</div><span class="flow-arrow">→</span><div class="flow-step">Edición<br>(CapCut)</div><span class="flow-arrow">→</span><div class="flow-step">Música</div><span class="flow-arrow">→</span><div class="flow-step">Narrativa</div></div><p style="margin-top:16px;font-size:20px;color:var(--green);">Pipeline $0/mes</p>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">SEGMENTO 4 · EL ARCO NARRATIVO</p><ol class="num-list"><li><strong style="color:var(--terracotta);">APPROACH</strong> — ¿Cómo llegas?</li><li><strong style="color:var(--teal);">THRESHOLD</strong> — El momento de entrada</li><li><strong style="color:var(--blue);">DISCOVERY</strong> — El espacio clave se revela</li><li><strong style="color:var(--purple);">EXPERIENCE</strong> — Estar en el espacio</li><li><strong style="color:var(--green);">DEPARTURE</strong> — La impresión que queda</li></ol>`,
  },
  {
    day: 5,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Motion 1.0 vs 0.3</h2><div class="two-col"><div><div class="col-header" style="color:var(--orange);">Motion 1.0</div><div class="col-body">El edificio se derrite como chocolate al sol. Las columnas se doblan.</div></div><div><div class="col-header" style="color:var(--green);">Motion 0.3</div><div class="col-body">Suave. Elegante. Solo la cámara se mueve. Arquitectura intacta.</div></div></div>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="activity-box"><div class="activity-icon">ACTIVIDAD</div><div class="activity-text">Describan en una oración el movimiento de cámara que mejor mostraría su proyecto.</div><div class="timer-badge">⏱ 3 minutos</div></div>`,
  },
  {
    day: 5,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Pipeline en 10 Minutos</h2><p class="demo-description">De render a video terminado — el pipeline completo</p><ul class="demo-steps"><li>Render del Día 4 como punto de partida</li><li>Generar clip en Kling</li><li>Editar en CapCut</li><li>Agregar música</li><li>Resultado final publicable</li></ul>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="activity-box"><div class="activity-icon">ACTIVIDAD</div><div class="activity-text">Escriban 5 oraciones — una por acto — describiendo el recorrido de su proyecto.</div><div class="timer-badge">⏱ 5 minutos</div></div>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">HERRAMIENTAS ESPECIALIZADAS</p><ul class="bullet-list"><li><strong>Fenestra</strong> ($10-35/mes) — animación arquitectónica</li><li><strong>Hailuo / MiniMax</strong> — gratis, alternativa</li></ul><div class="warning-box" style="margin-top:16px;">La IA AÚN no puede hacer walkthroughs largos consistentes. El truco: clips cortos bien editados.</div>`,
  },
  {
    day: 5,
    type: "break",
    timing: "10:00-10:15",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 5,
    type: "exercise",
    timing: "10:15-11:15",
    duration: 60,
    tools: ["Kling", "Veo", "CapCut"],
    deliverable: "Clip de 4-30 segundos",
    content: `<div class="exercise-badge">EJERCICIO <span class="duration">60 min</span></div><h2 class="exercise-title">"30 Segundos de Arquitectura"</h2><ol class="exercise-steps"><li>Toma tu MEJOR imagen del Día 4</li><li>Opción A: Kling o Veo → clip 4-5 seg, motion 0.3-0.5</li><li>Opción B: Canva → Ken Burns + texto + música</li><li>Opción C: CapCut → motion sutil + música</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">🎬</span> Kling</span><span class="meta-tag"><span class="icon">🎬</span> Veo</span><span class="meta-tag"><span class="icon">✂️</span> CapCut</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Festival de cine al final — todos los clips back-to-back</p>`,
  },
  {
    day: 5,
    type: "break",
    timing: "11:15-11:30",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  // Video storyboard example
  {
    day: 5,
    type: "example",
    content: `<span class="example-badge">EJEMPLO — STORYBOARD VIDEO</span><h2 class="example-title">5 Actos: Promenade Architecturale</h2><div class="example-grid grid-5"><div class="example-frame"><div class="frame-icon">🚶</div><div class="frame-label">APPROACH<br>Calle → edificio<br>Dolly forward</div></div><div class="example-frame"><div class="frame-icon">🚪</div><div class="frame-label">THRESHOLD<br>Momento de entrada<br>Push in</div></div><div class="example-frame"><div class="frame-icon">✨</div><div class="frame-label">DISCOVERY<br>Espacio se revela<br>Crane up</div></div><div class="example-frame"><div class="frame-icon">🌅</div><div class="frame-label">EXPERIENCE<br>Luz, material<br>Orbit lento</div></div><div class="example-frame"><div class="frame-icon">🔚</div><div class="frame-label">DEPARTURE<br>Impresión final<br>Pull out</div></div></div>`,
  },
  {
    day: 5,
    type: "transition",
    timing: "10:15-11:15",
    content: `<div class="transition-text">Ayer hicieron imágenes. Hoy las hicieron moverse.</div><div class="transition-sub">Mañana las harán hablar.</div>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">PASO 1 — SCRIPT NARRATIVO</p><ol class="num-list"><li>5 oraciones, una por acto</li><li>Approach / Threshold / Discovery / Experience / Departure</li><li>Usa Claude para pulir: "Mantén mi voz. Máximo 100 palabras."</li></ol>`,
  },
  {
    day: 5,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">PASO 2 — PRODUCCIÓN</p><ul class="bullet-list"><li>5 momentos visuales (1 por acto)</li><li>Combinar: imágenes Día 4 + nuevas + clips animados</li><li>Ensamblar en Canva Video o CapCut</li><li>Transiciones + música + texto overlay</li></ul>`,
  },
  {
    day: 5,
    type: "transition",
    timing: "11:30-1:00",
    content: `<div class="transition-text">La Premiere</div><div class="transition-sub">Luces bajas. Sin votación. Solo mirar. Dejen que el trabajo hable.</div>`,
  },
  {
    day: 5,
    type: "exercise",
    timing: "11:30-1:00",
    duration: 90,
    tools: ["Kling", "Veo", "CapCut", "Claude"],
    deliverable: "Video narrativo de 30-60 segundos",
    content: `<div class="exercise-badge">EJERCICIO PROFUNDO <span class="duration">90 min</span></div><h2 class="exercise-title">"El Recorrido Virtual"</h2><ol class="exercise-steps"><li>Escribe script narrativo: 5 oraciones, 1 por acto (15 min)</li><li>Usa Claude para pulir el script (10 min)</li><li>Crea 5 momentos visuales combinando imágenes + clips (60 min)</li><li>Ensambla en Canva Video o CapCut</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">🎬</span> Kling / Veo</span><span class="meta-tag"><span class="icon">✂️</span> CapCut</span><span class="meta-tag"><span class="icon">🧠</span> Claude</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Premiere al final — luces bajas, sin votación, solo mirar</p>`,
  },
  {
    day: 5,
    type: "summary",
    content: `<h2 class="summary-header">Mañana</h2><p style="font-size:28px;color:var(--text);margin-bottom:20px;">Presentaciones con IA</p><p style="font-size:22px;color:var(--text-dim);">Gamma + IA como writing partner. Traigan TODO su trabajo de la semana.</p>`,
  },

  // ═══════════════════════════════════════════
  // DÍA 6 — PRESENTACIONES CON IA
  // ═══════════════════════════════════════════

  {
    day: 6,
    type: "title",
    content: `<div class="day-number">06</div><div class="day-theme">Presentaciones con IA</div><div class="day-tagline">Comunicación es 50% de la arquitectura</div><div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>`,
  },
  {
    day: 6,
    type: "retrieval",
    timing: "8:00-8:15",
    content: `<span class="retrieval-badge">RETRIEVAL — TEACH-BACK</span><h2 class="retrieval-title">Voluntarios:</h2><ol class="retrieval-questions"><li>¿Quién nos explica el arco narrativo de 5 actos?</li><li>¿Cuál es la regla 0.3-0.5 y por qué existe?</li></ol>`,
  },
  {
    day: 6,
    type: "agenda",
    timing: "8:15-10:00",
    content: `<h2 class="agenda-header">Hoy van a aprender:</h2><ol class="agenda-items"><li>Herramientas de presentación con IA</li><li>IA como writing partner (no ghostwriter)</li><li>Control de tono para diferentes audiencias</li></ol>`,
  },
  {
    day: 6,
    type: "table",
    timing: "8:15-10:00",
    content: `<h2 class="table-title">Herramientas de Presentación</h2><table class="comparison-table"><thead><tr><th>Herramienta</th><th>Velocidad</th><th>Costo</th></tr></thead><tbody><tr><td>Gamma</td><td>30-60 seg</td><td>Gratis</td></tr><tr><td>Canva AI</td><td>Versátil, Magic Design</td><td>Gratis</td></tr><tr><td>Beautiful.ai</td><td>Máxima calidad</td><td>$12/mes</td></tr><tr><td style="color:var(--text-muted);text-decoration:line-through;">Tome</td><td colspan="2" style="color:var(--orange);">MUERTO (abril 2025)</td></tr></tbody></table><p style="margin-top:16px;font-size:20px;color:var(--text-dim);">Manual: 9-17 hrs → Con IA: 2-3 hrs</p>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="concept-text">Writing Partner, No Ghostwriter</p><p class="concept-sub">La IA genera el borrador. TÚ aportas juicio, voz, verdad.</p>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">ESTRUCTURA NARRATIVA</p><ol class="num-list"><li><strong style="color:var(--terracotta);">HOOK</strong> — ¿Por qué debería importarme?</li><li><strong>CONTEXTO</strong> — Sitio, problema, oportunidad</li><li><strong style="color:var(--teal);">CONCEPTO</strong> — Tu idea en 1 oración + visual</li><li><strong>DISEÑO</strong> — Espacios, materiales, atmósfera</li><li><strong style="color:var(--blue);">EVIDENCIA</strong> — ¿Cómo sabes que funciona?</li><li><strong style="color:var(--green);">VISIÓN</strong> — El futuro. ¿Quién se beneficia?</li></ol>`,
  },
  {
    day: 6,
    type: "table",
    timing: "8:15-10:00",
    content: `<h2 class="table-title">Control de Tono</h2><table class="comparison-table"><thead><tr><th>Audiencia</th><th>Tono</th></tr></thead><tbody><tr><td>Jurado</td><td>Técnico, conceptual, referencias</td></tr><tr><td>Cliente</td><td>Claro, beneficios, costos</td></tr><tr><td>Comunidad</td><td>Empático, visual, participativo</td></tr><tr><td>Competencia</td><td>Dramático, innovador, impactante</td></tr></tbody></table>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">MÁS ALLÁ DE SLIDES</p><ul class="bullet-list"><li>Sitios web como presentaciones (v0, Bolt)</li><li>Video-presentaciones</li><li>PDFs generados con IA</li><li><strong style="color:var(--teal);">NotebookLM → PODCAST de tu proyecto</strong></li></ul>`,
  },
  {
    day: 6,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Crítica de Narrativa IA</h2><p class="demo-description">¿Cómo distinguir texto genérico de texto con sustancia?</p><ul class="demo-steps"><li><span style="color:var(--orange);">Genérico:</span> "un espacio que invita a la reflexión" — ¿Qué significa?</li><li><span style="color:var(--orange);">Vacío:</span> "la materialidad enriquece la experiencia" — No dice nada</li><li><span style="color:var(--green);">Bueno:</span> Detalles específicos, verdad del proyecto, voz propia</li></ul><p style="margin-top:16px;font-size:20px;color:var(--text-dim);">La IA da el 70%. Ustedes ponen el 30% que importa.</p>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="activity-box"><div class="activity-icon">ACTIVIDAD</div><div class="activity-text">Escriban el Hook de su proyecto en UNA oración.</div><div class="timer-badge">⏱ 3 minutos</div></div>`,
  },
  {
    day: 6,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Misma Narrativa, 3 Tonos</h2><p class="demo-description">El mismo proyecto presentado para jurado, para cliente, y para competencia.</p><p class="concept-sub" style="margin-top:16px;">El contenido cambia. El vocabulario cambia. La verdad del proyecto es la misma.</p>`,
  },
  {
    day: 6,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO WOW</span><h2 class="demo-title">NotebookLM → PODCAST</h2><p class="demo-description">Brief del proyecto → PODCAST con dos voces discutiendo tu diseño</p><p class="concept-sub" style="margin-top:16px;">Generado automáticamente. Contenido para redes o para escuchar tu proyecto desde otra perspectiva.</p>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="warning-box">NUNCA leas los slides en voz alta. Lo que está en pantalla ≠ lo que dices. Slides = visual. Tú = narrativa. (Principio de Redundancia de Mayer)</div>`,
  },
  {
    day: 6,
    type: "break",
    timing: "10:00-10:15",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 6,
    type: "exercise",
    timing: "10:15-11:15",
    duration: 60,
    tools: ["Gamma", "Canva AI"],
    deliverable: "Presentación de 5 slides",
    content: `<div class="exercise-badge">EJERCICIO <span class="duration">60 min</span></div><h2 class="exercise-title">"La Presentación de 5 Minutos"</h2><ol class="exercise-steps"><li>Genera presentación de 5 slides con Gamma o Canva (25 min)</li><li>EDITA: cambia al menos 3 cosas genéricas</li><li>Speed presentations: 60 segundos exactos cada uno</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">📊</span> Gamma</span><span class="meta-tag"><span class="icon">🎨</span> Canva AI</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Estructura: Nombre+hero → Problema → Concepto → Vistas clave → Impacto</p>`,
  },
  // Example: 5-slide pitch
  {
    day: 6,
    type: "example",
    content: `<span class="example-badge">EJEMPLO — PITCH DE 5 SLIDES</span><h2 class="example-title">Estructura de Presentación</h2><div class="example-grid grid-5"><div class="example-frame"><div class="frame-icon">🏛️</div><div class="frame-label">SLIDE 1<br>Nombre + Hero Image<br>(del Día 4)</div></div><div class="example-frame"><div class="frame-icon">📍</div><div class="frame-label">SLIDE 2<br>Problema / Contexto<br>Sitio · Cliente · Reto</div></div><div class="example-frame"><div class="frame-icon">💡</div><div class="frame-label">SLIDE 3<br>Concepto / Approach<br>1 oración + diagrama</div></div><div class="example-frame"><div class="frame-icon">🖼️</div><div class="frame-label">SLIDE 4<br>Vistas Clave<br>Atmosphere Board</div></div><div class="example-frame"><div class="frame-icon">🚀</div><div class="frame-label">SLIDE 5<br>Impacto / Next Steps<br>Visión de futuro</div></div></div>`,
  },
  {
    day: 6,
    type: "break",
    timing: "11:15-11:30",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 6,
    type: "demo",
    timing: "10:15-11:15",
    content: `<span class="demo-badge">DEMO RÁPIDO</span><h2 class="demo-title">Gamma en Acción</h2><p class="demo-description">Descripción → presentación en 60 segundos</p><p class="concept-sub" style="margin-top:16px;">Texto genérico, imágenes stock, estructura predecible — pero funciona como punto de partida.</p><p style="margin-top:16px;font-size:22px;color:var(--text);">El output de la IA es el PUNTO DE PARTIDA.</p>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "10:15-11:15",
    content: `<p class="segment-badge">ESTRUCTURA DE 5 SLIDES</p><ol class="num-list"><li>Nombre + hero image (Día 4)</li><li>Problema / contexto</li><li>Concepto / approach</li><li>Vistas clave (Atmosphere Board)</li><li>Impacto / next steps</li></ol><div class="warning-box" style="margin-top:16px;">Generar con IA primero. Luego EDITAR. Cambiar al menos 3 cosas genéricas.</div>`,
  },
  {
    day: 6,
    type: "transition",
    timing: "10:15-11:15",
    content: `<div class="transition-text">Speed Presentations</div><div class="transition-sub">60 segundos exactos · Timer en pantalla · Votar: Concepto más claro / Mejores visuales / Mejor delivery</div>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">OUTLINE CON CLAUDE</p><div class="prompt-box"><div class="prompt-text">Estoy preparando presentación para [proyecto].
Audiencia: [quién].
Concepto: [qué].
Estructura: Hook > Contexto > Concepto > Diseño > Evidencia > Visión.</div></div>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">INTEGRANDO TODO</p><ul class="bullet-list"><li><strong>Día 2:</strong> análisis → sección Evidencia</li><li><strong>Día 3:</strong> Intelligence Report → sección Contexto</li><li><strong>Día 4:</strong> imágenes → sección Diseño</li><li><strong>Día 5:</strong> video → embebido</li><li><strong>Nuevo:</strong> llenar huecos con IA</li></ul>`,
  },
  {
    day: 6,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">CRIT EN PAREJAS</p><ul class="bullet-list"><li>"Entendí tu concepto como..."</li><li>"El momento más fuerte fue..."</li><li>"Me confundí cuando..."</li><li>"Yo agregaría..."</li></ul>`,
  },
  {
    day: 6,
    type: "exercise",
    timing: "11:30-1:00",
    duration: 90,
    tools: ["Gamma", "Claude", "Canva AI"],
    deliverable: "Pitch de 10-15 slides (Versión 1 de Entrega)",
    content: `<div class="exercise-badge">EJERCICIO PROFUNDO <span class="duration">90 min</span></div><h2 class="exercise-title">"El Pitch del Proyecto"</h2><p style="font-size:22px;color:var(--text-dim);margin-bottom:16px;">Integración de TODO. Versión 1 de la Entrega.</p><ol class="exercise-steps"><li>Outline con Claude: Hook → Contexto → Concepto → Diseño → Evidencia → Visión (15 min)</li><li>Integra: Día 2 análisis · Día 3 Report · Día 4 imágenes · Día 5 video (60 min)</li><li>Crit en parejas: 3 min cada uno (15 min)</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">📊</span> Gamma</span><span class="meta-tag"><span class="icon">🧠</span> Claude</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Esta presentación, refinada los próximos 3 días, ES su Entrega</p>`,
  },
  {
    day: 6,
    type: "summary",
    content: `<h2 class="summary-header">Mañana</h2><p style="font-size:28px;color:var(--text);margin-bottom:20px;">Colaboración Humano-IA — el juicio crítico</p><p style="font-size:22px;color:var(--text-dim);">¿Cuándo confiar en la IA y cuándo no?</p>`,
  },

  // ═══════════════════════════════════════════
  // DÍA 7 — COLABORACIÓN HUMANO-IA
  // ═══════════════════════════════════════════

  {
    day: 7,
    type: "title",
    content: `<div class="day-number">07</div><div class="day-theme">Colaboración Humano-IA</div><div class="day-tagline">La IA amplifica tus fortalezas... y también tus puntos ciegos.</div><div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>`,
  },
  {
    day: 7,
    type: "retrieval",
    timing: "8:00-8:15",
    content: `<span class="retrieval-badge">QUIZ ACUMULATIVO</span><h2 class="retrieval-title">En papel. Sin notas. 5 minutos.</h2><ol class="retrieval-questions"><li>¿Qué es un LLM?</li><li>Las 6 letras de CO-STAR</li><li>Capa #4 de fórmula de imagen</li><li>Motion intensity para arquitectura</li><li>Herramienta de presentación más rápida</li><li>¿Por qué NUNCA leer slides en voz alta?</li><li>¿Cuántos tokens tiene 1 página?</li></ol>`,
  },
  {
    day: 7,
    type: "agenda",
    timing: "8:15-10:00",
    content: `<h2 class="agenda-header">Hoy van a aprender:</h2><ol class="agenda-items"><li>La frontera irregular — cuándo la IA ayuda y cuándo daña</li><li>Tres tipos de usuarios — ¿cuál serán?</li><li>El framework PAIR para colaboración profesional</li></ol>`,
  },
  {
    day: 7,
    type: "term",
    timing: "8:15-10:00",
    content: `<div class="term-word">JAGGED FRONTIER</div><div class="term-translation">Frontera Irregular</div><div class="term-definition">Harvard/BCG: 758 consultores con IA = 12% más productivos, 25% más rápidos, 40% mejor calidad.</div><div class="term-analogy">PERO fuera de la frontera de capacidad, usar IA EMPEORÓ el rendimiento. La línea entre "ayuda" y "daña" NO es obvia.</div>`,
  },
  {
    day: 7,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">SEGMENTO 2 · TRES ESPECIES</p><div class="flow-diagram"><div class="flow-step" style="border-color:var(--green);"><strong>CENTAURO</strong><br><small>División: esto yo, esto la IA</small></div><div class="flow-step" style="border-color:var(--teal);"><strong>CYBORG</strong><br><small>Integración fluida constante</small></div><div class="flow-step" style="border-color:var(--orange);"><strong>SELF-AUTOMATOR</strong><br><small style="color:var(--orange);">Delega todo → ATROFIA</small></div></div>`,
  },
  {
    day: 7,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="concept-text">2005: 2 amateurs + computadoras promedio + MEJOR PROCESO</p><p class="concept-sub">Vencieron a grandmasters Y a supercomputadoras. Ni humano solo ni máquina sola: EQUIPO.</p>`,
  },
  {
    day: 7,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">SEGMENTO 3 · SESGO Y ÉTICA</p><div class="warning-box">>80% de datos de entrenamiento = proyectos occidentales/de lujo. "Casa bonita" = Architectural Digest, no una colonia de Chihuahua.</div><p style="margin-top:16px;font-size:22px;color:var(--text);">Su responsabilidad: dar contexto para contrarrestar el sesgo.</p>`,
  },
  {
    day: 7,
    type: "table",
    timing: "8:15-10:00",
    content: `<h2 class="table-title">Framework PAIR</h2><table class="comparison-table"><thead><tr><th>Letra</th><th>Acción</th></tr></thead><tbody><tr><td style="color:var(--teal);font-weight:700;font-size:24px;">P</td><td>Provide context — den contexto rico</td></tr><tr><td style="color:var(--teal);font-weight:700;font-size:24px;">A</td><td>Ask specifically — pregunten con precisión (CO-STAR)</td></tr><tr><td style="color:var(--teal);font-weight:700;font-size:24px;">I</td><td>Interrogate output — cuestionen el resultado</td></tr><tr><td style="color:var(--teal);font-weight:700;font-size:24px;">R</td><td>Refine iteratively — iteren</td></tr></tbody></table>`,
  },
  {
    day: 7,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">LAS 5 PREGUNTAS ANTES DE USAR IA</p><ol class="num-list"><li>¿Es repetitivo? → <strong>IA</strong></li><li>¿Requiere MI juicio? → <strong>Yo</strong> (IA asiste)</li><li>¿La precisión es crítica? → <strong>Yo verifico</strong></li><li>¿Es exploración creativa? → <strong>IA genera, yo curo</strong></li><li>¿Es para el cliente? → <strong>Yo con soporte de IA</strong></li></ol>`,
  },
  {
    day: 7,
    type: "break",
    timing: "10:00-10:15",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 7,
    type: "exercise",
    timing: "10:15-11:15",
    duration: 60,
    tools: ["Documentos impresos"],
    deliverable: "Worksheet de detección de errores",
    content: `<div class="exercise-badge">EJERCICIO <span class="duration">60 min</span></div><h2 class="exercise-title">"Detecta las Mentiras"</h2><p style="font-size:22px;color:var(--text-dim);margin-bottom:16px;">Equipos de 3. Competencia. Funciona OFFLINE.</p><ol class="exercise-steps"><li>3 documentos pre-generados con errores escondidos</li><li>Doc A: Análisis de sitio (3 errores)</li><li>Doc B: Recomendación estructural (errores mixtos)</li><li>Doc C: Narrativa de diseño (2 factuales + 3 de estilo)</li><li>Clasificar: factual, alucinación, engañoso, mal consejo</li></ol><p style="margin-top:12px;font-size:18px;color:var(--green);">+1 encontrar · +1 clasificar · +1 corregir · +3 error exclusivo</p>`,
  },
  // Example: Error detection worksheet
  {
    day: 7,
    type: "example",
    content: `<span class="example-badge">EJEMPLO — DETECCIÓN DE ERRORES</span><h2 class="example-title">Worksheet de Clasificación</h2><div class="example-grid grid-3"><div class="example-frame"><div class="frame-icon">📄</div><div class="frame-label">DOC A: Análisis de Sitio<br><br>Error 1: dato climatológico falso<br>Error 2: zonificación incorrecta<br>Error 3: precedente inventado</div></div><div class="example-frame"><div class="frame-icon">🏗️</div><div class="frame-label">DOC B: Recomendación Estructural<br><br>Info correcta + incorrecta<br>mezclada. Separar verdad<br>de ficción plausible.</div></div><div class="example-frame"><div class="frame-icon">📝</div><div class="frame-label">DOC C: Narrativa de Diseño<br><br>2 errores factuales<br>3 problemas de estilo<br>(genérico, vacío, cliché)</div></div></div><p style="margin-top:16px;font-size:18px;color:var(--text-muted);">Tipos: Alucinación · Ceguera contextual · Nonsense plausible</p>`,
  },
  {
    day: 7,
    type: "break",
    timing: "11:15-11:30",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 7,
    type: "concept",
    timing: "10:15-11:15",
    content: `<p class="segment-badge">PUNTUACIÓN</p><div class="two-col"><div><ul class="bullet-list"><li>Encontrar error: +1</li><li>Clasificar correctamente: +1</li></ul></div><div><ul class="bullet-list"><li>Dar corrección: +1</li><li>Error que nadie más encontró: +3</li></ul></div></div>`,
  },
  {
    day: 7,
    type: "concept",
    timing: "10:15-11:15",
    content: `<p class="segment-badge">PATRONES DE ERROR</p><ul class="bullet-list"><li><strong style="color:var(--orange);">Alucinación</strong> — hechos fabricados con confianza</li><li><strong style="color:var(--orange);">Ceguera contextual</strong> — conocimiento general mal aplicado localmente</li><li><strong style="color:var(--orange);">Nonsense plausible</strong> — suena bien, está mal</li></ul><p style="margin-top:16px;font-size:22px;color:var(--text);">Su expertise es el firewall.</p>`,
  },
  {
    day: 7,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">DESIGN DECISION FRAMEWORK</p><div class="flow-diagram"><div class="flow-step">Opciones</div><span class="flow-arrow">→</span><div class="flow-step">Criterios</div><span class="flow-arrow">→</span><div class="flow-step">Evaluación</div><span class="flow-arrow">→</span><div class="flow-step">Decisión</div><span class="flow-arrow">→</span><div class="flow-step">Justificación</div></div>`,
  },
  {
    day: 7,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">LAS 3 RONDAS</p><ol class="num-list"><li><strong>GENERAR</strong> (15 min): 5 opciones con pros/contras, eliminar malas, quedarse con 3</li><li><strong>EVALUAR</strong> (15 min): matriz de criterios, puntuar 1-5, DESAFIAR al menos 1 puntaje</li><li><strong>STRESS TEST</strong> (10 min): abogado del diablo</li></ol>`,
  },
  {
    day: 7,
    type: "exercise",
    timing: "11:30-1:00",
    duration: 90,
    tools: ["Claude"],
    deliverable: "Design Decision Document",
    content: `<div class="exercise-badge">EJERCICIO PROFUNDO <span class="duration">90 min</span></div><h2 class="exercise-title">"El Juicio del Diseño"</h2><ol class="exercise-steps"><li>Identifica 1 decisión de diseño no resuelta (10 min)</li><li>Ronda 1 — GENERAR: 5 opciones con pros/contras (15 min)</li><li>Ronda 2 — EVALUAR: matriz de criterios, DESAFÍA al menos 1 puntaje (15 min)</li><li>Ronda 3 — STRESS TEST: abogado del diablo (10 min)</li><li>Compila Design Decision Document (30 min)</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">🧠</span> Claude</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Frase clave: "La IA recomendó X, pero yo elegí Y porque Z"</p>`,
  },
  // Example: Design Decision Document with matrix
  {
    day: 7,
    type: "example",
    content: `<span class="example-badge">EJEMPLO — DESIGN DECISION DOCUMENT</span><h2 class="example-title">Estructura del Documento</h2><div class="example-grid grid-2"><div class="example-frame large"><div class="frame-icon">📊</div><div class="frame-label">MATRIZ DE EVALUACIÓN<br><br>Criterios → Costo | Factibilidad | Estética | Clima | Constructibilidad<br>Opción A → 4 | 3 | 5 | 4 | 3 = 19<br>Opción B → 3 | 5 | 3 | 5 | 4 = 20 ✓<br>Opción C → 5 | 2 | 4 | 3 | 2 = 16</div></div><div class="example-frame"><div class="frame-icon">✍️</div><div class="frame-label">JUSTIFICACIÓN<br><br>"La IA recomendó Opción A<br>por estética, pero elegí B<br>porque la constructibilidad<br>en Chihuahua es crítica"</div></div></div>`,
  },
  {
    day: 7,
    type: "summary",
    content: `<h2 class="summary-header">Mañana</h2><p style="font-size:28px;color:var(--text);margin-bottom:20px;">Vibe Coding — de usuario a creador</p><div class="preview-terms"><span class="term-chip">Terminal</span><span class="term-chip">CLI</span><span class="term-chip">Vibe Coding</span></div><p style="margin-top:24px;font-size:20px;color:var(--text-muted);">No necesitan saber programar. Solo describir.</p>`,
  },

  // ═══════════════════════════════════════════
  // DÍA 8 — VIBE CODING
  // ═══════════════════════════════════════════

  {
    day: 8,
    type: "title",
    content: `<div class="day-number">08</div><div class="day-theme">Vibe Coding</div><div class="day-tagline">No necesitas ser programador para crear herramientas.</div><div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>`,
  },
  {
    day: 8,
    type: "retrieval",
    timing: "8:00-8:15",
    content: `<span class="retrieval-badge">RETRIEVAL</span><h2 class="retrieval-title">Sketch It</h2><ol class="retrieval-questions"><li>Dibujen el framework PAIR de memoria</li><li>¿Cuáles son las 3 rondas del Juicio del Diseño?</li><li>¿Qué es un self-automator y por qué es anti-patrón?</li></ol>`,
  },
  {
    day: 8,
    type: "agenda",
    timing: "8:15-10:00",
    content: `<h2 class="agenda-header">Hoy van a aprender:</h2><ol class="agenda-items"><li>El código es solo texto (desmitificación)</li><li>Las herramientas: v0, Bolt, Lovable</li><li>Los 4 comandos de terminal (pasaporte al Día 9)</li></ol>`,
  },
  {
    day: 8,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="concept-text">El código es solo texto</p><p class="concept-sub">Un sitio web = archivos de texto que el navegador interpreta. No es magia. Son letras.</p>`,
  },
  {
    day: 8,
    type: "term",
    timing: "8:15-10:00",
    content: `<div class="term-word">VIBE CODING</div><div class="term-translation">Acuñado por Andrej Karpathy, 2025</div><div class="term-definition">Describes lo que quieres. La IA lo construye.</div><div class="term-analogy">Ustedes = arquitecto (planos). IA = constructor (ejecución). No ponen ladrillos — DESCRIBEN.</div>`,
  },
  {
    day: 8,
    type: "table",
    timing: "8:15-10:00",
    content: `<h2 class="table-title">Las Herramientas</h2><table class="comparison-table"><thead><tr><th>Herramienta</th><th>Fortaleza</th><th>Costo</th></tr></thead><tbody><tr><td>v0.dev</td><td>Mejor calidad visual, componentes UI</td><td>Free tier</td></tr><tr><td>Bolt.new</td><td>Full-stack, hosting incluido</td><td>1M tokens/mes gratis</td></tr><tr><td>Lovable</td><td>Para no-programadores</td><td>Free tier</td></tr></tbody></table>`,
  },
  {
    day: 8,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Herramienta en 60 Segundos</h2><p class="demo-description">Calculador de estacionamiento para código mexicano</p><ul class="demo-steps"><li>Input: tipo de edificio, área total, ciudad</li><li>Output: cajones requeridos</li><li>Herramienta funcional en 60 segundos</li></ul><p style="margin-top:16px;font-size:20px;color:var(--text-dim);">Esto costaría $5,000 con un desarrollador.</p>`,
  },
  {
    day: 8,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">4 COMANDOS DE TERMINAL</p><div class="prompt-box"><div class="prompt-text">pwd    — ¿Dónde estoy? (tu ubicación en Maps)
ls     — ¿Qué hay aquí? (abrir una carpeta)
cd     — Ve a esta carpeta (doble clic)
claude — Inicia Claude Code (tu asistente)</div></div>`,
  },
  {
    day: 8,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">¿QUÉ PUEDEN CONSTRUIR?</p><ul class="bullet-list"><li><strong>Práctica:</strong> calculadores, estimadores, dashboards</li><li><strong>Cliente:</strong> portales, trackers de proyecto</li><li><strong>Portafolio:</strong> sitio web profesional propio</li><li><strong>Automatización:</strong> notas → acciones, propuestas, RFIs</li></ul>`,
  },
  {
    day: 8,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">10 IDEAS STARTER</p><div class="two-col"><div><ol class="num-list"><li>Calculador de estacionamiento</li><li>Calculador de áreas</li><li>Analizador solar</li><li>Estimador de costo/m²</li><li>Paleta de materiales</li></ol></div><div><ol class="num-list" style="counter-reset:nlist 5;"><li>Paleta de color</li><li>Calculador de altura (FAR/COS)</li><li>Timeline de proyecto</li><li>Notas de reunión</li><li>Página de portafolio</li></ol></div></div>`,
  },
  {
    day: 8,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Código Fuente</h2><p class="demo-description">Click derecho → ver código fuente de cualquier sitio web</p><p class="concept-sub" style="margin-top:16px;">Son letras. Etiquetas y texto. No da miedo. Y no necesitan ESCRIBIR esto — solo DESCRIBIR lo que quieren.</p>`,
  },
  {
    day: 8,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Terminal = Finder con texto</h2><p class="demo-description">Terminal a la izquierda, Finder a la derecha. Mismas acciones.</p><ul class="demo-steps"><li>pwd — ¿dónde estoy?</li><li>ls — ¿qué hay aquí?</li><li>cd Desktop — ir al escritorio</li></ul><p style="margin-top:16px;font-size:20px;color:var(--text-dim);">Abran Terminal y escriban pwd y ls.</p>`,
  },
  {
    day: 8,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="activity-box"><div class="activity-icon">ACTIVIDAD</div><div class="activity-text">¿Qué herramienta les gustaría que existiera para su trabajo de taller?</div><div class="timer-badge">⏱ 3 minutos</div></div>`,
  },
  {
    day: 8,
    type: "break",
    timing: "10:00-10:15",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 8,
    type: "exercise",
    timing: "10:15-11:15",
    duration: 60,
    tools: ["v0.dev", "Bolt.new"],
    deliverable: "Herramienta funcional con URL",
    content: `<div class="exercise-badge">EJERCICIO <span class="duration">60 min</span></div><h2 class="exercise-title">"Mi Primera Herramienta"</h2><ol class="exercise-steps"><li>Elige de la lista de 10 o inventa la tuya</li><li>Describe en lenguaje natural</li><li>Itera: agrega campos, cambia estilo</li><li>Obtén URL compartible</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">⚡</span> v0.dev</span><span class="meta-tag"><span class="icon">🔨</span> Bolt.new</span></div>`,
  },
  // Example: Calculator tool mockup
  {
    day: 8,
    type: "example",
    content: `<span class="example-badge">EJEMPLO — HERRAMIENTA</span><h2 class="example-title">Calculador de Estacionamiento</h2><div class="example-grid grid-2"><div class="example-frame"><div class="frame-icon">📥</div><div class="frame-label">INPUTS<br><br>▸ Tipo de edificio ▾<br>▸ Área total (m²) [____]<br>▸ Ciudad ▾<br>▸ Uso mixto? ☐</div></div><div class="example-frame"><div class="frame-icon">📤</div><div class="frame-label">OUTPUTS<br><br>Cajones requeridos: 24<br>Cajones accesibles: 2<br>Cajones motocicleta: 4<br><br>Referencia: Art. 47 Reg. Chih.</div></div></div>`,
  },
  {
    day: 8,
    type: "break",
    timing: "11:15-11:30",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 8,
    type: "demo",
    timing: "10:15-11:15",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Construyendo en Vivo</h2><p class="demo-description">De descripción a herramienta funcional</p><ul class="demo-steps"><li>Describir la herramienta en lenguaje natural</li><li>Iterar: "Agrega esto, cambia esto"</li><li>Resultado: URL compartible en minutos</li></ul>`,
  },
  {
    day: 8,
    type: "transition",
    timing: "10:15-11:15",
    content: `<div class="transition-text">Show and Tell</div><div class="transition-sub">5-6 estudiantes demuestran en vivo. Nadie escribió una sola línea de código.</div>`,
  },
  {
    day: 8,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">BRAINSTORM + TOOL BRIEF</p><ol class="num-list"><li>¿Qué problema de workflow resolvería? (15 min brainstorm)</li><li>Tool Brief con Claude: tipo, audiencia, features, inputs, outputs (15 min)</li></ol>`,
  },
  {
    day: 8,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">BUILD PHASE</p><ul class="bullet-list"><li>Empezar con versión mínima (1 feature)</li><li>Agregar features una a la vez</li><li>Testear después de cada adición</li><li>Si se rompe: describir el problema a la IA</li></ul>`,
  },
  {
    day: 8,
    type: "transition",
    timing: "11:30-1:00",
    content: `<div class="transition-text">Investor Pitch</div><div class="transition-sub">2 min por mesa: el problema, la herramienta, el demo</div>`,
  },
  {
    day: 8,
    type: "exercise",
    timing: "11:30-1:00",
    duration: 90,
    tools: ["v0.dev", "Bolt.new", "Lovable"],
    deliverable: "App multi-feature",
    content: `<div class="exercise-badge">EJERCICIO PROFUNDO <span class="duration">90 min</span></div><h2 class="exercise-title">"La App de tu Despacho"</h2><ol class="exercise-steps"><li>Brainstorm: ¿qué problema de workflow resolvería? (15 min)</li><li>Tool Brief con Claude (15 min)</li><li>Build: empezar con versión mínima, 1 feature (60 min)</li><li>Investor pitch: 2 min por mesa</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">⚡</span> v0 / Bolt / Lovable</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Regla: empezar simple → agregar features una a la vez → testear</p>`,
  },
  {
    day: 8,
    type: "summary",
    content: `<h2 class="summary-header">Mañana</h2><p style="font-size:28px;color:var(--text);margin-bottom:20px;">Claude Code — Poder Total</p><div class="preview-terms"><span class="term-chip">Agent</span><span class="term-chip">MCP</span><span class="term-chip">Deploy</span></div><p style="margin-top:24px;font-size:20px;color:var(--text-muted);">La misma conversación. Pero ahora puede construir CUALQUIER COSA.</p>`,
  },

  // ═══════════════════════════════════════════
  // DÍA 9 — CLAUDE CODE: PODER TOTAL
  // ═══════════════════════════════════════════

  {
    day: 9,
    type: "title",
    content: `<div class="day-number">09</div><div class="day-theme">Claude Code: Poder Total</div><div class="day-tagline">La misma conversación que ya dominan. Pero ahora puede construir cualquier cosa.</div><div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>`,
  },
  {
    day: 9,
    type: "retrieval",
    timing: "8:00-8:15",
    content: `<span class="retrieval-badge">RETRIEVAL</span><h2 class="retrieval-title">Rápido:</h2><ol class="retrieval-questions"><li>¿Cuáles son los 4 comandos de terminal?</li><li>¿Qué es vibe coding?</li><li>¿Qué construyeron ayer? ¿Qué le falta?</li></ol>`,
  },
  {
    day: 9,
    type: "agenda",
    timing: "8:15-10:00",
    content: `<h2 class="agenda-header">Hoy van a:</h2><ol class="agenda-items"><li>Entender qué es Claude Code (agent)</li><li>Ver un demo completo de cero a deployed</li><li>Elegir su proyecto y CONSTRUIR</li></ol>`,
  },
  {
    day: 9,
    type: "term",
    timing: "8:15-10:00",
    content: `<div class="term-word">CLAUDE CODE</div><div class="term-translation">Claude con superpoderes</div><div class="term-definition">Es Claude... pero puede VER archivos, ESCRIBIR código, EJECUTAR comandos, DEPLOYAR.</div><div class="term-analogy">AGENT = IA que toma acciones, no solo responde.</div>`,
  },
  {
    day: 9,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO COMPLETO</span><h2 class="demo-title">De Cero a Deployed en 15 Minutos</h2><p class="demo-description">Sitio de despacho de arquitectura en Chihuahua</p><ul class="demo-steps"><li>mkdir + cd (crear carpeta)</li><li>claude (iniciar Claude Code)</li><li>"Crea sitio web para despacho..." (describir)</li><li>"Agrega proyecto..." / "Mejora el footer..." (iterar)</li><li>"Hazlo responsive" (adaptar)</li><li>npx vercel → URL en vivo</li></ul>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="concept-text">No escribí código. HABLÉ con Claude Code.</p><p class="concept-sub">La interfaz cambió. La habilidad es la misma.</p>`,
  },
  {
    day: 9,
    type: "term",
    timing: "8:15-10:00",
    content: `<div class="term-word">MCP</div><div class="term-translation">Model Context Protocol</div><div class="term-definition">= USB para la IA. Conectas un servicio y la IA puede usarlo.</div><div class="term-analogy">Hoy: Claude Code lee sus archivos. Futuro cercano: Claude Code lee su modelo de Revit.</div>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">3 CAMINOS</p><div class="flow-diagram"><div class="flow-step" style="border-color:var(--green);"><strong>PATH A</strong><br>Portfolio Website<br><small>Seguro</small></div><div class="flow-step" style="border-color:var(--teal);"><strong>PATH B</strong><br>Architecture Tool<br><small>Ambicioso</small></div><div class="flow-step" style="border-color:var(--purple);"><strong>PATH C</strong><br>Project Presentation<br><small>Creativo</small></div></div>`,
  },
  {
    day: 9,
    type: "break",
    timing: "10:00-10:15",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 9,
    type: "demo",
    timing: "8:15-10:00",
    content: `<span class="demo-badge">DEMO EN VIVO</span><h2 class="demo-title">Primer Contacto</h2><p class="demo-description">Terminal → claude → conversación → página web en el navegador</p><p class="concept-sub" style="margin-top:16px;">Una página web. Creada con una conversación.</p>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">LOS PASOS DEL DEMO</p><ol class="num-list"><li>mkdir + cd (crear carpeta)</li><li>claude (iniciar)</li><li>"Crea sitio web para despacho..." (describir)</li><li>"Agrega proyecto..." (iterar)</li><li>"Mejora el footer..." (pulir)</li><li>"Hazlo responsive" (adaptar)</li><li>npx vercel (deployar)</li><li>URL en vivo</li></ol>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "8:15-10:00",
    content: `<div class="activity-box"><div class="activity-icon">ACTIVIDAD</div><div class="activity-text">¿A qué herramienta de su workflow les gustaría conectar la IA?</div><div class="timer-badge">⏱ 3 minutos</div></div>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "8:15-10:00",
    content: `<p class="segment-badge">SETUP TÉCNICO</p><p class="concept-sub">Verifiquen acceso a Claude Code en sus máquinas. Resuelvan dudas antes de construir.</p>`,
  },
  {
    day: 9,
    type: "exercise",
    timing: "10:15-11:15",
    duration: 60,
    tools: ["Claude Code", "Terminal"],
    deliverable: "Primer sitio web con Claude Code",
    content: `<div class="exercise-badge">EJERCICIO <span class="duration">60 min</span></div><h2 class="exercise-title">"Hola, Terminal"</h2><ol class="exercise-steps"><li>Abrir Terminal → pwd → ls → cd Desktop</li><li>cd ~/projects → mkdir mi-primer-proyecto → cd</li><li>claude (iniciar Claude Code)</li><li>Describir: "Crea un sitio web de portafolio personal..."</li><li>Iterar: colores, proyectos, fuentes</li><li>Abrir en navegador</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">💻</span> Claude Code</span><span class="meta-tag"><span class="icon">🖥️</span> Terminal</span></div>`,
  },
  // Example: portfolio website mockup
  {
    day: 9,
    type: "example",
    content: `<span class="example-badge">EJEMPLO — PORTFOLIO WEBSITE</span><h2 class="example-title">Sitio Web de Portafolio</h2><div class="example-grid grid-2"><div class="example-frame large"><div class="frame-icon">🌐</div><div class="frame-label">HEADER<br>[Nombre] · Arquitectura · Chihuahua<br><br>HERO IMAGE — Render del Día 4<br><br>SOBRE MÍ — Bio breve<br><br>PROYECTOS — Grid de 3-4 proyectos<br>con imagen + título + descripción</div></div><div class="example-frame"><div class="frame-icon">📱</div><div class="frame-label">RESPONSIVE<br><br>Desktop ✓<br>Tablet ✓<br>Mobile ✓<br><br>URL: portfolio-nombre.vercel.app</div></div></div>`,
  },
  {
    day: 9,
    type: "break",
    timing: "11:15-11:30",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "10:15-11:15",
    content: `<p class="segment-badge">RECORDATORIO DE COMANDOS</p><div class="prompt-box"><div class="prompt-text">pwd           → "¿Dónde estoy?"
ls            → "¿Qué hay aquí?"
cd Desktop    → "Ir al escritorio"
claude        → "Hablar con Claude Code"</div></div><p style="margin-top:12px;font-size:20px;color:var(--text-dim);">Sigan en sus máquinas.</p>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "10:15-11:15",
    content: `<p class="segment-badge">SETUP JUNTOS</p><div class="prompt-box"><div class="prompt-text">cd ~/projects
mkdir mi-primer-proyecto
cd mi-primer-proyecto
claude</div></div>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "10:15-11:15",
    content: `<p class="segment-badge">PRIMERA CONVERSACIÓN</p><div class="prompt-box"><div class="prompt-text">Crea un sitio web de portafolio personal de arquitectura.
Mi nombre es [nombre].
Estudio en Isthmus Chihuahua.
Incluye sección de proyectos con texto placeholder.
Que se vea profesional y moderno.</div></div>`,
  },
  {
    day: 9,
    type: "transition",
    timing: "10:15-11:15",
    content: `<div class="transition-text">Abran su sitio en el navegador</div><div class="transition-sub">Acaban de construir un sitio web. Con su voz. En su estilo.</div>`,
  },
  {
    day: 9,
    type: "concept",
    timing: "11:30-1:00",
    content: `<p class="segment-badge">BUILD CHECKPOINTS</p><ol class="num-list"><li><strong>Min 20:</strong> ¿Primera versión funcionando? Si no, simplificar.</li><li><strong>Min 40:</strong> ¿UNA feature que lo haría genial? Pedirla.</li><li><strong>Min 60:</strong> Pulir — colores, spacing, texto.</li></ol>`,
  },
  {
    day: 9,
    type: "exercise",
    timing: "11:30-1:00",
    duration: 90,
    tools: ["Claude Code"],
    deliverable: "Portfolio/herramienta/presentación deployed en internet",
    content: `<div class="exercise-badge">EJERCICIO PROFUNDO <span class="duration">90 min</span></div><h2 class="exercise-title">"Construye tu Arma Secreta"</h2><ol class="exercise-steps"><li>Brief para Claude Code (10 min)</li><li>Min 20: ¿Primera versión funcionando?</li><li>Min 40: ¿UNA feature que lo haría genial?</li><li>Min 60: Pulir — colores, spacing, texto</li><li>THE DEPLOY: npx vercel (gratis)</li></ol><div class="exercise-meta"><span class="meta-tag"><span class="icon">💻</span> Claude Code</span><span class="meta-tag"><span class="icon">🚀</span> Vercel</span></div><p style="margin-top:12px;font-size:18px;color:var(--green);">Su trabajo está VIVO en internet. Compartible. Real. Suyo.</p>`,
  },
  {
    day: 9,
    type: "summary",
    content: `<h2 class="summary-header">Mañana: LA ENTREGA</h2><p style="font-size:24px;color:var(--text);margin-bottom:20px;">Expo + Presentaciones + Premios + Convivio</p><ul class="bullet-list"><li>Laptop con presentación lista</li><li>Atmosphere Board (Día 4)</li><li>Teléfono con herramienta/sitio (Días 8-9)</li><li>QR code de portfolio site</li></ul>`,
  },

  // ═══════════════════════════════════════════
  // DÍA 10 — LA ENTREGA
  // ═══════════════════════════════════════════

  {
    day: 10,
    type: "title",
    content: `<div class="day-number">10</div><div class="day-theme">La Entrega</div><div class="day-tagline">Hace 10 días no sabían qué era un prompt. Hoy construyen herramientas.</div><div class="course-info">IA PARA ARQUITECTOS · ISTHMUS NORTE</div>`,
  },
  {
    day: 10,
    type: "concept",
    timing: "8:00-8:30",
    content: `<p class="segment-badge">PREPAREN SU ESTACIÓN</p><ul class="bullet-list"><li>Laptop con presentación lista</li><li>Atmosphere Board (Día 4)</li><li>Teléfono/tablet con herramienta/sitio (Días 8-9)</li><li>QR code de portfolio site (si aplica)</li></ul><p style="margin-top:16px;font-size:20px;color:var(--text-muted);">30 minutos de setup</p>`,
  },
  {
    day: 10,
    type: "transition",
    timing: "8:30-9:15",
    content: `<div class="transition-text">La Expo</div><div class="transition-sub">Gallery Walk — 45 minutos<br>Sticky amarillo: "Algo que admiro" · Sticky rosa: "Una pregunta que tengo"<br>Música. Café. Sin presión.</div>`,
  },
  {
    day: 10,
    type: "concept",
    timing: "9:15-10:45",
    content: `<p class="segment-badge">LAS PRESENTACIONES</p><p class="concept-text">3 minutos + 2 minutos Q&A</p><ol class="num-list"><li><strong>HOOK</strong> (15 seg) — Una oración sobre por qué importa</li><li><strong>PROYECTO</strong> (60 seg) — Concepto, decisiones, atmósfera</li><li><strong>JOURNEY IA</strong> (60 seg) — Herramientas, qué funcionó, qué corrigieron</li><li><strong>ARTEFACTO</strong> (30 seg) — Demo herramienta, sitio, video</li><li><strong>REFLEXIÓN</strong> (15 seg) — Cómo cambia su práctica</li></ol>`,
  },
  {
    day: 10,
    type: "break",
    timing: "10:45-11:00",
    duration: 15,
    content: `<div class="break-text">PAUSA</div><div class="break-duration">15 minutos — Antes del Tribunal</div><div class="break-timer" data-duration="15">15:00</div>`,
  },
  {
    day: 10,
    type: "concept",
    timing: "11:00-11:45",
    content: `<p class="segment-badge">EL TRIBUNAL</p><p class="concept-text">5-6 proyectos seleccionados · 5 min cada uno</p><ul class="bullet-list"><li>Uso más innovador de IA</li><li>Mejor resultado de diseño</li><li>Reflexión más honesta</li><li>Herramienta más ambiciosa</li><li>Elegidos por la clase</li></ul>`,
  },
  {
    day: 10,
    type: "concept",
    timing: "11:45-12:15",
    content: `<p class="segment-badge">PREMIOS ESPECIALES</p><ol class="num-list"><li><strong>El Render Más Chingón</strong> — Mejor visualización</li><li><strong>La Herramienta Más Útil</strong> — Más práctica</li><li><strong>El Mejor Pitch</strong> — Mejor presentación</li><li><strong>La Honestidad Brutal</strong> — Mejor reflexión crítica</li><li><strong>El Más Creativo</strong> — Uso más inesperado</li><li><strong>El Espíritu Isthmus</strong> — Amplificación, no reemplazo</li></ol>`,
  },
  {
    day: 10,
    type: "concept",
    timing: "11:45-12:15",
    content: `<p class="segment-badge">PREMIOS DE LA CLASE</p><ul class="bullet-list"><li><strong>El Compa que Más Me Ayudó</strong></li><li><strong>El Proyecto que Más Me Inspiró</strong></li></ul>`,
  },
  {
    day: 10,
    type: "table",
    timing: "11:45-12:15",
    content: `<h2 class="table-title">Artefactos Acumulativos</h2><table class="comparison-table"><thead><tr><th>Día</th><th>Artefacto</th></tr></thead><tbody><tr><td>1</td><td>3 renders + manifiesto</td></tr><tr><td>2</td><td>Worksheet + Memo de factibilidad</td></tr><tr><td>3</td><td>10 versiones + Intelligence Report</td></tr><tr><td>4</td><td>Material Mood Board + Atmosphere Board</td></tr><tr><td>5</td><td>Clip 30s + Video narrativo</td></tr><tr><td>6</td><td>Pitch de 10-15 slides</td></tr><tr><td>7</td><td>Error detection + Decision Document</td></tr><tr><td>8-9</td><td>Herramienta + Portfolio deployed</td></tr></tbody></table>`,
  },
  {
    day: 10,
    type: "table",
    timing: "11:45-12:15",
    content: `<h2 class="table-title">Glosario — 47 Términos en 9 Días</h2><table class="comparison-table"><thead><tr><th>Día</th><th>Términos</th></tr></thead><tbody><tr><td>1</td><td>IA, prompt, render, modelo</td></tr><tr><td>2</td><td>LLM, token, parámetro, context window, alucinación, temperatura</td></tr><tr><td>3</td><td>CO-STAR, framework, few-shot, chain of thought, iteración</td></tr><tr><td>4</td><td>Difusión, espacio latente, seed, 7 capas</td></tr><tr><td>5</td><td>Image-to-video, motion intensity, promenade architecturale</td></tr><tr><td>6</td><td>Gamma, writing partner, narrative arc, Mayer</td></tr><tr><td>7</td><td>Jagged frontier, centaur, cyborg, PAIR</td></tr><tr><td>8</td><td>Vibe coding, CLI, terminal, v0, Bolt</td></tr><tr><td>9</td><td>Claude Code, agent, MCP, deploy</td></tr></tbody></table>`,
  },
  {
    day: 10,
    type: "transition",
    timing: "11:45-12:15",
    content: `<div class="transition-text">El Manifiesto — Día 1 vs Día 10</div><div class="transition-sub">Saquen su manifiesto del Día 1. Léanlo.<br>¿Qué tan equivocados estaban?</div>`,
  },
  {
    day: 10,
    type: "concept",
    timing: "11:45-12:15",
    content: `<p class="slide-quote">La pregunta no es si la IA cambiará la arquitectura. La pregunta es si USTEDES van a liderar ese cambio.</p>`,
  },
  {
    day: 10,
    type: "table",
    timing: "11:45-12:15",
    content: `<h2 class="table-title">Rúbrica de Evaluación</h2><table class="comparison-table"><thead><tr><th>Categoría</th><th>Peso</th></tr></thead><tbody><tr><td>Calidad de Diseño</td><td>25%</td></tr><tr><td>Integración de IA</td><td>25%</td></tr><tr><td>Comunicación</td><td>20%</td></tr><tr><td>Calidad de Artefactos</td><td>15%</td></tr><tr><td>Reflexión Crítica</td><td>15%</td></tr></tbody></table><p style="margin-top:16px;font-size:18px;color:var(--text-muted);">Cada estudiante se evalúa sobre su PROPIA progresión del Día 1 al 10.</p>`,
  },
  {
    day: 10,
    type: "concept",
    timing: "12:15-1:00",
    content: `<p class="segment-badge">REFERENCE LIBRARY</p><ul class="bullet-list"><li>Todos los templates del curso</li><li>Lista completa de herramientas</li><li>Glosario de 47 términos</li><li>Cheat sheet de Claude Code</li></ul><p style="margin-top:16px;font-size:22px;color:var(--text);">Es suyo para siempre.</p>`,
  },
  {
    day: 10,
    type: "transition",
    timing: "12:15-1:00",
    content: `<div class="transition-text">Convivio</div><div class="transition-sub">Comida. Música. Fotos.<br>Intercambien QR codes de portfolios.<br>Google Drive compartido: suban TODO.</div>`,
  },
]; // End of slides array

// ── Slide Rendering Engine ──────────────────

let currentSlide = 0;
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let audioEnabled = false;

// Audio context for timer alert
let audioCtx = null;

function getSlideTypeClass(type) {
  const map = {
    title: "slide-title",
    "course-title": "slide-course-title",
    concept: "slide-concept",
    term: "slide-term",
    demo: "slide-demo",
    exercise: "slide-exercise",
    example: "slide-example",
    table: "slide-table",
    break: "slide-break",
    transition: "slide-transition",
    agenda: "slide-agenda",
    retrieval: "slide-retrieval",
    summary: "slide-summary",
  };
  return map[type] || "slide-concept";
}

function renderSlides() {
  const container = document.getElementById("presentation");
  container.innerHTML = "";
  slides.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = `slide ${getSlideTypeClass(s.type)}${i === 0 ? " active" : ""}`;
    div.dataset.index = i;
    div.dataset.day = s.day;
    div.innerHTML = s.content;
    container.appendChild(div);
  });
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  // Stop any running timer
  stopTimer();

  const allSlides = document.querySelectorAll(".slide");
  allSlides[currentSlide].classList.remove("active");
  currentSlide = index;
  allSlides[currentSlide].classList.add("active");

  updateUI();
}

function updateUI() {
  // Update counter
  const daySlides = slides.filter((s) => s.day === slides[currentSlide].day);
  const dayIndex = daySlides.indexOf(slides[currentSlide]) + 1;
  document.getElementById("slide-counter").textContent =
    `${currentSlide + 1}/${slides.length}`;

  // Update progress bar
  const pct = ((currentSlide + 1) / slides.length) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";

  // Update day dots
  const dots = document.querySelectorAll(".day-dot");
  dots.forEach((d) => {
    d.classList.toggle(
      "active",
      parseInt(d.dataset.day) === slides[currentSlide].day,
    );
  });

  // Setup timer for exercise/break slides
  const slide = slides[currentSlide];
  if (slide.duration && (slide.type === "exercise" || slide.type === "break")) {
    timerSeconds = slide.duration * 60;
    updateTimerDisplay();
  }
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}
function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToDay(day) {
  const idx = slides.findIndex((s) => s.day === day);
  if (idx !== -1) goToSlide(idx);
}

// ── Timer ──────────────────────────────────

function toggleTimer() {
  const slide = slides[currentSlide];
  if (!slide.duration) return;

  if (timerRunning) {
    stopTimer();
  } else {
    if (timerSeconds <= 0) timerSeconds = slide.duration * 60;
    timerRunning = true;
    timerInterval = setInterval(() => {
      timerSeconds--;
      if (timerSeconds <= 0) {
        timerSeconds = 0;
        stopTimer();
        if (audioEnabled) playAlert();
        // Mark expired
        const timerEl = document.querySelector(
          ".slide.active .slide-timer, .slide.active .break-timer",
        );
        if (timerEl) timerEl.classList.add("expired");
      } else if (timerSeconds <= 60) {
        const timerEl = document.querySelector(
          ".slide.active .slide-timer, .slide.active .break-timer",
        );
        if (timerEl) timerEl.classList.add("warning");
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function stopTimer() {
  timerRunning = false;
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  // Remove warning/expired classes
  document.querySelectorAll(".warning, .expired").forEach((el) => {
    el.classList.remove("warning", "expired");
  });
}

function updateTimerDisplay() {
  const timerEl = document.querySelector(
    ".slide.active .slide-timer, .slide.active .break-timer",
  );
  if (!timerEl) return;
  const min = Math.floor(timerSeconds / 60);
  const sec = timerSeconds % 60;
  timerEl.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function playAlert() {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.frequency.value = 880;
  osc.type = "sine";
  gain.gain.value = 0.3;
  osc.start();
  osc.stop(audioCtx.currentTime + 0.5);
  setTimeout(() => {
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.frequency.value = 1100;
    osc2.type = "sine";
    gain2.gain.value = 0.3;
    osc2.start();
    osc2.stop(audioCtx.currentTime + 0.5);
  }, 600);
}

// ── Event Listeners ──────────────────────────

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
    case " ":
      e.preventDefault();
      nextSlide();
      break;
    case "ArrowLeft":
      e.preventDefault();
      prevSlide();
      break;
    case "f":
    case "F":
      document.documentElement.requestFullscreen?.() ||
        document.documentElement.webkitRequestFullscreen?.();
      break;
    case "t":
    case "T":
      toggleTimer();
      break;
    case "1":
      goToDay(1);
      break;
    case "2":
      goToDay(2);
      break;
    case "3":
      goToDay(3);
      break;
    case "4":
      goToDay(4);
      break;
    case "5":
      goToDay(5);
      break;
    case "6":
      goToDay(6);
      break;
    case "7":
      goToDay(7);
      break;
    case "8":
      goToDay(8);
      break;
    case "9":
      goToDay(9);
      break;
    case "0":
      goToDay(10);
      break;
    case "Escape":
      if (document.fullscreenElement) document.exitFullscreen();
      break;
  }
});

// Click/tap to advance
document.getElementById("presentation").addEventListener("click", (e) => {
  // Don't advance if clicking timer or interactive element
  if (e.target.closest(".slide-timer, .break-timer, .meta-tag, a, button"))
    return;
  nextSlide();
});

// Timer click handler
document.addEventListener("click", (e) => {
  if (e.target.closest(".slide-timer, .break-timer")) {
    toggleTimer();
  }
});

// Day dot navigation
document.querySelectorAll(".day-dot").forEach((dot) => {
  dot.addEventListener("click", () => goToDay(parseInt(dot.dataset.day)));
});

// Audio toggle
document.getElementById("audio-toggle").addEventListener("click", () => {
  audioEnabled = !audioEnabled;
  document.getElementById("audio-toggle").textContent = audioEnabled
    ? "🔊 Audio"
    : "🔇 Audio";
});

// Hide keyboard hint after 5 seconds
setTimeout(() => {
  document.getElementById("keyboard-hint").classList.remove("visible");
}, 5000);

// Show hint on mouse move near bottom
document.addEventListener("mousemove", (e) => {
  const hint = document.getElementById("keyboard-hint");
  if (e.clientY > window.innerHeight - 80) {
    hint.classList.add("visible");
  } else {
    hint.classList.remove("visible");
  }
});

// ── Initialize ──────────────────────────────
renderSlides();
updateUI();
