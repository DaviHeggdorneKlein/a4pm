const Usuario = require("../models/Usuario");

class UsuarioRepository {
  async criarUsuario(usuarioData) {
    return await Usuario.create(usuarioData);
  }

  async buscarPorLogin(login) {
    return await Usuario.findOne({ where: { login } });
  }
}

module.exports = new UsuarioRepository();
