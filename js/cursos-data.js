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
    destacado: false, // true = muestra el badge "MÁS ELEGIDO"
    titulo: "LUZ VERDE",
    imagenHero: "images/curso-luz-verde-hero.jpg",
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
    imagenCard: "images/card-luz-verde-thumb.jpg"
  },

  "puesta-a-punto": {
    nivel: "INTERMEDIO",
    destacado: true,
    titulo: "PUESTA A PUNTO",
    imagenHero: "images/curso-puesta-a-punto-hero.jpg",
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
    imagenCard: "images/card-puesta-a-punto-thumb.jpg"
  },

  "bandera-a-cuadros": {
    nivel: "AVANZADO",
    destacado: false,
    titulo: "BANDERA A CUADROS",
    imagenHero: "images/curso-bandera-a-cuadros-hero.jpg",
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
    imagenCard: "images/card-bandera-a-cuadros-thumb.jpg"
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
