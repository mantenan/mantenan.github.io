/*
 * Mantenan
 * https://maumantenan.com
 * Online Wedding Invitation
 * Copyright (c) 2020
 */

// Image Error
	document.addEventListener('DOMContentLoaded', function(event) {
		document.querySelectorAll('img').forEach(function(img) {
			img.onerror = function() {
				this.src = 'assets/img/image-default.svg';
			};
		});
	});

// Document Ready
	function documentReady(fn) {
		if (document.readyState === 'complete' || document.readyState === 'interactive') {
			setTimeout(fn, 1)
		} else {
			document.addEventListener('DOMContentLoaded', fn)
		}
	}

documentReady(function() {

// Class
	function addClass(el, className) {
		var el = document.querySelectorAll(el)

		for (i = 0; i < el.length; i++) {
			if (el.classList) {
				el[i].classList.add(className)
			} else {
				el[i].className += ' ' + className;
			}
		}
	}

	function removeClass(el, className) {
		var el = document.querySelectorAll(el)

		for (i = 0; i < el.length; i++) {

			if (el[i].classList) {
				el[i].classList.remove(className)
			} else {
				el[i].className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
			}
		}
	}

	function toggleClass(el, className) {
		var el = document.querySelectorAll(el)

		for (i = 0; i < el.length; i++) {

			if (el[i].classList) {
				el[i].classList.toggle(className)
			} else {
				var classes = el[i].className.split(' ')
				var existingIndex = -1;
				for (var j = classes.length; j--;) {
					if (classes[j] === className)
						existingIndex = j;
				}

				if (existingIndex >= 0)
					classes.splice(existingIndex, 1)
				else
					classes.push(className)

				el[i].className = classes.join(' ')
			}
		}
	}

// Navbar
	window.addEventListener('scroll', function() {
		var nav = document.getElementById('navbar')

		if ( window.scrollY > 10 ) {
			nav.classList.add('scroll')
		} else {
			nav.classList.remove('scroll')
		}
	})

// Scroll
	function scrollTo(element, to, duration) {
		var start = element.scrollTop,
			change = to - start,
			currentTime = 0,
			increment = 20

		var animateScroll = function() {
			currentTime += increment
			var val = Math.easeInOutQuad(currentTime, start, change, duration)
			element.scrollTop = val
			if (currentTime < duration) {
				setTimeout(animateScroll, increment)
			}
		}

		animateScroll()
	}

	Math.easeInOutQuad = function (t, b, c, d) {
		t /= d/2
		if (t < 1) return c/2*t*t + b
		t--
		return -c/2 * (t*(t-2) - 1) + b
	}

	function backToTop() {
		var top = document.getElementsByClassName('back-top')

		for(var i = 0; i < top.length; i++) {
			top[i].onclick = function() {
				scrollTo(document.documentElement, 0, 500)
			}
		}
	}

	backToTop()

// Anchor
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault()
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			})
		})
	})

// Menu
	function desktopMenu() {
		removeClass('.navbar', 'show')
	}

	function mobileMenu() {
		var item = document.querySelectorAll('.nav-item a')

		for(var i = 0; i < item.length; i++) {
			item[i].onclick = function() {
				toggleClass('.navbar', 'show')
			}
		}

		var right = document.querySelectorAll('.link a.button')

		for(var i = 0; i < right.length; i++) {
			right[i].onclick = function() {
				if ( document.querySelector('.navbar').classList.contains('show') ) {
					toggleClass('.navbar', 'show')
				}
			}
		}
	}

	function mobileButton() {
		var menu = document.getElementsByClassName('button-menu')

		for(var i = 0; i < menu.length; i++) {
			menu[i].onclick = function() {
				toggleClass('.navbar', 'show')
			}
		}
	}

	mobileMenu()

// Collapse
	function collapse() {
		const open = document.querySelectorAll('[data-toggle="collapse"]')
		const menu = document.querySelector('.collapse')

		for(var i = 0; i < open.length; i++) {
			open[i].onclick = function() {
				toggleClass('.collapse', 'show')
			}
		}
	}

	collapse()

