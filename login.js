document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const cadastroForm = document.getElementById('cadastroForm');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const senha = document.getElementById('loginSenha').value.trim();

      const usuarios = getUsuariosCadastrados();
      const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

      if (usuario) {
          alert('Login realizado com sucesso!');
      } else {
          alert('Credenciais inválidas!');
      }
  });

  cadastroForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('cadastroEmail').value.trim();
      const senha = document.getElementById('cadastroSenha').value.trim();
      const confirmarSenha = document.getElementById('confirmarSenha').value.trim();

      if (!validateEmail(email)) {
          alert('Por favor, insira um e-mail válido.');
          return;
      }

      if (senha !== confirmarSenha) {
          alert('As senhas não coincidem.');
          return;
      }

      const usuarios = getUsuariosCadastrados();
      if (usuarios.some(usuario => usuario.email === email)) {
          alert('E-mail já cadastrado.');
          return;
      }

      usuarios.push({ email, senha });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Cadastro realizado com sucesso!');
  });

  function getUsuariosCadastrados() {
      const usuariosString = localStorage.getItem('usuarios');
      return usuariosString ? JSON.parse(usuariosString) : [];
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});
