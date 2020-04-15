import { GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART, GET_CART_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
    allproducts: [],
    product: {},
    cartitems: []
};


export default function (state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                allproducts: action.payload.products
            }
        case GET_PRODUCT:
            return{
                ...state,
                product: action.payload.product
            }
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
        default:
            return state;
    }
}
