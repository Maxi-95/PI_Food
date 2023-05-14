const { Recipe, Type} = require("../db.js");

const createRecipe = async ( nombre, imagen, resumen, nivel, paso, tipo) => {
    
    try {
        const recetaExistente = await Recipe.findOne({
            where: {
              nombre: nombre,
            }
          });
        if(recetaExistente){
            return "La receta ya existe"
        }
        
            let recipeCreated = await Pokemon.create({
                nombre: nombre,
                imagen: imagen,
                vida: vida,
                ataque: ataque,
                defensa: defensa,
                velocidad: velocidad,
                altura: altura,
                peso: peso,
            })

            tipo.map(async(e) =>{
                let result = await Type.findAll({
                where: { nombre: e }
                })
                recipeCreated.addType(result)
            });
            //await Promise.all(promisesTypes);
              
            // const pokemonTypes = await Type.findAll({
            //     where: { name: types }
            //   })
            
            //   pokemonCreated.addType(pokemonTypes)
            //   return res.send('Pokemon created successfuly')
            // })

            
            let resultRecipe = await Recipe.findAll({
                where:{ 
                    nombre: nombre
                 },
                
                include: [{
                        model: Type,
                        attributes: ['id', 'nombre']
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