const Usuario = require("../models/Usuario");

class UsuarioRepository {
  async criarUsuario(usuarioData) {
    try {
      return await Usuario.create(usuarioData);
    } catch (error) {
      console.error("Erro ao criar usuário no repositório:", error.message);
      throw error;
    }
  }

  async buscarPorLogin(login) {
    return await Usuario.findOne({ where: { login } });
  }

  async buscarPorId(id) {
    return await Usuario.findByPk(id);
  }
}

module.exports = new UsuarioRepository();
