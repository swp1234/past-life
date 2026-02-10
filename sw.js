const CACHE_NAME = 'past-life-v2';
const ASSETS = [
    './',
    'index.html',
    'css/style.css',
    'js/app.js',
    'js/data.js',
    'js/i18n.js',
    'manifest.json',
    'icon-192.svg',
    'icon-512.svg',
    'js/locales/ko.json',
    'js/locales/en.json',
    'js/locales/zh.json',
    'js/locales/hi.json',
    'js/locales/ru.json',
    'js/locales/ja.json',
    'js/locales/es.json',
    'js/locales/pt.json',
    'js/locales/id.json',
    'js/locales/tr.json',
    'js/locales/de.json',
    'js/locales/fr.json'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).then(r => {
            const c = r.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, c));
            return r;
        }).catch(() => caches.match(e.request))
    );
});
