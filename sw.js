var cacheName = 'hello-pwa';

var filesToCache = [
	'/',
	'/comments',
	'/tones',
	'app.js',
	'manifest.json',
	'views/comments.ejs',
	'views/tones.ejs',
	'views/index.ejs',
	'css/style.css',
	'main.js',
];

self.addEventListener('install', function(e) {
	e.waitUntil(caches.open(cacheName).then(function(cache) {
		return cache.addAll(filesToCache);
	}));
});

self.addEventListener('fetch', function(e) {
	e.respondWith(caches.match(e.request).then(function(response) {
		return response || fetch(e.request);
	}))
	
});