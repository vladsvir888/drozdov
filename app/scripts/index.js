import LazyLoad from 'vanilla-lazyload';
import Swiper, { Navigation } from 'swiper';

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
    slidesPerView: 3.6,
    spaceBetween: 10,
    // slidesPerGroup: 4,
    // loopFillGroupWithBlank: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});