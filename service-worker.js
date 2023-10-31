

const CACHE_NAME = 'cachepersonajes'; 

const urlsToCache = [
    '/',
    'estilos.css',
    'index.html',
    'app.js',
    'app2.js',
    'base.js',
    'pouchdb-nigthly.js',
    'app.js',
    'estilos2.css',
    'estilos3.css',
    'personajes.html',
    'img/b1.jpg',
    'img/b5.jpg',
    'img/b7.jpg',
    'img/c1.jpg',
    'img/c3.jpg',
    'img/c5.jpg',
    'img/g1.jpg',
    'img/g2.webp',
    'img/g3.jpg',
    'img/l1.jpg',
    'img/l2.png',
    'img/l7.jpg',
    'img/m1.jpg',
    'img/m4.jpg',
    'img/m5.jpg',
    'img/mono1.webp',
    'img/mono2.jpg',
    'img/mono4.jpg',
    'img/p1.jpg',
    'img/p2.jpg',
    'img/p3.jpg',
    'img/pollo1.jpg',
    'img/pollo4.jpg',
    'img/pollo5.webp',
    'img/s1.jpg',
    'img/s3.webp',
    'img/s5.webp',
    'img/Peter_Griffin.webp',
    'img/Glenn.webp',
    'img/Meg_Griffin.webp',
    'img/Stewie_Griffin.webp',
    'img/Brian_Griffin.webp',
    'img/Lois_Griffin.webp',
    'img/Eliza_Pinchley.webp',
    'img/Mono_Malvado.webp',
    'img/Ernie.webp',
    'img/Chris_Griffin.webp',
    'img/Wiki-wordmark.webp',
    'img/portada.jpg',
    'iconos/android-icon-192x192.png',
    'iconos/apple-icon-57x57.png',
    'iconos/apple-icon-60x60.png',
    'iconos/apple-icon-72x72.png',
    'iconos/apple-icon-76x76.png',
    'iconos/apple-icon-114x114.png',
    'iconos/apple-icon-120x120.png',
    'iconos/apple-icon-144x144.png',
    'iconos/apple-icon-152x152.png',
    'iconos/apple-icon-180x180.png',
    'iconos/browserconfig.xml',
    'iconos/favicon-16x16.png',
    'iconos/favicon-32x32.png',
    'iconos/favicon-96x96.png',
    'iconos/favicon-256x256.png',
    'iconos/favicon.ico',
    'iconos/manifest.json',
    'iconos/ms-icon-70x70.png',
    'iconos/ms-icon-144x144.png',
    'iconos/ms-icon-150x150.png',
    'iconos/ms-icon-310x310.png'
];

self.addEventListener('install', (installEvent) => {
  
    const _app_shell = caches.open(CACHE_NAME)
    .then((cache) => cache.addAll(urlsToCache));

    installEvent.waitUntil(_app_shell);

    self.skipWaiting();

});

self.addEventListener('activate', (event) => {
   event.waitUntil(

    caches.keys().then(keys => Promise.all(

        keys.map(key => {

            if(!CACHE_NAME.includes(key)){
                return caches.delete(key);
            }
        }
        )
    ))
   );
});


////////////////ESTRATEGIAS////////////////

////////////////ONLY CACHE////////////////

// self.addEventListener('fetch', event =>{
//     event.respondWith(caches.match(event.request));
// });

////////////////ONLY network////////////////

// self.addEventListener('fetch', event =>{
//     event.respondWith(fetch(event.request));
// });

////////////////cache first////////////////

// self.addEventListener('fetch', (fetchEvent) =>{
//     fetchEvent.respondWith(
//         caches.match(fetchEvent.request).then((res) => {
//             return res || fetch(fetchEvent.request)
//             .catch((error) => console.log("Error en la peticion"));
//         })
//     );
// });

////////////////network first////////////////

self.addEventListener('fetch', (fetchEvent) =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res ||  caches.match(fetchEvent.request);
            
        })
    );
});