import { ADD_TO_CART, GET_CART_ITEMS, DELETE_ITEM, CHECKOUT } from '../actions/types';

const initialState = {
    cartitems: []
};


export default function (state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                payload:action.payload
            }
        case GET_CART_ITEMS:
            return{
                ...state,
                cartitems: action.payload
            }
        case DELETE_ITEM:
            return {
                ...state,
                cartitems: state.cartitems.filter(cartitem => cartitem.id !== action.payload)
            };
        case CHECKOUT:
            return{
                ...state,
                payload:action.payload
            }
        default:
            return state;
    }
}
