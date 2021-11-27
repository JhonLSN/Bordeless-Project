const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Main 
const mainStartBackground = document.querySelector('.main-login')
const mainStartBtnAnchor = document.querySelector('.main-login__wrapper-anchor')
const mainStartTitle = document.querySelector('.main-login__wrapper__authentication__title')
const mainStartUserIcon = document.querySelector('.main-login__wrapper__authentication__user-label')
const mainStartUserInput = document.querySelector('.main-login__wrapper__authentication__user-input')
const mainStartPasswordIcon = document.querySelector('.main-login__wrapper__authentication__password-label')
const mainStartPasswordInput = document.querySelector('.main-login__wrapper__authentication__password-input')
const mainStartCheck = document.querySelector('.check')
const mainStartAcces = document.querySelector('.main-login__wrapper__authentication__acess')
const mainStartCreatedAccont = document.querySelector('.main-login__wrapper__authentication__createAccont')

btnDark.addEventListener('click', () => {
  // Main Variables 
  mainStartBackground.classList.add('dark-mode')
  mainStartBtnAnchor.classList.add('dark-mode')
  mainStartTitle.classList.add('dark-mode')
  mainStartUserIcon.classList.add('dark-mode')
  mainStartUserInput.classList.add('dark-mode')
  mainStartPasswordIcon.classList.add('dark-mode')
  mainStartPasswordInput.classList.add('dark-mode')
  mainStartCheck.classList.add('dark-mode')
  mainStartAcces.classList.add('dark-mode')
  mainStartCreatedAccont.classList.add('dark-mode')

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})