const CategoriaRepositoryBDR = require("../repositories/CategoriaRepositoryBDR");

class CategoriaController {
  async buscarTodas(req, res) {
    try {
      const categorias = await CategoriaRepositoryBDR.buscarTodas();
      res.json(categorias);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar categorias", error: error.message });
    }
  }
}

module.exports = new CategoriaController();
