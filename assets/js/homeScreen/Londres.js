btnLondres.addEventListener('click', () => {
  ilustration.style.opacity = '0'
  cardOneSP.style.display = 'none'
  cardTwoSP.style.display = 'none'
  cardThreeSP.style.display = 'none'
  cardForSP.style.display = 'none'
  cardOneMiami.style.display = 'none'
  cardTwoMiami.style.display = 'none'
  cardThreeMiami.style.display = 'none'
  cardForMiami.style.display = 'none'
  cardOneLondres.style.display = 'flex'
  cardTwoLondres.style.display = 'flex'
  cardThreeLondres.style.display = 'flex'
  cardForLondres.style.display = 'flex'
  cardOneOrlando.style.display = 'none'
  cardTwoOrlando.style.display = 'none'
  cardThreeOrlando.style.display = 'none'
  cardForOrlando.style.display = 'none'

  const time = setTimeout(() => {
    ilustration.style.display = 'none'
  }, 700)
})