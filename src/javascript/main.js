import 'normalize.css'
import '../styles/common'

import './Carousel/Carousel'

import Menu from './Menu/Menu'
import Popup from './Popup/Popup'
import FormSubmit from './FormSubmit/FormSubmit'

const main = async () => {
  new Menu()
  new Popup()
  new FormSubmit()
}

document.addEventListener('DOMContentLoaded', main)
