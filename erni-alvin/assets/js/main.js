/*
 * Maumantenan
 * https://maumantenan.com
 * Digital Wedding Invitation
 * Copyright (c) 2020-2024
 */

// Data
	const datePublishStart = new Date(2024, 1-1, 1, 0, 0, 0)
	const datePublishEnd = new Date(2024, 4-1, 31, 0, 0, 0)

	const md5security = 'erni-alvin security'
	const md5account = 'erni-alvin account'
	// https://www.md5hashgenerator.com/
	// const string = 'https://maumantenan.com/erni-alvin/'
	const md5 = '3d5ece8439a69364500426507f77f21b'
	// const sha1 = '119ae3caa0f9c7a46f61570c08e8e42b84db847a'

	// let shUrl = 'https://docs.google.com/spreadsheets/d/1cPjb6fOE7JelAODjhu5EhG0lenfUuohCyjUhFCLHt6s/gviz/tq?tqx=out:csv&sheet='
		// gsStart = 'https://script.google.com/macros/s/'
		// gsEnd = '/exec'
		// urlBingkisan = gsStart + 'AKfycbw46guo8EcOCL7N8_ijH8jA6qIlCLGx3WV3O3s_o63nHhLRO9IK2CA57pnPNB4-Kknp' + gsEnd
		// urlKehadiran = gsStart + 'AKfycbwCaV3wu3l4rvsJGNWIzkm1-HaAYecp0HvH9dAioll8VRTCY3yrkeAREFNIpUe3dc60' + gsEnd
		// urlUcapan = gsStart + 'AKfycbxODFfl86zLnkEdm63hVzckp-5OmYMwaltgfId4IqIUIOmvkDDQHqdOh5__QU5JdK_3' + gsEnd
	const shUrl = atob('aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMWNQamI2Zk9FN0plbEFPRGpodTVFaEcwbGVuZlV1b2hDeWpVaEZDTEh0NnMvZ3Zpei90cT90cXg9b3V0OmNzdiZzaGVldD0=')
	const urlBingkisan = atob('aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3NDZndW84RWNPQ0w3TjhfaWpIOGpBNnFJbENMR3gzV1YzTzNzX282M25IaExSTzlJSzJDQTU3cG5QTkI0LUtrbnAvZXhlYw==')
	const urlKehadiran = atob('aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J3Q2FWM3d1M2w0cnZzSkdOV0l6a20xLUhhQVllY3AwSHZIOWRBaW9sbDhWUlRDWTN5cmtlQVJFRk5JcFVlM2RjNjAvZXhlYw==')
	const urlUcapan = atob('aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4T0RGZmw4NnpMbmtFZG02M2hWemNrcC01T21ZTXdhbHRnZklkNElxSVVJT212a0REUUhxZE9oNV9fUVU1SmRLXzMvZXhlYw==')

	const bulanAngka = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

	$.ajax({
		type: 'GET',
		url: shUrl + 'Undangan',
		success: function(data) {
			let undangan = $.csv.toArrays(data)
			$(undangan).each(function (i,list) {
				let acara1tanggal = list[1]
					acara1jam = list[2]
					acara2s = list[3].split(' ')
					acara2 = acara2s[2] + ' ' + acara2s[3]
					acara2tanggal = list[3]
					acara2jam = list[4]
					acara3s = list[5].split(' ')
					acara3 = acara3s[2] + ' ' + acara3s[3]
					acara3tanggal = list[5]
					acara3jam = list[6]
					acara2sesi1 = list[7]
					acara2sesi2 = list[8]
					acara2sesi3 = list[9]
					acara2sesi4 = list[10]
					acara2sesi5 = list[11]
					acara3sesi1 = list[12]
					acara3sesi2 = list[13]
					acara3sesi3 = list[14]
					acara3sesi4 = list[15]
					acara3sesi5 = list[16]

				const event2 = String(acara2s[1]).padStart(2,'0') + ` &centerdot; ` + String(bulanAngka.indexOf(acara2s[2]) + 1).padStart(2,'0') + ` &centerdot; ` + acara2s[3]
				const event3 = String(acara3s[1]).padStart(2,'0') + ` &centerdot; ` + String(bulanAngka.indexOf(acara3s[2]) + 1).padStart(2,'0') + ` &centerdot; ` + acara3s[3]

				if ( $('body').data('event') == 1 ) {
					$('.date-event').html(event2)
				} else if ( $('body').data('event') == 2 ) {
					$('.date-event').html(event3)
				} else {
					$('.date-event').addClass('d-none')
				}

				const event1title = `Akad Nikah`
				const event1date = acara1tanggal
				const event1time = `Pukul ` + acara1jam
				const event1place = `Kediaman Mempelai Putri<br>Bantarjo, Donoharjo, Kec. Ngaglik, <br class="d-none d-sm-block">Kab. Sleman - D.I. Yogyakarta`

				$('.title-event-1').html(event1title)
				$('.date-event-1').html(event1date)
				$('.time-event-1').html(event1time)
				$('.place-event-1').html(event1place)

				const event2title = `Resepsi Pernikahan`
				const event2intro = `Sleman, ` + acara2
				const event2date = acara2tanggal
				const event2time = `Pukul ` + acara2jam
				const event2place = `Kediaman Mempelai Putri<br>Bantarjo, Donoharjo, Kec. Ngaglik, <br class="d-none d-sm-block">Kab. Sleman - D.I. Yogyakarta`
				const event2map = `https://maps.app.goo.gl/rw85RLZNR7mo4DC28`
				const event2session1 = `Pukul ` + acara2sesi1
				const event2session2 = `Pukul ` + acara2sesi2
				const event2session3 = `Pukul ` + acara2sesi3
				const event2session4 = `Pukul ` + acara2sesi4
				const event2session5 = `Pukul ` + acara2sesi5

				$('.title-event-2').html(event2title)
				$('.intro-event-2').html(event2intro)
				$('.date-event-2').html(event2date)
				$('.time-event-2').html(event2time)
				$('.place-event-2').html(event2place)
				$('.map-event-2').attr('href',event2map)
				$('#acara-2 .session-1').html(event2session1)
				$('#acara-2 .session-2').html(event2session2)
				$('#acara-2 .session-3').html(event2session3)
				$('#acara-2 .session-4').html(event2session4)
				$('#acara-2 .session-5').html(event2session5)

				const event3title = `Resepsi Ngunduh Mantu`
				const event3intro = `Sleman, ` + acara3
				const event3date = acara3tanggal
				const event3time = `Pukul ` + acara3jam
				const event3place = `BKN Regional 1<br>Jl. Magelang Km. 7.5, Jongke Tengah, Sendangadi, Kec. Mlati, <br class="d-none d-sm-block">Kab. Sleman - D.I. Yogyakarta`
				const event3map = `https://maps.app.goo.gl/YX37UTBFsWqxM2ESA`
				const event3session1 = `Pukul ` + acara3sesi1
				const event3session2 = `Pukul ` + acara3sesi2
				const event3session3 = `Pukul ` + acara3sesi3
				const event3session4 = `Pukul ` + acara3sesi4
				const event3session5 = `Pukul ` + acara3sesi5

				$('.title-event-3').html(event3title)
				$('.intro-event-3').html(event3intro)
				$('.date-event-3').html(event3date)
				$('.time-event-3').html(event3time)
				$('.place-event-3').html(event3place)
				$('.map-event-3').attr('href',event3map)
				$('#acara-3 .session-1').html(event3session1)
				$('#acara-3 .session-2').html(event3session2)
				$('#acara-3 .session-3').html(event3session3)
				$('#acara-3 .session-4').html(event3session4)
				$('#acara-3 .session-5').html(event3session5)

				const person1name = `Erni Hari Yanti, S.M.`
				const person1nick = `Erni`
				const person1father = `Agus Seman`
				const person1mother = `Jumilah Prastiwi`
				const person1place = `Bantarjo, Donoharjo, Kec. Ngaglik, Kab. Sleman<br>D.I. Yogyakarta`
				const person1gift1 = `1150007804331`
				const person1gift2 = `<b>` + person1name + `</b><br>Bantarjo RT 003 RW 028 Donoharjo, Kec. Ngaglik, Kab. Sleman - D.I. Yogyakarta`

				$('.name-person-1').html(person1name)
				$('.nick-person-1').html(person1nick)
				$('.father-person-1').html(person1father)
				$('.mother-person-1').html(person1mother)
				$('.place-person-1').html(person1place)
				$('.gift1-person-1').html(person1gift1)
				$('.gift2-person-1').html(person1gift2)

				const person2name = `Febrian Alvin Dyan Wisnujati, S.T.`
				const person2nick = `Alvin`
				const person2father = `Agus Istiyadi, M.Pd.`
				const person2mother = `Siti Mutmainah S.Pd.`
				const person2place = `Jetis Baran, Sardonoharjo, Kec. Ngaglik, Kab. Sleman<br>D.I. Yogyakarta`
				const person2gift1 = `XXXXXXXXXXX`
				const person2gift2 = `<b>` + person2name + `</b><br>Jetis Baran, Sardonoharjo, Kec. Ngaglik, Kab. Sleman - D.I. Yogyakarta`

				$('.name-person-2').html(person2name)
				$('.nick-person-2').html(person2nick)
				$('.father-person-2').html(person2father)
				$('.mother-person-2').html(person2mother)
				$('.place-person-2').html(person2place)
				$('.gift1-person-2').html(person2gift1)
				$('.gift2-person-2').html(person2gift2)

				launch()
			})
		},
		error: function() {
			console.log('Maaf, silakan muat ulang halaman.')
		}
	})

