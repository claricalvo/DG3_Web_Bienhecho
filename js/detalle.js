/* =========================================================
   APEX RACING ACADEMY — detalle.js
   Lee el parámetro ?curso= de la URL, busca ese curso en
   CURSOS_APEX (cursos-data.js) y completa toda la página de
   detalle: la tarjeta principal, los métodos de pago, el
   marquee de testimonios y las tarjetas de "otros niveles".

   El HTML generado acá usa las MISMAS clases que ya existen
   en css/style.css (.course-card, .course-cta, .testi-card,
   etc.) para que el resultado visual sea idéntico al home,
   no una réplica aproximada.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const cursoId = params.get("curso");
  const curso = CURSOS_APEX[cursoId];

  // Si no vino un curso válido por URL, usamos el primero
  // como respaldo para que la página nunca quede vacía.
  const cursoFinal = curso || CURSOS_APEX[Object.keys(CURSOS_APEX)[0]];
  const cursoFinalId = curso ? cursoId : Object.keys(CURSOS_APEX)[0];

  pintarCurso(cursoFinal);
  pintarTimeline(cursoFinal);
  pintarOtrosNiveles(cursoFinalId);
  pintarMetodosPago();
  pintarTestimonios();

  document.title = cursoFinal.titulo + " — APEX Racing Academy";

  /* -----------------------------------------------------
     1. Pintar el curso principal (reusa .course-card)
     ----------------------------------------------------- */
  function pintarCurso(c) {
    document.getElementById("curso-nivel").textContent = c.nivel;
    document.getElementById("curso-titulo").textContent = c.titulo;

    const cardEl = document.getElementById("curso-card");
    if (c.destacado) {
      cardEl.classList.add("course-card--featured");
      document.getElementById("curso-badge").hidden = false;
    }

    const mediaEl = document.getElementById("curso-media");
    mediaEl.innerHTML =
      '<img class="course-img" src="' + c.imagenHero + '" alt="' + c.imagenHeroAlt + '" ' +
      'onerror="this.parentElement.innerHTML=\'<span class=&quot;detalle-curso__media-placeholder&quot;></span>\';">';

    document.getElementById("curso-precio-monto").textContent =
      "$" + c.precio.toLocaleString("es-AR");
    document.getElementById("curso-duracion").textContent = "/ " + c.duracion;

    const lista = document.getElementById("curso-caracteristicas");
    lista.innerHTML = "";
    c.caracteristicas.forEach(function (item) {
      const li = document.createElement("li");
      if (!item.incluido) li.classList.add("feat-disabled");
      const checkClass = item.incluido ? "feat-check" : "feat-cross";
      const symbol = item.incluido ? "✓" : "✗";
      li.innerHTML = '<span class="' + checkClass + '">' + symbol + '</span><span>' + item.texto + '</span>';
      lista.appendChild(li);
    });
  }

  /* -----------------------------------------------------
     2. Tarjetas de "otros niveles": muestra los 2 cursos
        que NO son el actual, reusando .course-card en su
        versión compacta (sin lista de características).
     ----------------------------------------------------- */
  function pintarOtrosNiveles(idActual) {
    const contenedor = document.getElementById("otros-niveles-grid");
    contenedor.innerHTML = "";

    Object.keys(CURSOS_APEX)
      .filter(function (id) { return id !== idActual; })
      .forEach(function (id) {
        const c = CURSOS_APEX[id];
        const card = document.createElement("article");
        card.className = "course-card otro-nivel-card" + (c.destacado ? " course-card--featured" : "");
        card.innerHTML =
          (c.destacado ? '<span class="course-popular-tag">Más elegido</span>' : "") +
          '<div class="course-card-header">' +
            '<div class="course-badge">' + c.nivel + '</div>' +
            '<div class="course-name">' + c.titulo + '</div>' +
            '<div class="course-img-wrap">' +
              '<img class="course-img" src="' + c.imagenCard + '" alt="' + c.titulo + '" ' +
              'onerror="this.parentElement.innerHTML=\'<span class=&quot;detalle-curso__media-placeholder&quot;></span>\';">' +
            '</div>' +
            '<div class="course-price">' +
              '<span class="course-price-label">desde</span>' +
              '<span class="course-price-val">$' + c.precio.toLocaleString("es-AR") + '</span>' +
              '<span class="course-price-period">/ ' + c.duracion + '</span>' +
            '</div>' +
          '</div>' +
          '<a class="course-cta' + (c.destacado ? ' course-cta--featured' : '') + '" href="detalle.html?curso=' + id + '">Inscribirse</a>';
        contenedor.appendChild(card);
      });
  }

  /* -----------------------------------------------------
     3. Métodos de pago
     ----------------------------------------------------- */
  function pintarMetodosPago() {
    const iconos = {
      mercadopago: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20"/><circle cx="8" cy="14.5" r="1.4" fill="currentColor" stroke="none"/></svg>',
      tarjeta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9.5h20"/><path d="M6 14.5h5"/></svg>',
      transferencia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10l5-5 5 5"/><path d="M9 5v14"/><path d="M20 14l-5 5-5-5"/><path d="M15 19V5"/></svg>',
      efectivo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>'
    };

    const contenedor = document.getElementById("metodos-pago-grid");
    contenedor.innerHTML = "";

    METODOS_PAGO_APEX.forEach(function (m) {
      const div = document.createElement("div");
      div.className = "metodo-pago";
      div.innerHTML =
        '<div class="metodo-pago__icono">' + (iconos[m.icono] || "") + '</div>' +
        '<p class="metodo-pago__nombre">' + m.nombre + '</p>' +
        '<p class="metodo-pago__detalle">' + m.detalle + '</p>';
      contenedor.appendChild(div);
    });
  }

  /* -----------------------------------------------------
     4. Testimonios — usa el mismo marquee infinito que el
        home (.testi-card dentro de .testi-marquee). Para
        que el loop de la animación CSS (testiScroll, que
        recorre el 50% del ancho) se vea continuo, el set de
        tarjetas se duplica una vez.
     ----------------------------------------------------- */
  function pintarTestimonios() {
    const track = document.getElementById("pilotos-track");
    track.innerHTML = "";

    const setCompleto = TESTIMONIOS_APEX.concat(TESTIMONIOS_APEX);

    setCompleto.forEach(function (t) {
      const card = document.createElement("div");
      card.className = "testi-card";
      card.innerHTML =
        '<p class="testi-quote">' + t.texto + '</p>' +
        '<div class="testi-author">' + t.nombre + '</div>' +
        '<div class="testi-role">// ' + t.detalle + '</div>';
      track.appendChild(card);
    });
  }

  /* -----------------------------------------------------
     Timeline — semana a semana
     ----------------------------------------------------- */
  function pintarTimeline(c) {
    const contenedor = document.getElementById("timeline-contenido");
    if (!contenedor || !c.timeline) return;
    contenedor.innerHTML = "";
    c.timeline.forEach(function (item) {
      const div = document.createElement("div");
      div.className = "timeline-item";
      div.innerHTML =
        '<div class="timeline-week">' + item.semana + '</div>' +
        '<div class="timeline-title">' + item.titulo + '</div>' +
        '<p class="timeline-desc">' + item.desc + '</p>';
      contenedor.appendChild(div);
    });
  }

});
