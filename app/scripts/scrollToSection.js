import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToSection = () => {
  const links = document.querySelectorAll('.js-link');

  if (!links.length) return;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const sectionId = link.getAttribute('href').slice(1);

      const section = document.getElementById(sectionId);

      if (document.body.dataset['offset']) {
        const offset = section.offsetTop + +document.body.dataset['offset'];

        gsap.to(window, {duration: 1, scrollTo: { y: offset }});
      } else {
        section.scrollIntoView();
      }

      const burger = document.querySelector('.burger');

      if (burger.classList.contains('burger--active')) {
        document.body.removeAttribute('style');
        burger.classList.remove('burger--active');
      }
    });
  });
};

export default ScrollToSection;