import { combineReducers } from 'redux';
import ProductosReducers from './ProductosReducers';

export default combineReducers({
    productos: ProductosReducers
});