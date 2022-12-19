import Swiper, {
  Pagination,
  EffectFade,
  Autoplay
} from 'swiper';

const CallbackSlider = () => {
  const callbackSlider = document.querySelector('.callback-slider');
  let arr;

  const swiper = new Swiper(callbackSlider, {
    slidesPerView: "auto",
    modules: [Pagination, EffectFade, Autoplay],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    noSwiping: true,
    noSwipingClass: 'swiper-slide',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    on: {
      beforeInit: () => {
        const slides = [...callbackSlider.querySelectorAll('.swiper-slide')];

        arr = slides.map(slide => {
          return slide.getAttribute('style').split(' ')[3];
        });
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `
            <button class="btn callback-slider__btn ${className}" style="background-image: ${arr[index]}"></button>
          `;
      }
    },
  });

  swiper.pagination.bullets.forEach(bullet => {
    bullet.addEventListener('mouseover', () => {
      bullet.click();
    });
  });
};

export default CallbackSlider;