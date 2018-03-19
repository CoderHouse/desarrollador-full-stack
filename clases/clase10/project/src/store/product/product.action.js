import * as productTypes from './product.type';
import axios from '../../axios-products';

const FAKE_REQUEST_DELAY = 500;

export const fetchProducts = () => {
    return dispatch => {
        dispatch({type: productTypes.START_FETCH_PRODUCTS});
        axios.get('')
            .then(products => {
                setTimeout(() => {
                    dispatch(setProducts(products.data));
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: productTypes.ERROR_FETCH_PRODUCTS, payload: error});
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
        dispatch({type: productTypes.START_ADD_PRODUCT})
        axios.post('', product)
            .then(({data}) => {
                setTimeout(() => {
                    dispatch({type: productTypes.ADD_PRODUCT, payload: data});
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: productTypes.ERROR_ADD_PRODUCT, payload: error});
            });
    }
};

export const editProduct = (product) => {
    return dispatch => {
        dispatch({type: productTypes.START_EDIT_PRODUCT, payload: product.id});
        axios.put(
            `/${product.id}`,
            {
                title: product.title,
                description: product.description,
                img: product.img
            })
            .then(_ => {
                setTimeout(() => {
                    dispatch({type: productTypes.EDIT_PRODUCT, payload: product});
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: productTypes.ERROR_EDIT_PRODUCT, payload: error});
            });
    }
};

export const removeProduct = (productId) => {
    return dispatch => {
        dispatch({type: productTypes.START_EDIT_PRODUCT, payload: productId});
        axios.delete(`/${productId}`)
            .then(_ => {
                setTimeout(() => {
                    dispatch({type: productTypes.REMOVE_PRODUCT, payload: productId});
                }, FAKE_REQUEST_DELAY);
            })
            .catch(error => {
                dispatch({type: productTypes.ERROR_REMOVE_PRODUCT, payload: error});
            });
    }
};