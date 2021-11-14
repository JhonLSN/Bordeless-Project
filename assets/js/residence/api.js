const fillForm = (address) =>{
  document.querySelector('#address').value = address.logradouro;
  document.querySelector('#complement').value = address.complemento;
  document.querySelector('#city').value = address.localidade;
  document.querySelector('#state').value = address.uf;
}

const searchCep = async() => {
  const cep = document.querySelector('#cep').value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  const dados = await fetch(url);
  const address = await dados.json()
  fillForm(address)
};

document.querySelector('#cep').addEventListener('focusout', searchCep)