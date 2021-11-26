const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Main 
const mainLoginBackground = document.querySelector('.main-login')
const mainLoginBtnAnchor = document.querySelector('.main-login__wrapper-anchor')
const mainLoginTitle = document.querySelector('.main-login__wrapper__authentication__title')
const mainLoginUserIcon = document.querySelector('.main-login__wrapper__authentication__user-label')
const mainLoginUserInput = document.querySelector('.main-login__wrapper__authentication__user-input')
const mainLoginPasswordIcon = document.querySelector('.main-login__wrapper__authentication__password-label')
const mainLoginPasswordInput = document.querySelector('.main-login__wrapper__authentication__password-input')
const mainLoginCheck = document.querySelector('.check')
const mainLoginAcces = document.querySelector('.main-login__wrapper__authentication__acess')
const mainLoginCreatedAccont = document.querySelector('.main-login__wrapper__authentication__createAccont')

btnDark.addEventListener('click', () => {
  // Main Variables 
  mainLoginBackground.classList.add('dark-mode')
  mainLoginBtnAnchor.classList.add('dark-mode')
  mainLoginTitle.classList.add('dark-mode')
  mainLoginUserIcon.classList.add('dark-mode')
  mainLoginUserInput.classList.add('dark-mode')
  mainLoginPasswordIcon.classList.add('dark-mode')
  mainLoginPasswordInput.classList.add('dark-mode')
  mainLoginCheck.classList.add('dark-mode')
  mainLoginAcces.classList.add('dark-mode')
  mainLoginCreatedAccont.classList.add('dark-mode')

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})