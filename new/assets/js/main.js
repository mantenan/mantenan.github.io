/*
 * MauMantenan
 * https://maumantenan.com
 * Digital Wedding Invitation
 * Copyright (c) 2020-2021
 */

// Navbar
	function scrolled() {
		if ( $(document).scrollTop() > 25 ) {
			$('.navbar').addClass('scroll')
			$('.brand-inside').addClass('opacity-0')
		}
		else {
			$('.navbar').removeClass('scroll')
			$('.brand-inside').removeClass('opacity-0')
		}
	}

	scrolled()

	$(window).scroll(function() {
		scrolled()
	})

// Dropdown
	$('.dropdown-menu .dropdown-toggle').on('click', function(e) {
		let toggle = $(this)

		if (!toggle.next().hasClass('show')) {
			toggle.parents('.dropdown-menu').first().find('.show').removeClass('show')
			toggle.parents('.dropdown-menu').first().find('.active').removeClass('active')
		}

		toggle.toggleClass('active')
		toggle.next('.dropdown-menu').toggleClass('show')

		toggle.parents('.dropdown.show').on('hidden.bs.dropdown', function(e) {
			$('.dropdown-submenu .show').removeClass('show')
			$('.dropdown-submenu .active').removeClass('active')
		})

		return false
	})

// Carousel
	function carouselMain() {
		$('#carousel').each(function() {
			let parent = $(this)
				item = parent.find('.carousel-item.active')
				image = item.find('img')

			parent.css('height',image.height())
		})
	}

	// $('#carousel').each(function() {
	// 	let parent = $(this)
	// 		item = parent.find('.carousel-item')

	// 	item.each(function() {
	// 		let child = $(this)
	// 			carousel = child.closest('.carousel-inner').find('.carousel-item')
	// 			first = carousel.first()
	// 			last = carousel.last()
	// 			src = child.prev().find('img').attr('src')

	// 		child.css('background-image','url(' + src + ')')
	// 		first.css('background-image','url(' + last.find('img').attr('src') + ')')
	// 	})
	// })

	carouselMain()

	$(window).resize(function() {
		carouselMain()
	})

// Modal
	$('#detail-1').on('show.bs.modal', function (event) {
		var modal = $(this)
			button = $(event.relatedTarget)
			content = button.data('detail')
		modal.find('.detail-1-content').html(content)
	})
	$('#detail-2').on('show.bs.modal', function (event) {
		var modal = $(this)
			button = $(event.relatedTarget)
			content = button.data('detail')
		modal.find('.detail-2-content').html(content)
	})

// Slick
	$('#website .swipe').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		infinite: true,
		centerMode: true,
  		centerPadding: '50px',
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				dots: true,
				arrows: false
			}
		}]
	})
	$('#image .swipe').slick({
		dots: false,
		arrows: false,
		autoplay: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
  				dots: true,
				centerMode: true,
  				centerPadding: '50px',
				slidesToShow: 1
			}
		}]
	})

	$('#preview .swipe').slick({
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	})
	if ( window.matchMedia('(max-width: 767px)').matches ) {
		$('#story .slick-slide:not(.slick-cloned)').each(function() {
			let img = $(this).find('img')
				width = img.width()
				height = (width / 9) * 20
			img.css('min-width',width)
			img.css('min-height',height)
		})
		$('#feed .slick-slide:not(.slick-cloned)').each(function() {
			let style = $('#story .slick-slide:not(.slick-cloned) img').attr('style')
				split = style.split(' ')
				split = split[1].split('px')
				width = split[0] + 'px'
			$(this).find('img').css('min-height',width)
		})
		$('#cover .slick-slide:not(.slick-cloned)').each(function() {
			let style = $('#story .slick-slide:not(.slick-cloned) img').attr('style')
				split = style.split(' ')
				split = split[1].split('px')
				width = (split[0] / 3) * 2
				width = width + 'px'
			$(this).find('img').css('min-height',width)
		})
	}

// Anchor
	$('a[href^="#"]:not([data-toggle="pill"])').on('click',function (e) {
		e.preventDefault()
		var target = this.hash
		$target = $(target)
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 72
		},500)
		if ( $('#menu').hasClass('show') ) $('.navbar-toggler').click()
	})

// Timepicker
	let timepicker = $('.timepicker')
	if ( timepicker.length > 0 ) {
		timepicker.timepicker({
			timeFormat: 'HH:mm',
			startHour: 6,
			interval: 30
		})
		timepicker.focus(function() {
			let picker = $(this)
				parent = $(this).closest('div')
			$('.ui-timepicker-standard').clone().appendTo(parent)
			picker.next().find('a').click(function(e) {
				let selected = e.target.innerHTML
				picker.val(selected)
			})
		}).blur(function() {
			let picker = $(this)
			setTimeout(function() {
				picker.next().remove()
			},100)
		})
	}

