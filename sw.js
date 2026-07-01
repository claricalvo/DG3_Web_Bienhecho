// APEX Racing Academy — Service Worker
const CACHE = 'apex-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/images/logo.png',
  '/images/carrusel-1.jpg',
  '/images/carrusel-3.png',
  '/images/carrusel-5.jpg',
  '/images/about1.jpg',
  '/images/about2.jpg',
  '/images/about3.jpg',
  '/images/about4.jpg',
  '/images/instructor-1.jpeg',
  '/images/Autoscroll.png',
  '/images/programa.jpeg',
  '/images/video-thumb.png',
  '/images/nivel-1.png',
  '/images/nivel-2.png',
  '/images/nivel-3.jpg',
  '/images/Certificado.jpg',
  '/images/Contacto.jpeg',
];

// Instalar: cachear assets principales
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activar: limpiar caches viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first para assets propios, network-first para externos
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Solo cachear requests GET
  if (e.request.method !== 'GET') return;
  // Network-first para fuentes y CDN externos
  if (url.hostname !== self.location.hostname) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }
  // Cache-first para assets propios
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
