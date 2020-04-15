import {  
    GET_PRODUCTS,
    PRODUCTS_FAILED,
    GET_PRODUCT,
    PRODUCT_FAILED,
    ADD_TO_CART,
    ADD_FAILED,
    GET_CART_ITEMS,
    CART_ITEMS_FAILED,
    DELETE_ITEM
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


export const addToCart = (data) => dispatch => {

    const body = JSON.stringify(data);

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    axios
        .post('http://localhost:4242/api/cart-items', body, config)
        .then(res => {
            dispatch({
                type: ADD_TO_CART,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_FAILED,
                payload: err.response
            })
        })
}


export const getCartItems = () => dispatch => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    axios
        .get('http://localhost:4242/api/cart-items', config)
        .then(res => {
            dispatch({
                type: GET_CART_ITEMS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: CART_ITEMS_FAILED,
                payload: err.response
            })
        })
}


// DELETE TODO

export const deleteItem = id => (dispatch) => {

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    axios
      .delete(`http://localhost:4242/api/cart-item/${id}`, config)
      .then(res => {
        dispatch({
          type: DELETE_ITEM,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  };