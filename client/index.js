import axios from 'axios'
import { v4 as uuid } from 'uuid'
import eccrypto from 'eccrypto'

window.eccrypto = eccrypto

let user
const userData = localStorage.getItem('user')

if (!userData) {
  user = {
    name: prompt('Crea un alias para el reto (puede ser tu nombre).'),
    uuid: uuid(),
  }
  localStorage.setItem('user', JSON.stringify(user))
} else {
  user = JSON.parse(userData)
}

console.log(user)

const submitter = {
  lvl3: '/nivel/3/publicKey',
  lvl4: '/nivel/4/camaron',
  lvl5: '/nivel/5/firma',
  lvl6: '/nivel/6/impostores',
}

const input = document.getElementById('input')
const checkboxes = document.querySelectorAll('input.checksig')
const message = document.getElementById('message')

function sendInputValue() {
  const url = checkboxes.length ? submitter.lvl6 : submitter[input.name]
  const payload = checkboxes.length ? Array.from(checkboxes).map((c, i) => { if (c.checked) { return i + 1 } else { return 0 } }).filter(v => v > 0).join(',') : input.value
  axios.post(url, {
    user: user.uuid,
    input: payload,
  })
  .then(function (response) {
    console.log(response)
    if (response.data.replace) {
      message.innerText = response.data.message
    }

    let toggleColor = true;
    const flash = setInterval(() => {
      if (toggleColor) {
        message.style.background = '#ff0'
      } else {
        message.style.background = '#fff'
      }
      toggleColor = !toggleColor;
    }, 200)

    setTimeout(() => {
      clearInterval(flash)
    }, 1200)
  })
  .catch(function (error) {
    console.log(error)
  })
}

const button = document.getElementById('button')
if (button) {
  button.addEventListener('click', (ev) => {
    ev.preventDefault()
    sendInputValue()
  })
}
