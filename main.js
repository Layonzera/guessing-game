// variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', reset)

// Funções
function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')

  inputVerify(inputNumber)

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
  console.log(xAttempts)
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function reset(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function inputVerify(inputNumber) {
  if (inputNumber.value === '') {
    alert('Invalid value')
    inputNumber.value = ''
    xAttempts--
  } else {
    if (Number(inputNumber.value < 0 || inputNumber.value > 10)) {
      alert('Please, enter a number between 0 and 10.')
      inputNumber.value = ''
      xAttempts--
    }
  }
}
