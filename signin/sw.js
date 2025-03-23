const sccache = "v1_cache";
const scassets = [
    "/", // Root
    "/index.html",
    "/styles.css",
    "/script.js",
    "/images/logo.png"
];
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(sccache).then((cache) => {
            console.log("Caching assets...");
            return cache.addAll(scassets);
        })
    );
});
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== sccache) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
