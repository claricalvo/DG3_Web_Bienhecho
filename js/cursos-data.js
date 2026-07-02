/* =========================================================
   APEX RACING ACADEMY — Datos de cursos
   Acá vive toda la información de cada curso. Si en algún
   momento agregás un curso nuevo, alcanza con sumar otro
   objeto a CURSOS_APEX siguiendo el mismo formato y va a
   aparecer automáticamente en detalle.html con la URL:
   detalle.html?curso=el-id-que-le-pongas
   ========================================================= */

const CURSOS_APEX = {

  "luz-verde": {
    nivel: "PRINCIPIANTE",
    destacado: false,
    titulo: "LUZ VERDE",
    imagenHero: "images/nivel-1.png",
    imagenHeroAlt: "Piloto entrenando en simulador de Fórmula 1 con triple pantalla",
    precio: 180000,
    duracion: "6 semanas",
    caracteristicas: [
      { texto: "6 sesiones de 2 hs en simulador", incluido: true },
      { texto: "Introducción a la dinámica de grip", incluido: true },
      { texto: "Técnica de frenada y apexes", incluido: true },
      { texto: "Seguimiento personalizado", incluido: true },
      { texto: "Certificado Nivel 1 APEX", incluido: true },
      { texto: "Grabación de carreras", incluido: false },
      { texto: "Acceso a ligas privadas", incluido: false }
    ],
    imagenCard: "images/nivel-1.png",
    timeline: [
      { semana: "SEMANA 1", titulo: "Primer contacto", desc: "Familiarización con el simulador, posición de manejo y configuración de periféricos. Primeras vueltas libres para perder el miedo al límite." },
      { semana: "SEMANA 2", titulo: "Frenada y punto de frenada", desc: "Técnica de trail braking, distancias de frenada por curva y lectura de la pista. Ejercicios de consistencia de vueltas." },
      { semana: "SEMANA 3", titulo: "Dinámica de grip", desc: "Introducción a la transferencia de peso, subviraje y sobreviraje. Cómo el auto responde a cada input del volante." },
      { semana: "SEMANA 4", titulo: "Línea de carrera", desc: "Apexes, punto de giro y salida de curva. Cómo elegir la línea óptima en cada tipo de curva." },
      { semana: "SEMANA 5", titulo: "Ritmo de carrera", desc: "Simulación de stint completo, manejo del neumático y administración del auto. Primera carrera contra IA." },
      { semana: "SEMANA 6", titulo: "Evaluación y certificación", desc: "Carrera de evaluación cronometrada. Análisis final con el instructor y entrega del Certificado Nivel 1 APEX." }
    ]
  },

  "puesta-a-punto": {
    nivel: "INTERMEDIO",
    destacado: true,
    titulo: "PUESTA A PUNTO",
    imagenHero: "images/nivel-2.png",
    imagenHeroAlt: "Detalle de casco de simracing profesional con sistema de comunicación",
    precio: 320000,
    duracion: "8 semanas",
    caracteristicas: [
      { texto: "10 sesiones de 2 hs en simulador", incluido: true },
      { texto: "Análisis de telemetría avanzada", incluido: true },
      { texto: "Setup completo", incluido: true },
      { texto: "Optimización de sectores por vuelta", incluido: true },
      { texto: "Grabación de carreras", incluido: true },
      { texto: "Seguimiento personalizado", incluido: true },
      { texto: "Certificado Nivel 2 APEX", incluido: true },
      { texto: "Acceso a ligas privadas", incluido: false }
    ],
    imagenCard: "images/nivel-2.png",
    timeline: [
      { semana: "SEMANA 1", titulo: "Diagnóstico de nivel", desc: "Sesión de evaluación: análisis de telemetría base, identificación de áreas de mejora y planteo del plan de trabajo." },
      { semana: "SEMANA 2", titulo: "Lectura de telemetría", desc: "Interpretación de trazados de velocidad, frenada y aceleración. Comparativa contra referencia del instructor." },
      { semana: "SEMANA 3", titulo: "Setup del auto", desc: "Ajuste de suspensión, alerón y diferencial. Cómo cada parámetro afecta el comportamiento en pista." },
      { semana: "SEMANA 4", titulo: "Optimización por sector", desc: "Trabajo específico en los sectores donde se pierden más décimas. Ejercicios de repetición dirigida." },
      { semana: "SEMANA 5", titulo: "Gestión de neumáticos", desc: "Degradación de compuestos, ventana de temperatura óptima y cómo alargar un stint sin perder ritmo." },
      { semana: "SEMANA 6", titulo: "Clasificación y salida", desc: "Técnica de vuelta rápida en clasificación. Salidas de parrilla, primera curva y defensa de posición." },
      { semana: "SEMANA 7", titulo: "Carrera completa", desc: "Simulación de carrera de 30 minutos con estrategia de pits, comunicación y decisiones en tiempo real." },
      { semana: "SEMANA 8", titulo: "Evaluación y certificación", desc: "Carrera de evaluación con telemetría completa. Entrega del Certificado Nivel 2 APEX y acceso al programa avanzado." }
    ]
  },

  "bandera-a-cuadros": {
    nivel: "AVANZADO",
    destacado: false,
    titulo: "BANDERA A CUADROS",
    imagenHero: "images/nivel-3.jpg",
    imagenHeroAlt: "Monoplaza de Fórmula 1 a alta velocidad con efecto de movimiento",
    precio: 520000,
    duracion: "10 semanas",
    caracteristicas: [
      { texto: "16 sesiones de 2 hs en simulador", incluido: true },
      { texto: "Estrategia de carrera completa", incluido: true },
      { texto: "Gestión de neumáticos y combustible", incluido: true },
      { texto: "Batallas en pista y racecraft", incluido: true },
      { texto: "Ingenieros de pista certificados", incluido: true },
      { texto: "Certificado Nivel 3 APEX", incluido: true },
      { texto: "Acceso a ligas privadas APEX", incluido: true }
    ],
    imagenCard: "images/nivel-3.jpg",
    timeline: [
      { semana: "SEMANA 1", titulo: "Evaluación avanzada", desc: "Sesión de diagnóstico con ingenieros. Definición de objetivos, circuitos de trabajo y métricas de progreso." },
      { semana: "SEMANA 2", titulo: "Racecraft y defensa", desc: "Posicionamiento en pista, defensa de posición, maniobras permitidas y lectura del rival." },
      { semana: "SEMANA 3", titulo: "Ataques y adelantamientos", desc: "Técnica de slipstream, frenada tardía y cómo ejecutar un adelantamiento sin exponer el auto." },
      { semana: "SEMANA 4", titulo: "Estrategia de carrera", desc: "Lectura de condiciones, undercut y overcut. Comunicación con el muro de boxes en tiempo real." },
      { semana: "SEMANA 5", titulo: "Gestión de combustible", desc: "Conducción en modo de ahorro sin perder posición. Cómo administrar el ritmo en función de la carga de combustible." },
      { semana: "SEMANA 6", titulo: "Condiciones variables", desc: "Pista mojada, safety car y banderas. Decisiones de estrategia en escenarios de carrera extremos." },
      { semana: "SEMANA 7", titulo: "Análisis de rivales", desc: "Uso de replays y telemetría comparativa para entender fortalezas y debilidades del campo de pilotos." },
      { semana: "SEMANA 8", titulo: "Simulacro de campeonato", desc: "Primera fecha de campeonato interno APEX. Clasificación + carrera de 45 minutos con puntos reales." },
      { semana: "SEMANA 9", titulo: "Refinamiento final", desc: "Sesiones de corrección dirigida sobre errores identificados en la fecha. Preparación para la evaluación final." },
      { semana: "SEMANA 10", titulo: "Gran Final y certificación", desc: "Carrera de campeonato evaluada por ingenieros. Entrega del Certificado Nivel 3 APEX y acceso a ligas privadas." }
    ]
  }

};

