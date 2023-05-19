//require('dotenv').config();
//const axios = require("axios").default;
const { Recipe } = require("../db");
//const { FOOD_API_KEY,FOOD_API_KEY1,FOOD_API_KEY2,FOOD_API_KEY3 } = process.env

const getApiRecipes = async () => {
    try {
        const recipesBD = await Recipe.findAll()
        

        return recipesBD;
    } catch (err) { 
        console.log(err) 
        return err;
    }
}


module.exports = {
    getApiRecipes
}