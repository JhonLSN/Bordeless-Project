var headerMap = document.querySelector('.header')
var mainMap = document.querySelector('.main')
var loadMap = document.querySelector('.load');
var darkMap = document.querySelector('.dark');
var glowMap = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadMap.style.display = 'none'
  headerMap.style.display = 'block'
  mainMap.style.display = 'block'
  darkMap.style.opacity = '1'
  glowMap.style.opacity = '1' 
}, 1000)

