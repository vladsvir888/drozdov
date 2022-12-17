import Swiper, { Pagination, EffectFade  } from 'swiper';

const ProductSlider = () => {
  document.querySelectorAll('.product-slider').forEach(slider => {
    let arr;

    const swiper = new Swiper(slider, {
      modules: [Pagination, EffectFade],
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      on: {
        beforeInit: () => {
          const slides = [...slider.querySelectorAll('.swiper-slide')];

          arr = slides.map(slide => {
            return slide.querySelector('img').getAttribute('src');
          });
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `
            <button class="btn ${className}">
              <img src="${arr[index]}">
            </button>
          `;
        }
      },
    });

    swiper.pagination.bullets.forEach(bullet => {
      bullet.addEventListener('mouseover', () => {
        bullet.click();
      });
    });
  });
};

export default ProductSlider;