// Launch
	function launch() {
		var preload = [
			'assets/img/slide-1.jpg',
			'assets/img/slide-2.jpg',
			'assets/img/slide-3.jpg',
			'assets/img/slide-4.jpg',
			'assets/img/slide-5.jpg',
			'assets/img/qr-code-2.svg',
			'assets/img/qr-code-3.svg',
			'https://maumantenan.com/tema/dalem/assets/img/decoration.svg',
			'https://maumantenan.com/tema/dalem/assets/img/pattern.svg',
		]
		var promises = []
		for (var i = 0; i < preload.length; i++) {
			(function(url, promise) {
				var img = new Image()
				img.onload = function() {
					promise.resolve()
				}
				img.src = url
			})(preload[i], promises[i] = $.Deferred())
		}

		$.when.apply($, promises).done(function() {
			$('.preload').fadeOut()
			// loadInvitation()
			let checkURL = window.location.href
			if ( checkURL.indexOf('?') > -1 ) {
				let splitURL = checkURL.split('?')
					decryptURL = atob(splitURL[1])
				if ( (decryptURL.indexOf('0!') > -1 || decryptURL.indexOf('1!') > -1 || decryptURL.indexOf('2!') > -1) && (splitURL[1].substring(0,2) == 'MC' || splitURL[1].substring(0,2) == 'MS' || splitURL[1].substring(0,2) == 'Mi') ) {
					if ( localStorage.getItem(md5security) == md5 ) {
						$('body').attr('data-from',localStorage.getItem(md5account))
						loadInvitation()
					} else {
						if ( new Date() >= datePublishEnd ) {
							publishEnd()
						} else if ( new Date() >= datePublishStart && new Date() < datePublishEnd ) {
							loadInvitation()
						} else {
							loadWelcome()
						}
					}
				} else {
					publishEnd()
				}
			} else {
				publishEnd()
			}
		})
	}

