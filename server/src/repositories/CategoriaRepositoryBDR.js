const Categoria = require("../models/Categoria");

class CategoriaRepositoryBDR {
  async buscarTodas() {
    try {
      return await Categoria.findAll();
    } catch (error) {
      console.error("Erro ao buscar categorias:", error.message);
      throw error;
    }
  }
}

module.exports = new CategoriaRepositoryBDR();
