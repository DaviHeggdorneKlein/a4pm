const Receita = require("../models/Receita");

class ReceitaRepository {
  async criarReceita(receitaData) {
    try {
      return await Receita.create(receitaData);
    } catch (error) {
      console.error("Erro ao criar receita no repositório:", error.message);
      throw error;
    }
  }

  async buscarPorId(id) {
    try {
      return await Receita.findByPk(id);
    } catch (error) {
      console.error("Erro ao buscar receita por ID:", error.message);
      throw error;
    }
  }

  async buscarPorUsuario(id_usuarios) {
    try {
      return await Receita.findAll({ where: { id_usuarios } });
    } catch (error) {
      console.error("Erro ao buscar receitas por usuário:", error.message);
      throw error;
    }
  }

  async buscarTodas() {
    try {
      return await Receita.findAll();
    } catch (error) {
      console.error("Erro ao buscar todas as receitas:", error.message);
      throw error;
    }
  }

  async atualizarReceita(id, receitaData) {
    try {
      return await Receita.update(receitaData, { where: { id } });
    } catch (error) {
      console.error("Erro ao atualizar receita:", error.message);
      throw error;
    }
  }

  async deletarReceita(id) {
    try {
      return await Receita.destroy({ where: { id } });
    } catch (error) {
      console.error("Erro ao deletar receita:", error.message);
      throw error;
    }
  }
}

module.exports = new ReceitaRepository();
