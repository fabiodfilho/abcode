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