/*
 * MauMantenan
 * https://maumantenan.com
 * Online Wedding Invitation
 * Copyright (c) 2020-2021
 */

// Navbar
	$(window).scroll(function() {
		if ( $(document).scrollTop() > 25 ) {
			$('.navbar').addClass('scroll')
		}
		else {
			$('.navbar').removeClass('scroll')
		}
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

	$('#carousel').each(function() {
		let parent = $(this)
			item = parent.find('.carousel-item')

		item.each(function() {
			let child = $(this)
				carousel = child.closest('.carousel-inner').find('.carousel-item')
				first = carousel.first()
				last = carousel.last()
				src = child.prev().find('img').attr('src')

			child.css('background-image','url(' + src + ')')
			first.css('background-image','url(' + last.find('img').attr('src') + ')')
		})
	})

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
				centerMode: true,
  				centerPadding: '50px',
				slidesToShow: 1
			}
		}]
	})

// Anchor
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault()
		var target = this.hash
		$target = $(target)
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 72
		},500)
		if ( $('#menu').hasClass('show') ) $('.navbar-toggler').click()
	})

// Order
	$('[data-target="#order-1"],[data-target="#order-2"]').click(function() {
		let id = $(this).data('target')
			parent = $(this).prev()
			name = parent.find('h3').html()
			price = parent.find('h3').next().html()
			url = parent.find('a').attr('href')
		$(id).find(id + '-account-3').attr('value',name)
		$(id).find(id + '-account-4').attr('value',price)
		$(id).find(id + '-account-5').attr('value',url)
		setTimeout(function() {
			$('.modal.show').find(id + '-account-1').focus()
		},500)
	})

	$('#orderCheck-1,#orderCheck-2').click(function() {
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
		labelC3 = 'Jam : '
		labelC4 = 'Alamat : '

		labelD2 = 'Tanggal : '
		labelD3 = 'Jam : '
		labelD4 = 'Alamat : '
		labelD5 = 'Google Maps : '

		labelE1 = 'Tanggal publikasi undangan : '

	function order1() {
		let id = '#order-1'

			section0 = id + '-account-'
			O1 = 'Hai kak...' + '%0A%0A'
			O2 = 'Perkenalkan saya *' + $(section0 + '1').val() + '* dari ' + $(section0 + '2').val() + ', ingin memesan undangan dari MauMantenan. '
			O3 = 'Tema yang saya pilih adalah _*' + $(section0 + '3').val() + '*_ (' + $(section0 + '5').val() + ') seharga ' + $(section0 + '4').val() + '.%0A%0A'
			O4 = 'Berikut adalah rincian undangannya :' + '%0A'
			detail0 = O1 + O2 + O3 + O4

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
			C3 = labelC3 + $(sectionC + 'C3').val() + '%0A'
			C4 = labelC4 + $(sectionC + 'C4').val() + '%0A'
			detail3 = C1 + C2 + C3 + C4

			sectionD = id + '-detail-'
			D1 = '*' + $(sectionD + 'D1').val() + '*' + '%0A'
			D2 = labelD2 + $(sectionD + 'D2').val() + '%0A'
			D3 = labelD3 + $(sectionD + 'D3').val() + '%0A'
			D4 = labelD4 + $(sectionD + 'D4').val() + '%0A'
			D5 = labelD5 + $(sectionD + 'D5').val() + '%0A'
			detail4 = D1 + D2 + D3 + D4 + D5

			sectionE = id + '-detail-'
			E1 = labelE1 + $(sectionE + 'E1').val() + '%0A'
			detail5 = E1

			detail6 = 'Saya sudah membaca dan setuju terhadap Syarat %26 Ketentuan dari MauMantenan (https://maumantenan.com/syarat-ketentuan).%0A%0ATerima kasih.'

			content = detail0 + '%0A' + detail1 + '%0A' + detail2 + '%0A' + detail3 + '%0A' + detail4 + '%0A' + detail5 + '%0A' + detail6
			content = content.split(' ').join('%20')
			url = 'https://wa.me/' + phone + '?text=' + content

		window.open(url,'_blank')
	}
	function order2() {
		let id = '#order-2'

			section0 = id + '-account-'
			O1 = 'Hai kak...' + '%0A%0A'
			O2 = 'Perkenalkan saya *' + $(section0 + '1').val() + '* dari ' + $(section0 + '2').val() + ', ingin memesan undangan dari MauMantenan. '
			O3 = 'Tema yang saya pilih adalah _*' + $(section0 + '3').val() + '*_ (' + $(section0 + '5').val() + ') seharga ' + $(section0 + '4').val() + '.%0A%0A'
			O4 = 'Berikut adalah rincian undangannya :' + '%0A'
			detail0 = O1 + O2 + O3 + O4

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
			C3 = labelC3 + $(sectionC + 'C3').val() + '%0A'
			C4 = labelC4 + $(sectionC + 'C4').val() + '%0A'
			detail3 = C1 + C2 + C3 + C4

			sectionD = id + '-detail-'
			D1 = '*' + $(sectionD + 'D1').val() + '*' + '%0A'
			D2 = labelD2 + $(sectionD + 'D2').val() + '%0A'
			D3 = labelD3 + $(sectionD + 'D3').val() + '%0A'
			D4 = labelD4 + $(sectionD + 'D4').val() + '%0A'
			D5 = labelD5 + $(sectionD + 'D5').val() + '%0A'
			detail4 = D1 + D2 + D3 + D4 + D5

			detail5 = 'Saya sudah membaca dan setuju terhadap Syarat %26 Ketentuan dari MauMantenan (https://maumantenan.com/syarat-ketentuan).%0A%0ATerima kasih.'

			content = detail0 + '%0A' + detail1 + '%0A' + detail2 + '%0A' + detail3 + '%0A' + detail4 + '%0A' + detail5
			content = content.split(' ').join('%20')
			url = 'https://wa.me/' + phone + '?text=' + content

		window.open(url,'_blank')
	}