const btnResidence = document.querySelector('.main-residence__wrapper__authentication__acess');
const cep = document.querySelector('.main-residence__wrapper__authentication__formulary-cep');
const address = document.querySelector('.main-residence__wrapper__authentication__formulary-address');
const number = document.querySelector('.main-residence__wrapper__authentication__formulary-number');
const complement = document.querySelector('.main-residence__wrapper__authentication__formulary-complement');
const city = document.querySelector('.main-residence__wrapper__authentication__formulary-city');
const state = document.querySelector('.main-residence__wrapper__authentication__formulary-state');
const check = document.querySelector('#check')

btnResidence.addEventListener('click', () =>{
  if(cep.value === '' || address.value === '' || number.value === '' || complement.value === '' || city.value === '' || state.value === ''){
    check.innerHTML = 'Campos obrigatórios'
    return;
  }
    alert('Agora foi!')
});