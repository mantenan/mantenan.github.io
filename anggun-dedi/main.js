/*
 * Maumantenan
 * https://maumantenan.com
 * Digital Wedding Invitation
 * Copyright (c) 2020-2021
 */

// Preload
	var preload = [
		'assets/img/main-1.jpg',
		'assets/img/main-2.jpg',
		'assets/img/bridegroom-1.jpg',
		'assets/img/bridegroom-2.jpg',
		'assets/img/slide-1.jpg',
		'assets/img/slide-2.jpg',
		'assets/img/slide-3.jpg',
		'assets/img/slide-4.jpg',
		'assets/img/qr-code.svg',
		'assets/img/pattern.svg',
		'assets/img/decoration.svg',
	];
	var promises = [];
	for (var i = 0; i < preload.length; i++) {
		(function(url, promise) {
			var img = new Image();
			img.onload = function() {
				promise.resolve();
			};
			img.src = url;
		})(preload[i], promises[i] = $.Deferred());
	}

// Launch
	var url = window.location.href;
		guest = url.split('?');

	$.when.apply($, promises).done(function() {
		// $('.preload').fadeOut();
		$('body').removeClass('overflow-hidden');
		$('aside').addClass('d-none');
		// if ( guest[1] == 'admin' ) {
		// 	$('#admin').modal('show');
		// } else if ( new Date() >= new Date(2021, 9-1, 12, 0, 0, 0) ) {
		// 	setTimeout(function() {
		// 		$('#open').modal('show');
		// 	},250);
		// } else {
		// 	if ( $('#welcome').length > 0 ) {
		// 		setTimeout(function() {
		// 			$('#welcome').modal('show');
		// 		},250);
		// 	} else {
		// 		setTimeout(function() {
		// 			$('#open').modal('show');
		// 		},250);
		// 	};
		// };
	});

// Admin
	$('#admin').each(function() {
		let admin = $(this);
			form = admin.find('form');
			alert = admin.find('.alert');
			userData1 = form.find('[for="username"]')
			userData2 = form.find('[for="username-2"]')
			passData = form.find('[for="password"]')
			userInput = form.find('[name="username"]')
			passInput = form.find('[name="password"]')
		form.submit(function(e) {
			e.preventDefault();
			if ( userData1.html() == userInput.val() || userData2.html() == userInput.val() ) {
				if ( passData.html() == passInput.val() ) {
					$('#open .guest').addClass('d-none');
					$('#open .guest').next().addClass('mt-5');
					$('#admin').modal('hide');
					$('#open').modal('show');
					$('#open').on('shown.bs.modal', function() {
						$('body').addClass('modal-open');
					});
				} else {
					alert.show();
				}
			} else {
				alert.show();
			}
		});
	});

// Guest
	if ( url.indexOf('?') > -1 && url.indexOf('&') > -1 ) {
		var content = guest[1].split('&');
			name = content[0].split('+').join(' ').replace("%27","'");
			address = content[1].split('+').join(' ').replace("%27","'");
		$('.guest-name').html(name);
		$('.guest-address').html(address);
		$('#open').addClass('has-guest');
		$('#beriUcapan-1').val(name);
		$('#beriUcapan-1').closest('.form-group').hide();
	} else if ( url.indexOf('?') > -1 ) {
		var name = guest[1].split('+').join(' ').replace("%27","'");
		$('.guest-name').html(name);
		$('#open').addClass('has-guest');
		$('#beriUcapan-1').val(name);
		$('#beriUcapan-1').closest('.form-group').hide();
	} else {
		$('.guest').addClass('d-none');
	}

// Modal
	$('#open').on('shown.bs.modal',function(e) {
		setTimeout(function() {
			$('body').removeClass('overflow-hidden');
		},250);
	});

// Audio
	// var audio = document.createElement('audio');
	// 	audio.src = 'https://maumantenan.com/tema/dalem/assets/audio/audio.mp3';
	// 	audio.volume = 1;
	// 	audio.autoPlay = false;
	// 	audio.preLoad = true;
	// 	audio.controls = true;
	// 	audio.loop = true;

	// $('.play-audio').click(function() {
	// 	audio.play();
	// });

// AOS
	AOS.init({
		once: true
	});

// Countdown
	$('.countdown').countdown($.extend({
		until: new Date(2021, 9-1, 26, 10, 0, 0),
		format: 'ODHMS',
		timezone: +7,
	}, $.countdown.regionalOptions['id']));

	function finishCountdown() {
		$('#welcome').modal('hide');
		$('#open').modal('show');
		$('#open').on('shown.bs.modal', function() {
			$('body').addClass('modal-open');
		});
	};

	$('.countdown-publish').countdown($.extend({
		until: new Date(2021, 9-1, 12, 0, 0, 0),
		format: 'ODHMS',
		timezone: +7,
		onExpiry: finishCountdown,
	}, $.countdown.regionalOptions['id']));

