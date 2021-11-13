var mainRegister = document.querySelector('.main-register')
var loadRegister = document.querySelector('.load');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadRegister.style.display = 'none'
  mainRegister.style.display = 'block'
}, 1500)

