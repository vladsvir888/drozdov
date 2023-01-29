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
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `
            <button class="btn ${className}">
              <img src="${arr[index]}" alt="">
            </button>
          `;
        }
      },
    });

    swiper.el.addEventListener('mouseover', (e) => {
      const { target } = e;

      if (target.classList.contains('swiper-pagination-bullet')) {
        target.click();
      }
    })

    swiper.el.addEventListener('mouseout', (e) => {
      const { target } = e;

      if (!target.classList.contains('swiper-pagination-bullet') && !target.classList.contains('swiper-pagination')) {
        const parent = target.closest('.product-slider');

        parent.querySelector('.swiper-pagination').querySelector('.swiper-pagination-bullet').click();
      }
    });
  });
};

export default ProductSlider;