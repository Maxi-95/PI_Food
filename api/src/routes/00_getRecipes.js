const { Router } = require("express");
const router = Router();
const { getApiRecipes } = require("../controllers/00_recipeController");


router.get("/todo", async (req, res) => {
    try {

        const todasLasRecetas = await getApiRecipes()

        res.status(200).json(todasLasRecetas);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
    
});



module.exports = router;