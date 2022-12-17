class BurgerMenu {
  static selectors = {
    burger: '.burger',
    burgerMenu: '.burger-menu',
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

export default BurgerMenu;