btnGlow.addEventListener('click', () => {
  // Main Variables 
  mainResidenceBackground.classList.remove('dark-mode')
  mainResidenceBtnAnchor.classList.remove('dark-mode')
  mainResidenceTitle.classList.remove('dark-mode')
  mainResidenceCep.classList.remove('dark-mode')
  mainResidenceAddress.classList.remove('dark-mode')
  mainResidenceNumber.classList.remove('dark-mode')
  mainResidenceComplement.classList.remove('dark-mode')
  mainResidenceCity.classList.remove('dark-mode')
  mainResidenceState.classList.remove('dark-mode')
  mainResidenceCheck.classList.remove('dark-mode')
  mainResidenceAcces.classList.remove('dark-mode')

  btnDark.style.display = 'block' 
  btnGlow.style.display = 'none'
})