import LazyLoad from 'vanilla-lazyload';
import Swiper, { Navigation, Pagination, EffectFade  } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  new LazyLoad();

  // accordion
  class Accordion {
    static selectors = {
      accordion: '.accordion',
      accordion_item: '.accordion__item',
      accordion_btn: '.accordion__btn',
      accordion_content: '.accordion__content',
      accordion_item_active: '.accordion__item--active'
    }

    static classes = {
      accordion_btn: 'accordion__btn',
      accordion_item_active: 'accordion__item--active'
    }

    constructor(element, index) {
      this.accordion = element;

      this.accordion.addEventListener('click', this.onClick.bind(this));

      this.items = this.accordion.querySelectorAll(Accordion.selectors.accordion_item);

      if (this.items.length > index && index >= 0) {
        this.toggle(this.items[index]);
      }
    }

    onClick(e) {
      const {
        target
      } = e;

      if (!target.classList.contains(Accordion.classes.accordion_btn)) return;

      const accordion = target.closest(Accordion.selectors.accordion);

      const accordionItem = target.closest(Accordion.selectors.accordion_item);

      const accordionItemActive = accordion.querySelector(Accordion.selectors.accordion_item_active);

      if (accordionItemActive && accordionItemActive !== accordionItem) {
        this.toggle(accordionItemActive);
      }

      this.toggle(accordionItem);
    }

    toggle(element) {
      const accordionContent = element.lastElementChild;
      const accordionBtn = element.firstElementChild;

      if (!accordionContent.style.maxHeight) {
        element.classList.add(Accordion.classes.accordion_item_active);
        accordionBtn.setAttribute('aria-expanded', true);
        accordionContent.style.maxHeight = `${accordionContent.scrollHeight / parseInt(window.getComputedStyle(document.body).fontSize)}rem`;
      } else {
        element.classList.remove(Accordion.classes.accordion_item_active);
        accordionBtn.setAttribute('aria-expanded', false);
        accordionContent.removeAttribute('style');
      }
    }
  }

  document.querySelectorAll(Accordion.selectors.accordion).forEach(accordion => new Accordion(accordion, 1));

  // burger-menu
  class BurgerMenu {
    static selectors = {
      burger: '.burger',
      burgerMenu: '.burger-menu'
    }

    constructor() {
      this.burger = document.querySelector(BurgerMenu.selectors.burger);
      this.burgerMenu = document.querySelector(BurgerMenu.selectors.burgerMenu);

      this.burger.addEventListener('click', this.toggle.bind(this));
    }

    toggle(e) {
      const { target } = e;

      if (!target.classList.contains('burger--active')) {
        this.burger.classList.add('burger--active');
        this.burger.setAttribute('aria-expanded', true);
        document.body.style.overflowY = 'hidden';
      } else {
        this.burger.classList.remove('burger--active');
        this.burger.setAttribute('aria-expanded', false);
        document.body.removeAttribute('style');
      }
    }
  }

  new BurgerMenu();

  // sculpture-slider
  new Swiper('.sculpture-slider', {
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

  // product-slider
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
            return slide.querySelector('img').getAttribute('data-src');
          });
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `
            <div class="${className}">
              <img src="${arr[index]}">
            </div>
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
});