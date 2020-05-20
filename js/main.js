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