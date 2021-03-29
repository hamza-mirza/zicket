import Axios from 'axios'

class FormSubmit {
  constructor() {
    this.input = document.querySelector('.js_input')
    this.submit = document.querySelector('.js_submit')
    this.handleSubmit()
  }
  handleSubmit() {
    this.submit.addEventListener('click', async e => {
      e.preventDefault()
      let value = this.input.value
      if (value) {
        try {
          const request = await Axios.post('https://frontend-trial-api.qa.parallax.dev/api/newsletter', { email: value })
          console.log(request)
        } catch (e) {
          console.log('Something went wrong.')
        }
      } else {
        alert('please enter your email address.')
      }
    })
  }
}

export default FormSubmit
