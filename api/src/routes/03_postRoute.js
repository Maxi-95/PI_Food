const router = require("express").Router();
const { json } = require("body-parser");
const { createRecipe } = require("../controllers/03_postControlle");


router.post("/agregar", async (req, res) => {
   let { nombre, imagen, resumen, nivel, paso, tipo } = req.body;
   //console.log(nombre, imagen, resumen, nivel, paso);
try{
  if(!nombre || !imagen){
    res.status(404).send("Fantan datos valiosos para crear")   
  }

   let recetaCreada = await createRecipe({ nombre, imagen, resumen, nivel, paso, tipo })
  console.log(recetaCreada);
  res.status(200).json(recetaCreada)   
  
}catch(e){
  res.status(404),json({e})
}
});


module.exports = router;