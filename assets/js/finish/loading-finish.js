var mainUser = document.querySelector('.main-finish')
var loadUser = document.querySelector('.load');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadUser.style.display = 'none'
  mainUser.style.display = 'block'
}, 1500)

