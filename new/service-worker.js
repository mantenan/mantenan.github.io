const mantenan = "mantenan-v1"
const assets = [
	"/new/",
	"/new/index.html",
	"/new/assets/css/main.min.css",
	"/new/assets/js/main.min.js",
	"/new/assets/icon/icon-16x16.png",
	"/new/assets/icon/icon-32x32.png",
	"/new/assets/icon/icon-72x72.png",
	"/new/assets/icon/icon-128x128.png",
	"/new/assets/icon/icon-144x144.png",
	"/new/assets/icon/icon-152x152.png",
	"/new/assets/icon/icon-192x192.png",
	"/new/assets/icon/icon-256x256.png",
	"/new/assets/icon/icon-512x512.png",
	"/new/assets/img/favicon.ico",
	"/new/assets/img/section-title-1-center.svg",
	"/new/assets/img/section-title-1-left.svg",
	"/new/assets/img/section-title-2.svg",
	"/new/assets/img/section-title-3.svg",
	"/new/assets/img/section-title-4.svg",
	"/new/assets/img/section-title-5.svg",
	"/new/assets/img/maumantenan-1.svg",
	"/new/assets/img/maumantenan-2.svg",
	"/new/assets/img/best-seller.svg",
	"/new/assets/img/background.png",
	"/new/assets/img/main.png",
	"/new/assets/img/ogp.jpg"
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
