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
document.getElementById('hero').addEventListener('touchend',   startCarousel, {passive:true});

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

// ===== ABOUT SCROLL CAROUSEL =====

const aboutImages = document.querySelectorAll(".about-carousel .about-img");

if (aboutImages.length) {

    function updateAboutCarousel(){

        const section = document.querySelector(".about");
        const rect = section.getBoundingClientRect();

        // progreso del scroll dentro de la sección
        const progress = Math.min(
            Math.max(
                (-rect.top) / (rect.height - window.innerHeight),
                0
            ),
            1
        );

        const index = Math.min(
            Math.floor(progress * aboutImages.length),
            aboutImages.length - 1
        );

        aboutImages.forEach((img,i)=>{
            img.classList.toggle("active", i===index);
        });

    }

    window.addEventListener("scroll", updateAboutCarousel);
    window.addEventListener("resize", updateAboutCarousel);

    updateAboutCarousel();
}
const lights=document.querySelectorAll(".ambient-light");

window.addEventListener("scroll",()=>{

const y=window.scrollY;

lights[0].style.transform=
`translate(${y*.08}px,${y*.30}px)`;

lights[1].style.transform=
`translate(${-y*.08}px,${-y*.20}px)`;

lights[2].style.transform=
`translate(${Math.sin(y*.002)*120}px,${-y*.08}px)`;

});
const beam=document.querySelector(".light-beam");

window.addEventListener("scroll",()=>{

beam.style.transform=

`translateY(${window.scrollY*.35}px)
rotate(-18deg)`;

});
const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const r=section.getBoundingClientRect();

if(r.top<250 && r.bottom>250){

const p=(250-r.top)/250;

lights.forEach(light=>{

light.style.opacity=.08+p*.18;

});

}

});

});
