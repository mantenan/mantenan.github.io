/*
 * Maumantenan
 * https://maumantenan.com
 * Digital Wedding Invitation
 * Copyright (c) 2020-2021
 */

// Pagespeed warning - Does not use passive listeners to improve scrolling performance
	jQuery.event.special.touchstart = {
		setup: function( _, ns, handle ) {
			this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") })
		}
	}
	jQuery.event.special.touchmove = {
		setup: function( _, ns, handle ) {
			this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") })
		}
	}
	jQuery.event.special.wheel = {
		setup: function( _, ns, handle ){
			this.addEventListener("wheel", handle, { passive: true })
		}
	}
	jQuery.event.special.mousewheel = {
		setup: function( _, ns, handle ){
			this.addEventListener("mousewheel", handle, { passive: true })
		}
	}

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

	$(window).scroll(scrolled)

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

			if (!image.prop('complete')) {
				image.on('load', function() {
					parent.css('height',image.height())
				})
			} else {
				parent.css('height',image.height())
			}
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

	$(window).resize(carouselMain)

// Modal
	$('#detail-1').on('show.bs.modal', function(e) {
		var modal = $(this)
			button = $(e.relatedTarget)
			content = button.data('detail')
		modal.find('.detail-1-content').html(content)
	})
	$('#detail-2').on('show.bs.modal', function(e) {
		var modal = $(this)
			button = $(e.relatedTarget)
			content = button.data('detail')
		modal.find('.detail-2-content').html(content)
	})

// Slick
	let slick = $('.swipe')
	if ( slick.length > 0 ) {
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

		let ua = navigator.userAgent.toLowerCase()
		if (ua.indexOf('safari') != -1) {
			if (ua.indexOf('chrome') > -1) {
				// console.log('This is Chrome')
			} else {
				// console.log('This is Safari')
				let style = document.createElement('style')
					style.innerHTML = '.slick-arrow:before { margin-top: -62px; } .slick-arrow:after { margin-top: -48px; } #preview .slick-arrow { top: calc(50% + 30px); }'
				document.querySelector('head').appendChild(style)
			}
		}
	}

// Anchor
	$('a[href^="#"]:not([data-toggle="pill"])').on('click', function(e) {
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
		pickerSource = '.ui-timepicker-standard'
		pickerParent = '.d-flex'
		pickerPopup = pickerParent + ' ' + pickerSource

	if ( timepicker.length > 0 ) {
		timepicker.timepicker({
			timeFormat: 'HH:mm',
			startHour: 6,
			interval: 30
		})

		timepicker.focus(function() {
			let picker = $(this)
				parent = $(this).closest('div')
			$(pickerPopup).remove()
			$('body > ' + pickerSource).clone().appendTo(parent)
			picker.next().find('a').click(function(e) {
				let selected = e.target.innerHTML
				picker.val(selected)
				timepicker.next().remove()
			})
		})

		$(document).click(function(e) {
			let target = $(e.target)
			if ( !target.closest(pickerParent).length ) {
				$(pickerPopup).remove()
			}
		})
	}

// Datepicker
	let datepicker = $('.datepicker')
	if ( datepicker.length > 0 ) {
		$('.datepicker').datepicker({
			format: 'DD, d M yyyy',
			language: 'id',
			locale: 'id',
			autoclose: true,
			todayHighlight: true,
			leftArrow: '',
			rightArrow: '&raquo;'
		}).on('show',function(e) {
			$('.datepicker-dropdown > *:not(:first-child)').css('display','none')
			$('.prev').html('<svg viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path></svg>')
			$('.next').html('<svg viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg>')
		})
		$('.datepicker-range').datepicker({
			format: 'd M yyyy',
			// language: 'id',
			locale: 'id',
			autoclose: true,
			todayHighlight: true
		}).on('show',function(e) {
			$('.datepicker-dropdown > *:not(:first-child)').css('display','none')
			$('.prev').html('<svg viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path></svg>')
			$('.next').html('<svg viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path></svg>')
		})

		$(document).on('DOMMouseScroll mousewheel scroll','.modal',function() {
			$('input').blur()
			$('.datepicker').datepicker('hide')
			$('.datepicker-range').datepicker('hide')
		})
	}
