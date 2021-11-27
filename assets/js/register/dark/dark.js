const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Main 
const mainRegisterBackground = document.querySelector('.main-register')
const mainRegisterBtnAnchor = document.querySelector('.main-register__wrapper-anchor')
const mainRegisterTitle = document.querySelector('.main-register__wrapper__authentication__title')
const mainRegisterUserIcon = document.querySelector('.main-register__wrapper__authentication__user-label')
const mainRegisterUserInput = document.querySelector('.main-register__wrapper__authentication__user-input')
const mainRegisterEmailIcon = document.querySelector('.main-register__wrapper__authentication__email-label')
const mainRegisterEmailInput = document.querySelector('.main-register__wrapper__authentication__email-input')
const mainRegisterPasswordIcon = document.querySelector('.main-register__wrapper__authentication__password-label')
const mainRegisterPasswordInput = document.querySelector('.main-register__wrapper__authentication__password-input')
const mainRegisterPasswordConfirmIcon = document.querySelector('.main-register__wrapper__authentication__password-confirm-label')
const mainRegisterPasswordConfirmInput = document.querySelector('.main-register__wrapper__authentication__password-confirm-input')
const mainRegisterCheck = document.querySelector('.check')
const mainRegisterAcces = document.querySelector('.main-register__wrapper__authentication__acess')

btnDark.addEventListener('click', () => {
  // Main Variables 
  mainRegisterBackground.classList.add('dark-mode')
  mainRegisterBtnAnchor.classList.add('dark-mode')
  mainRegisterTitle.classList.add('dark-mode')
  mainRegisterUserIcon.classList.add('dark-mode')
  mainRegisterUserInput.classList.add('dark-mode')
  mainRegisterEmailIcon.classList.add('dark-mode')
  mainRegisterEmailInput.classList.add('dark-mode')
  mainRegisterPasswordIcon.classList.add('dark-mode')
  mainRegisterPasswordInput.classList.add('dark-mode')
  mainRegisterPasswordConfirmIcon.classList.add('dark-mode')
  mainRegisterPasswordConfirmInput.classList.add('dark-mode')
  mainRegisterCheck.classList.add('dark-mode')
  mainRegisterAcces.classList.add('dark-mode')

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})