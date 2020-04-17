import { GET_ORDER_HISTORY, ORDER_HISTORY_FAILED } from '../actions/types';

const initialState = {
    orders: []
};


export default function (state = initialState, action){
    switch(action.type){
        case GET_ORDER_HISTORY:
            return{
                ...state,
                orders:action.payload
            }
        case ORDER_HISTORY_FAILED:
            return{
                ...state,
                payload: action.payload
            }
        default:
            return state;
    }
}
