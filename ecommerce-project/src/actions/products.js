import {  
    GET_PRODUCTS,
    PRODUCTS_FAILED,
    GET_PRODUCT,
    PRODUCT_FAILED
   } from './types';

import axios from 'axios';

// GET PRODUCTS

export const getProducts = () => dispatch => {

    // Headers 
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    axios
        .get('http://localhost:4242/api/products', config)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: PRODUCTS_FAILED,
                payload: err.response
            })
        })
}


export const getProduct = (id) => dispatch => {

     // Headers 
     const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    axios
        .get(`http://localhost:4242/api/products/${id}`, config)
        .then(res => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: PRODUCT_FAILED,
                payload: err.response
            })
        })

}


