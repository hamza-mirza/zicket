class Menu {
  constructor() {
    this.trigger = document.querySelector('.js_menu-trigger')
    this.menuList = document.querySelector('.js_menu-list')
    this.events()
  }

  events() {
    this.trigger.addEventListener('click', () => this.handleToggleMenu())
  }

  handleToggleMenu() {
    this.menuList.classList.toggle('nav__links--visible')
    document.body.classList.toggle('pause-scroll')
  }
}

export default Menu
