self.addEventListener("install", e=>{
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll([
                "./index.html",
                "./about.html",
                "./contact.html",
                "./courses.html",
                "./assets/css/style.css",
                "./assets/js/main.js",
                "./assets/images/icon.png",
                "./assets/images/100k-challenge.jpg",
                "./assets/images/web-development.jpg",
                "./assets/images/flutter-challenge.jpg",
                "./assets/images/Programming-pana.svg"
            ]);
        })
    )
})

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request)
        })
    )
})