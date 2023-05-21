import {
    GET_RECIPES,
    GET_BY_DETALLE,
    ORDER_NOMBRE,
    ORDER_ATAQUE,
    GET_BY_NOMBRE
} from './Actions/constantes.jsx'

const initialState = {
    state : [],
    recipes: [],
    detail:{}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_RECIPES:
            return { ...state, recipes: action.payload, state: action.payload };
        
        case GET_BY_DETALLE:
            return { ...state, detail: action.payload };
        
        case GET_BY_NOMBRE:
            return { ...state, recipes: action.payload };

        case ORDER_NOMBRE:
            const orderNombres = action.payload === 'A-Z' ?
                state.state.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    if (b.nombre > a.nombre) {
                        return -1
                    }
                    return 0;
                }) :
                state.state.sort(function (a, b) {
                    if (a.nombre > b.nombre) {
                        return -1;
                    }
                    if (b.nombre > a.nombre) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                recipes: orderNombres
            }

        case ORDER_ATAQUE:
            const orderAtaques = action.payload === 'Min' ?
                    state.state.sort(function (a, b) {
                        if (a.nivel > b.nivel) {
                            return 1;
                        }
                        if (b.nivel > a.nivel) {
                            return -1
                        }
                        return 0;
                    }) :
                    state.state.sort(function (a, b) {
                        if (a.nivel > b.nivel) {
                            return -1;
                        }
                        if (b.nivel > a.nivel) {
                            return 1;
                        }
                        return 0;
                    })
                return {
                    ...state,
                    recipes: orderAtaques
            }

        default:
            return {...state}
    }
}

export default rootReducer;