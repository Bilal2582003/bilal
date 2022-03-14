const staticProgressive = "progressive-web-app";
const assets = [
    "/css/style23oct.css",
    "/css/stylesheet.css",
    "/css/stylesheet21oct.css",
    "/images/pizza1.jfif",
    "/images/pizza2.jfif",
    "/images/pizza3.jfif",
    "/images/img1.jpeg",
    "/images/logo.png",
]

self.addEventListener("install", installEvent=>{
    installEvent.waitUntil(
        caches.open(staticProgressive).then(cache=>{
            cache.addAll(assets);
        })
    )
})

self.addEventListener("fetch",fetchEvent=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.request);
        })
    )
    
})