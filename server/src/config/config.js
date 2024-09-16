module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "teste_receitas_rg_sistemas",
    host: process.env.DB_HOST || "db",
    dialect: "mysql",
  },
};
