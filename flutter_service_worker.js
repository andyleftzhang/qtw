'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "d0960d525d88265f75295758792ffb24",
"/": "d0960d525d88265f75295758792ffb24",
"main.dart.js": "8be2fa4d0d0eecc82fc2ee00d0dd4e24",
"assets/LICENSE": "a1d2628e23afc715cb6490550cb35a31",
"assets/images/top.png": "f2df608073ce878aca2c91c45247a492",
"assets/images/bg.png": "329d60a371ed04c8c803bb9f012316e4",
"assets/AssetManifest.json": "9655ee421911be5ff936c3daeb6bab33",
"assets/FontManifest.json": "ea8041c8ffa4919914145d90f0ac8278",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
