//ES Modules (ESM) no login
export function getUsuariosCadastrados() {
    const usuariosString = localStorage.getItem('usuarios');
    return usuariosString ? JSON.parse(usuariosString) : [];
  }
  