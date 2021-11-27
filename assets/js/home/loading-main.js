var mainHome = document.querySelector('.main')
var loadHome = document.querySelector('.load');
var darkHome = document.querySelector('.dark');
var glowHome = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadHome.style.display = 'none'
  mainHome.style.display = 'block'
  darkHome.style.opacity = '1'
  glowHome.style.opacity = '1'
}, 1500)

