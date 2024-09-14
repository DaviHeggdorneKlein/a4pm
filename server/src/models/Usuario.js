const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Usuario = sequelize.define(
  "Usuario",
  {
    nome: { type: DataTypes.STRING },
    login: { type: DataTypes.STRING, unique: true },
    senha: { type: DataTypes.STRING },
    criado_em: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    alterado_em: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
  }
);

module.exports = Usuario;
