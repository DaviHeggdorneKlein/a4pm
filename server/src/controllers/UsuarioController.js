const UsuarioRepository = require("../repositories/UsuarioRepository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UsuarioController {
  async cadastrar(req, res) {
    const { nome, login, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 8);
    const usuario = await UsuarioRepository.criarUsuario({
      nome,
      login,
      senha: hashedPassword,
    });
    res.status(201).json(usuario);
  }

  async login(req, res) {
    const { login, senha } = req.body;
    const usuario = await UsuarioRepository.buscarPorLogin(login);

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ message: "Login ou senha incorretos" });
    }

    const token = jwt.sign({ id: usuario.id }, "secreta", { expiresIn: "1d" });
    res.json({ token });
  }

  async logout(req, res) {
    res.json({ message: "Logout efetuado" });
  }
}

module.exports = new UsuarioController();
