var mainRegister = document.querySelector('.main-register')
var loadRegister = document.querySelector('.load');
var darkRegister = document.querySelector('.dark');
var glowRegister = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadRegister.style.display = 'none'
  mainRegister.style.display = 'block'
  darkRegister.style.opacity = '1'
  glowRegister.style.opacity = '1'
}, 1500)

