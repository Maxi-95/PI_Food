const { Recipe, TypeDiet} = require("../db.js");

const agregarReceta = async (character) => {
    
    // try {
    //     console.log("aca pasa 1")
    //     const {name, title, summary, spoonacularScore, healthScore, analyzedInstructions, createdInDb, typeDiets} = character;
    //     if(!title||!summary){
    //         throw new Error ("Faltan datos para crear la Receta")
    //     }

    //     let createRecipe = await Recipe.create({
    //         // id,  
    //          name,   
    //          title,
    //          summary,
    //          spoonacularScore ,
    //          healthScore,
    //          analyzedInstructions,
    //          typeDiets,
    //          createdInDb
    //     })
    
        
    //     let dietTypeDb = await TypeDiet.findAll({ where:{ name:typeDiets } })
        
    //     createRecipe.typeDiets = dietTypeDb;      
    //     console.log("aca pasa 2")

    //     return "receta creada";
        
    // } catch (error) {
    //     return {error: error.message};
    // }
}

module.exports = {
   //agregarReceta
};