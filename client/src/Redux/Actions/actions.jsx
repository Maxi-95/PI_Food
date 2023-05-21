import axios from 'axios';

import {
    GET_RECIPES,
    GET_BY_DETALLE,
    ORDER_NOMBRE,
    ORDER_ATAQUE,
    GET_BY_NOMBRE
} from "./constantes.jsx";

export const getRecipes = () => {
    return async function(dispatch){
                    //type                       
        const result = await axios("http://localhost:3001/recipe/todo"); 
        const info = result.data;
        return dispatch({ type:GET_RECIPES, payload:info })
    }
}

// export const getCreados = () => {
//     return async function(dispatch){
                                           
//         const result = await axios("http://localhost:3001/pokemon/pokeBd"); 
//         const info = result.data.results;
//         console.log(info);
//         return dispatch({ type:GET_CREADOS, payload:info })
//     }
// }

export const getById = (id) => {
    return async function(dispatch){
                                           
        const result = await axios(`http://localhost:3001/recipes/${id}`); 
        const info = result.data;
       
        
        return dispatch({ type:GET_BY_DETALLE, payload:info })
    }
}

// export const getTipos = () => {
//     return async function(dispatch){
                                           
//         const result = await axios("http://localhost:3001/pokemon/tipos"); 
//         const info = result.data.results;
//         //console.log(result);
//         return dispatch({ type:GET_TIPOS, payload:info })
//     }
// }

// export const createPokemon = (input) => {
//     return async function(dispatch){  
//         const result = await axios.post("http://localhost:3001/crear/agregar", input); 
//         const info = result.data.results;
//         return dispatch({ type:CREATE_POKE, payload:info })
//     }
// }

export function getByNombre(name){
    return async function(dispatch){
        try{
            console.log(name);
            let response = await axios(`http://localhost:3001/recipes?nombre=${name}`);
            // console.log([response.data[0]] );
            // console.log(response.data[0] );
            console.log(response.data);
            return dispatch({
                type: GET_BY_NOMBRE,
                payload:response.data.nameRecipe
            });
        }catch{
            //console.log('Pokemon Not Found');
            alert('Recipe No encontrado');
        };
    };
};

export const ordenByNombre = (payload) => {
       
    return { type: ORDER_NOMBRE, payload }
}
export const ordenByAtaque = (payload) => {
       
    return { type: ORDER_ATAQUE, payload }
}
// export const filtrarTipos = (filtrado) => {
//     console.log(filtrado)
    
//     return { type: FILTER_TIPOS, payload : filtrado }  
// }



