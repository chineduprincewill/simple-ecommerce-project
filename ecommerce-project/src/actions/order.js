import { GET_ORDER_HISTORY, ORDER_HISTORY_FAILED } from './types';

import axios from 'axios';

export const getOrderHistory = () => dispatch => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    axios
        .get('http://localhost:4242/api/order-history', config)
        .then(res => {
            dispatch({
                type: GET_ORDER_HISTORY,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ORDER_HISTORY_FAILED,
                payload: err.response
            })
        })
}