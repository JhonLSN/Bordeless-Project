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

// Chat
const chatBackground = document.querySelector('.main__wrapper__chat')
const chatSupportBox = document.querySelector('.main__wrapper__chat__support')
const chatSupportPhoto = document.querySelector('.main__wrapper__chat__support-photo')
const chatSupportName = document.querySelector('.main__wrapper__chat__support-information-name')
const chatSupportStatus = document.querySelector('.main__wrapper__chat__support-information-text')
const chatSupportMessage = document.querySelector('.main__wrapper__chat__support-information-text-message')
const chatSupportTime = document.querySelector('.main__wrapper__chat__support-eraser-time')
const chatSupportEraser = document.querySelector('.main__wrapper__chat__support-eraser')
const chatNewUserBox = document.querySelector('.main__wrapper__chat__user')
const chatNewUserPhoto = document.querySelector('.main__wrapper__chat__user-photo')
const chatNewUserName = document.querySelector('.main__wrapper__chat__user-information-name')
const chatNewUserStatus = document.querySelector('.main__wrapper__chat__user-information-text')
const chatNewUserMessage = document.querySelector('.main__wrapper__chat__user-information-text-message')
const chatNewUserTime = document.querySelector('.main__wrapper__chat__user-eraser-time')
const chatNewUserEraser = document.querySelector('.main__wrapper__chat__user-eraser')
const chatIconNew = document.querySelector('.new-chat__wrapper')

// Send - Status
const sendBackground = document.querySelector('.main__wrapper__send')
const sendSupport = document.querySelector('.main__wrapper__send__support')
const sendNavigation = document.querySelector('.main__wrapper__send__support__navigation')
const sendPhoto = document.querySelector('.main__wrapper__send__support__navigation-photo')
const sendNavName = document.querySelector('.main__wrapper__send__support__navigation__status-name')
const sendStatus = document.querySelector('.main__wrapper__send__support__navigation__status-situation')
const sendIconSearch = document.querySelector('.search-icon')
const sendIconEllipsis = document.querySelector('.ellipsis-icon')
const sendMessageBackground = document.querySelector('.main__wrapper__send__support__messege')
const sendFooter = document.querySelector('.main__wrapper__send__support__footer')
const sendFooterIconSmile = document.querySelector('.smile-icon')
const sendFooterIconPaperClip = document.querySelector('.paperclip-icon')
const sendFooterIconSend = document.querySelector('.send-icon')

// Send - New User
const sendNewUser = document.querySelector('.main__wrapper__send__new-user')
const sendNavigationNewUser = document.querySelector('.main__wrapper__send__new-user__navigation')
const sendPhotoNewUser = document.querySelector('.main__wrapper__send__new-user__navigation-photo')
const sendNavNameNewUser = document.querySelector('.main__wrapper__send__new-user__navigation__status-name')
const sendStatusNewUser = document.querySelector('.main__wrapper__send__new-user__navigation__status-situation')
const sendIconSearchNewUser = document.querySelector('.main__wrapper__send__new-user__navigation .search-icon')
const sendIconEllipsisNewUser = document.querySelector('.main__wrapper__send__new-user__navigation .ellipsis-icon')
const sendMessageBackgroundNewUser = document.querySelector('.main__wrapper__send__new-user__messege')
const sendFooterNewUser = document.querySelector('.main__wrapper__send__new-user__footer')
const sendFooterIconSmileNewUser = document.querySelector('.main__wrapper__send__new-user__footer .smile-icon')
const sendFooterIconPaperClipNewUser = document.querySelector('.main__wrapper__send__new-user__footer .paperclip-icon')
const sendFooterIconSendNewUser = document.querySelector('.main__wrapper__send__new-user__footer .send-icon')

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

  // Chat Variables
  chatBackground.classList.add('dark-mode')
  chatSupportBox.classList.add('dark-mode')
  chatSupportPhoto.classList.add('dark-mode')
  chatSupportName.classList.add('dark-mode')
  chatSupportStatus.classList.add('dark-mode')
  chatSupportMessage.classList.add('dark-mode')
  chatSupportTime.classList.add('dark-mode')
  chatSupportEraser.classList.add('dark-mode')
  chatNewUserBox.classList.add('dark-mode')
  chatNewUserPhoto.classList.add('dark-mode')
  chatNewUserName.classList.add('dark-mode')
  chatNewUserStatus.classList.add('dark-mode')
  chatNewUserMessage.classList.add('dark-mode')
  chatNewUserTime.classList.add('dark-mode')
  chatNewUserEraser.classList.add('dark-mode')
  chatIconNew.classList.add('dark-mode')

  // Send Variables
  sendBackground.classList.add('dark-mode')
  sendNavigation.classList.add('dark-mode')
  sendPhoto.classList.add('dark-mode')
  sendNavName.classList.add('dark-mode')
  sendStatus.classList.add('dark-mode')
  sendIconSearch.classList.add('dark-mode')
  sendIconEllipsis.classList.add('dark-mode')
  sendMessageBackground.classList.add('dark-mode')
  sendFooter.classList.add('dark-mode')
  sendFooterIconSmile.classList.add('dark-mode')
  sendFooterIconPaperClip.classList.add('dark-mode')
  sendFooterIconSend.classList.add('dark-mode')
  sendNewUser.classList.add('dark-mode')
  sendNavigationNewUser.classList.add('dark-mode')
  sendPhotoNewUser.classList.add('dark-mode')
  sendNavNameNewUser.classList.add('dark-mode')
  sendStatusNewUser.classList.add('dark-mode')
  sendIconSearchNewUser.classList.add('dark-mode')
  sendIconEllipsisNewUser.classList.add('dark-mode')
  sendMessageBackgroundNewUser.classList.add('dark-mode')
  sendFooterNewUser.classList.add('dark-mode')
  sendFooterIconSmileNewUser.classList.add('dark-mode')
  sendFooterIconPaperClipNewUser.classList.add('dark-mode')
  sendFooterIconSendNewUser.classList.add('dark-mode')

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