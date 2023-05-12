const { Router } = require("express");
const router = Router();
//const { getApiInfo, getAllRecipes } = require("../controllers/01_getController.js")
const { getAallRecipes } = require("../controllers/01_getController.js")
//const { Recipe, TypeDiet } = require("../db.js")
//const {Sequelize} = require('sequelize');

router.get("/", getAallRecipes);




module.exports = router;