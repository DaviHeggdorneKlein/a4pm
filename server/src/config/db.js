const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("teste_receitas_rg_sistemas", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// module.exports = sequelize;

const config =
  require("../config/config")[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

module.exports = sequelize;
