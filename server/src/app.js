const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user");
const categoriaRoutes = require("./routes/category");
const receitaRoutes = require("./routes/recipe");

const app = express();

app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/category", categoriaRoutes);
app.use("/api/recipes", receitaRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});
