const express = require("express");
const ReceitaController = require("../controllers/ReceitaController");
const authMiddleware = require("../middleware/token");

const router = express.Router();

router.post("/", authMiddleware, ReceitaController.adicionarReceita);
router.get("/", ReceitaController.listarTodasReceitas);
router.get(
  "/user/:id_usuario",
  authMiddleware,
  ReceitaController.listarReceitasUsuario
);
router.get("/:id", ReceitaController.obterReceita);
router.put("/:id", authMiddleware, ReceitaController.editarReceita);
router.delete("/:id", authMiddleware, ReceitaController.excluirReceita);

module.exports = router;
