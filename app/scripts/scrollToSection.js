const scrollToSection = () => {
  const links = document.querySelectorAll('.js-link');

  if (!links.length) return;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const sectionId = link.dataset.link;

      gsap.to(window, {duration: 1, scrollTo:{ y: `#${sectionId}` }});

      // const section = document.getElementById(sectionId);

      // section.scrollIntoView();

      const burger = document.querySelector('.burger');

      if (burger.classList.contains('burger--active')) {
        document.body.removeAttribute('style');
        burger.classList.remove('burger--active');
      }
    });
  });
};

export default scrollToSection;