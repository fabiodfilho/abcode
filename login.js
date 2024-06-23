const formCadastro = document.getElementById('formCadastro'); 
const formLogin = document.getElementById('formlogin'); 
const areaRestrita = document.getElementById('areaRestrita'); 

formLogin.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('floatingInput').value; 
  const senha = document.getElementById('floatingInput').value; 

  const usuarios = getUsuariosCadastrados();
  const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

  if (usuario) {
    alert('Login realizado com sucesso!');
  } else {
    alert('Credenciais inválidas!');
  }
});

function getUsuariosCadastrados() {
  const usuariosString = localStorage.getItem('usuarios');
  return usuariosString ? JSON.parse(usuariosString) : [];
}




/* const formCadastro = document.getElementById('formCadastro');
const formLogin = document.getElementById('formLogin');
const areaRestrita = document.getElementById('areaRestrita');

formCadastro.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuarios = getUsuariosCadastrados();
  if (usuarios.find(usuario => usuario.email === email)) {
    alert('Email já cadastrado!');
    return;
  }

  usuarios.push({ nome, email, senha });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert('Cadastro realizado com sucesso!');
});

formLogin.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  const usuarios = getUsuariosCadastrados();
  const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

  if (usuario) {
    areaRestrita.style.display = 'block';
  } else {
    alert('Credenciais inválidas!');
  }
});

function getUsuariosCadastrados() {
  const usuariosString = localStorage.getItem('usuarios');
  return usuariosString ? JSON.parse(usuariosString) : [];
}
*/