// Congrats
	if ( $('#ucapan').length > 0 ) {
		const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']

		function arrayToCard(data) {
			$(data).each(function (i,list) {
				const monthsShorts = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']
				let tanggal = list[0]
					splitTanggal = tanggal.split('/')
					tanggal = Number(splitTanggal[0]) + ' ' + monthsShorts[Number(splitTanggal[1])-1] + ' ' + splitTanggal[2]
					nama = list[1]
					ucapan = list[2]
				$(`<div class="card mx-3 border-0 bg-overlay shadow d-none">
					<div class="card-body">
						<p class="mb-0">` + ucapan + `</p>
						<div class="font-weight-bold color-theme text-uppercase mt-2 mt-md-1">` + nama + `</div>
						<small class="opacity-5">` + tanggal + `</small>
					</div>
				</div>`).prependTo('#dataUcapan')
			})
		}

		$.ajax({
			type: 'GET',
			url: 'https://docs.google.com/spreadsheets/d/1sFFIg6nkdYw99_DuiYecGl8poPk7AsQy7EoAeW9SxXc/gviz/tq?tqx=out:csv&sheet=Ucapan',
			success: function(data) {
				console.log(data)
				let ucapan = $.csv.toArrays(data)
				console.log(ucapan)
				$('#dataUcapan').append(arrayToCard(ucapan))
				setTimeout(function() {
					$('#dataUcapan').each(function() {
						let list = $(this)
						list.find('.card:nth-child(1)').removeClass('d-none')
						list.find('.card:nth-child(2)').removeClass('d-none')
						list.find('.card:nth-child(3)').removeClass('d-none')
						list.find('.card:nth-child(4)').removeClass('d-none')
						list.find('.card:nth-child(5)').removeClass('d-none')
						list.find('.card:last-child').remove()
						if ( list.find('.card').length > 5 ) list.next().removeClass('d-none')
						list.next().on('click',function() {
							let button = $(this)
								hidden = list.find('.d-none')
								numb = 5
								slice = Array.from(hidden).slice(0, numb)
							slice.forEach(element => {
								element.classList.remove('d-none')
							})
							if (hidden.length <= numb) {
								button.addClass('d-none')
							}
						})
					})
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

		const gsStart = 'https://script.google.com/macros/s/'
		const gsEnd = '/exec'

		var gsUcapan = 'AKfycbwmX_aq2Ny_FCjhVrADMqu1OIYfP6Dnw501b5Kak7ex69UYQRI4zhRAjo7kmVJ3Cm1Ttg'

		var urlUcapan = gsStart + gsUcapan + gsEnd
			formUcapan = document.forms['beriUcapan']

		formUcapan.addEventListener('submit', e => {
			e.preventDefault()
			$('.form-gsheet .loading').addClass('show')
			fetch(urlUcapan, { method: 'post', body: new FormData(formUcapan)})
			.then(response => {
				console.log('Success!', response)
				let sender	= formUcapan.querySelector('input').value
					message = formUcapan.querySelector('textarea').value
					today 	= new Date()
					stamp	= today.getDate() + ' ' + monthsShort[today.getMonth()] + ' ' + today.getFullYear() + ' - Baru Saja'
				$(`<div class="card mx-3 border-0 bg-overlay shadow">
					<div class="card-body">
						<p class="mb-0">` + message + `</p>
						<div class="font-weight-bold color-theme text-uppercase mt-2 mt-md-1">` + sender + `</div>
						<small class="opacity-5">` + stamp + `</small>
					</div>
				</div>`).prependTo('#dataUcapan')
				$('.form-gsheet .loading').removeClass('show')
				formUcapan.querySelector('textarea').value = ''
			})
			.catch(error => {
				$('.form-gsheet .loading').removeClass('show')
				console.error('Error!', error.message)
			})
		})
	}

// Reload
	window.onbeforeunload = function() {
		$('body').remove();
		$(window).scrollTop(0);
	};

// Context Menu
	$('html').on('contextmenu',function() {
		return false;
	});

// Select All
	$(function(){
		$(document).keydown(function(objEvent) {
			if (objEvent.ctrlKey || objEvent.metaKey) {
				if (objEvent.keyCode == 65 || objEvent.keyCode == 83) {
					return false;
				};
			};
		});
	});
