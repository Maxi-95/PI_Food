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

// 1️⃣ Análisis de la vacante: No pierdas tiempo adivinando qué habilidades y requisitos son más importantes para el puesto que deseas. ¡Pregunta a Chat GPT! "¿Cuáles son las habilidades y requisitos más importantes para el puesto de [nombre del puesto]?" Utiliza esta valiosa información para identificar las habilidades y requisitos clave que debes destacar en tu CV.

// 2️⃣ Identificación de palabras clave: Las palabras clave adecuadas pueden marcar la diferencia en la búsqueda de empleo. Pregunta a Chat GPT: "¿Cuáles son las palabras clave más relevantes para el puesto de [nombre del puesto]?" Luego, asegúrate de incluir estas palabras clave en tu CV para asegurarte de que se ajusta perfectamente a los requisitos del puesto.

// 3️⃣ Uso de verbos de acción: Los verbos de acción adecuados pueden darle vida a tu CV y resaltar tus logros. Pregunta a Chat GPT: "¿Cuáles son los verbos de acción más relevantes para el puesto de [nombre del puesto] y para mi nivel de experiencia?" Utiliza la lista de verbos de acción generada por Chat GPT para mostrar tus habilidades y logros de manera impactante en tu CV.

// 4️⃣ Comparación del CV actual con las necesidades del mercado: Saber cómo adaptar tu CV a las necesidades del mercado es crucial. Pregunta a Chat GPT: "¿Cómo puedo adaptar mi CV a las necesidades del mercado para el puesto de [nombre del puesto]?" Utiliza la información proporcionada por Chat GPT para identificar áreas de mejora y asegúrate de que tu CV se ajuste a los requisitos de la empresa.

// 5️⃣ Identificación de KPIs de la industria: Los KPIs (indicadores clave de rendimiento) son fundamentales para demostrar tus logros. Pregunta a Chat GPT: "¿Cuáles son los KPIs más relevantes para mi industria y cómo puedo incluirlos en mi CV?" Utiliza la información proporcionada por Chat GPT para identificar los KPIs relevantes para tu experiencia y asegúrate de destacarlos en tu CV. Ahora que tienes los KPIs relevantes, es hora de conectarlos con tus logros. Pregunta a Chat GPT: "¿Cómo puedo relacionar mis logros con los KPIs relevantes de mi industria?"

// Si despues de todo este proceso necesitas ayuda en la busqueda de empleo! Aqui estoy para ayudarte