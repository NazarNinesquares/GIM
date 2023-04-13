var $ = jQuery;
$(document).ready(function () {

	if($('.main-nav').data('cryptocurrency')) {

		let curent_text = $('.main-nav__menu li:nth-child(2) a').text()
		$('.main-nav__menu li:nth-child(2) a').text($('.main-nav').data('cryptocurrency') + '-' + curent_text)
	}

    $('.item-faq__question').on('click', function () {
        if ($(this).hasClass('_active')) {
            $(this).removeClass('_active');
            $(this).next('.item-faq__answer').slideUp();
            return;
        }
        $('.item-faq__question').removeClass('_active');
        $(this).toggleClass('_active');
        $('.item-faq__answer').slideUp();
        $(this).next('.item-faq__answer').slideToggle();
    })

    $('.burger__wrapper').on('click', function () {
        $('.burger-nav').addClass('_active');
        $('.bottom-burger-nav').addClass('_active');
        $('body').addClass('lock');
    })

    $('.top-burger-nav__close').on('click', function () {
        $('.burger-nav').removeClass('_active');
        $('.bottom-burger-nav').removeClass('_active');
        $('body').removeClass('lock');
    })

    $('.right-burger-nav__item').on('click', function (e) {

		if($(this).find('a').attr('href') == '#') {

			e.preventDefault();
			e.stopPropagation();
			$('.right-burger-nav__item').removeClass('_active');
			$(this).addClass('_active');
			$('.left-burger-nav__spoiler').hide()//.removeClass('_active');
			$('.left-burger-nav__spoiler_' + $(this).attr('id')).fadeIn(300)//.addClass('_active');
		}
    })

    $('.left-burger-nav__name').on('click', function (e) {

		if($(this).find('a').attr('href') == '#') {

			e.preventDefault();
			e.stopPropagation();
			$('.left-burger-nav__contant').not($(this).next()).slideUp();
			$('.left-burger-nav__spoiler').not($(this).parent()).removeClass('_active');
			$(this).next().slideToggle();
			$(this).parent().toggleClass('_active');
		}
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

    if ($('.swiper').length) {

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
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });
    }

    let scrollPos = 0;
    $(window).scroll(function () {

        let st = $(this).scrollTop();
        if (st > scrollPos) {
            $('.masage, .header, .burger-nav__top, .burger-nav._tab .burger-nav__right, .burger-nav._tab .burger-nav__left').addClass('_scroll');
        } else {
            $('.masage, .header, .burger-nav__top, .burger-nav._tab .burger-nav__right, .burger-nav._tab .burger-nav__left').removeClass('_scroll');
        }
        scrollPos = st;


        if ($(window).scrollTop() > 0) {
            $('.header').addClass('_color-bg');
            $('.header__notice').addClass('_dt-hide');
        } else {
            $('.header').removeClass('_color-bg');
            $('.header__notice').removeClass('_dt-hide');
        }
    });

    $('.faq__show').on('click', function () {

        $('.faq__box').toggleClass('_hide');

        if ($('.faq__box').hasClass('_hide')) {
            $('.faq__show').text(gimvars.morequestions)
        } else {
            $('.faq__show').text(gimvars.lessquestions)
        }
    })

    $('.side-wallets__more').on('click', function () {

        $('.list-wallets__list').toggleClass('_hide');

        if ($('.list-wallets__list').hasClass('_hide')) {
            $('.side-wallets__more').text(gimvars.moreseven)
        } else {
            $('.side-wallets__more').text(gimvars.lesstext)
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

    $('.main-nav_ancher li a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('html').animate({
            scrollTop: $('section[data-ancher="' + $(this).data('ancher') + '"]').offset().top - $('header').height()
        }, 500);
    })

    $("header .main-nav__menu li, footer .right-footer__list li, .info-item-steps__link").click(function(event) {
        let target = $(this).find('a').attr('href');
        if (target.startsWith('#')) {
            event.preventDefault();

            if ($(target).length) {
                sctTo(target);
            } else {
                localStorage.setItem('target', target);
                window.location.href = "/";
            }
            return false
        }
    });
    if (localStorage.getItem('target')) {
        sctTo(localStorage.getItem('target'));
        localStorage.removeItem('target');
    }

    function sctTo(targ) {
        $('html, body').animate({
            scrollTop: $(targ).offset().top - 200
        }, 1000);
    }
})