/* =========================================================
   Testimonios — se muestran todos en el carrusel de cada
   página de detalle, sin importar el curso. Si más adelante
   querés testimonios específicos por curso, se puede mover
   esta lista adentro de cada objeto de curso.
   ========================================================= */

const TESTIMONIOS_APEX = [
  {
    texto: "La diferencia entre simracing amateur y profesional es entender los datos. APEX me enseñó a leer la telemetría como un ingeniero de pista.",
    nombre: "MANUEL C.",
    detalle: "NIVEL 2 — ACC GT3"
  },
  {
    texto: "El simulador de APEX te lleva al límite del grip antes de sentirlo en la pantalla. No hay otra academia en Argentina con este nivel de detalle.",
    nombre: "JULIETA C.",
    detalle: "NIVEL 1 — BEGINNER FAST TRACK"
  },
  {
    texto: "APEX no es para los que quieren pasarla bien. Es para los que quieren ganar. Si estás dispuesto a trabajar, acá te van a sacar todo el potencial que tenés.",
    nombre: "VALENTINA D.",
    detalle: "NIVEL 3 — SIMRACING WORLD CHAMPIONSHIP"
  },
  {
    texto: "Excelente experiencia, estoy muy entusiasmada por hacer el próximo nivel. Gracias a Federico, el mejor instructor.",
    nombre: "VIOLETA N.",
    detalle: "NIVEL 1 — BEGINNER FAST TRACK"
  },
  {
    texto: "Después de tres meses mejoré mi tiempo de vuelta en 4 segundos. Lo que aprendés acá no está en ningún tutorial de YouTube.",
    nombre: "MARTÍN R.",
    detalle: "NIVEL 3 — iRACING PRO"
  }
];

/* =========================================================
   Métodos de pago — íconos + texto corto de condiciones.
   El ícono es una clave que detalle.js usa para elegir
   el SVG correspondiente (están definidos en detalle.js).
   ========================================================= */

const METODOS_PAGO_APEX = [
  {
    icono: "mercadopago",
    nombre: "Mercado Pago",
    detalle: "Hasta 6 cuotas sin interés con tarjetas seleccionadas"
  },
  {
    icono: "tarjeta",
    nombre: "Tarjeta de crédito",
    detalle: "Visa, Mastercard y American Express, hasta 3 cuotas"
  },
  {
    icono: "transferencia",
    nombre: "Transferencia bancaria",
    detalle: "Pago único con 10% de descuento sobre el precio de lista"
  },
  {
    icono: "efectivo",
    nombre: "Efectivo en sede",
    detalle: "Pago Fácil y Rapipago, acreditación en 24 a 48 hs"
  }
];
