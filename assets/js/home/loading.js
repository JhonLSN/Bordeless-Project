const main = document.querySelector('.main')
const load = document.querySelector('.load');

// Determinar em quanto tempo 
let time = setTimeout(()=> {
  load.style.display = 'none'
  main.style.display = 'block'
}, 1500)

