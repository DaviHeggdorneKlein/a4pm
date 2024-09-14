const CategoriaRepository = require("../repositories/CategoriaRepository");

class CategoriaController {
  async buscarTodas(req, res) {
    try {
      const categorias = await CategoriaRepository.buscarTodas();
      res.json(categorias);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar categorias", error: error.message });
    }
  }
}

module.exports = new CategoriaController();
