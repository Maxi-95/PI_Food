const { Recipe, Type} = require("../db.js");

const createRecipe = async ( nombre, imagen, resumen, nivel, pasos, tipo) => {
    
    try {
        const recetaExistente = await Recipe.findOne({
            where: {
                nombre: nombre,
            }
        });
        if(recetaExistente){
            return "La receta ya existe"
        }
        
        //console.log(nombre, imagen, resumen, nivel, paso, tipo)

            let recipeCreated = await Recipe.create({
                nombre: nombre,
                imagen: imagen,
                resumen: resumen,
                nivel: nivel,
                pasos: pasos
            })

           
                let result = await Type.findAll({
                    where: { nombre: tipo }
                })
                
                await recipeCreated.addType(result)
                //console.log(result);
                //console.log(recipeCreated);
           
           
            let resultRecipe = await Recipe.findOne({
                where:{ 
                    nombre: nombre
                 },
                
                include: [{
                        model: Type,
                        attributes: ['nombre']
                    }]
                });

                
                return resultRecipe
            
    } catch (error) {
        return error;
    }
}

module.exports = {
    createRecipe
};