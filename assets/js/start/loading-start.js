var mainStart = document.querySelector('.main-start')
var loadStart = document.querySelector('.load');
var darkStart = document.querySelector('.dark');
var glowStart = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadStart.style.display = 'none'
  mainStart.style.display = 'block'
  darkStart.style.opacity = '1'
  glowStart.style.opacity = '1'
}, 1500)

