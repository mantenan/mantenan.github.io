const mantenan = "mantenan-v1"
const assets = [
	"/",
	"/index.html",
	"/assets/css/main.min.css",
	"/assets/js/main.min.js",
	"/assets/icon/icon-16x16.png",
	"/assets/icon/icon-32x32.png",
	"/assets/icon/icon-72x72.png",
	"/assets/icon/icon-128x128.png",
	"/assets/icon/icon-144x144.png",
	"/assets/icon/icon-152x152.png",
	"/assets/icon/icon-192x192.png",
	"/assets/icon/icon-256x256.png",
	"/assets/icon/icon-512x512.png",
	"/assets/img/favicon.ico",
	"/assets/img/section-title-1-center.svg",
	"/assets/img/section-title-1-left.svg",
	"/assets/img/section-title-2.svg",
	"/assets/img/section-title-3.svg",
	"/assets/img/section-title-4.svg",
	"/assets/img/section-title-5.svg",
	"/assets/img/maumantenan-1.svg",
	"/assets/img/maumantenan-2.svg",
	"/assets/img/best-seller.svg",
	"/assets/img/background.png",
	"/assets/img/main.png",
	"/assets/img/ogp.jpg"
]

self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(mantenan).then(cache => {
			cache.addAll(assets)
		})
	)
})

self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})