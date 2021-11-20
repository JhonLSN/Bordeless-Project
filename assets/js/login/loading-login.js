var mainLogin = document.querySelector('.main-login')
var loadLogin = document.querySelector('.load');
var darkLogin = document.querySelector('.dark');
var glowLogin = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadLogin.style.display = 'none'
  mainLogin.style.display = 'block'
  darkLogin.style.opacity = '1'
  glowLogin.style.opacity = '1'
}, 1500)

