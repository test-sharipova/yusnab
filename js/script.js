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
        var slider = $('.about__slider');
        $('.sl-count__total').text( slider.slick("getSlick").slideCount);
        slider.on("afterChange", function(event , slick , currentSlide) {
            $('.sl-count__current').text(currentSlide + 1);
        });

    //table popup
  $('.table__row__photo').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
    });
//map gallery popup
    $('.map__gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Загрузка изображения #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        });
//sertificat popup
    $('.prov__wrapper').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Загрузка изображения #%curr%...',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
      });
    
  //меняется стили label при заполненности инпут

$('input').change(function() {
    let el = $(this).parent();
    if ($(this).val()) {
      el.addClass('form__input__wrapper_active');
    
    } 
    else {
    
      el.removeClass('form__input__wrapper_active');
    }
  });
  $('select').change(function() {
    let el = $(this).parent();
    if ($(this).val()) {
      el.addClass('form__select__wrapper_active');
    
    } 
    else {
    
      el.removeClass('form__select__wrapper_active');
    }
  });

  //modal 
  $('.consult').on('click', function() {
    $('.overlay, .modal').fadeIn();
});

  $('.modal__close, .overlay').on('click', function() {
    $('.overlay, .modal').fadeOut();
    
});

//select 

});