var headerHomeScreen = document.querySelector('.header')
var mainHomeScreen = document.querySelector('.main')
var loadHomeScreen = document.querySelector('.load');
var darkHomeScreen = document.querySelector('.dark');
var glowHomeScreen = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadHomeScreen.style.display = 'none'
  headerHomeScreen.style.display = 'block'
  mainHomeScreen.style.display = 'block'
  darkHomeScreen.style.opacity = '1'
  glowHomeScreen.style.opacity = '1' 
}, 1000)

