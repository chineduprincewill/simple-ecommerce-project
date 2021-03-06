import { GET_PRODUCTS, GET_PRODUCT } from '../actions/types';

const initialState = {
    allproducts: [],
    product: {}
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
        default:
            return state;
    }
}
