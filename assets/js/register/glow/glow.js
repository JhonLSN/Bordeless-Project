btnGlow.addEventListener('click', () => {
  // Main Variables 
  mainRegisterBackground.classList.remove('dark-mode')
  mainRegisterBtnAnchor.classList.remove('dark-mode')
  mainRegisterTitle.classList.remove('dark-mode')
  mainRegisterUserIcon.classList.remove('dark-mode')
  mainRegisterUserInput.classList.remove('dark-mode')
  mainRegisterEmailIcon.classList.remove('dark-mode')
  mainRegisterEmailInput.classList.remove('dark-mode')
  mainRegisterPasswordIcon.classList.remove('dark-mode')
  mainRegisterPasswordInput.classList.remove('dark-mode')
  mainRegisterPasswordConfirmIcon.classList.remove('dark-mode')
  mainRegisterPasswordConfirmInput.classList.remove('dark-mode')
  mainRegisterCheck.classList.remove('dark-mode')
  mainRegisterAcces.classList.remove('dark-mode')

  btnDark.style.display = 'block'
  btnGlow.style.display = 'none'
})