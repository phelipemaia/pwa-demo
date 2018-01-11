let pwaCache = 'pwa-v1.0';

self.addEventListener('install', (e) => {
  let cacheReady = caches.open(pwaCache).then(function (cache) {
    console.log('Cache ready');
    return cache.addAll([
      './css/base.css',
      './index.html',
      './main.js']);
  });

  e.waitUntil(cacheReady);
});

//Wait 3 seconds before activate
self.addEventListener('activate', (e) => {
  let activate = new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  e.waitUntil(activate);
});

self.addEventListener('fetch', function (e) {
  if (e.request.method === 'GET') {
    console.log('Fetch: ' + e.request.url);
    //Show how can proxy some request
    // if (e.request.url.endsWith('base.css')) {
    //     e.respondWith(fetch('./css/baseSW.css'));
    // }
    if (!e.request.url.match(location.origin)) return;

    let newRes = caches.open(pwaCache).then(function (cache) {
      return cache.match(e.request).then(function (res) {
        if (res) {
          console.log('Serving from cache');
          return res;
        }

        return fetch(e.request).then(function (fetchRes) {
          cache.put(e.request, fetchRes.clone());
          return fetchRes;
        }).catch(console.log);
      });
    });

    e.respondWith(newRes);
  }
});

self.addEventListener('push', (e) => {
  self.registration.showNotification(e.data.text(), {
    icon: 'images/crvg.png'
  });
});
