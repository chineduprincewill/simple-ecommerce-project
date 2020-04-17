import { GET_USER, GET_USER_FAILED } from './types';

import axios from 'axios';


// GET USER
export const getUser = () => dispatch => {

const token = localStorage.getItem("token");

const config = {
   headers: {
       "Content-Type": "application/json",
       "Authorization": `Bearer ${token}`
   }
};

axios   
   .get('http://localhost:4242/api/user', config)
   .then(res => {
       dispatch({
           type: GET_USER,
           payload: res.data
       })
   })
   .catch(err => {
       dispatch({
           type: GET_USER_FAILED,
           payload: err.response
       })
   })
}