const btnUser = document.querySelector('.main-user__wrapper__authentication__acess');

const optionPlane = document.querySelector('.main-user__wrapper__authentication__whatUser-traveler');
const optionNative = document.querySelector('.main-user__wrapper__authentication__whatUser-native');

// const mainUserVerify = document.querySelector('.main-user__wrapper__authentication__title')

const plane = document.querySelector('.plane');
const planeIcon = document.querySelector('.plane i')

const native = document.querySelector('.native');
const nativeIcon = document.querySelector('.native i')

const check = document.querySelector('.check')

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

// if (mainUserVerify.className === 'main-user__wrapper__authentication__title') {
//   optionPlane.addEventListener('click', () => {
//     alert('alert')
//     plane.style.background = '#08024b'
//     planeIcon.style.color = '#FFF'
//     native.style.background = '#FFF'
//     nativeIcon.style.color = '#08024b'
//   })

//   optionNative.addEventListener('click', () => {
//     native.style.background = '#08024b'
//     nativeIcon.style.color = '#FFF'
//     plane.style.background = '#FFF'
//     planeIcon.style.color = '#08024b'

//   })
// }else if (mainUserVerify.className === 'main-user__wrapper__authentication__title .dark-mode'){
//   optionPlane.addEventListener('click', () => {
//     plane.style.background = '#90e0ef'
//     planeIcon.style.color = '#495057'
//     native.style.background = '#495057'
//     nativeIcon.style.color = '#90e0ef'
//   })

//   optionNative.addEventListener('click', () => {
//     native.style.background = '#90e0ef'
//     nativeIcon.style.color = '#495057'
//     plane.style.background = '#495057'
//     planeIcon.style.color = '#90e0ef'

//   })
// }

btnUser.addEventListener('click', () => {
  if (nativeIcon.style.color === '' || planeIcon.style.color === '') {
    check.innerHTML = 'Selecione uma opção'
    return;
  }

  btnUser.href = 'start.html'
});


