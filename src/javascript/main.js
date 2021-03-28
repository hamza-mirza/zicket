import 'normalize.css'
import '../styles/common'

import Menu from './Menu/Menu'
import Popup from './Popup/Popup'

const main = async () => {
  new Menu()
  new Popup()
}

document.addEventListener('DOMContentLoaded', main)
