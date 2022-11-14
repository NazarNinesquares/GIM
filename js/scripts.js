$('.item-faq__question').on('click', function () {
	$(this).toggleClass('_active');
	$(this).next('.item-faq__answer').slideToggle();
})

$('.burger').on('click', function () {
	$(this).toggleClass('_active');
	$('.main-nav').toggleClass('_active');
	$('body').toggleClass('lock');
})

$('.language').on('click', function () {
	$(this).toggleClass('_active');
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