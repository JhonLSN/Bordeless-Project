const btnLogin = document.querySelector('.main-login__wrapper__authentication__acess')
const inputlogin = document.querySelector('.main-login__wrapper__authentication__user-input');
const passwordLogin = document.querySelector('.main-login__wrapper__authentication__password-input');
const check = document.querySelector('.check');

btnLogin.addEventListener('click', () =>{
  if(inputlogin.value === '' || passwordLogin.value === ''){
    check.innerHTML = 'Campos obrigatórios'
    return;
  }

  if(inputlogin.value === 'BorderlessAdmin' && passwordLogin.value === 'admin'){
    btnLogin.href = './user.html'
  }else{
    check.innerHTML = 'Usuário inválido'
  }
});