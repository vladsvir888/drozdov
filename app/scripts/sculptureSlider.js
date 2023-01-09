import Swiper, { Navigation  } from 'swiper';

const SculptureSlider = () => {
  new Swiper('.sculpture-slider', {
    loop: true,
    speed: 1000,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      500: {
        slidesPerView: 'auto',
      },
      1440: {
        slidesPerGroup: 4,
        slidesPerView: 'auto',
      }
    }
  });
};

export default SculptureSlider;