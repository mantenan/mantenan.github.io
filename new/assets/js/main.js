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
		speed: 300,
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
				slidesToShow: 1
			}
		}]
	})
	$('#image .swipe').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
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
			'scrollTop': $target.offset().top - 100
		},500)
	})

// Order
	function order1() {}
	function order2() {}

// if ( window.matchMedia('(max-width: 767px)').matches ) {}