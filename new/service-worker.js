const app = 'maumantenan-v1'
const assets = [
	'/',
	'/index.html',
	'/assets/css/main.min.css',
	'/assets/js/main.min.js',
	'/assets/icon/icon-16x16.png',
	'/assets/icon/icon-32x32.png',
	'/assets/icon/icon-72x72.png',
	'/assets/icon/icon-128x128.png',
	'/assets/icon/icon-144x144.png',
	'/assets/icon/icon-152x152.png',
	'/assets/icon/icon-192x192.png',
	'/assets/icon/icon-256x256.png',
	'/assets/icon/icon-512x512.png',
	'/assets/img/favicon.ico',
	'/assets/img/section-title-1-center.svg',
	'/assets/img/section-title-1-left.svg',
	'/assets/img/section-title-2.svg',
	'/assets/img/section-title-3.svg',
	'/assets/img/section-title-4.svg',
	'/assets/img/section-title-5.svg',
	'/assets/img/maumantenan-1.svg',
	'/assets/img/maumantenan-2.svg',
	'/assets/img/best-seller.svg',
	'/assets/img/background.png',
	'/assets/img/main.png',
	'/assets/img/ogp.jpg'
]

addEventListener('install', installEvent => {
	installEvent.waitUntil(
		caches.open(app).then(cache => {
			cache.addAll(assets)
		})
	)
})

addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			if (response) {
				return response
			} else {
				return fetch(event.request)
				.then(function(res) {
					return caches.open(CACHE_DYNAMIC_NAME)
					.then(function(cache) {
						cache.put(event.request.url, res.clone())
						return res
					})
				})
				.catch(function(err) {
					return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
					.then(function(cache) {
						return cache.match('/index.html')
					})
				})
			}
		})
	)
})