var headerChat = document.querySelector('.header')
var mainChat = document.querySelector('.main')
var loadChat = document.querySelector('.load');
var darkChat = document.querySelector('.dark');
var glowChat = document.querySelector('.glow');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadChat.style.display = 'none'
  headerChat.style.display = 'block'
  mainChat.style.display = 'block'
  darkChat.style.opacity = '1'
  glowChat.style.opacity = '1' 
}, 1000)

