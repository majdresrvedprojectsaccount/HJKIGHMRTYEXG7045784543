// Name of the cache
const CACHE_NAME = 'my-cache-v1';

// List of URLs to cache
const CACHE_URLS = [
    './',
    './index.html',
    './stylesheets/stylesheet.css',
];

// Install event
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing');

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching resources');
            return cache.addAll(CACHE_URLS);
        })
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating');

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log(`[Service Worker] Deleting old cache: ${cache}`);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    console.log(`[Service Worker] Fetching: ${event.request.url}`);

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return cached response if found, else fetch from network
            return cachedResponse || fetch(event.request).then((networkResponse) => {
                // Cache the new network response
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});
