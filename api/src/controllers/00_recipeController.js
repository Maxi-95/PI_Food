const { Recipe, Type } = require("../db");

const getApiRecipes = async () => {
    try {
        const recipesBD = await Recipe.findAll({
            include:{
                model: Type,
                attributes: ['nombre']
              }
        })
        

        return recipesBD;
    } catch (err) { 
        console.log(err) 
        return err;
    }
}


module.exports = {
    getApiRecipes
}