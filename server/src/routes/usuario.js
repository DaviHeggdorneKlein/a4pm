const express = require("express");
const UsuarioController = require("../controllers/UsuarioController");

const router = express.Router();

router.post("/register", UsuarioController.cadastrar);
router.post("/login", UsuarioController.login);
router.post("/logout", UsuarioController.logout);

module.exports = router;
