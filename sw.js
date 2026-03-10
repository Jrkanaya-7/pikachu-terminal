importScripts("https://cdn.jsdelivr.net/npm/@mercuryworkshop/scramjet@latest/dist/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const sj = new ScramjetServiceWorker();

self.addEventListener("fetch", (event) => {
    event.respondWith((async () => {
        await sj.loadConfig();
        if (sj.route(event)) return sj.fetch(event);
        return fetch(event.request);
    })());
});

// Allow controller to push config into the SW
self.addEventListener("message", (event) => {
    if (event.data && event.data.scramjet$config) {
        sj.config = event.data.scramjet$config;
    }
});
