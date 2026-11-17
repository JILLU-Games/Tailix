/* ==========================================================================
   Tailix Standalone Service Worker — v2.2.0
   Offline-First Cache for CSS, JS, Icons & Component Hub
   ========================================================================== */
var CACHE_NAME = 'tailix-pwa-v2.2.0';
var PRECACHE_URLS = [
  '/framework/examples/static.html',
  '/framework/css/tailix.min.css',
  '/framework/css/tokens.css',
  '/framework/css/tailix.css',
  '/framework/css/vib-compat.css',
  '/framework/js/tailix.min.js',
  '/framework/js/tailix.js',
  '/framework/pwa/manifest.json',
  '/framework/pwa/icon.svg',
  '/framework/pwa/pwa-192x192.png',
  '/framework/pwa/pwa-512x512.png',
  '/framework/pwa/pwa-maskable-512x512.png',
  '/framework/pwa/apple-touch-icon.png'
];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_URLS);
    }).catch(function () {
      return Promise.resolve();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate' || (req.headers.get('accept') || '').indexOf('text/html') !== -1) {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(req, copy);
        });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (cached) {
          return cached || caches.match('/framework/examples/static.html');
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        if (res && res.status === 200) {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(req, copy);
          });
        }
        return res;
      });
    })
  );
});
