'use strict';

$(function () {
    if ($('#map').length !== 0 || $('#contacts-map').length !== 0) {
        var init = function init() {
            map = new ymaps.Map(id, {
                center: [53.389691, 83.711793],
                zoom: 16,
                controls: ['smallMapDefaultSet']
            });

            placemark = new ymaps.Placemark([53.389951, 83.711453], { iconCaption: 'Pro Мебель' }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'static/img/general/marker.png',
                iconImageSize: [30, 45],
                iconImageOffset: [-3, -42]
            });

            map.geoObjects.add(placemark);

            map.behaviors.disable('scrollZoom');
        };

        var id = $('#map').length ? 'map' : 'contacts-map';
        ymaps.ready(init);
        var map = void 0,
            placemark = void 0;
    }
});
'use strict';

$('.slider_achievements .slider__list').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    prevArrow: $('.slider_achievements .slider__arrow_prev'),
    nextArrow: $('.slider_achievements .slider__arrow_next'),
    responsive: [{
        breakpoint: 1000,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 760,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }
    }]
});
"use strict";
"use strict";
'use strict';

$(function () {

    /* Маска для формы телефона */
    $('.request__field_phone').mask('+7(000)000-00-00');

    /* Проверка и вывод сообщения после заполнения формы request */
    $('.request__btn[type="submit"]').click(function (e) {

        var check = true; // В данной переменной хранится состояние

        e.preventDefault(); // Отменяем действие по умолчанию

        // Находим каждое поле и делаем проверку
        $(e.target).parent().find('input').each(function () {
            $(this).removeClass('request__field_err'); // Убираем класс с ошибкой, если он есть

            if (!$(this).val()) {
                $(this).addClass('request__field_err'); // Если поле пустое, то добавляем класс ошибки
                check = false; // Меняем состояние на провальное
            }
        });

        if (!check) return false; // Если проверка не пройдена, выходим из функции

        // Если всё ок, то показываем модалку с сообщением
        $('.modal_message').bPopup();

        // Очищаем форму
        $(e.target).parent().find('input').each(function () {
            $(this).val('');
        });
    });

    // Если номер в поле для телефона введён не полностью, то очищаем поле
    $('.request__field_phone').focusout(function () {
        if ($(this).val().length < 16) {
            $(this).val('');
        }
    });

    /* Заказать звонок */
    $('.header__link_call').click(function () {
        $('.modal_call').bPopup();
    });
});
'use strict';

$(function () {
    $('.menu__btn').on('click', function () {
        $(this).toggleClass('menu__btn_open');
        $('.header__contact').toggleClass('visible');
    });
});
"use strict";
'use strict';

$(function () {
    $('.modal-form__field').focusin(function () {
        $(this).parent().addClass('modal-form__label_focus');
    });

    $('.modal-form__field').focusout(function () {
        $(this).parent().removeClass('modal-form__label_focus');
    });
});
'use strict';

$(function () {

    slider();
    $(window).resize(slider);

    function slider() {
        if ($(window).width() < 1000) {
            try {
                $('.news.section .news__list').slick({
                    slidesToShow: 2,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    responsive: [{
                        breakpoint: 760,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                });
            } catch (e) {}
        } else if ($('.news.section .news__list').hasClass('slick-slider')) {
            $('.news.section .news__list').slick('unslick');
        }
    }
});
"use strict";
"use strict";
"use strict";
'use strict';

$(function () {

    slider();
    $(window).resize(slider);

    function slider() {
        if ($(window).width() < 760) {
            try {
                $('.projects.section .projects__list').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows: false,
                    dots: true
                });
            } catch (e) {}
        } else if ($('.projects.section .projects__list').hasClass('slick-slider')) {
            $('.projects.section .projects__list').slick('unslick');
        }
    }
});
'use strict';

$(function () {

    // Функция проверки
    function checked() {
        $('.filter__item-check').each(function () {

            if (this.checked) {
                $('.project').hide();

                $(this).parent().addClass('filter__item_active');

                if ($(this).val() === 'all') {
                    $('.project').show();
                    return;
                }

                $('.project[data-project="' + $(this).val() + '"]').show();
            } else {
                $(this).parent().removeClass('filter__item_active');
            }
        });
    }

    checked();
    $('.filter__item-check').click(checked);
});
'use strict';

$(function () {

    $('.media__slider_news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.media__smallpics',
        arrows: false,
        dots: false,
        fade: true,
        responsive: [{
            breakpoint: 760,
            settings: {
                dots: true
            }
        }]
    });

    $('.media__smallpics').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.media__slider_news',
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: $('.media__arrow_prev'),
        nextArrow: $('.media__arrow_next')
    });

    // Функция проверки
    function checked() {
        $('.tab__radio').each(function () {

            if (this.checked) {
                $('.tab-content').finish();
                $('.tab-content').fadeOut(300).delay(300);

                $(this).parent().parent().addClass('tab_active');

                $('.tab-content[data-content="' + $(this).val() + '"]').fadeIn(300).delay(300);
            } else {
                $(this).parent().parent().removeClass('tab_active');
            }
        });
    }

    checked();
    $('.tab__radio').click(checked);

    $('.projects-item__show').on('click', function () {
        $(this).toggleClass('projects-item__show_active');
        $(this).next().finish().slideToggle();
    });

    slider();
    $(window).resize(slider);

    function slider() {
        if ($(window).width() < 760) {
            try {
                $('.projects-item__similar').slick({
                    slidesToShow: 1,
                    infinite: false,
                    arrows: false,
                    dots: true,
                    responsive: [{
                        breakpoint: 760,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                });
            } catch (e) {}
        } else if ($('.news.section .news__list').hasClass('slick-slider')) {
            $('.news.section .news__list').slick('unslick');
        }
    }
});
'use strict';

$(function () {

    var slider = $('.slider_reviews .slider__list');

    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 3,
        variableWidth: true,
        centerMode: true,
        infinite: false,
        speed: 1000,
        prevArrow: $('.slider_reviews .slider__arrow_prev'),
        nextArrow: $('.slider_reviews .slider__arrow_next'),
        draggable: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                variableWidth: false
            }
        }, {
            breakpoint: 760,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });

    if ($(window).width() > 1000) {

        $('.slider_reviews .slick-current').addClass('slider__item_active');
    }

    var current = void 0;

    slider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        if ($(window).width() > 1000) {
            current = $('.slider_reviews .slick-current');
            $(current).find('.slider__item-content').css('opacity', 0);
        }
    });

    slider.on('afterChange', function () {
        if ($(window).width() > 1000) {
            $(current).removeClass('slider__item_active');
            $(current).find('.slider__item-content').css('opacity', '');
            $('.slider_reviews .slick-current').addClass('slider__item_active');
        }
    });

    $('.slider_reviews .slider__item').click(function () {
        if ($(this).hasClass('slick-current')) return;

        slider.slick('slickGoTo', +$(this).index());
    });
});
"use strict";
"use strict";