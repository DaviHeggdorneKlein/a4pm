const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Usuario = require("./Usuario");
const Categoria = require("./Categoria");

const Receita = sequelize.define(
  "Receita",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuarios: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Usuario,
        key: "id",
      },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    },
    id_categorias: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Categoria,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tempo_preparo_minutos: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    porcoes: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    modo_preparo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ingredientes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    criado_em: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    alterado_em: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "receitas",
  }
);

Receita.belongsTo(Usuario, { foreignKey: "id_usuarios" });
Receita.belongsTo(Categoria, { foreignKey: "id_categorias" });

module.exports = Receita;
