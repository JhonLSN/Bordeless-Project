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

  // Places Variables
  placesBackground.classList.remove('dark-mode')
  placesTitle.classList.remove('dark-mode')
  placesPlane.classList.remove('dark-mode')
  placesBank.classList.remove('dark-mode')
  placesEmail.classList.remove('dark-mode')
  placesSchool.classList.remove('dark-mode')
  placesFarmacy.classList.remove('dark-mode')
  placesHospital.classList.remove('dark-mode')
  placesChurch.classList.remove('dark-mode')
  placesConstruction.classList.remove('dark-mode')
  placesWrench.classList.remove('dark-mode')
  placesShopping.classList.remove('dark-mode')
  placesGraduation.classList.remove('dark-mode')

  // Graphic Variable
  graphicBackground.classList.remove('dark-mode')

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