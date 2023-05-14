//require('dotenv').config();
const axios = require("axios").default;
//const { Type, Recipe } = require("../db");
//const { FOOD_API_KEY,FOOD_API_KEY1,FOOD_API_KEY2,FOOD_API_KEY3 } = process.env

const getApiRecipes = async () => {
    try {
        const getAPIData = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`);

        const APIMap = getAPIData.data.results.map(recipe => {
            return {
                id: recipe.id,
                nombre: recipe.title,
                imagen: recipe.image, 
                resumen: recipe.summary,
                nivel: recipe.healthScore,
                pasos: (recipe.analyzedInstructions[0] && recipe.analyzedInstructions[0].steps?recipe.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):''),
                tipos: recipe.dishTypes?.map(element => element),  
                dietas: recipe.diets?.map(element => element), 
            }
        }); 

        return APIMap;
    } catch (err) { 
        console.log(err) 
    }
}

// const dbData = async () => {
//     const data = await Recipe.findAll(
//         {
//             include:
//             {
//                 model: Type,
//                 attributes: ["name"]
//             }
//         }
//     )
//     return data
// }

// const allRecipes = async ()=>{
//     let api = await getApiRecipes();
//     let db = await dbData();
//     let allData = api.concat(db);
//     return allData;
// }

module.exports = {
    getApiRecipes
}