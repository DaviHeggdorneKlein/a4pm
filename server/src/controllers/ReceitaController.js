const ReceitaRepositoryBDR = require("../repositories/ReceitaRepositoryBDR");

class RecipeController {
  async adicionarReceita(req, res) {
    try {
      const recipe = await ReceitaRepositoryBDR.criarReceita({ ...req.body });
      res.status(201).json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Erro ao adicionar receita", error });
    }
  }

  async listarTodasReceitas(req, res) {
    try {
      const recipes = await ReceitaRepositoryBDR.buscarTodas();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar receitas", error });
    }
  }

  async obterReceita(req, res) {
    try {
      const recipe = await ReceitaRepositoryBDR.buscarPorId(req.params.id);
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter receita", error });
    }
  }

  async editarReceita(req, res) {
    try {
      const recipe = await ReceitaRepositoryBDR.editarReceita(
        req.params.id,
        req.body
      );
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Erro ao editar receita", error });
    }
  }

  async excluirReceita(req, res) {
    try {
      await ReceitaRepositoryBDR.excluirReceita(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir receita", error });
    }
  }
}

module.exports = new RecipeController();
