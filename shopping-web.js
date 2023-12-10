
var swiper = new Swiper('.swiper-container2' , {
  /*slidesPerView: 4,*/
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
  loop:true,
 autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      420: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  /*pagination: {
      el: '.swiper-pagination',
    },*/
});
//comments
var swiper = new Swiper('.swiper-container5', {
  effect: 'coverflow',
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

