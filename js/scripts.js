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

