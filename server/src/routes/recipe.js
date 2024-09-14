const express = require("express");
const authMiddleware = require("../middleware/token");
const ReceitaRepository = require("../repositories/ReceitaRepository");

const router = express.Router();

router.get("/recipe", authMiddleware, async (req, res) => {
  try {
    const userId = req.usuario.id;
    const recipe = await ReceitaRepository.buscarPorUsuarioId(usuarioId);

    if (!recipe) {
      return res.status(404).json({ message: "Nenhuma receita encontrada" });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter receitas" });
  }
});

module.exports = router;
