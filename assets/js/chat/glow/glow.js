btnGlow.addEventListener('click', () => {
  // Body
  body.classList.remove('dark-mode')

  // Header Variables
  header.classList.remove('dark-mode')
  logo.classList.remove('dark-mode')
  inputHeader.classList.remove('dark-mode')
  inputIcon.classList.remove('dark-mode')
  userIcon.classList.remove('dark-mode')

  // Navigation Variables
  navigation.classList.remove('dark-mode')
  navIconHouse.classList.remove('dark-mode')
  navTextHouse.classList.remove('dark-mode')
  navIconMessage.classList.remove('dark-mode')
  navTextMessage.classList.remove('dark-mode')
  navIconMap.classList.remove('dark-mode')
  navTextMap.classList.remove('dark-mode')
  navIconConfig.classList.remove('dark-mode')
  navTextConfig.classList.remove('dark-mode')
  navIconExit.classList.remove('dark-mode')
  navTextExit.classList.remove('dark-mode')

  // Chat Variables
  chatBackground.classList.remove('dark-mode')
  chatSupportBox.classList.remove('dark-mode')
  chatSupportPhoto.classList.remove('dark-mode')
  chatSupportName.classList.remove('dark-mode')
  chatSupportStatus.classList.remove('dark-mode')
  chatSupportMessage.classList.remove('dark-mode')
  chatSupportTime.classList.remove('dark-mode')
  chatSupportEraser.classList.remove('dark-mode')
  chatNewUserBox.classList.remove('dark-mode')
  chatNewUserPhoto.classList.remove('dark-mode')
  chatNewUserName.classList.remove('dark-mode')
  chatNewUserStatus.classList.remove('dark-mode')
  chatNewUserMessage.classList.remove('dark-mode')
  chatNewUserTime.classList.remove('dark-mode')
  chatNewUserEraser.classList.remove('dark-mode')
  chatIconNew.classList.remove('dark-mode')

  // Send Variables
  sendNavigation.classList.remove('dark-mode')
  sendPhoto.classList.remove('dark-mode')
  sendNavName.classList.remove('dark-mode')
  sendStatus.classList.remove('dark-mode')
  sendIconSearch.classList.remove('dark-mode')
  sendIconEllipsis.classList.remove('dark-mode')
  sendFooter.classList.remove('dark-mode')
  sendFooterIconSmile.classList.remove('dark-mode')
  sendFooterIconPaperClip.classList.remove('dark-mode')
  sendFooterIconSend.classList.remove('dark-mode')

  //PopUp Variables
  popUp.classList.remove('dark-mode')
  popUpAccont.classList.remove('dark-mode')
  popUpAddress.classList.remove('dark-mode')
  popUpHelp.classList.remove('dark-mode')
  popUpBack.classList.remove('dark-mode')
  popUpNavigationRow.classList.remove('dark-mode')
  popUpNavigationRowName.classList.remove('dark-mode')
  popUpNavigationRowPhone.classList.remove('dark-mode')
  popUpNavigationRowEmail.classList.remove('dark-mode')
  popUpNavigationRowPassword.classList.remove('dark-mode')

  // Event 'click' Navigation PopUp
  btnAccont.addEventListener('click', () =>{
    btnPanelAddress.style.display = 'none'
    btnPanelAccont.style.display = 'block'
    btnAccont.style.pointerEvents = 'none'
    btnAddress.style.pointerEvents = 'all'
    IconAccont.style.color = '#08024b'
    PAccont.style.color = '#08024b'
    IconAddress.style.color = '#90e0ef'
    PAddress.style.color = '#90e0ef'
  })
  
  btnAddress.addEventListener('click', () =>{
    btnPanelAddress.style.display = 'block'
    btnPanelAccont.style.display = 'none'
    btnAccont.style.pointerEvents = 'all'
    btnAddress.style.pointerEvents = 'none'
    IconAddress.style.color = '#08024b'
    PAddress.style.color = '#08024b'
    IconAccont.style.color = '#90e0ef'
    PAccont.style.color = '#90e0ef'
  })

  btnDark.style.display = 'block'
  btnGlow.style.display = 'none'
})