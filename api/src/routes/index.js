const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const recipeGetRoute = require('./getRecipeRoute');
// const recipeIdRoute = require('./getRecipeIdRoute');
// const getDietRoute = require('./getDietRoute');
// const postRecipeRoute= require('./postRecipeRoute');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 const getIdRecipes = require('./01_getRoute.js');
 const getNameRecipe = require('./02_getNameRoute.js');
 const postRecipe = require('./03_postRoute.js');
 const dietsRecipe = require('./04_getDietsRoute');



router.use('/recipes', getIdRecipes);
router.use('/recipes', getNameRecipe);
router.use('/recipe', postRecipe);
router.use('/diets',dietsRecipe);


module.exports = router;