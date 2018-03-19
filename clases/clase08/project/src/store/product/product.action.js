import * as productTypes from './product.type';
import axios from '../../axios-products';

export const fetchProducts = () => {
    return dispatch => {
        axios.get('')
            .then(products => {
                dispatch(setProducts(products.data));
            });
    }
};

export const setProducts = (products) => {
    return {
        type: productTypes.SET_PRODUCTS,
        payload: products
    };
};

export const addProduct = (product) => {
    return dispatch => {
        axios.post('', product)
            .then(_ => {
                dispatch({type: productTypes.ADD_PRODUCT, payload: product});
            });
    }
};

export const editProduct = (product) => {
    return dispatch => {
        axios.put(`/${product.id}`, product)
            .then(_ => {
                dispatch({type: productTypes.EDIT_PRODUCT, payload: product});
            });
    }
};

export const removeProduct = (productId) => {
    return dispatch => {
        axios.delete(`/${productId}`)
            .then(_ => {
                dispatch({type: productTypes.REMOVE_PRODUCT, payload: productId});
            });
    }
};