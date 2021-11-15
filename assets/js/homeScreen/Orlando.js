btnOrlando.addEventListener('click', () => {
  ilustration.style.opacity = '0'
  cardOneSP.style.display = 'none'
  cardTwoSP.style.display = 'none'
  cardThreeSP.style.display = 'none'
  cardForSP.style.display = 'none'
  cardOneMiami.style.display = 'none'
  cardTwoMiami.style.display = 'none'
  cardThreeMiami.style.display = 'none'
  cardForMiami.style.display = 'none'
  cardOneLondres.style.display = 'none'
  cardTwoLondres.style.display = 'none'
  cardThreeLondres.style.display = 'none'
  cardForLondres.style.display = 'none'
  cardOneOrlando.style.display = 'flex'
  cardTwoOrlando.style.display = 'flex'
  cardThreeOrlando.style.display = 'flex'
  cardForOrlando.style.display = 'flex'
  
  const time = setTimeout(() => {
    ilustration.style.display = 'none'
  }, 700)
})