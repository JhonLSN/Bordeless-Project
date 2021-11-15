btnSP.addEventListener('click', () => {
  ilustration.style.opacity = '0'
  cardOneSP.style.display = 'flex'
  cardTwoSP.style.display = 'flex'
  cardThreeSP.style.display = 'flex'
  cardForSP.style.display = 'flex'
  cardOneMiami.style.display = 'none'
  cardTwoMiami.style.display = 'none'
  cardThreeMiami.style.display = 'none'
  cardForMiami.style.display = 'none'
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