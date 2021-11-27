const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Main 
const mainResidenceBackground = document.querySelector('.main-residence')
const mainResidenceBtnAnchor = document.querySelector('.main-residence__wrapper-anchor')
const mainResidenceTitle = document.querySelector('.main-residence__wrapper__authentication__title')
const mainResidenceCep = document.querySelector('.main-residence__wrapper__authentication__formulary-cep')
const mainResidenceAddress = document.querySelector('.main-residence__wrapper__authentication__formulary-address')
const mainResidenceNumber = document.querySelector('.main-residence__wrapper__authentication__formulary-number')
const mainResidenceComplement = document.querySelector('.main-residence__wrapper__authentication__formulary-complement')
const mainResidenceCity = document.querySelector('.main-residence__wrapper__authentication__formulary-city')
const mainResidenceState = document.querySelector('.main-residence__wrapper__authentication__formulary-state')
const mainResidenceCheck = document.querySelector('.check')
const mainResidenceAcces = document.querySelector('.main-residence__wrapper__authentication__acess')

btnDark.addEventListener('click', () => {
  // Main Variables 
  mainResidenceBackground.classList.add('dark-mode')
  mainResidenceBtnAnchor.classList.add('dark-mode')
  mainResidenceTitle.classList.add('dark-mode')
  mainResidenceCep.classList.add('dark-mode')
  mainResidenceAddress.classList.add('dark-mode')
  mainResidenceNumber.classList.add('dark-mode')
  mainResidenceComplement.classList.add('dark-mode')
  mainResidenceCity.classList.add('dark-mode')
  mainResidenceState.classList.add('dark-mode')
  mainResidenceCheck.classList.add('dark-mode')
  mainResidenceAcces.classList.add('dark-mode')

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})