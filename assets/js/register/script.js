const btnRegister = document.querySelector('.main-register__wrapper__authentication__acess');
const user = document.querySelector('.main-register__wrapper__authentication__user-input');
const email = document.querySelector('.main-register__wrapper__authentication__email-input');
const password = document.querySelector('.main-register__wrapper__authentication__password-input');
const passwordConfirm = document.querySelector('.main-register__wrapper__authentication__password-confirm-input');
const check = document.querySelector('.check')

btnRegister.addEventListener('click', () =>{
  if(user.value === '' || email.value === '' || password.value === '' || passwordConfirm === ''){
    check.innerHTML = 'Campos obrigatórios'
    return;
  }

  if(password.value !== passwordConfirm.value){
    check.innerHTML = 'Senhas não coincidem'
    return; 
  }else{
    check.innerHTML = 'Usuário cadastrado com sucesso'
    check.style.color ='green'
    user.value = ''
    email.value = ''
    password.value = ''
    passwordConfirm.value = ''
  }
});