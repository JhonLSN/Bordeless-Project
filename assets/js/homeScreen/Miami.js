btnMiami.addEventListener('click', () => {
  ilustration.style.opacity = '0'
  cardOneSP.style.display = 'none'
  cardTwoSP.style.display = 'none'
  cardThreeSP.style.display = 'none'
  cardForSP.style.display = 'none'
  cardOneMiami.style.display = 'flex'
  cardTwoMiami.style.display = 'flex'
  cardThreeMiami.style.display = 'flex'
  cardForMiami.style.display = 'flex'
  cardOneLondres.style.display = 'none'
  cardTwoLondres.style.display = 'none'
  cardThreeLondres.style.display = 'none'
  cardForLondres.style.display = 'none'
  cardOneOrlando.style.display = 'none'
  cardTwoOrlando.style.display = 'none'
  cardThreeOrlando.style.display = 'none'
  cardForOrlando.style.display = 'none'

  const time = setTimeout(() => {
    ilustration.style.display = 'none'
  }, 700)
})