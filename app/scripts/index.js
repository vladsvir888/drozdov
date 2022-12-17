// import LazyLoad from 'vanilla-lazyload';

import Accordion from './accordion';
import BurgerMenu from './burgerMenu';
import ProductSlider from './productSlider';
import SculptureSlider from './sculptureSlider';

document.addEventListener('DOMContentLoaded', () => {
  // new LazyLoad();

  document.querySelectorAll('.accordion').forEach(accordion => new Accordion(accordion, 1));

  new BurgerMenu();

  SculptureSlider();

  ProductSlider();
});