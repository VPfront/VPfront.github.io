/* 
document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn =  document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const closeAre = document.querySelector('.modal__shadow');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(еlement => {
        еlement.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);
    closeAre.addEventListener('click', switchModal);

    document.addEventListener('keydown', function (e) {
        if(e.keyCode === 27) {
            modal.classList.remove('modal--visible');
        }
    });
});
 */
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
        
    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    
      //initialize swiper when document ready
    var projects = new Swiper ('.swiper-projects', {
        loop: true,
        pagination: {
            el: '.pagination-projects',
            type: 'bullets',
            
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        

    });
    var sixStepsfraction = new Swiper ('.swiper-sixSteps', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-fraction',
            type: 'fraction',
        },
        
        navigation: {
            nextEl: '.swiper-button-nextSteps',
            prevEl: '.swiper-button-prevSteps',
        },
        


    });
    var sixSteps = new Swiper ('.swiper-sixSteps', {
        mode:'horizontal',
        loop: true,
        slideToClickedSlide:true,
        pagination: {
            el: '.pagination-sixSteps',
            type: 'bullets',
            
        },
        
        navigation: {
            nextEl: '.swiper-button-nextSteps',
            prevEl: '.swiper-button-prevSteps',
            
        },
        
        

    });
    $('#btn1').click(function(e) {
        e.preventDefault();
        $(".swiper-slide .swiper-slide-active").removeClass('swiper-slide-active');
        $(this).addClass('active');
        sixSteps.slideToloop(0, 1000, false);
    
    });
    
    
        
    
    

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');
    
    next.css('left', prev.width() + 10 + bullets.width() + 10);
    bullets.css('left', prev.width() + 14);
    
    var element_point = $('.card__pricetag').offset().top;
    var element_animated = false;
    var animate_delay = 100;
    $(window).scroll(function() {
        if (!element_animated && $(window).scrollTop() + window.innerHeight > element_point + animate_delay) {
        element_animated = true;
        $('.card__pricetag').animate({opacity:1, width:'90%', padding:'30px'}, 800, function() {
            $('.card__pricetag').animate({width:'80%', padding:'20px'}, 400);
        });
    }
    });
    
    new WOW().init();
    
    $(".control__form").validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
          // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: "required",
          // compound rule
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: {
                required: "Заполните поле Имя",
                minlength: "Имя не короче двух букв"
            },
            userPhone: "Заполните поле Phone",
            userEmail: {
                required: "Заполните поле Emali",
                email: "Введите в формате: name@domain.com"
            }
        }
    });
    $(".footer__form").validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: "required",
          // compound rule
            userComment: {
                required: true,
                
            }
        },
        messages: {
            userName: {
                required: "Заполните поле Имя",
                minlength: "Имя не короче двух букв"
            },
            userPhone: "Заполните поле Phone",
            userComment: {
                required: "Заполните поле Вопрос",
                
            }
        }
    });
    $(".modal__form").validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2
            },
            userComment:"required",
            userPhone: "required",
          // compound rule
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: {
                required: "Заполните поле Имя",
                minlength: "Имя не короче двух букв"
            },
            userComment:"Заполните поле Phone",
            userPhone: "Заполните поле Phone",
            userEmail: {
                required: "Заполните поле Emali",
                email: "Введите в формате: name@domain.com"
            }
        }
    });
    
    $('[type=tel]').mask('+47(000) 00-000',{placeholder:"+47(___) __-___"});
    


    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/map/map_icon64.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'images/ball.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });
    

    


});

jQuery(document).ready(function() {
    var btn = $('.up');
    $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});