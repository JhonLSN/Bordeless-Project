const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Main 
const mainHomeBackground = document.querySelector('.main')
const mainHomeAcces = document.querySelector('.main__wrapper__authentication a')

btnDark.addEventListener('click', () => {
  // Main Variables 
  mainHomeBackground.classList.add('dark-mode')
  mainHomeAcces.classList.add('dark-mode')

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})