self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('meu-pwa-cache').then(cache => {
            return cache.addAll([
    '/',
    '/home/',      // rota definida no urls.py
    '/acessos/',
    '/login/',
    '/comissionamento/',
    '/material/',
    '/treinamento/',
    '/static/midias/copy.png',
    '/static/midias/icone.png',
    '/static/midias/logo.png',
    '/static/midias/logovs.png',
    '/static/midias/share.png',
    '/static/midias/termo.png',
    '/static/frases.png',
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