// Order
	$('[data-target="#order-1"],[data-target="#order-1-ext"],[data-target="#order-2"]').click(function() {
		let id = $(this).data('target')
			parent = $(this).prev()
			name = parent.find('h3').html()
			price = parent.find('h3').next().html()
			url = parent.find('a').attr('href')
		$(id).find(id + '-account-4').attr('value',name)
		$(id).find(id + '-account-5').attr('value',price)
		$(id).find(id + '-account-6').attr('value',url)
		setTimeout(function() {
			$('.modal.show').find(id + '-account-1').focus()
		},500)
	})

	$('#orderCheck-1,#orderCheck-1-ext,#orderCheck-2').click(function() {
		let checkbox = $(this)
			button = checkbox.closest('.row').find('button')
		button.prop('disabled', !button.prop('disabled'))
	})

	var phone = '6287838610808'

		labelA1 = 'Nama Lengkap : '
		labelA2 = 'Panggilan : '
		labelA3 = 'Orang Tua : '
		labelA4 = 'Alamat : '

		labelB1 = 'Nama Lengkap : '
		labelB2 = 'Panggilan : '
		labelB3 = 'Orang Tua : '
		labelB4 = 'Alamat : '

		labelC2 = 'Tanggal : '
		labelC3 = 'Waktu : '
		labelC4 = 'Lokasi : '

		labelD2 = 'Tanggal : '
		labelD3 = 'Waktu : '
		labelD4 = 'Lokasi : '
		labelD5 = 'Google Maps : '

		labelE1 = 'Tanggal publikasi : '

	function order1() {
		let id = '#order-1'

			section0 = id + '-account-'
			O1 = '%5B' + 'ORDER' + '%5D' + '%0A%0A'
			O2 = 'Pemesan : *' + $(section0 + '1').val() + '* (' + $(section0 + '3').val() + ') ' + $(section0 + '2').val() + '%0A'
			O3 = 'Tema : _*' + $(section0 + '4').val() + '*_ (' + $(section0 + '6').val() + ')' + '%0A'
			O4 = 'Harga : ' + $(section0 + '5').val() + '%0A%0A'
			O5 = 'Berikut adalah rincian undangannya :' + '%0A'
			detail0 = O1 + O2 + O3 + O4 + O5

			sectionA = id + '-detail-'
			A0 = '*Mempelai Pria*' + '%0A'
			A1 = labelA1 + $(sectionA + 'A1').val() + '%0A'
			A2 = labelA2 + $(sectionA + 'A2').val() + '%0A'
			A3 = labelA3 + $(sectionA + 'A3').val() + ' - ' + $(sectionA + 'A4').val() + '%0A'
			A4 = labelA4 + $(sectionA + 'A5').val() + '%0A'
			A5 = $(sectionA + 'A6-1').val() + ' : ' + $(sectionA + 'A6').val() + '%0A'
			detail1 = A0 + A1 + A2 + A3 + A4 + A5

			sectionB = id + '-detail-'
			B0 = '*Mempelai Wanita*' + '%0A'
			B1 = labelB1 + $(sectionB + 'B1').val() + '%0A'
			B2 = labelB2 + $(sectionB + 'B2').val() + '%0A'
			B3 = labelB3 + $(sectionB + 'B3').val() + ' - ' + $(sectionB + 'B4').val() + '%0A'
			B4 = labelB4 + $(sectionB + 'B5').val() + '%0A'
			B5 = $(sectionB + 'B6-1').val() + ' : ' + $(sectionB + 'B6').val() + '%0A'
			detail2 = B0 + B1 + B2 + B3 + B4 + B5

			sectionC = id + '-detail-'
			C1 = '*' + $(sectionC + 'C1').val() + '*' + '%0A'
			C2 = labelC2 + $(sectionC + 'C2').val() + '%0A'
			C3 = labelC3 + $(sectionC + 'C3').val() + ' s.d. ' + $(sectionC + 'C3-end').val() + ' ' + $(sectionC + 'C3-1').val() + '%0A'
			C4 = labelC4 + $(sectionC + 'C4').val() + '%0A'
			detail3 = C1 + C2 + C3 + C4

			sectionD = id + '-detail-'
			D1 = '*' + $(sectionD + 'D1').val() + '*' + '%0A'
			D2 = labelD2 + $(sectionD + 'D2').val() + '%0A'
			D3 = labelD3 + $(sectionD + 'D3').val() + ' s.d. ' + $(sectionD + 'D3-end').val() + ' ' + $(sectionD + 'D3-1').val() + '%0A'
			D4 = labelD4 + $(sectionD + 'D4').val() + '%0A'
			D5 = labelD5 + $(sectionD + 'D5').val() + '%0A'
			detail4 = D1 + D2 + D3 + D4 + D5

			sectionE = id + '-detail-'
			E1 = labelE1 + $(sectionE + 'E1').val() + '%0A'
			detail5 = E1

			detail6 = 'Saya sudah membaca dan setuju terhadap Syarat %26 Ketentuan dari Maumantenan (https://maumantenan.com/syarat-ketentuan).%0A%0ATerima kasih.'

			content = detail0 + '%0A' + detail1 + '%0A' + detail2 + '%0A' + detail3 + '%0A' + detail4 + '%0A' + detail5 + '%0A' + detail6
			content = content.split(' ').join('%20')
			url = 'https://wa.me/' + phone + '?text=' + content

		window.open(url,'_blank')
	}
	$('#order-1').submit(function(e) {
		e.preventDefault()
		order1()
	})

	function order1ext() {
		let id = '#order-1-ext'

			section0 = id + '-account-'
			O1 = '%5B' + 'ORDER' + '%5D' + '%0A%0A'
			O2 = 'Pemesan : *' + $(section0 + '1').val() + '* (' + $(section0 + '3').val() + ') ' + $(section0 + '2').val() + '%0A'
			O3 = 'Tema : _*' + $(section0 + '4').val() + '*_ (' + $(section0 + '6').val() + ')' + '%0A'
			O4 = 'Harga : ' + $(section0 + '5').val() + '%0A%0A'
			O5 = 'Berikut adalah rincian undangannya :' + '%0A'
			detail0 = O1 + O2 + O3 + O4 + O5

			sectionA = id + '-detail-'
			A0 = '*Mempelai Pria*' + '%0A'
			A1 = labelA1 + $(sectionA + 'A1').val() + '%0A'
			A2 = labelA2 + $(sectionA + 'A2').val() + '%0A'
			A3 = labelA3 + $(sectionA + 'A3').val() + '%0A'
			A4 = labelA4 + $(sectionA + 'A4').val() + '%0A'
			detail1 = A0 + A1 + A2 + A3 + A4

			sectionB = id + '-detail-'
			B0 = '*Mempelai Wanita*' + '%0A'
			B1 = labelB1 + $(sectionB + 'B1').val() + '%0A'
			B2 = labelB2 + $(sectionB + 'B2').val() + '%0A'
			B3 = labelB3 + $(sectionB + 'B3').val() + '%0A'
			B4 = labelB4 + $(sectionB + 'B4').val() + '%0A'
			detail2 = B0 + B1 + B2 + B3 + B4

			sectionC = id + '-detail-'
			C1 = '*' + $(sectionC + 'C1').val() + '*' + '%0A'
			C2 = labelC2 + $(sectionC + 'C2').val() + '%0A'
			C3 = labelC3 + $(sectionC + 'C3').val() + ' s.d. ' + $(sectionC + 'C3-end').val() + ' ' + $(sectionC + 'C3-1').val() + '%0A'
			C4 = labelC4 + $(sectionC + 'C4').val() + '%0A'
			detail3 = C1 + C2 + C3 + C4

			sectionD = id + '-detail-'
			D1 = '*' + $(sectionD + 'D1').val() + '*' + '%0A'
			D2 = labelD2 + $(sectionD + 'D2').val() + '%0A'
			D3 = labelD3 + $(sectionD + 'D3').val() + ' s.d. ' + $(sectionD + 'D3-end').val() + ' ' + $(sectionD + 'D3-1').val() + '%0A'
			D4 = labelD4 + $(sectionD + 'D4').val() + '%0A'
			D5 = labelD5 + $(sectionD + 'D5').val() + '%0A'
			detail4 = D1 + D2 + D3 + D4 + D5

			sectionDD = id + '-detail-'
			DD1 = '*' + $(sectionDD + 'DD1').val() + '*' + '%0A'
			DD2 = labelD2 + $(sectionDD + 'DD2').val() + '%0A'
			DD3 = labelD3 + $(sectionDD + 'DD3').val() + ' s.d. ' + $(sectionDD + 'DD3-end').val() + ' ' + $(sectionDD + 'DD3-1').val() + '%0A'
			DD4 = labelD4 + $(sectionDD + 'DD4').val() + '%0A'
			DD5 = labelD5 + $(sectionDD + 'DD5').val() + '%0A'
			detail4a = DD1 + DD2 + DD3 + DD4 + DD5

			sectionE = id + '-detail-'
			E1 = labelE1 + $(sectionE + 'E1').val() + '%0A'
			detail5 = E1

			detail6 = 'Saya sudah membaca dan setuju terhadap Syarat %26 Ketentuan dari Maumantenan (https://maumantenan.com/syarat-ketentuan).%0A%0ATerima kasih.'

			content = detail0 + '%0A' + detail1 + '%0A' + detail2 + '%0A' + detail3 + '%0A' + detail4 + '%0A' + detail4a + '%0A' + detail5 + '%0A' + detail6
			content = content.split(' ').join('%20')
			url = 'https://wa.me/' + phone + '?text=' + content

		window.open(url,'_blank')
	}
	$('#order-1-ext').submit(function(e) {
		e.preventDefault()
		order1ext()
	})

	function order2() {
		let id = '#order-2'

			section0 = id + '-account-'
			O1 = '%5B' + 'ORDER' + '%5D' + '%0A%0A'
			O2 = 'Pemesan : *' + $(section0 + '1').val() + '* (' + $(section0 + '3').val() + ') ' + $(section0 + '2').val() + '%0A'
			O3 = 'Tema : _*' + $(section0 + '4').val() + '*_ (' + $(section0 + '6').val() + ')' + '%0A'
			O4 = 'Harga : ' + $(section0 + '5').val() + '%0A%0A'
			O5 = 'Berikut adalah rincian undangannya :' + '%0A'
			detail0 = O1 + O2 + O3 + O4 + O5

			sectionA = id + '-detail-'
			A0 = '*Mempelai Pria*' + '%0A'
			A1 = labelA1 + $(sectionA + 'A1').val() + '%0A'
			A2 = labelA2 + $(sectionA + 'A2').val() + '%0A'
			A3 = labelA3 + $(sectionA + 'A3').val() + '%0A'
			A4 = labelA4 + $(sectionA + 'A4').val() + '%0A'
			detail1 = A0 + A1 + A2 + A3 + A4

			sectionB = id + '-detail-'
			B0 = '*Mempelai Wanita*' + '%0A'
			B1 = labelB1 + $(sectionB + 'B1').val() + '%0A'
			B2 = labelB2 + $(sectionB + 'B2').val() + '%0A'
			B3 = labelB3 + $(sectionB + 'B3').val() + '%0A'
			B4 = labelB4 + $(sectionB + 'B4').val() + '%0A'
			detail2 = B0 + B1 + B2 + B3 + B4

			sectionC = id + '-detail-'
			C1 = '*' + $(sectionC + 'C1').val() + '*' + '%0A'
			C2 = labelC2 + $(sectionC + 'C2').val() + '%0A'
			C3 = labelC3 + $(sectionC + 'C3').val() + ' s.d. ' + $(sectionC + 'C3-end').val() + ' ' + $(sectionC + 'C3-1').val() + '%0A'
			C4 = labelC4 + $(sectionC + 'C4').val() + '%0A'
			detail3 = C1 + C2 + C3 + C4

			sectionD = id + '-detail-'
			D1 = '*' + $(sectionD + 'D1').val() + '*' + '%0A'
			D2 = labelD2 + $(sectionD + 'D2').val() + '%0A'
			D3 = labelD3 + $(sectionD + 'D3').val() + ' s.d. ' + $(sectionD + 'D3-end').val() + ' ' + $(sectionD + 'D3-1').val() + '%0A'
			D4 = labelD4 + $(sectionD + 'D4').val() + '%0A'
			D5 = labelD5 + $(sectionD + 'D5').val() + '%0A'
			detail4 = D1 + D2 + D3 + D4 + D5

			detail5 = 'Saya sudah membaca dan setuju terhadap Syarat %26 Ketentuan dari Maumantenan (https://maumantenan.com/syarat-ketentuan).%0A%0ATerima kasih.'

			content = detail0 + '%0A' + detail1 + '%0A' + detail2 + '%0A' + detail3 + '%0A' + detail4 + '%0A' + detail5
			content = content.split(' ').join('%20')
			url = 'https://wa.me/' + phone + '?text=' + content

		window.open(url,'_blank')
	}
	$('#order-2').submit(function(e) {
		e.preventDefault()
		order2()
	})
// 