// $(document).ready(function(){
//   $('.slider').slick({
//     dots: true,
//   });
// });

// Инициализируем Swiper
new Swiper('.image-slider', {
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

  // Автовысота
  // autoHeight: true,

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