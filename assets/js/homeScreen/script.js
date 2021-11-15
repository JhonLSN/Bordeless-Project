const btnSP = document.querySelector('.main__wrapper__house-sp-btn')
const cardOneSP = document.querySelector('.main__wrapper__abode__favorSp-01')
const cardTwoSP = document.querySelector('.main__wrapper__abode__favorSp-02')
const cardThreeSP = document.querySelector('.main__wrapper__abode__favorSp-03')
const cardForSP = document.querySelector('.main__wrapper__abode__favorSp-04')
const ilustration = document.querySelector('.main__wrapper__abode__ilustration')

btnSP.addEventListener('click', () => {
  ilustration.style.opacity = '0'

  const time = setTimeout(() => {
    ilustration.style.display = 'none'
    cardOneSP.style.display = 'flex'
    cardTwoSP.style.display = 'flex'
    cardThreeSP.style.display = 'flex'
    cardForSP.style.display = 'flex'
  }, 700)
})