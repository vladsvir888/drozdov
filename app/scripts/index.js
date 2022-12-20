// import LazyLoad from 'vanilla-lazyload';

import Accordion from './accordion';
import Animation from './animation';
import BurgerMenu from './burgerMenu';
import CallbackSlider from './callbackSlider';
import Form from './form';
import Header from './header';
import Modal from './modal';
import ProductSlider from './productSlider';
import scrollToSection from './scrollToSection';
import SculptureSlider from './sculptureSlider';

document.addEventListener('DOMContentLoaded', () => {
  // new LazyLoad();
  document.querySelectorAll('.accordion').forEach(accordion => new Accordion(accordion, 1));
  new BurgerMenu();
  SculptureSlider();
  ProductSlider();
  CallbackSlider();
  scrollToSection();
  Header();
  Form();
  Modal();
  Animation();
});