btnGlow.addEventListener('click', () => {
  // Main Variables 
  mainUserBackground.classList.remove('dark-mode')
  mainUserBtnAnchor.classList.remove('dark-mode')
  mainUserTitle.classList.remove('dark-mode')
  mainUserTravelerIcon.classList.remove('dark-mode')
  mainUserTravelerParagraph.classList.remove('dark-mode')
  mainUserNativeIcon.classList.remove('dark-mode')
  mainUserNativeParagraph.classList.remove('dark-mode')
  mainUserCheck.classList.remove('dark-mode')
  mainUserAcces.classList.remove('dark-mode')
  mainUserCreatedAccont.classList.remove('dark-mode')

  btnDark.style.display = 'block'
  btnGlow.style.display = 'none'
})