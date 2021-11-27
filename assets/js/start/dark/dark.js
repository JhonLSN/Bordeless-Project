const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Main 
const mainStartBackground = document.querySelector('.main-start')
const mainStartBtnAnchor = document.querySelector('.main-start__wrapper-anchor')
const mainStartTitle = document.querySelector('.main-start__wrapper__authentication__title')
const mainStartAcces = document.querySelector('.main-start__wrapper__authentication__acess')

btnDark.addEventListener('click', () => {
  // Main Variables 
  mainStartBackground.classList.add('dark-mode')
  mainStartBtnAnchor.classList.add('dark-mode')
  mainStartTitle.classList.add('dark-mode')
  mainStartAcces.classList.add('dark-mode')

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})