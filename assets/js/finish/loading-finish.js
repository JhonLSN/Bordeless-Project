var mainFinish = document.querySelector('.main')
var loadFinish = document.querySelector('.load');
var darkFinish = document.querySelector('.dark');
var glowFinish = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadFinish.style.display = 'none'
  mainFinish.style.display = 'block'
  darkFinish.style.opacity = '1'
  glowFinish.style.opacity = '1'
}, 1500)

