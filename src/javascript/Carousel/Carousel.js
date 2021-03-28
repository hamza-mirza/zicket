const clientsCarousel = new Swiper('.js_clients-carousel', {
  slidesPerView: 'auto',

  spaceBetweenSlides: 30,
  navigation: {
    nextEl: '.js_clients-carousel-next',
    prevEl: '.js_clients-carousel-prev'
  },
  breakpoints: {
    300: {
      mousewheel: true,
      keyboard: true,
      slidesPerView: 1.1,
      spaceBetweenSlides: 10,
      allowSlidePrev: true,
      allowSlideNext: true
    },
    768: {
      slidesPerView: 'auto'
    },
    999: {
      centeredSlides: true,
      slidesPerView: 'auto'
    }
  }
})