// Guest
	function guestInvite(url) {
		let guest = url.split('?')

		if ( url.indexOf('?') > -1 ) {
			let detail = atob(guest[1])
			// let detail = guest[1]
			if ( (detail.indexOf('0!') > -1 || detail.indexOf('1!') > -1 || detail.indexOf('2!') > -1) && (guest[1].substring(0,2) == 'MC' || guest[1].substring(0,2) == 'MS' || guest[1].substring(0,2) == 'Mi') ) {
				if ( detail.indexOf('@') > -1 && detail.indexOf(':') > -1 && detail.indexOf('#') > -1 ) {
					let guest0 = detail.split('!')
						guest1 = guest0[1].split('@')
						guest2 = guest1[1].split(':')
						guest3 = guest2[1].split('#')
						guest4 = guest3[1]
					let event = guest0[0]
						name = guest1[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						address = guest2[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						from = guest3[0]
						session = guest4[0]
					$('body').attr('data-event',event).attr('data-from',from).attr('data-session',session)
					$('.guest-name').html(name)
					$('.guest-address').html(address)
					$('#beriUcapan-2').each(function() {
						$(this).val(name)
						$(this).closest('.form-group').hide()
					})
				} else if ( detail.indexOf('@') > -1 && detail.indexOf('#') > -1 ) {
					let guest0 = detail.split('!')
						guest1 = guest0[1].split('@')
						guest2 = guest1[1].split('#')
						guest3 = guest2[1]
					let event = guest0[0]
						name = guest1[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						address = guest2[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						session = guest3[0]
					$('body').attr('data-event',event).attr('data-session',session)
					$('.guest-name').html(name)
					$('.guest-address').html(address)
					$('#beriUcapan-2').each(function() {
						$(this).val(name)
						$(this).closest('.form-group').hide()
					})
				} else if ( detail.indexOf('@') > -1 && detail.indexOf(':') > -1 ) {
					let guest0 = detail.split('!')
						guest1 = guest0[1].split('@')
						guest2 = guest1[1].split(':')
						guest3 = guest2[1]
					let event = guest0[0]
						name = guest1[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						address = guest2[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						from = guest3[0]
					$('body').attr('data-event',event).attr('data-from',from)
					$('.guest-name').html(name)
					$('.guest-address').html(address)
					$('#beriUcapan-2').each(function() {
						$(this).val(name)
						$(this).closest('.form-group').hide()
					})
				} else if ( detail.indexOf(':') > -1 && detail.indexOf('#') > -1 ) {
					let guest0 = detail.split('!')
						guest1 = guest0[1].split(':')
						guest2 = guest1[1].split('#')
						guest3 = guest2[1]
					let event = guest0[0]
						name = guest1[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						from = guest2[0]
						session = guest3[0]
					$('body').attr('data-event',event).attr('data-from',from).attr('data-session',session)
					$('.guest-name').html(name)
					$('#beriUcapan-2').each(function() {
						$(this).val(name)
						$(this).closest('.form-group').hide()
					})
				} else if ( detail.indexOf(':') > -1 ) {
					let guest0 = detail.split('!')
						guest1 = guest0[1].split(':')
						guest2 = guest1[1]
					let event = guest0[0]
						name = guest1[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						from = guest2[0]
					$('body').attr('data-event',event).attr('data-from',from)
					$('.guest-name').html(name)
					$('#beriUcapan-2').each(function() {
						$(this).val(name)
						$(this).closest('.form-group').hide()
					})
				} else if ( detail.indexOf('#') > -1 ) {
					let guest0 = detail.split('!')
						guest1 = guest0[1].split('#')
						guest2 = guest1[1]
					let event = guest0[0]
						name = guest1[0].split('+').join(' ').replace("%27","'").replace('%26','&')
						session = guest2[0]
					$('body').attr('data-event',event).attr('data-session',session)
					$('.guest-name').html(name)
					$('#beriUcapan-2').each(function() {
						$(this).val(name)
						$(this).closest('.form-group').hide()
					})
				} else {
					let guest0 = detail.split('!')
						event = guest0[0]
						name = guest0[1].split('+').join(' ').replace("%27","'").replace('%26','&')
					$('body').attr('data-event',event)
					$('.guest-name').html(name)
					$('#beriUcapan-2').each(function() {
						$(this).val(name)
						$(this).closest('.form-group').hide()
					})
				}
			}
		} else {
			$('.guest').addClass('d-none')
		}
	}
	guestInvite(window.location.href)

// Backsound
	let audio = document.createElement('audio')
		audio.src = 'https://maumantenan.com/erni-alvin/assets/audio/audio-erni-alvin.mp3'
		audio.volume = 1
		audio.autoPlay = false
		audio.preLoad = true
		audio.controls = true
		audio.loop = true

	function playBacksound(button) {
		if ( !audio.paused ) {
			audio.pause()
		} else {
			audio.play()
		}
		$(button).find('div').toggleClass('d-none')
	}

// Open Invitation
	function detailInvitation() {
		let what = $('body').data('event')
			when = $('body').data('session')

		if ( what == 0 ) {
			$('.acara-2').removeClass('d-none')
			$('.acara-3').removeClass('d-none')
		} else if ( what == 1 ) {
			$('.acara-2').removeClass('d-none')
			$('.acara-3').addClass('d-none')
		} else if ( what == 2 ) {
			$('.acara-2').addClass('d-none')
			$('.acara-3').removeClass('d-none')
		} else {
			$('.acara-2').addClass('d-none')
			$('.acara-3').addClass('d-none')
		}

		if ( when == 1 ) {
			$('[class^="time-event"]:not(.time-event-1)').addClass('d-none')
			$('.session-1').removeClass('d-none')
			$('.session-2').addClass('d-none')
			$('.session-3').addClass('d-none')
			$('.session-4').addClass('d-none')
			$('.session-5').addClass('d-none')
		} else if ( when == 2 ) {
			$('[class^="time-event"]:not(.time-event-1)').addClass('d-none')
			$('.session-1').addClass('d-none')
			$('.session-2').removeClass('d-none')
			$('.session-3').addClass('d-none')
			$('.session-4').addClass('d-none')
			$('.session-5').addClass('d-none')
		} else if ( when == 3 ) {
			$('[class^="time-event"]:not(.time-event-1)').addClass('d-none')
			$('.session-1').addClass('d-none')
			$('.session-2').addClass('d-none')
			$('.session-3').removeClass('d-none')
			$('.session-4').addClass('d-none')
			$('.session-5').addClass('d-none')
		} else if ( when == 4 ) {
			$('[class^="time-event"]:not(.time-event-1)').addClass('d-none')
			$('.session-1').addClass('d-none')
			$('.session-2').addClass('d-none')
			$('.session-3').addClass('d-none')
			$('.session-4').removeClass('d-none')
			$('.session-5').addClass('d-none')
		} else if ( when == 5 ) {
			$('[class^="time-event"]:not(.time-event-1)').addClass('d-none')
			$('.session-1').addClass('d-none')
			$('.session-2').addClass('d-none')
			$('.session-3').addClass('d-none')
			$('.session-4').addClass('d-none')
			$('.session-5').removeClass('d-none')
		} else {
			$('.session-1').addClass('d-none')
			$('.session-2').addClass('d-none')
			$('.session-3').addClass('d-none')
			$('.session-4').addClass('d-none')
			$('.session-5').addClass('d-none')
		}
	}

	function loadWelcome() {
		detailInvitation()

		$('body').addClass('overflow-hidden nav-hide')
		$('#welcome').modal('show')
	}

	function loadInvitation() {
		detailInvitation()

		$('body').addClass('overflow-hidden nav-hide')
		$('#open').modal('show')

		setTimeout(() => {
			$('main').removeClass('opacity-0')
		},1000)

		$('#open').on('show.bs.modal', function(e) {
			$('body').addClass('nav-hide')
		}).on('hide.bs.modal', function(e) {
			$('body').removeClass('nav-hide')
		})

		$('#covid').on('hide.bs.modal', function(e) {
			$('body').removeClass('overflow-hidden')
		}).on('hidden.bs.modal', function(e) {
			$('body').addClass('ready')
		})
	}

	function openInvitation(trigger,target) {
		$(trigger).closest('.modal').modal('hide')
		if ( audio.paused ) $('.backsound').click()
		// if ( $('body:not(.ready)').length > 0 ) $(target).modal('show')
		if ( $('body.opened').length < 1 ) $('body').addClass('opened')
		$(trigger).blur()
		// setTimeout(() => {
		// 	$(target).modal('hide')
		// },5000)
		setTimeout(() => {
			timelineStory()
		},200)
		$('body').removeClass('overflow-hidden')
		$('body').addClass('ready')
	}

	$('#thanks').on('show.bs.modal', function() {
		$('main > *,.modal:not(#thanks)').remove()
	})

// Smooth Scroll
	$('.nav-link').click(function(e) {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		},500)
	})

// Video
	function playTeaser(button,src) {
		if ( $('#video video').length < 1 ) {
			$(button).html(`<video class="embed-responsive-item object-fit-cover rounded-3 index-1 cursor-pointer" width="100%" height="100%" autoplay controls muted playsinline>
				<source src="` + src + `" type="video/mp4">
			</video>
			<div class="position-absolute top right w-100 h-100 d-flex align-items-center justify-content-center">
				<div class="spinner-border text-white" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</div>`)

			let pre = document.querySelector('.teaser video')
				preCheck = setInterval(() => {
					pre.addEventListener('loadeddata',() => {
						if ( pre.readyState >= 2 ) {
							clearInterval(preCheck)
						}
					})
				},500)
		} else {
			let video = document.querySelector('video')
			if ( !video.paused ) {
				video.addEventListener('click',() => {
					video.pause()
				})
			} else {
				video.addEventListener('click',() => {
					video.play()
				})
			}
		}
	}

// Countdown
	function publishStart() {
		if ( $('body.opened').length < 1 ) {
			$('#welcome').modal('hide')
			loadInvitation()
		}
	}
	function publishEnd() {
		detailInvitation()
		$('#thanks').modal('show')
	}

	$('.countdown-publish').each(function() {
		$(this).countdown($.extend({
			until: datePublishStart,
			format: 'ODHMS',
			timezone: +7,
			onExpiry: publishStart,
		}, $.countdown.regionalOptions['id']))
	})

	let checkCDevent2 = setInterval(() => {
		if ( $('.date-event-2').text().length > 0 ) {
			let event2cd = $('.date-event-2').text().split(' ')
				event2ct = $('.time-event-2').text().split(' ')
				event2cts = event2ct[1].split(':')
			$('.countdown-event-2').each(function() {
				$(this).countdown($.extend({
					until: new Date(event2cd[3], bulanAngka.indexOf(event2cd[2]), event2cd[1], Number(event2cts[0]), Number(event2cts[1]), 0),
					format: 'ODHMS',
					timezone: +7,
				}, $.countdown.regionalOptions['id']))
			})
			clearInterval(checkCDevent2)
		}
	},1000)

	let checkCDevent3 = setInterval(() => {
		if ( $('.date-event-3').text().length > 0 ) {
			let event3cd = $('.date-event-3').text().split(' ')
				event3ct = $('.time-event-3').text().split(' ')
				event3cts = event3ct[1].split(':')
			$('.countdown-event-3').each(function() {
				$(this).countdown($.extend({
					until: new Date(event3cd[3], bulanAngka.indexOf(event3cd[2]), event3cd[1], Number(event3cts[0]), Number(event3cts[1]), 0),
					format: 'ODHMS',
					timezone: +7,
				}, $.countdown.regionalOptions['id']))
			})
			clearInterval(checkCDevent3)
		}
	},1000)

// Story
	function timelineStory() {
		if ( document.querySelector('#tls') !== null ) {
			let remove = document.querySelector('#tls')
			remove.remove(remove)
		}
		let height = $('.timeline-item:last-child').height();
			heightMobileTop = 35;
			heightMobileBottom = height - heightMobileTop + 5;
			heightDesktopTop = 60;
			heightDesktopBottom = height - heightDesktopTop + 5;
		style = document.createElement('style');
		style.id = 'tls'
		style.innerHTML = `.timeline-item:first-child:after {height:` + heightMobileTop + `px} .timeline-item:last-child:after {height:` + heightMobileBottom + `px} @media (min-width: 768px) { .timeline-item:first-child:after {height:` + heightDesktopTop + `px} .timeline-item:last-child:after {height:` + heightDesktopBottom + `px} }`;
		document.querySelector('head').appendChild(style)
	}
	$(window).resize(timelineStory)
	$('[href="#' + $('.timeline').closest('.tab-pane').attr('id') + '"]').click(function(e) {
		setTimeout(() => {
			timelineStory()
		},200)
	})

// Congrats
	function arrayToCongrats(data) {
		$(data).each(function (i,list) {
			const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']
			let tanggal = list[0]
				splitTanggal = tanggal.split('/')
				tanggal = Number(splitTanggal[0]) + ' ' + months[Number(splitTanggal[1])-1] + ' ' + splitTanggal[2]
				nama = list[1]
				ucapan = list[2]
			$(`<div class="card mx-3 border-0 rounded-3 shadow">
				<div class="card-body">
					<p class="mb-0">` + ucapan + `</p>
					<div class="font-weight-bold text-theme-1 text-uppercase mt-3">` + nama + `</div>
					<small class="opacity-5">` + tanggal + `</small>
				</div>
			</div>`).prependTo('#dataUcapan')
		})
	}

	$.ajax({
		type: 'GET',
		url: shUrl + 'Ucapan',
		success: function(data) {
			let ucapan = $.csv.toArrays(data)
			$('#dataUcapan').append(arrayToCongrats(ucapan))
			setTimeout(function() {
				$('#dataUcapan .card:last-child').remove()
			},1000)
		},
		error: function() {
			console.log('Maaf, silakan muat ulang halaman.')
		}
	})

	function slideUcapan() {
		const slideUcapan = document.querySelector('#ucapan .overflow-auto')
		let isDown = false
		let startX
		let scrollLeft

		slideUcapan.addEventListener('mousedown', (e) => {
			isDown = true
			slideUcapan.classList.add('active')
			startX = e.pageX - slideUcapan.offsetLeft
			scrollLeft = slideUcapan.scrollLeft
		})
		slideUcapan.addEventListener('mouseleave', () => {
			isDown = false
			slideUcapan.classList.remove('active')
		})
		slideUcapan.addEventListener('mouseup', () => {
			isDown = false
			slideUcapan.classList.remove('active')
		})
		slideUcapan.addEventListener('mousemove', (e) => {
			if(!isDown) return
			e.preventDefault()
			const x = e.pageX - slideUcapan.offsetLeft
			const walk = (x - startX) * 3
			slideUcapan.scrollLeft = scrollLeft - walk
		})
	}
	slideUcapan()

	function congratsForm(form) {
		$(form + ' #beriUcapan-1').val($('body').data('from'))
		$(form + ' #beriUcapan-2').val($('#open .guest-name').text())
		$('#ucapan button').click(function() {
			setTimeout(() => {
				$(form + ' #beriUcapan-3').each(function() {
					this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px')
				})
			},200)
		})
		$(form + ' #beriUcapan-3').on('input',function() {
			this.style.height = 'auto'
			this.style.height = (this.scrollHeight) + 'px'
		})
		$(window).resize(function() {
			$(form + ' #beriUcapan-3').each(function() {
				this.style.height = 'auto'
				this.style.height = (this.scrollHeight) + 'px'
			})
		})
	}
	congratsForm('[name="beriUcapan"]')

	const formUcapan = document.forms['beriUcapan']
	formUcapan.addEventListener('submit', e => {
		e.preventDefault()
		$('[name="beriUcapan"] .status').addClass('show')
		fetch(urlUcapan, {
			method: 'post',
			body: new FormData(formUcapan)
		})
		.then(response => {
			const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']
			let sender	= formUcapan.querySelector('[name="Nama"]').value
				message = formUcapan.querySelector('[name="Ucapan"]').value
				today 	= new Date()
				stamp	= today.getDate() + ' ' + monthsShort[today.getMonth()] + ' ' + today.getFullYear() + ' - Baru Saja'
			$(`<div class="card mx-3 border-0 rounded-3 shadow">
				<div class="card-body">
					<p class="mb-0">` + message + `</p>
					<div class="font-weight-bold text-theme-1 text-uppercase mt-3">` + sender + `</div>
					<small class="opacity-5">` + stamp + `</small>
				</div>
			</div>`).prependTo('#dataUcapan')
			$('[name="beriUcapan"] .status > *').addClass('d-none')
			$('[name="beriUcapan"] .status .success').removeClass('d-none')
			setTimeout(() => {
				$('#congrats').modal('hide')
			},2000)
			setTimeout(() => {
				$('[name="beriUcapan"] .status').removeClass('show')
				$('[name="beriUcapan"] .status > *').addClass('d-none')
				$('[name="beriUcapan"] .status .loading').removeClass('d-none')
				formUcapan.querySelector('#beriUcapan-3').value = ''
			},3000)
			// console.log('Success!', response)
		})
		.catch(error => {
			$('[name="beriUcapan"] .status > *').addClass('d-none')
			$('[name="beriUcapan"] .status .failed').removeClass('d-none')
			setTimeout(() => {
				$('[name="beriUcapan"] .status').removeClass('show')
				$('[name="beriUcapan"] .status > *').addClass('d-none')
			},2000)
			setTimeout(() => {
				$('[name="beriUcapan"] .status .loading').removeClass('d-none')
			},2500)
			// console.error('Error!', error.message)
		})
	})

// RSVP
	// function rsvpForm(form) {
	// 	$(form + ' #beriKehadiran-1').val($('body').data('event'))
	// 	$(form + ' #beriKehadiran-2').val($('#open .guest-name').text())
	// 	$(form + ' #beriKehadiran-3').val($('#open .guest-address').text())
	// 	if ( $('body').data('session') ) {
	// 		$(form + ' #beriKehadiran-4').val($('body').data('session'))
	// 	} else {
	// 		$(form + ' #beriKehadiran-4').val('0')
	// 	}
	// }
	// rsvpForm('[name="beriKehadiran"]')

	// const formKehadiran = document.forms['beriKehadiran']
	// formKehadiran.addEventListener('submit', e => {
	// 	e.preventDefault()
	// 	$('[name="beriKehadiran"] .status').addClass('show')
	// 	fetch(urlKehadiran, {
	// 		method: 'post',
	// 		body: new FormData(formKehadiran)
	// 	})
	// 	.then(response => {
	// 		$('[name="beriKehadiran"] .status > *').addClass('d-none')
	// 		$('[name="beriKehadiran"] .status .success').removeClass('d-none')
	// 		setTimeout(() => {
	// 			$('#rsvp').modal('hide')
	// 		},2000)
	// 		setTimeout(() => {
	// 			$('[name="beriKehadiran"] .status').removeClass('show')
	// 			$('[name="beriKehadiran"] .status > *').addClass('d-none')
	// 			$('[name="beriKehadiran"] .status .loading').removeClass('d-none')
	// 			formKehadiran.querySelector('#beriKehadiran-5').value = ''
	// 		},3000)
	// 		// console.log('Success!', response)
	// 	})
	// 	.catch(error => {
	// 		$('[name="beriKehadiran"] .status > *').addClass('d-none')
	// 		$('[name="beriKehadiran"] .status .failed').removeClass('d-none')
	// 		setTimeout(() => {
	// 			$('[name="beriKehadiran"] .status').removeClass('show')
	// 			$('[name="beriKehadiran"] .status > *').addClass('d-none')
	// 		},2000)
	// 		setTimeout(() => {
	// 			$('[name="beriKehadiran"] .status .loading').removeClass('d-none')
	// 		},2500)
	// 		// console.error('Error!', error.message)
	// 	})
	// })

// Gift
	function copyToClipboard(element,target) {
		var temp = $('<textarea>');
			brRegex = /<br\s*[\/]?>/gi;
		$('body').append(temp);
		temp.val($(element).html().replace('<b>','').replace('</b>','').replace(brRegex, "\r\n")).select();
		document.execCommand('copy');
		temp.remove();

		$(element).closest('div').find('.' + target).toggleClass(target + ' btn-success');
		$(element).closest('div').find('.btn-caption').toggleClass('d-flex d-none');
		setTimeout(function() {
			$(element).closest('div').find('.btn-success').toggleClass(target + ' btn-success');
			$(element).closest('div').find('.btn-caption').toggleClass('d-flex d-none');
		}, 3000);
	}

	function giftForm(form) {
		$(form + ' #beriBingkisan-1').val($('body').data('from'))
		$(form + ' #beriBingkisan-2').val($('#open .guest-name').text())
		$(form + ' #beriBingkisan-3').val($('#open .guest-address').text())
		$(form + ' #beriBingkisan-4a,' + form + ' #beriBingkisan-4b').on('change',function() {
			let value1 = $(form + ' #beriBingkisan-4a').val()
				value2 = $(form + ' #beriBingkisan-4b').val()
			$(form + ' #beriBingkisan-4').val(value1 + ' - ' + value2)
			if ( $(form + ' #beriBingkisan-4b').val() !== 'Amplop') {
				$(form + ' #beriBingkisan-6').each(function() {
					$(this).removeAttr('required')
					$(this).closest('.form-group').addClass('sr-only')
				})
			} else {
				$(form + ' #beriBingkisan-6').each(function() {
					$(this).val('')
					$(this).attr('required','required')
					$(this).closest('.form-group').removeClass('sr-only')
				})
			}
		})
	}
	giftForm('[name="beriBingkisan"]')

	const formBingkisan = document.forms['beriBingkisan']
	formBingkisan.addEventListener('submit', e => {
		e.preventDefault()
		$('[name="beriBingkisan"] .status').addClass('show')
		fetch(urlBingkisan, {
			method: 'post',
			body: new FormData(formBingkisan)
		})
		.then(response => {
			$('[name="beriBingkisan"] .status > *').addClass('d-none')
			$('[name="beriBingkisan"] .status .success').removeClass('d-none')
			setTimeout(() => {
				$('#gift').modal('hide')
			},2000)
			setTimeout(() => {
				$('[name="beriBingkisan"] .status').removeClass('show')
				$('[name="beriBingkisan"] .status > *').addClass('d-none')
				$('[name="beriBingkisan"] .status .loading').removeClass('d-none')
				formBingkisan.querySelector('#beriBingkisan-4').value = ''
				formBingkisan.querySelector('#beriBingkisan-4a').value = ''
				formBingkisan.querySelector('#beriBingkisan-4b').value = ''
				formBingkisan.querySelector('#beriBingkisan-5').value = ''
				formBingkisan.querySelector('#beriBingkisan-6').value = ''
				formBingkisan.querySelector('#beriBingkisan-7').value = ''
			},3000)
			// console.log('Success!', response)
		})
		.catch(error => {
			$('[name="beriBingkisan"] .status > *').addClass('d-none')
			$('[name="beriBingkisan"] .status .failed').removeClass('d-none')
			setTimeout(() => {
				$('[name="beriBingkisan"] .status').removeClass('show')
				$('[name="beriBingkisan"] .status > *').addClass('d-none')
			},2000)
			setTimeout(() => {
				$('[name="beriBingkisan"] .status .loading').removeClass('d-none')
			},2500)
			// console.error('Error!', error.message)
		})
	})

// Streaming
	// function arrayToStreaming(data) {
	// 	$(data).each(function (i,list) {
	// 		let instagram = list[1]
	// 			facebook = list[2]
	// 			meet = list[3]
	// 			zoom = list[4]
	// 			youtube = list[5]
	// 		$(`<div class="d-lg-flex">
	// 			<div class="my-3 m-lg-2">
	// 				<a class="btn btn-light btn-block rounded-2 text-dark shadow" rel="noopener" target="_blank" href="` + instagram + `">
	// 					<div class="d-flex align-items-center">
	// 						<img loading="lazy" width="40" height="40" alt="Logo" src="https://maumantenan.com/assets/img/logo-instagram.svg">
	// 						<span class="lh-1 ml-1 mr-2">Live Instagram</span>
	// 					</div>
	// 				</a>
	// 			</div>
	// 			<div class="my-3 m-lg-2">
	// 				<a class="btn btn-light btn-block rounded-2 text-dark shadow" rel="noopener" target="_blank" href="` + facebook + `">
	// 					<div class="d-flex align-items-center">
	// 						<img loading="lazy" width="40" height="40" alt="Logo" src="https://maumantenan.com/assets/img/logo-facebook.svg">
	// 						<span class="lh-1 ml-1 mr-2">Live Facebook</span>
	// 					</div>
	// 				</a>
	// 			</div>
	// 			<div class="my-3 m-lg-2">
	// 				<a class="btn btn-light btn-block rounded-2 text-dark shadow" rel="noopener" target="_blank" href="` + meet + `">
	// 					<div class="d-flex align-items-center">
	// 						<img loading="lazy" width="40" height="40" alt="Logo" src="https://maumantenan.com/assets/img/logo-gmeet.svg">
	// 						<span class="lh-1 ml-1 mr-2">Google Meet</span>
	// 					</div>
	// 				</a>
	// 			</div>
	// 			<div class="my-3 m-lg-2">
	// 				<a class="btn btn-light btn-block rounded-2 text-dark shadow" rel="noopener" target="_blank" href="` + zoom + `">
	// 					<div class="d-flex align-items-center">
	// 						<img loading="lazy" width="40" height="40" alt="Logo" src="https://maumantenan.com/assets/img/logo-zoom.svg">
	// 						<span class="lh-1 ml-1 mr-2">Zoom</span>
	// 					</div>
	// 				</a>
	// 			</div>
	// 			<div class="my-3 m-lg-2">
	// 				<a class="btn btn-light btn-block rounded-2 text-dark shadow" rel="noopener" target="_blank" href="` + youtube + `">
	// 					<div class="d-flex align-items-center">
	// 						<img loading="lazy" width="40" height="40" alt="Logo" src="https://maumantenan.com/assets/img/logo-youtube.svg">
	// 						<span class="lh-1 ml-1 mr-2">Youtube</span>
	// 					</div>
	// 				</a>
	// 			</div>
	// 		</div>`).prependTo('#dataSiaran')
	// 	})
	// }

	// $.ajax({
	// 	type: 'GET',
	// 	url: shUrl + 'Siaran',
	// 	success: function(data) {
	// 		let siaran = $.csv.toArrays(data)
	// 		$('#dataSiaran').append(arrayToStreaming(siaran))
	// 		setTimeout(function() {
	// 			$('#dataSiaran > *:not(:first-child)').remove()
	// 			$('#dataSiaran a[href=""]').closest('div').remove()
	// 			if ( $('#dataSiaran > * > *').length < 1 ) {
	// 				$('#dataSiaran > *').html('<div class="btn btn-light btn-block rounded-2 text-dark shadow py-3 px-4 mt-3">Kanal siaran belum tersedia</div>')
	// 			}
	// 		},1000)
	// 	},
	// 	error: function() {
	// 		console.log('Maaf, silakan muat ulang halaman.')
	// 	}
	// })

// AOS
	$('#kutipan p').attr('data-aos','zoom-in')
	$('#kutipan b').attr('data-aos','fade-down').attr('data-aos-anchor','#kutipan p').attr('data-aos-delay','300')
	$('#mempelai,#acara-1,#acara-2,#acara-3,#ucapan,#bingkisan,#kisah,#foto').attr('data-aos','fade-up').attr('data-aos-delay','300')
	$('#siaran,#kehadiran,#video,#penutup').attr('data-aos','zoom-in').attr('data-aos-delay','300')

	AOS.init({
		once: true
	})

// Starter Pack
	window.onbeforeunload = function() {
		$('body').remove()
		$(window).scrollTop(0)
	}

	$(document).on('contextmenu',function() {
		return false
	})

	$(document).keydown(function(e) {
		let form = e.target.tagName.toLowerCase()
		if ( form != 'input' && form != 'textarea' ) {
			if (e.ctrlKey || e.metaKey) {
				if (e.keyCode == 65 || e.keyCode == 83) {
					return false
				}
			}
		}
	})
