const express = require("express");
const CategoriaController = require("../controllers/CategoriaController");

const router = express.Router();

router.get("/", CategoriaController.buscarTodas);

module.exports = router;
