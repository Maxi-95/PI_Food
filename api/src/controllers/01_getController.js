//const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe, Type } = require("../db.js")
const {Sequelize, where} = require('sequelize');

const getApiInfo = async () => {
  https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true

  //traemos las recetas de la api
   apiUrl = await axios.get(
    `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
  );
  


  const lasRecetas = await Promise.all(
    apiUrl.data.results.map(async (recipe) => {
      return {
        id: recipe.id, 
             title: recipe.title,
             img: recipe.image,
             typeDiets: recipe.diets.map((d)=> {return{name:d}}), // un array con los tipos de dieta de esa receta
             spoonacularScore : recipe.spoonacularScore,   // puntuacion
             dishTypes: recipe.dishTypes.map((d)=> {return{name:d}}), // tipo de plato
             summary: recipe.summary,            // un resumen del plato
             healthScore: recipe.healthScore,    // que tan saludable es
             analyzedInstructions: recipe.analyzedInstructions// el paso a paso de como se hace 
      };
    })
  );

  return lasRecetas;
};

const getDBInfo = async () => {
  return await Recipe.findAll()
}

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo()
  const dbInfo = await getDBInfo()
  const allRecipes = [...apiInfo,...dbInfo]
  return allRecipes
}


// //########################## Buscamos por name ######################################

async function getAallRecipes(req, res) {
  const { name } = req.query

  if (!name) {                                        
    try {
      const recipeApiInfo = await getApiInfo()        
      
      return res.send(recipeApiInfo); 
      
    } catch(err) {
      res.json({err: err})
    }
  } else {                                     
    const query = name.toLowerCase();          
    console.log(query)
    try {
      const recipeApiInfo = await getApiInfo()
      
      const recipeApi = recipeApiInfo.filter((r) =>{
        if(r.title.toLowerCase().includes(query)){      
          console.log(r)
          return r                                     
        }
      } 
      );
      return res.send(recipeApi)  ; 

    } catch(err) {
      res.json({err})
      //console.error(err);
  }
  }
}

// //########################## Buscamos por id ######################################
const getById = async (id) => {
  console.log(id)
  let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos
  if (validate) {
    let dbId = await Recipe.findByPk(id, { include: Type });  // entonce la busco directo de la base de datos
    console.log(dbId);
    if(!dbId){
      return "no se encontro el id en la BD";
    }else{
      return dbId;
    }
    
  }
  else {                     // si no tienen guion, buscamos en la API
    if (id) {
        const allRecipes = await getApiInfo()
        let recipeId = await allRecipes.filter((el) => el.id === parseInt(id));     
        if(recipeId.length){
            return recipeId;
          }else{
           return "no se encontro el id en la API";
            
          }
        }
    }
};

module.exports = {
  getApiInfo,
  getAllRecipes,
  getAallRecipes,
  getDBInfo,
  getById
};
