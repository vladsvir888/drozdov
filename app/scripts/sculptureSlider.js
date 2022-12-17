import Swiper, { Navigation  } from 'swiper';

const SculptureSlider = () => {
  new Swiper('.sculpture-slider', {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: "auto",
      }
    }
  });
};

export default SculptureSlider;