const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("teste_receitas_rg_sistemas", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
