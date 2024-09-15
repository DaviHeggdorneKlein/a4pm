const UsuarioRepositoryBDR = require("../repositories/UsuarioRepositoryBDR");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UsuarioController {
  async cadastrar(req, res) {
    try {
      const { nome, login, senha } = req.body;

      if (!nome || !login || !senha) {
        return res.status(400).json({ message: "Dados incompletos" });
      }

      const hashedPassword = await bcrypt.hash(senha, 8);
      const usuario = await UsuarioRepositoryBDR.criarUsuario({
        nome,
        login,
        senha: hashedPassword,
      });

      if (!usuario) {
        return res.status(500).json({ message: "Erro ao criar usuário" });
      }

      const token = jwt.sign({ id: usuario.id }, "secreta", {
        expiresIn: "1d",
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      res.status(201).json({ usuario });
    } catch (error) {
      console.error("Erro ao criar usuário:", error.message);
      res.status(500).json({ message: "Erro ao criar usuário" });
    }
  }

  async login(req, res) {
    try {
      const { login, senha } = req.body;
      const usuario = await UsuarioRepositoryBDR.buscarPorLogin(login);

      if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
        return res.status(401).json({ message: "Login ou senha incorretos" });
      }

      const token = jwt.sign({ id: usuario.id }, "secreta", {
        expiresIn: "1d",
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      res.json({ message: "Login bem-sucedido" });
    } catch (error) {
      console.error("Erro ao realizar login:", error.message);
      res.status(500).json({ message: "Erro ao realizar login" });
    }
  }

  async obterInformacoes(req, res) {
    try {
      const usuario = await UsuarioRepositoryBDR.buscarPorId(req.usuario.id);

      if (!usuario) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      res.json(usuario);
    } catch (error) {
      console.error("Erro ao obter informações do usuário:", error.message);
      res.status(500).json({ message: "Erro ao obter informações do usuário" });
    }
  }

  async logout(req, res) {
    res.clearCookie("token");
    res.json({ message: "Logout efetuado com sucesso" });
  }
}

module.exports = new UsuarioController();
