import axios from 'axios'
import { v4 as uuid } from 'uuid'

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
}

const input = document.getElementById('input')
const message = document.getElementById('message')

function sendInputValue() {
  axios.post(submitter[input.name], {
    user: user.uuid,
    input: input.value,
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
