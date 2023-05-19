const { Router } = require("express");
const router = Router();
const { getAallRecipes } = require("../controllers/02_getNameController.js")


router.get("/", async (req, res) => {
    try {
        const { nombre } = req.query;
        if(!nombre){
            res.status(404).send("se necesita un nombre");
        }
        
        let nameRecipe = await getAallRecipes(nombre)
        res.status(200).json({nameRecipe});
    } catch (error) {
        //console.log({respuesta: error.message});
        res.status(404).json({respuesta: error.message});
        
    }
    
});



module.exports = router;