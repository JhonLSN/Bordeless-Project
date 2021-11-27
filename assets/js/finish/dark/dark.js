const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Main 
const mainFinishBackground = document.querySelector('.main-finish')
const mainFinishBtnAnchor = document.querySelector('.main-finish__wrapper-anchor')
const mainFinishTitle = document.querySelector('.main-finish__wrapper__authentication__title')
const mainFinishAcces = document.querySelector('.main-finish__wrapper__authentication__acess')

btnDark.addEventListener('click', () => {
  // Main Variables 
  mainFinishBackground.classList.add('dark-mode')
  mainFinishBtnAnchor.classList.add('dark-mode')
  mainFinishTitle.classList.add('dark-mode')
  mainFinishAcces.classList.add('dark-mode')

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})