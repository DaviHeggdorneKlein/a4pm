const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");
const authMiddleware = require("../middleware/token");

const router = express.Router();

router.post("/register", UsuarioController.cadastrar);
router.post("/login", UsuarioController.login);
router.post("/logout", UsuarioController.logout);
router.get("/info", authMiddleware, UsuarioController.obterInformacoes);

module.exports = router;
