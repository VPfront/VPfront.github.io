/* document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn =  document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(еlement => {
        еlement.addEventListener('click', switchModal);
    });
    closeBtn.addEventListener('click', switchModal);
}); */

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
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        

    });
    var mySwiper = new Swiper ('.swiper-container-six', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-fraction',
            type: 'fraction',
        },
        
        navigation: {
            nextEl: '.swiper-button-next-six',
            prevEl: '.swiper-button-prev-six',
        },
        


    });
    var mySwiper = new Swiper ('.swiper-container-six', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next-six',
            prevEl: '.swiper-button-prev-six',
        },
        

    });
    var swiper = new Swiper('.swiper-container-six', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, step__number) {
                return '<span class="' + step__number + '">' + (index + 1) + '</span>';
            },
        },
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