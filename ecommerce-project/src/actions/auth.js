import { REGISTER_SUCCESS, 
         REGISTER_FAIL, 
         LOGIN_SUCCESS, 
         LOGIN_FAIL, 
         LOGOUT_SUCCESS
        } from './types';

import axios from 'axios';

// REGISTER USER

export const register = (newUser) => dispatch => {

    const body = JSON.stringify(newUser);

    // Headers
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    };

    axios
        .post('http://localhost:4242/api/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type:REGISTER_FAIL,
                payload: err.response
            })
        });
}



// LOGIN USER

export const login = (userdata) => dispatch => {
    
    const body = JSON.stringify(userdata);

    // Headers
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    };

    axios
        .post('http://localhost:4242/api/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response
            });
        })
}


// LOGOUT USER
export const logout = () => dispatch => {

    dispatch({
        type: LOGOUT_SUCCESS,
        payload: "Successfully logged out!"
      });
  };
