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
}

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

// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(r => revealObs.observe(r));

// ── TESTIMONIALS DOTS ──
function updateDots() {
  const slider = document.getElementById('testiSlider');
  const dots   = document.querySelectorAll('.testi-dot');
  const idx = Math.min(Math.round(slider.scrollLeft / (slider.scrollWidth / 5)), 4);
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

// ── REDUCE MOTION ──
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.reveal').forEach(r => r.classList.add('visible'));
  clearInterval(timer);
}

// ── ABOUT CAROUSEL (scroll-driven) ──
const aboutImages = document.querySelectorAll('.about-carousel .about-img');
if (aboutImages.length) {
  function updateAboutCarousel() {
    const section = document.querySelector('.about');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const progress = Math.min(Math.max((-rect.top) / (rect.height - window.innerHeight), 0), 1);
    const index = Math.min(Math.floor(progress * aboutImages.length), aboutImages.length - 1);
    aboutImages.forEach((img, i) => img.classList.toggle('active', i === index));
  }
  window.addEventListener('scroll', updateAboutCarousel, {passive:true});
  window.addEventListener('resize', updateAboutCarousel);
  updateAboutCarousel();
}

// ── LUCES AMBIENTALES con scroll ──
// Mueve las luces con parallax al hacer scroll — creando la sensación
// de que el resplandor naranja "atraviesa" la página mientras bajás.
(function() {
  const lights = document.querySelectorAll('.ambient-light');
  const beam   = document.querySelector('.light-beam');
  if (!lights.length) return;

  let lastY = 0;
  let ticking = false;

  function moveLights() {
    const y = window.scrollY;

    // Cada luz se mueve a velocidad distinta (parallax multi-capa)
    if (lights[0]) lights[0].style.transform = `translate(${y * 0.06}px, ${y * 0.28}px)`;
    if (lights[1]) lights[1].style.transform = `translate(${-y * 0.07}px, ${-y * 0.18}px)`;
    if (lights[2]) lights[2].style.transform = `translate(${Math.sin(y * 0.0018) * 100}px, ${-y * 0.07}px)`;

    // El haz diagonal baja más lento — da sensación de profundidad
    if (beam) beam.style.transform = `translateY(${y * 0.32}px) rotate(-18deg)`;

    // Pulsado de opacidad suave según qué sección es visible
    const viewMid = y + window.innerHeight * 0.5;
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const bot = top + sec.offsetHeight;
      if (viewMid >= top && viewMid <= bot) {
        const p = (viewMid - top) / sec.offsetHeight;
        const glow = 0.10 + Math.sin(p * Math.PI) * 0.14;
        lights.forEach(l => { l.style.opacity = glow; });
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(moveLights);
      ticking = true;
    }
  }, {passive: true});

  moveLights(); // estado inicial
})();
