const buttonEraserSupport = document.querySelector('.main__wrapper__chat__support-eraser i')
const buttonEraserUser = document.querySelector('.main__wrapper__chat__user-eraser i')

buttonEraserSupport.addEventListener('click', () => {
  chatSupportBox.style.display = 'none'
  sendSupport.style.display = 'none'
})

buttonEraserUser.addEventListener('click', () => {
  chatNewUserBox.style.display = 'none'
  sendNewUser.style.display = 'none'
})