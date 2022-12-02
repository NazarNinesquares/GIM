$('.item-faq__question').on('click', function () {
	$(this).toggleClass('_active');
	$(this).next('.item-faq__answer').slideToggle();
})

$('.burger').on('click', function () {
	// $(this).toggleClass('_active');
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
	$('.left-burger-nav__spoiler').hide();
	$('.left-burger-nav__spoiler_' + $(this).attr('id')).show();
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
	} else {
		$('.header, .mainscreen').removeClass('_scroll');
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