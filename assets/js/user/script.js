const btnUser = document.querySelector('.main-user__wrapper__authentication__acess');

const optionPlane = document.querySelector('.main-user__wrapper__authentication__whatUser-traveler');
const optionNative = document.querySelector('.main-user__wrapper__authentication__whatUser-native');

const plane = document.querySelector('#plane');
const planeIcon = document.querySelector('#plane i')

const native = document.querySelector('#native');
const nativeIcon = document.querySelector('#native i')

const check = document.querySelector('#check')

optionPlane.addEventListener('click', () => {
  plane.style.background = '#08024b'
  planeIcon.style.color = '#FFF'
  native.style.background = '#FFF'
  nativeIcon.style.color = '#08024b'

})

optionNative.addEventListener('click', () => {
  native.style.background = '#08024b'
  nativeIcon.style.color = '#FFF'
  plane.style.background = '#FFF'
  planeIcon.style.color = '#08024b'

})

btnUser.addEventListener('click', () => {
  if(nativeIcon.style.color === '' || planeIcon.style.color === ''){
    check.innerHTML = 'Selecione uma opção'
    return;
  }

  btnUser.href = 'start.html'
});


