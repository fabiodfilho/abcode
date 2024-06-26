//ES Modules (ESM) no login
import { getUsuariosCadastrados } from './usuarios.js';

const formLogin = document.getElementById('formlogin'); 

formLogin.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('floatingInput').value; 
  const senha = document.getElementById('floatingPassword').value; 
  const usuarios = getUsuariosCadastrados();
  const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

  if (usuario) {
    alert('Login realizado com sucesso!');
  } else {
    alert('Credenciais inválidas!');
  }
});
