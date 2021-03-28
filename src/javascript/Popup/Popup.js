class Popup {
  constructor() {
    this.popupTrigger = document.querySelector('.js_popup-trigger')
    this.popup = document.querySelector('.js_popup')
    this.overlay = document.querySelector('.js_overlay')
    this.popupClose = document.querySelector('.js_close-popup')
    this.events()
  }
  events() {
    this.popupTrigger.addEventListener('click', () => this.handleLaunchPopup())
    this.popupClose.addEventListener('click', () => this.handleClosePopup())
  }

  handleLaunchPopup() {
    this.popup.classList.add('popup--visible')
    this.overlay.classList.add('overlay--visible')
    document.body.classList.add('pause-scroll')
  }

  handleClosePopup() {
    this.popup.classList.remove('popup--visible')
    this.overlay.classList.remove('overlay--visible')
    document.body.classList.remove('pause-scroll')
  }
}

export default Popup
