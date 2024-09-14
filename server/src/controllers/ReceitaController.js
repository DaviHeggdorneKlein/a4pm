const ReceitaRepository = require("../repositories/ReceitaRepository");

class RecipeController {
  async adicionarReceita(req, res) {
    try {
      const recipe = await ReceitaRepository.criarReceita({ ...req.body });
      res.status(201).json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Erro ao adicionar receita", error });
    }
  }

  async listarTodasReceitas(req, res) {
    try {
      const recipes = await ReceitaRepository.buscarTodasReceitas();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar receitas", error });
    }
  }

  async listarReceitasUsuario(req, res) {
    try {
      const recipes = await ReceitaRepository.buscarReceitasPorUsuario(
        req.params.id_usuario
      );
      res.status(200).json(recipes);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao listar receitas do usuário", error });
    }
  }

  async obterReceita(req, res) {
    try {
      const recipe = await ReceitaRepository.buscarPorId(req.params.id);
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Erro ao obter receita", error });
    }
  }

  async editarReceita(req, res) {
    try {
      const recipe = await ReceitaRepository.editarReceita(
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
      await ReceitaRepository.excluirReceita(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir receita", error });
    }
  }
}

module.exports = new RecipeController();
