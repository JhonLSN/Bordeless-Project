var mainUser = document.querySelector('.main-user')
var loadUser = document.querySelector('.load');
var darkUser = document.querySelector('.dark');
var glowUser = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadUser.style.display = 'none'
  mainUser.style.display = 'block'
  darkUser.style.opacity = '1'
  glowUser.style.opacity = '1'
}, 1500)

