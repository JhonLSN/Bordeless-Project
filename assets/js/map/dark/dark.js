const btnDark = document.querySelector('.dark')
const btnGlow = document.querySelector('.glow')

// Body
const body = document.body

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

// Places 
const placesBackground = document.querySelector('.main__wrapper__places')
const placesTitle = document.querySelector('.main__wrapper__places__title')
const placesPlane = document.querySelector('.main__wrapper__places__reference-point__plane')
const placesBank = document.querySelector('.main__wrapper__places__reference-point__bank')
const placesEmail = document.querySelector('.main__wrapper__places__reference-point__email')
const placesSchool = document.querySelector('.main__wrapper__places__reference-point__school')
const placesFarmacy = document.querySelector('.main__wrapper__places__reference-point__farmacy')
const placesHospital = document.querySelector('.main__wrapper__places__reference-point__hospital')
const placesChurch = document.querySelector('.main__wrapper__places__reference-point__church')
const placesConstruction = document.querySelector('.main__wrapper__places__reference-point__construction')
const placesWrench = document.querySelector('.main__wrapper__places__reference-point__wrench')
const placesShopping = document.querySelector('.main__wrapper__places__reference-point__shopping')
const placesGraduation = document.querySelector('.main__wrapper__places__reference-point__graduation')

// Graphics
const graphicBackground = document.querySelector('.main__wrapper__graphic')

// PopUp
const popUp = document.querySelector('.popUp__wrapper__box')
const popUpAccont = document.querySelector('.popUp__wrapper__box__navigation__list-1')
const popUpAddress = document.querySelector('.popUp__wrapper__box__navigation__list-2')
const popUpHelp = document.querySelector('.popUp__wrapper__box__navigation__list-3')
const popUpBack = document.querySelector('.popUp__wrapper__box__navigation__list-4')
const popUpNavigationRow = document.querySelector('.popUp__wrapper__box__navigation')
const popUpNavigationRowName = document.querySelector('.popUp__wrapper__box__panel__accont-name')
const popUpNavigationRowPhone = document.querySelector('.popUp__wrapper__box__panel__accont-phone')
const popUpNavigationRowEmail = document.querySelector('.popUp__wrapper__box__panel__accont-email')
const popUpNavigationRowPassword = document.querySelector('.popUp__wrapper__box__panel__accont-password')

btnDark.addEventListener('click', () => {
  // Body
  body.classList.add('dark-mode')

  // Header Variables
  header.classList.add('dark-mode')
  logo.classList.add('dark-mode')
  inputHeader.classList.add('dark-mode')
  inputIcon.classList.add('dark-mode')
  userIcon.classList.add('dark-mode')

  // Navigation Variables
  navigation.classList.add('dark-mode')
  navIconHouse.classList.add('dark-mode')
  navTextHouse.classList.add('dark-mode')
  navIconMessage.classList.add('dark-mode')
  navTextMessage.classList.add('dark-mode')
  navIconMap.classList.add('dark-mode')
  navTextMap.classList.add('dark-mode')
  navIconConfig.classList.add('dark-mode')
  navTextConfig.classList.add('dark-mode')
  navIconExit.classList.add('dark-mode')
  navTextExit.classList.add('dark-mode')

  // Places Variables
  placesBackground.classList.add('dark-mode')
  placesTitle.classList.add('dark-mode')
  placesPlane.classList.add('dark-mode')
  placesBank.classList.add('dark-mode')
  placesEmail.classList.add('dark-mode')
  placesSchool.classList.add('dark-mode')
  placesFarmacy.classList.add('dark-mode')
  placesHospital.classList.add('dark-mode')
  placesChurch.classList.add('dark-mode')
  placesConstruction.classList.add('dark-mode')
  placesWrench.classList.add('dark-mode')
  placesShopping.classList.add('dark-mode')
  placesGraduation.classList.add('dark-mode')

  // Graphic Variable
  graphicBackground.classList.add('dark-mode')

  //PopUp Variables
  popUp.classList.add('dark-mode')
  popUpAccont.classList.add('dark-mode')
  popUpAddress.classList.add('dark-mode')
  popUpHelp.classList.add('dark-mode')
  popUpBack.classList.add('dark-mode')
  popUpNavigationRow.classList.add('dark-mode')
  popUpNavigationRowName.classList.add('dark-mode')
  popUpNavigationRowPhone.classList.add('dark-mode')
  popUpNavigationRowEmail.classList.add('dark-mode')
  popUpNavigationRowPassword.classList.add('dark-mode')

  // Event 'click' Navigation PopUp
  btnAccont.addEventListener('click', () => {
    btnPanelAddress.style.display = 'none'
    btnPanelAccont.style.display = 'block'
    btnAccont.style.pointerEvents = 'none'
    btnAddress.style.pointerEvents = 'all'
    IconAccont.style.color = '#90e0ef'
    PAccont.style.color = '#90e0ef'
    IconAddress.style.color = '#212529'
    PAddress.style.color = '#212529'
  })

  btnAddress.addEventListener('click', () => {
    btnPanelAddress.style.display = 'block'
    btnPanelAccont.style.display = 'none'
    btnAccont.style.pointerEvents = 'all'
    btnAddress.style.pointerEvents = 'none'
    IconAddress.style.color = '#90e0ef'
    PAddress.style.color = '#90e0ef'
    IconAccont.style.color = '#212529'
    PAccont.style.color = '#212529'
  })

  btnDark.style.display = 'none'
  btnGlow.style.display = 'block'
})