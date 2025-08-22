self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('meu-pwa-cache').then(cache => {
            return cache.addAll([
    '/',
    '/home/',      // rota definida no urls.py
    '/acessos/',
    '/login/'
]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
