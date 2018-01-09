var fuCache = 'fu-v1.0';

self.addEventListener('install', function (e) {
    var cacheReady = caches.open(fuCache).then(function (cache) {
        console.log('Cache ready');
        return cache.addAll(['/berlin.jpg', '/base.css']);
    });

    e.waitUntil(cacheReady);
});

self.addEventListener('fetch', function (e) {
    console.log('Fetch: ' + e.request.url);
    if (e.request.url.endsWith('base.css')) {
        e.respondWith(fetch('/base2.css'));
    } else if (e.request.url.endsWith('berlin.jpg') || e.request.url.endsWith('base.css')) {
        var newRes = caches.open(fuCache).then(function (cache) {
            return cache.match(e.request);
        });
        e.respondWith(newRes);
    }
});

self.addEventListener('push', function (e) {
    console.log('Push Received');
    var n = self.registration.showNotification("Title SW", {
        body: e.data.text() || "Content SW.",
        icon: '/logo.png'
    });
    e.waitUntil(n);
});