// Modal
	function modal() {
		var open	= document.getElementsByClassName('modal-open')
			close 	= document.getElementsByClassName('modal-close')
			all		= document.getElementsByClassName('modal')
			except	= document.getElementsByClassName('modal-content')

		for(var i = 0; i < open.length; i++) {
			open[i].onclick = function() {
				var target = this.getAttribute('href')
				toggleClass(target, 'open')
				addClass('body', 'freeze')
			}
		}

		for(var i = 0; i < close.length; i++) {
			close[i].onclick = function() {
				removeClass('.modal', 'open')
				removeClass('body', 'freeze')
			}
		}

		for(var i = 0; i < all.length; i++) {
			all[i].onclick = function() {
				removeClass('.modal', 'open')
				removeClass('body', 'freeze')
			}
		}

		for(var i = 0; i < except.length; i++) {
			except[i].onclick = function(e) {
				e.stopPropagation()
			}
		}
	}

	modal()

// Tab Content
	document.addEventListener('click', ({ target: { dataset: { id = '' }}}) => {
		if (id.length > 0) {
			document.querySelectorAll('[data-id^="tab"]').forEach(t => t.classList.remove('active'));
			document.querySelector('[data-id^="' + `${id}` + '"]').classList.add('active');
			document.querySelectorAll('[id^="tab"]').forEach(t => t.classList.remove('show'));
			document.querySelector(`#${id}`).classList.add('show');
		}
	})

// Filter
	function filter() {
		filterSelection('category-1')

		function filterSelection(c) {
			var x, i;
			x = document.getElementsByClassName('filter');
			if (c == 'all') c = '';
			for (i = 0; i < x.length; i++) {
				filterRemoveClass(x[i], 'show');
				if (x[i].className.indexOf(c) > -1) filterAddClass(x[i], 'show');
			}
		}

		function filterAddClass(element, name) {
			var i, arr1, arr2;
			arr1 = element.className.split(' ');
			arr2 = name.split(' ');
			for (i = 0; i < arr2.length; i++) {
				if (arr1.indexOf(arr2[i]) == -1) {
					element.className += ' ' + arr2[i];
				}
			}
		}

		function filterRemoveClass(element, name) {
			var i, arr1, arr2;
			arr1 = element.className.split(' ');
			arr2 = name.split(' ');
			for (i = 0; i < arr2.length; i++) {
				while (arr1.indexOf(arr2[i]) > -1) {
					arr1.splice(arr1.indexOf(arr2[i]), 1);
				}
			}
			element.className = arr1.join(' ');
		}

		var btnParent = document.getElementById('theme-filter')
		var btnChild = btnParent.getElementsByClassName('button-filter')
		for (var i = 0; i < btnChild.length; i++) {
			btnChild[i].addEventListener('click', function() {
				var current = document.getElementsByClassName('active')
				current[0].className = current[0].className.replace(' active', '')
				this.className += ' active'
			});
		}

		document.querySelector('.category-all').addEventListener('click', function() {
			filterSelection('all')
		})
		document.querySelector('.category-1').addEventListener('click', function() {
			filterSelection('category-1')
		})
		document.querySelector('.category-2').addEventListener('click', function() {
			filterSelection('category-2')
		})
		document.querySelector('.category-3').addEventListener('click', function() {
			filterSelection('category-3')
		})
	}

	filter()

// Chat
	function chat() {
		var chat = document.querySelectorAll('.chat-wa');
		for (var i=0; i<chat.length; i++) { 
			chat[i].onmouseover = function() { 
				addClass('.chat-wa','show')
			}
			chat[i].onmouseout = function() { 
				removeClass('.chat-wa','show')
			}
		}
		setTimeout(function() {
			removeClass('.chat-wa','show')
		},3000)
	}

	chat()

