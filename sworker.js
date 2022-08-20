self.addEventListener("install", e=>{
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll([
                "./index.html",
                "./about.html",
                "./contact.html",
                "./courses.html",
                "./assets/css/style.css",
                "./assets/js/about.css",
                "./assets/js/courses.css",
                "./assets/js/contact.css",
                "./assets/js/main.js",
                "./assets/images/icon.png",
                "./assets/images/logo-theme-black.png",
                "./assets/images/logo-white-black.png",
                "./assets/images/100k-challenge.jpg",
                "./assets/images/web-development.jpg",
                "./assets/images/flutter-challenge.jpg",
//                 "./assets/images/web-designing.jpg",
//                 "./assets/images/git-challenge.jpg",
//                 "./assets/images/python-challenge.jpg",
//                 "./assets/images/data-structure.jpg",
//                 "./assets/images/react-challenge.jpg",
//                 "./assets/images/game-development.jpg",
//                 "./assets/images/tech-tips.jpg",
//                 "./assets/images/talk-shows.jpg",
//                 "./assets/images/business-tips.jpg",
//                 "./assets/images/boiler-room.jpg",
//                 "./assets/images/web-hosting.jpg",
//                 "./assets/images/live-sessions.jpg",
//                 "./assets/images/Programming-pana.svg",
//                 "./assets/images/contact.svg",
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
