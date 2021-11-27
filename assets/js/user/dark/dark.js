const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Main 
const mainUserBackground = document.querySelector('.main-user')
const mainUserBtnAnchor = document.querySelector('.main-user__wrapper-anchor')
const mainUserTitle = document.querySelector('.main-user__wrapper__authentication__title')
const mainUserTravelerIcon = document.querySelector('.main-user__wrapper__authentication__whatUser-traveler a')
const mainUserTravelerParagraph = document.querySelector('.main-user__wrapper__authentication__whatUser-traveler p')
const mainUserNativeIcon = document.querySelector('.main-user__wrapper__authentication__whatUser-native a')
const mainUserNativeParagraph = document.querySelector('.main-user__wrapper__authentication__whatUser-native p')
const mainUserCheck = document.querySelector('.check')
const mainUserAcces = document.querySelector('.main-user__wrapper__authentication__acess')

btnDark.addEventListener('click', () => {
  // Main Variables 
  mainUserBackground.classList.add('dark-mode')
  mainUserBtnAnchor.classList.add('dark-mode')
  mainUserTitle.classList.add('dark-mode')
  mainUserTravelerIcon.classList.add('dark-mode')
  mainUserTravelerParagraph.classList.add('dark-mode')
  mainUserNativeIcon.classList.add('dark-mode')
  mainUserNativeParagraph.classList.add('dark-mode')
  mainUserCheck.classList.add('dark-mode')
  mainUserAcces.classList.add('dark-mode')

  if (mainUserTitle.className !== 'main-user__wrapper__authentication__title') {
    optionPlane.addEventListener('click', () => {
      plane.style.background = '#90e0ef'
      planeIcon.style.color = '#495057'
      native.style.background = '#495057'
      nativeIcon.style.color = '#90e0ef'
    })

    optionNative.addEventListener('click', () => {
      native.style.background = '#90e0ef'
      nativeIcon.style.color = '#495057'
      plane.style.background = '#495057'
      planeIcon.style.color = '#90e0ef'

    })
  }

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})