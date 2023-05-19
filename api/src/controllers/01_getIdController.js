//const axios = require("axios");
const { Recipe, Type } = require("../db.js")
//const {Sequelize, where} = require('sequelize');

const getById = async (id) => {

  const resultadoId = await Recipe.findByPk(id, { include: Type })
  return resultadoId;

};

module.exports = {
  getById,
  
};



// 1️⃣ Análisis de la vacante: No pierdas tiempo adivinando qué habilidades y requisitos son más importantes para el puesto que deseas. ¡Pregunta a Chat GPT! "¿Cuáles son las habilidades y requisitos más importantes para el puesto de [nombre del puesto]?" Utiliza esta valiosa información para identificar las habilidades y requisitos clave que debes destacar en tu CV.

// 2️⃣ Identificación de palabras clave: Las palabras clave adecuadas pueden marcar la diferencia en la búsqueda de empleo. Pregunta a Chat GPT: "¿Cuáles son las palabras clave más relevantes para el puesto de [nombre del puesto]?" Luego, asegúrate de incluir estas palabras clave en tu CV para asegurarte de que se ajusta perfectamente a los requisitos del puesto.

// 3️⃣ Uso de verbos de acción: Los verbos de acción adecuados pueden darle vida a tu CV y resaltar tus logros. Pregunta a Chat GPT: "¿Cuáles son los verbos de acción más relevantes para el puesto de [nombre del puesto] y para mi nivel de experiencia?" Utiliza la lista de verbos de acción generada por Chat GPT para mostrar tus habilidades y logros de manera impactante en tu CV.

// 4️⃣ Comparación del CV actual con las necesidades del mercado: Saber cómo adaptar tu CV a las necesidades del mercado es crucial. Pregunta a Chat GPT: "¿Cómo puedo adaptar mi CV a las necesidades del mercado para el puesto de [nombre del puesto]?" Utiliza la información proporcionada por Chat GPT para identificar áreas de mejora y asegúrate de que tu CV se ajuste a los requisitos de la empresa.

// 5️⃣ Identificación de KPIs de la industria: Los KPIs (indicadores clave de rendimiento) son fundamentales para demostrar tus logros. Pregunta a Chat GPT: "¿Cuáles son los KPIs más relevantes para mi industria y cómo puedo incluirlos en mi CV?" Utiliza la información proporcionada por Chat GPT para identificar los KPIs relevantes para tu experiencia y asegúrate de destacarlos en tu CV. Ahora que tienes los KPIs relevantes, es hora de conectarlos con tus logros. Pregunta a Chat GPT: "¿Cómo puedo relacionar mis logros con los KPIs relevantes de mi industria?"

// Si despues de todo este proceso necesitas ayuda en la busqueda de empleo! Aqui estoy para ayudarte