// Order
	function agree() {
		var term		= document.querySelector('.term')
			agreement	= document.querySelector('.agreement')
			agree		= document.querySelector('.agree')
			disagree	= document.querySelector('.disagree')

		agreement.addEventListener('click', function() {
			agreement.checked = false
			addClass('#term','open')
			addClass('body', 'freeze')
		})

		disagree.addEventListener('click', function() {
			removeClass('#term','open')
			removeClass('body', 'freeze')
		})

		agree.addEventListener('click', function() {
			agreement.checked = true
			removeClass('#term','open')
			removeClass('body', 'freeze')
		})

		term.onscroll = function() {
			if ( term.scrollTop === (term.scrollHeight - term.offsetHeight) ) {
				addClass('#term .gradient','d-none')
			} else {
				removeClass('#term .gradient','d-none')
			}
		}
	}

	agree()

	function order() {
		var paket = document.querySelector('[name="Paket"]')
			kategori = document.querySelector('[name="Kategori Tema"]')
			tema = document.querySelector('[name="Tema"]')
			temastatis = document.querySelector('[name="Tema Statis"]')

			prianama = document.querySelector('[name="Nama Pria"]')
			priapanggilan = document.querySelector('[name="Panggilan Pria"]')
			priaortu = document.querySelector('[name="Orang Tua Pria"]')
			priaalamat = document.querySelector('[name="Alamat Pria"]')

			wanitanama = document.querySelector('[name="Nama Wanita"]')
			wanitapanggilan = document.querySelector('[name="Panggilan Wanita"]')
			wanitaortu = document.querySelector('[name="Orang Tua Wanita"]')
			wanitaalamat = document.querySelector('[name="Alamat Wanita"]')

			akadnama = document.querySelector('[name="Nama Akad"]')
			akadtanggal = document.querySelector('[name="Tanggal Akad"]')
			akadjam = document.querySelector('[name="Jam Akad"]')
			akadalamat = document.querySelector('[name="Alamat Akad"]')

			acara1domain = document.querySelector('[name="Domain Acara 1"]')
			acara1nama = document.querySelector('[name="Nama Acara 1"]')
			acara1tanggal = document.querySelector('[name="Tanggal Acara 1"]')
			acara1jam = document.querySelector('[name="Jam Acara 1"]')
			acara1alamat = document.querySelector('[name="Alamat Acara 1"]')
			acara1peta = document.querySelector('[name="Peta Acara 1"]')

			acara2domain = document.querySelector('[name="Domain Acara 2"]')
			acara2nama = document.querySelector('[name="Nama Acara 2"]')
			acara2tanggal = document.querySelector('[name="Tanggal Acara 2"]')
			acara2jam = document.querySelector('[name="Jam Acara 2"]')
			acara2alamat = document.querySelector('[name="Alamat Acara 2"]')
			acara2peta = document.querySelector('[name="Peta Acara 2"]')

		paket.addEventListener('change', function() {
			var parent = (typeof this.selectedIndex === "undefined" ? window.event.srcElement : this);
				child = parent.value || parent.options[parent.selectedIndex].value;
				kategori1 = kategori.querySelector('[value="Dalem"]')
				kategori2 = kategori.querySelector('[value="Panggih"]')
				kategori3 = kategori.querySelector('[value="Custom"]')
			if ( child == 'Anteng' ) {
				addClass('.kategori','d-none')
				kategori.disabled = true
				kategori1.disabled = true
				kategori2.disabled = true
				kategori3.disabled = true
				addClass('.tema','d-none')
				removeClass('.tema-statis','d-none')
				temastatis.disabled = false
				addClass('.pria','d-none')
				prianama.disabled = true
				priapanggilan.disabled = true
				priaortu.disabled = true
				priaalamat.disabled = true
				addClass('.wanita','d-none')
				wanitanama.disabled = true
				wanitapanggilan.disabled = true
				wanitaortu.disabled = true
				wanitaalamat.disabled = true
				addClass('.akad','d-none')
				akadnama.disabled = true
				akadtanggal.disabled = true
				akadjam.disabled = true
				akadalamat.disabled = true
				addClass('.acara-1','d-none')
				acara1domain.disabled = true
				acara1nama.disabled = true
				acara1tanggal.disabled = true
				acara1jam.disabled = true
				acara1alamat.disabled = true
				acara1peta.disabled = true
				addClass('.acara-1>label>span:first-child','d-none')
				addClass('.acara-2','d-none')
				acara2domain.disabled = true
				acara2nama.disabled = true
				acara2tanggal.disabled = true
				acara2jam.disabled = true
				acara2alamat.disabled = true
				acara2peta.disabled = true
			} else if ( child == 'Rakyat' ) {
				removeClass('.kategori','d-none')
				kategori.disabled = false
				kategori1.disabled = false
				kategori2.disabled = true
				kategori3.disabled = true
				removeClass('.tema','d-none')
				addClass('.tema-statis','d-none')
				temastatis.disabled = true
				removeClass('.pria','d-none')
				prianama.disabled = false
				priapanggilan.disabled = false
				priaortu.disabled = false
				priaalamat.disabled = false
				removeClass('.wanita','d-none')
				wanitanama.disabled = false
				wanitapanggilan.disabled = false
				wanitaortu.disabled = false
				wanitaalamat.disabled = false
				removeClass('.akad','d-none')
				akadnama.disabled = false
				akadtanggal.disabled = false
				akadjam.disabled = false
				akadalamat.disabled = false
				removeClass('.acara-1','d-none')
				acara1domain.disabled = false
				acara1nama.disabled = false
				acara1tanggal.disabled = false
				acara1jam.disabled = false
				acara1alamat.disabled = false
				acara1peta.disabled = false
				addClass('.acara-1>label>span:first-child','d-none')
				addClass('.acara-2','d-none')
				acara2domain.disabled = true
				acara2nama.disabled = true
				acara2tanggal.disabled = true
				acara2jam.disabled = true
				acara2alamat.disabled = true
				acara2peta.disabled = true
			} else if ( child == 'Abdi' ) {
				removeClass('.kategori','d-none')
				kategori.disabled = false
				kategori1.disabled = true
				kategori2.disabled = false
				kategori3.disabled = true
				removeClass('.tema','d-none')
				addClass('.tema-statis','d-none')
				temastatis.disabled = true
				removeClass('.pria','d-none')
				prianama.disabled = false
				priapanggilan.disabled = false
				priaortu.disabled = false
				priaalamat.disabled = false
				removeClass('.wanita','d-none')
				wanitanama.disabled = false
				wanitapanggilan.disabled = false
				wanitaortu.disabled = false
				wanitaalamat.disabled = false
				removeClass('.akad','d-none')
				akadnama.disabled = false
				akadtanggal.disabled = false
				akadjam.disabled = false
				akadalamat.disabled = false
				removeClass('.acara-1','d-none')
				acara1domain.disabled = false
				acara1nama.disabled = false
				acara1tanggal.disabled = false
				acara1jam.disabled = false
				acara1alamat.disabled = false
				acara1peta.disabled = false
				addClass('.acara-1>label>span:first-child','d-none')
				addClass('.acara-2','d-none')
				acara2domain.disabled = true
				acara2nama.disabled = true
				acara2tanggal.disabled = true
				acara2jam.disabled = true
				acara2alamat.disabled = true
				acara2peta.disabled = true
			} else if ( child == 'Patih' ) {
				removeClass('.kategori','d-none')
				kategori.disabled = false
				kategori1.disabled = false
				kategori2.disabled = false
				kategori3.disabled = true
				removeClass('.tema','d-none')
				addClass('.tema-statis','d-none')
				temastatis.disabled = true
				removeClass('.pria','d-none')
				prianama.disabled = false
				priapanggilan.disabled = false
				priaortu.disabled = false
				priaalamat.disabled = false
				removeClass('.wanita','d-none')
				wanitanama.disabled = false
				wanitapanggilan.disabled = false
				wanitaortu.disabled = false
				wanitaalamat.disabled = false
				removeClass('.akad','d-none')
				akadnama.disabled = false
				akadtanggal.disabled = false
				akadjam.disabled = false
				akadalamat.disabled = false
				removeClass('.acara-1','d-none')
				acara1domain.disabled = false
				acara1nama.disabled = false
				acara1tanggal.disabled = false
				acara1jam.disabled = false
				acara1alamat.disabled = false
				acara1peta.disabled = false
				removeClass('.acara-1>label>span:first-child','d-none')
				removeClass('.acara-2','d-none')
				acara2domain.disabled = false
				acara2nama.disabled = false
				acara2tanggal.disabled = false
				acara2jam.disabled = false
				acara2alamat.disabled = false
				acara2peta.disabled = false
			} else if ( child == 'Sultan' ) {
				removeClass('.kategori','d-none')
				kategori.disabled = false
				kategori1.disabled = false
				kategori2.disabled = false
				kategori3.disabled = false
				removeClass('.tema','d-none')
				addClass('.tema-statis','d-none')
				temastatis.disabled = true
				removeClass('.pria','d-none')
				prianama.disabled = false
				priapanggilan.disabled = false
				priaortu.disabled = false
				priaalamat.disabled = false
				removeClass('.wanita','d-none')
				wanitanama.disabled = false
				wanitapanggilan.disabled = false
				wanitaortu.disabled = false
				wanitaalamat.disabled = false
				removeClass('.akad','d-none')
				akadnama.disabled = false
				akadtanggal.disabled = false
				akadjam.disabled = false
				akadalamat.disabled = false
				removeClass('.acara-1','d-none')
				acara1domain.disabled = false
				acara1nama.disabled = false
				acara1tanggal.disabled = false
				acara1jam.disabled = false
				acara1alamat.disabled = false
				acara1peta.disabled = false
				removeClass('.acara-1>label>span:first-child','d-none')
				removeClass('.acara-2','d-none')
				acara2domain.disabled = false
				acara2nama.disabled = false
				acara2tanggal.disabled = false
				acara2jam.disabled = false
				acara2alamat.disabled = false
				acara2peta.disabled = false
			} else {
				addClass('.kategori','d-none')
				kategori.disabled = true
				kategori1.disabled = true
				kategori2.disabled = true
				kategori3.disabled = true
				addClass('.tema','d-none')
				removeClass('.tema-statis','d-none')
				temastatis.disabled = false
				addClass('.pria','d-none')
				prianama.disabled = true
				priapanggilan.disabled = true
				priaortu.disabled = true
				priaalamat.disabled = true
				addClass('.wanita','d-none')
				wanitanama.disabled = true
				wanitapanggilan.disabled = true
				wanitaortu.disabled = true
				wanitaalamat.disabled = true
				addClass('.akad','d-none')
				akadnama.disabled = true
				akadtanggal.disabled = true
				akadjam.disabled = true
				akadalamat.disabled = true
				addClass('.acara-1','d-none')
				acara1domain.disabled = true
				acara1nama.disabled = true
				acara1tanggal.disabled = true
				acara1jam.disabled = true
				acara1alamat.disabled = true
				acara1peta.disabled = true
				addClass('.acara-1>label>span:first-child','d-none')
				addClass('.acara-2','d-none')
				acara2domain.disabled = true
				acara2nama.disabled = true
				acara2tanggal.disabled = true
				acara2jam.disabled = true
				acara2alamat.disabled = true
				acara2peta.disabled = true
			}

			kategori.selectedIndex = 0
			tema.selectedIndex = 0

			if ( tema.selectedIndex == 0 ) {
				addClass('.theme-1','d-none')
				addClass('.theme-2','d-none')
			}
		})

		kategori.addEventListener('change', function() {
			var parent = (typeof this.selectedIndex === "undefined" ? window.event.srcElement : this);
				child = parent.value || parent.options[parent.selectedIndex].value;
			if ( child == 'Dalem' ) {
				tema.disabled = false
				removeClass('.theme-1','d-none')
				addClass('.theme-2','d-none')
			} else if ( child == 'Panggih' ) {
				tema.disabled = false
				removeClass('.theme-2','d-none')
				addClass('.theme-1','d-none')
			} else if ( child == 'Custom' ) {
				tema.disabled = true
				removeClass('.theme-1','d-none')
				removeClass('.theme-2','d-none')
			} else {
				tema.disabled = false
				addClass('.theme-1','d-none')
				addClass('.theme-2','d-none')
			}
			tema.selectedIndex = 0
		})
	}

	order()

// Responsive
	var viewportWidth;
	var setViewportWidth = function () {
		viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	}

	var logWidth = function () {
		if (viewportWidth < 768) {
			mobileButton()
		} else {
			desktopMenu()
		}
	}

	setViewportWidth();
	logWidth();

	window.addEventListener('resize', function () {
		setViewportWidth();
		logWidth();
	}, false);

})