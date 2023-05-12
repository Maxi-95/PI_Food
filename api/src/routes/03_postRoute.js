const router = require("express").Router();
const { json } = require("body-parser");
//const agregarReceta = require("../controllers/03_postControlle.js");
const { Recipe, Type } = require("../db.js");

router.post("/", async (req, res) => {
   let { title } = req.body;
  console.log(title);
try{
   let createRecipe = await Recipe.create({ title })

  res.status(200).json(createRecipe)   

}catch(e){
  res.status(404),json({e})
}
});


module.exports = router;