btnGlow.addEventListener('click', () => {
  // Main Variables 
  mainLoginBackground.classList.remove('dark-mode')
  mainLoginBtnAnchor.classList.remove('dark-mode')
  mainLoginTitle.classList.remove('dark-mode')
  mainLoginUserIcon.classList.remove('dark-mode')
  mainLoginUserInput.classList.remove('dark-mode')
  mainLoginPasswordIcon.classList.remove('dark-mode')
  mainLoginPasswordInput.classList.remove('dark-mode')
  mainLoginCheck.classList.remove('dark-mode')
  mainLoginAcces.classList.remove('dark-mode')
  mainLoginCreatedAccont.classList.remove('dark-mode')

  btnDark.style.display = 'block'
  btnGlow.style.display = 'none'
})