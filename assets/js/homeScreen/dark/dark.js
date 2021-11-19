const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// header
const header = document.querySelector('.header__wrapper')
const logo = document.querySelector('.header__wrapper__logo-name')
const inputHeader = document.querySelector('.header__wrapper__input-search')
const inputIcon = document.querySelector('.header__wrapper__input i')
const userIcon = document.querySelector('.header__wrapper__user-icon')

// Navigation

const navigation = document.querySelector('.main__wrapper__navigation')
const navIconHouse = document.querySelector('.main__wrapper__navigation__sec-one #list-01 #list-01__icon')
const navTextHouse = document.querySelector('.main__wrapper__navigation__sec-one #list-01 #list-01__paragraph')
const navIconMessage = document.querySelector('.main__wrapper__navigation__sec-one #list-02 #list-02__icon')
const navTextMessage = document.querySelector('.main__wrapper__navigation__sec-one #list-02 #list-02__paragraph')
const navIconMap = document.querySelector('#list-03__icon')
const navTextMap = document.querySelector('#list-03__paragraph')
const navIconConfig = document.querySelector('.main__wrapper__navigation__sec-two #list-01 #list-01__icon')
const navTextConfig = document.querySelector('.main__wrapper__navigation__sec-two #list-01 #list-01__paragraph')
const navIconExit = document.querySelector('.main__wrapper__navigation__sec-two #list-02 #list-02__icon')
const navTextExit = document.querySelector('.main__wrapper__navigation__sec-two #list-02 #list-02__paragraph')

btnDark.addEventListener('click', () =>{
  // Header Variables
  header.classList.toggle('dark-mode')
  logo.classList.toggle('dark-mode')
  inputHeader.classList.toggle('dark-mode')
  inputIcon.classList.toggle('dark-mode')
  userIcon.classList.toggle('dark-mode')

  // Navigation Variables
  navigation.classList.toggle('dark-mode')   
  navIconHouse.classList.toggle('dark-mode')  
  navTextHouse.classList.toggle('dark-mode') 
  navIconMessage.classList.toggle('dark-mode') 
  navTextMessage.classList.toggle('dark-mode')  
  navIconMap.classList.toggle('dark-mode')  
  navTextMap.classList.toggle('dark-mode')  
  navIconConfig.classList.toggle('dark-mode')  
  navTextConfig.classList.toggle('dark-mode')  
  navIconExit.classList.toggle('dark-mode')  
  navTextExit.classList.toggle('dark-mode') 
})