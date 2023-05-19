const { Type, Recipe } = require('../db.js');
//const { Sequelize } = require('sequelize');
// const { getAllRecipes, getApiInfo } = require('./01_getController.js')
const { Op } = require('sequelize')


const getAallRecipes = async (nombre) => {
  console.log(nombre)

  if(nombre){
    const result = await Recipe.findAll({
      where:{
        nombre:{[Op.iLike]: "%" + nombre + "%"},
      },
      include:{
        model: Type,
        attributes: ['id', 'nombre']
      }
    })
    return result;
  }
  let result2 = await Recipe.findAll()
  return result2;
}


module.exports = {
  getAallRecipes,
};