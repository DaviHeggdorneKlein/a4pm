const express = require("express");
const sequelize = require("./config/db");
const usuarioRoutes = require("./routes/usuario");

const app = express();

app.use(express.json());
app.use("/api/usuarios", usuarioRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});
