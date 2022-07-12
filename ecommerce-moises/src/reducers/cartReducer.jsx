import {TYPES} from '../actions/cartActions';

export const shoppingInitialState = {
    products: [
        {id: 1, name: 'Product 1', price: '$100.00', quantity: 1},
        {id: 2, name: 'Product 2', price: '$1.00', quantity: 1},
        {id: 3, name: 'Product 3', price: '$15.00', quantity: 1},
    ], //PRODUCTOS EN EL CARRITO DE COMPRAS
    cart: [

    ], //PRODUCTOS EN EL CARRITO DE COMPRAS INCIALMENTE VACIO

}
export function shopingReducer(state,action) { //estado y acciones que va a cumplir el reducer
    switch (action.type) { //casos de acciones a evaluar
        case TYPES.ADD_TO_CART:{

        }
        
        case TYPES.REMOVE_FROM_CART:{

        }
        
        case TYPES.REMOVE_ALL_FROM_CART:{

        }
        case TYPES.CLEAR_CART:{

        }
        default:
            return state; //si no se cumple ningun caso, devuelve el estado inicial
    }
}