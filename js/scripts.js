$('.item-faq__question').on('click', function () {
	$(this).toggleClass('_active');
	$(this).next('.item-faq__answer').slideToggle();
})

$('.burger').on('click', function () {
	$('.burger-nav').addClass('_active');
	$('.bottom-burger-nav').addClass('_active');
	$('body').addClass('lock');
})

$('.top-burger-nav__close').on('click', function () {
	$('.burger-nav').removeClass('_active');
	$('.bottom-burger-nav').removeClass('_active');
	$('body').removeClass('lock');
})

$('.right-burger-nav__item').on('click', function () {
	$('.right-burger-nav__item').removeClass('_active');
	$(this).addClass('_active');
	$('.left-burger-nav__spoiler').removeClass('_active');
	$('.left-burger-nav__spoiler_' + $(this).attr('id')).addClass('_active');
})

$('.left-burger-nav__name').on('click', function () {
	$('.left-burger-nav__contant').not($(this).next()).slideUp();
	$('.left-burger-nav__spoiler').not($(this).parent()).removeClass('_active');
	$(this).next().slideToggle();
	$(this).parent().toggleClass('_active');
})

$('.bottom-burger-nav__language, .left-burger-nav__spoiler_tab9 > left-burger-nav__name').on('click', function () {
	$('.left-burger-nav__contant').not($('.left-burger-nav__spoiler_tab9 .left-burger-nav__contant')).slideUp();
	$('.left-burger-nav__spoiler').not($('.left-burger-nav__spoiler_tab9')).removeClass('_active');
	$('.left-burger-nav__spoiler_tab9').toggleClass('_active');
	$('.left-burger-nav__spoiler_tab9 .left-burger-nav__contant').slideToggle();
})

$(document).mouseup(function (e) {

	let container = $('.language');
	
	if ($('.language').hasClass('_active')) {
		if (!$("a").is(e.target)
			&& !container.is(e.target)
			&& container.has(e.target).length === 0) {
			$('.language').removeClass('_active');
		}
	}
});

if($('.swiper').length) {

	new Swiper('.swiper', {
		
		navigation: {
			nextEl: '.steps-slider__next',
			prevEl: '.steps-slider__prev'
		},
		
		pagination: {
			el: '.steps-slider__pagination',

			type: 'bullets',
			clickable: true,
			renderBullet: function (index, className) {
				return'<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
	});
}

$(document).scroll(function() {

	let scrollDistance = $('.header').height() + $('.masage').height();
	let scrollTop = $(window).scrollTop();

	if (scrollTop > scrollDistance) {
		$('.header, .mainscreen').addClass('_scroll');
		$('.header').slideDown();
	} else {
		$('.header, .mainscreen').removeClass('_scroll');
		$('.header').removeAttr('style');
	}
});

$('.faq__show').on('click', function () {
	
	$('.faq__box').toggleClass('_hide');

	if ($('.faq__box').hasClass('_hide')) {
		$('.faq__show').text('Больше вопросов')
	} else {
		$('.faq__show').text('Меньше вопросов')
	}
})

$('.side-wallets__more').on('click', function () {
	
	$('.list-wallets__list').toggleClass('_hide');

	if ($('.list-wallets__list').hasClass('_hide')) {
		$('.side-wallets__more').text('Eще 7')
	} else {
		$('.side-wallets__more').text('Показать меньше')
	}
})


window.matchMedia('(max-width: 768px)').addEventListener('change', windowSize)

function windowSize(ma) {
	if ((ma && ma.matches) || $(window).width() <= 768) {
		$('.burger-nav').removeClass('_tab').addClass('_spoiler');
		$('.right-burger-nav__item').removeClass('_active');
		$('.left-burger-nav__spoiler, .right-burger-nav__item').removeClass('_active');
	} else {
		$('.burger-nav').removeClass('_spoiler').addClass('_tab');
		$('.left-burger-nav__contant').removeAttr('style');
		$('.left-burger-nav__spoiler').removeClass('_active');
		$('.left-burger-nav__spoiler_tab1').addClass('_active');
		$('.right-burger-nav__item#tab1').addClass('_active');
	}
}

windowSize();