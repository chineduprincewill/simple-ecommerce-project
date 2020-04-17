import { combineReducers } from 'redux';
import auth from './auth';
import products from './products';
import cart from './cart';
import order from './order';
import profile from './profile';

export default combineReducers({
    auth,
    products,
    cart,
    order,
    profile
});