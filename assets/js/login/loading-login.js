var mainLogin = document.querySelector('.main-login')
var loadLogin = document.querySelector('.load');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  loadLogin.style.display = 'none'
  mainLogin.style.display = 'block'
}, 1500)

