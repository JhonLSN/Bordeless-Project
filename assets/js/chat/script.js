// Support Variables 
const buttonEraserSupport = document.querySelector('.main__wrapper__chat__support-eraser i')

// User Variables
const buttonEraserUser = document.querySelector('.main__wrapper__chat__user-eraser i')

// New Chat variables
const newChat = document.querySelector('.new-chat')

// Event Support
chatSupportBox.addEventListener('click', () =>{
  sendSupport.style.display = 'block'
  sendNewUser.style.display = 'none'
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
})

buttonEraserUser.addEventListener('click', () => {
  chatNewUserBox.style.display = 'none'
  sendSupport.style.display = 'none'
  sendNewUser.style.display = 'none'
})

newChat.addEventListener('click', () =>{
  chatNewUserBox.style.display = 'flex'
})