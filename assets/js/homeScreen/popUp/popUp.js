const btnAccont = document.querySelector('.popUp__wrapper__box__navigation__list-1')
const btnAddress = document.querySelector('.popUp__wrapper__box__navigation__list-2')
const IconAccont = document.querySelector('.popUp__wrapper__box__navigation__list-1 i')
const PAccont = document.querySelector('.popUp__wrapper__box__navigation__list-1 p')
const IconAddress = document.querySelector('.popUp__wrapper__box__navigation__list-2 i')
const PAddress = document.querySelector('.popUp__wrapper__box__navigation__list-2 p')
const btnPanelAccont = document.querySelector('.popUp__wrapper__box__panel__accont')
const btnPanelAddress = document.querySelector('.popUp__wrapper__box__panel__address')
const configExit = document.querySelector('.popUp__wrapper__box__navigation__list-4')
const configEnter = document.querySelector('.main__wrapper__navigation__sec-two #list-01')

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

configExit.addEventListener('click', () =>{
  document.querySelector('.popUp').style.display = 'none'
})

configEnter.addEventListener('click', () =>{
  document.querySelector('.popUp').style.display = 'block'
})
