self.addEventListener('install', () => {
  console.log('install');
});

self.addEventListener('fetch', (e) => {
  console.log('Fetch ' + e.request.url);
  if (e.request.url.endsWith('base.css')) {
    e.respondWith(fetch('base2.css'));
  }
});