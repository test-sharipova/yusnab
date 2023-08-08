//menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    
        $('.about__slider').slick({
            prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg"></button>',
        });
   
      //меняется отображение лейбла у инпута в форме при фокусе и выборе
    const selects = document.querySelectorAll('.select');

    selects.forEach(select => {
    select.addEventListener('focus', () => {
        
        select.classList.add('select_active');
    });
});
});