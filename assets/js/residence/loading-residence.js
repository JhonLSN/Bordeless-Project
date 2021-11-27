var mainResidence = document.querySelector('.main-residence')
var loadResidence = document.querySelector('.load');
var darkResidence = document.querySelector('.dark');
var glowResidence = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadResidence.style.display = 'none'
  mainResidence.style.display = 'block'
  darkResidence.style.opacity = '1'
  glowResidence.style.opacity = '1'
}, 1500)

