// ── HERO CAROUSEL ──
let cur = 0;
const total = 5;
let timer;
function goToSlide(n) {
  document.getElementById('slide-' + cur).classList.remove('active');
  document.querySelectorAll('.hero-dot')[cur].classList.remove('active');
  cur = n;
  document.getElementById('slide-' + cur).classList.add('active');
  document.querySelectorAll('.hero-dot')[cur].classList.add('active');
}
function nextSlide() { goToSlide((cur + 1) % total); }
function startCarousel() { timer = setInterval(nextSlide, 3000); }
startCarousel();
document.getElementById('hero').addEventListener('touchstart', () => clearInterval(timer), {passive:true});
document.getElementById('hero').addEventListener('touchend', startCarousel, {passive:true});

// ── MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  // Bloquear scroll cuando el menu está abierto
  document.body.style.overflow =
    document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}

// Cerrar menú al tocar fuera
document.getElementById('mobileMenu').addEventListener('click', function(e) {
  if (e.target === this) toggleMenu();
});

// ── NAV scrolled state ──
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

// ── LEVELS ACCORDION (exclusión mutua) ──
function toggleLevel(btn, idx) {
  const isOpen = document.getElementById('lvl-body-' + idx).classList.contains('open');
  for (let i = 0; i < 3; i++) {
    document.getElementById('lvl-body-'  + i).classList.remove('open');
    document.getElementById('lvl-arrow-' + i).classList.remove('open');
    document.querySelectorAll('.accordion-header')[i].classList.remove('active');
  }
  if (!isOpen) {
    document.getElementById('lvl-body-'  + idx).classList.add('open');
    document.getElementById('lvl-arrow-' + idx).classList.add('open');
    btn.classList.add('active');
  }
}

// ── FAQ ──
function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('open'));
  if (!isOpen) { body.classList.add('open'); icon.classList.add('open'); }
}

// ── SCROLL REVEAL (títulos con sweep + elementos genéricos) ──
const sweepObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      sweepObs.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.title-sweep, .reveal-slide').forEach(el => sweepObs.observe(el));

// ── TESTIMONIALS DOTS ──
function updateDots() {
  const slider = document.getElementById('testiSlider');
  const dots   = document.querySelectorAll('.testi-dot');
  const idx = Math.min(Math.round(slider.scrollLeft / (slider.scrollWidth / 5)), 4);
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

// ── ABOUT CAROUSEL (scroll-driven) ──
const aboutImages = document.querySelectorAll('.about-carousel .about-img');
if (aboutImages.length) {
  function updateAboutCarousel() {
    const section = document.querySelector('.about');
    if (!section) return;
    const rect     = section.getBoundingClientRect();
    const progress = Math.min(Math.max((-rect.top) / (rect.height - window.innerHeight), 0), 1);
    const index    = Math.min(Math.floor(progress * aboutImages.length), aboutImages.length - 1);
    aboutImages.forEach((img, i) => img.classList.toggle('active', i === index));
  }
  window.addEventListener('scroll', updateAboutCarousel, {passive:true});
  window.addEventListener('resize', updateAboutCarousel);
  updateAboutCarousel();
}

// ── LUCES AMBIENTALES CON PARALLAX ──
// Cada luz se mueve a distinta velocidad → sensación de profundidad real
// El haz diagonal baja más lento → parece estar en otra capa de espacio
(function() {
  const lights = document.querySelectorAll('.ambient-light');
  const beam   = document.querySelector('.light-beam');
  if (!lights.length) return;

  let ticking = false;

  function moveLights() {
    const y = window.scrollY;
    const vh = window.innerHeight;

    // Tres luces en capas distintas
    if (lights[0]) lights[0].style.transform = `translate(${y * .05}px, ${y * .26}px)`;
    if (lights[1]) lights[1].style.transform = `translate(${-y * .06}px, ${-y * .16}px)`;
    if (lights[2]) lights[2].style.transform =
      `translate(${Math.sin(y * .0015) * 90}px, ${-y * .06}px)`;

    // Haz diagonal — capa más profunda, se mueve más lento
    if (beam) beam.style.transform = `translateY(${y * .28}px) rotate(-18deg)`;

    // Opacidad dinámica: las luces "se encienden" al pasar por cada sección
    const mid = y + vh * .5;
    document.querySelectorAll('section').forEach(sec => {
      const top = sec.offsetTop;
      const bot = top + sec.offsetHeight;
      if (mid >= top && mid <= bot) {
        const p = (mid - top) / sec.offsetHeight;
        const glow = .10 + Math.sin(p * Math.PI) * .13;
        lights.forEach(l => { l.style.opacity = glow; });
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(moveLights); ticking = true; }
  }, {passive:true});

  moveLights();
})();

// ── CANVAS: PARTÍCULAS DE LUZ tipo light-trail ──
// Puntos naranjas que flotan lentamente como chispas de un escape de F1
(function() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, {passive:true});

  // Crear partículas
  const COUNT = 28;
  const particles = Array.from({length: COUNT}, () => ({
    x:      Math.random() * window.innerWidth,
    y:      Math.random() * window.innerHeight,
    r:      Math.random() * 1.8 + .4,
    vx:     (Math.random() - .5) * .4,
    vy:     -Math.random() * .6 - .15,   // flotan hacia arriba
    alpha:  Math.random() * .5 + .1,
    life:   Math.random(),
    speed:  Math.random() * .004 + .002,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      // Ciclo de vida suave
      p.life += p.speed;
      if (p.life > 1) {
        // Renacer en posición aleatoria en la parte baja
        p.x     = Math.random() * canvas.width;
        p.y     = canvas.height + 10;
        p.life  = 0;
        p.alpha = Math.random() * .4 + .1;
      }

      const fade = Math.sin(p.life * Math.PI);
      p.x += p.vx + Math.sin(p.life * 4) * .3;
      p.y += p.vy;

      // Glow naranja
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
      grd.addColorStop(0, `rgba(237,109,34,${p.alpha * fade})`);
      grd.addColorStop(.5, `rgba(255,160,60,${p.alpha * fade * .4})`);
      grd.addColorStop(1,  'rgba(237,109,34,0)');

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Núcleo brillante
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,200,100,${p.alpha * fade * .9})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
})();

// ── REDUCE MOTION ──
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.title-sweep, .reveal-slide').forEach(r => r.classList.add('visible'));
  clearInterval(timer);
}
/* ==========================
   SCROLLING F1 CAR
========================== */

const carSection = document.querySelector("#car-scroll-section");
const scrollCar = document.querySelector("#scroll-car");

function animateCar() {

    if (!carSection || !scrollCar) return;

    const rect = carSection.getBoundingClientRect();

    const totalScrollable =
        carSection.offsetHeight - window.innerHeight;

    const progress =
        Math.min(
            Math.max(-rect.top / totalScrollable, 0),
            1
        );

    const startX = -90;
    const endX = 110;

    const x =
        startX + ((endX - startX) * progress);

    scrollCar.style.left = `${x}vw`;
}

window.addEventListener("scroll", animateCar);
window.addEventListener("resize", animateCar);

animateCar();
