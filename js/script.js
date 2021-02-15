// $(document).ready(function(){
//   $('.slider').slick({
//     dots: true,
//   });
// });

// Инициализируем Swiper
var swiper1 = new Swiper('.swiper1', {
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Скролл
  scrollbar: {
    el: '.swiper-scrollbar',
    // Возможность перетаскивать скролл
    draggable: true
  },

  // Курсор перетаскивания
  grabCursor: true,
  
  // Количество слайдов для показа
  slidesPerView: 4,

  // Отступ между слайдами
  spaceBetween: 30,

  // Свободный режим
  freeMode: true,

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
  },  
  
  //Автопрокрутка
  // autoplay: {
  //   // Пауза между прокруткой
  //   delay: 1000,
  //   // Закончить на последнем слайде
  //   stopOnLastSlide: true,
  //   // Отключить после ручного переключения
  //   disableOnInteraction: true
  // },
   
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,     
    },
    320: {
      slidesPerView: 1,     
    },
  },
  
    // Автовысота
  // autoHeight: true,

  // Бесконечный слайдер
  // loop: true,

  
});

// Инициализируем Swiper
var newSwiper = new Swiper('.swiper2', {  

  // Курсор перетаскивания
  grabCursor: true,
  
  // Количество слайдов для показа
  slidesPerView: 2,

  // centeredSlides: true,
 

  // loopedSlides: 2,

  // slideDuplicateNextClass: 	'swiper-slide-duplicate-next',

  // slideNextClass: 'swiper-slide-next',

  // watchSlidesProgress: true,

  // watchSlidesVisibility: false,

  // watchOverflow: true,

  // slidesPerGroup: 2,

  // slidesPerColumn: 2,

  // slidesPerColumnFill:"row",

  // spaceBetween: 30,

  // Отступ между слайдами
  spaceBetween: 30,

  // Свободный режим
  freeMode: true,

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
  },
  
  // Скролл
  scrollbar: {
    el: '.swiper-scrollbar',
    // Возможность перетаскивать скролл
    draggable: true,
  },

  // Вертикальный слайдер
  direction: 'vertical',

  // watchSlidesVisibility: true,
  // Автовысота
  // autoHeight: true,  

  // slidesPerColumn: 1,

  
  // Бесконечный слайдер
  // loop: true,

  // Автопрокрутка
  // autoplay: {
  //   // Пауза между прокруткой
  //   delay: 1000,
  //   // Закончить на последнем слайде
  //   stopOnLastSlide: false,
  //   // Отключить после ручного переключения
  //   disableOnInteraction: true
  // },
});

$(function() {
  $(".volume2").click(function() {
      $(this).toggleClass("volume2-pressed");
  });
});