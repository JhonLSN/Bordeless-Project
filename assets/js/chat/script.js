// Support Variable 
const buttonEraserSupport = document.querySelector('.main__wrapper__chat__support-eraser i')

// User Variables
const buttonEraserUser = document.querySelector('.main__wrapper__chat__user-eraser i')

// New Chat Variable
const newChat = document.querySelector('.new-chat')

// Illustration Variable
const sendIlustration = document.querySelector('.main__wrapper__send__ilustration')

// Event Support
chatSupportBox.addEventListener('click', () =>{
  sendSupport.style.display = 'block'
  sendNewUser.style.display = 'none'
  sendIlustration.style.display = 'none'
})

buttonEraserSupport.addEventListener('click', () => {
  chatSupportBox.style.display = 'none'
  sendSupport.style.display = 'none'
  sendNewUser.style.display = 'none'
})

// Event Support
chatNewUserBox.addEventListener('click', () =>{
  sendNewUser.style.display = 'block'
  sendSupport.style.display = 'none'
  sendIlustration.style.display = 'none'
})

buttonEraserUser.addEventListener('click', () => {
  chatNewUserBox.style.display = 'none'
  sendSupport.style.display = 'none'
  sendNewUser.style.display = 'none'
})

newChat.addEventListener('click', () =>{
  chatNewUserBox.style.display = 'flex'
})