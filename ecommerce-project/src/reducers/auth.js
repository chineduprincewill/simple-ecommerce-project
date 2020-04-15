import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
    authorization_token: localStorage.getItem("token"),
    isAuthenticated: false,
    user: null,
    errors: {},
    msg: ""
};


export default function(state=initialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                msg: "Registration Successful! Click Sign in to Login"
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return{
                ...state,
                authorization_token: null,
                user: null,
                isAuthenticated: false,
                errors: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.authorization_token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        default:
            return state;
    }
}