var fuCache = 'fu-v1.0';

self.addEventListener('install', function (e) {
    var cacheReady = caches.open(fuCache).then(function (cache) {
        console.log('Cache ready');
        return cache.addAll([
            './public/berlin.jpg',
            './public/base.css',
            './public/base2.css',
            './index.html',
            './public/logo.png']);
    });

    e.waitUntil(cacheReady);
});

self.addEventListener('fetch', function (e) {
    console.log('Fetch: ' + e.request.url);
    if (!e.request.url.match(location.origin)) return;

    var newRes = caches.open(fuCache).then(function (cache) {
        return cache.match(e.request).then(function (res) {
            if (res) {
                console.log('Serving from cache');
                return res;
            }

            return fetch(e.request).then(function (fetchRes) {
               cache.put(e.request, fetchRes.clone());
               return fetchRes;
            });
        });
    });

    e.respondWith(newRes);
    // if (e.request.url.endsWith('base.css')) {
    //     e.respondWith(fetch('public/base2.css'));
    // }
});

self.addEventListener('push', function (e) {
    console.log('Push Received');
    var n = self.registration.showNotification("Title SW", {
        body: e.data.text() || "Content SW.",
        icon: 'public/logo.png'
    });
    e.waitUntil(n);
});