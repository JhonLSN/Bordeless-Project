btnGlow.addEventListener('click', () => {
  // Main Variables 
  mainFinishBackground.classList.remove('dark-mode')
  mainFinishBtnAnchor.classList.remove('dark-mode')
  mainFinishTitle.classList.remove('dark-mode')
  mainFinishAcces.classList.remove('dark-mode')

  btnDark.style.display = 'block'
  btnGlow.style.display = 'none'
})