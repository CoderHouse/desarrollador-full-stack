import * as productTypes from './product.type';
import {updateObject} from "../utility";

const initialState = {
    products: [],
    errorFetchProducts: false,
    errorAddProduct: false,
    errorEditProduct: false,
    errorRemoveProduct: false
};

const editProduct = (state, product) => {
    const newProductList =  state.products.map((productInState) => {
        if (product.id === productInState.id) {
            return product;
        }
        return productInState;
    });

    return updateObject( state, { products: newProductList } );
};

const setProducts = (state, payload ) => {
    return {
        products: payload
    }
};

export const addProducts = (state, payload) => {
    const newProductList = [...state.products, payload];
    return updateObject(state, {products: newProductList});
};

export const removeProducts = (state, productId) => {
    const newProductList = state.products.filter(product => product.id !== productId);
    return updateObject(state, {products: newProductList});
};

export const errorFetchProducts = (state, error) => {
    return updateObject(state, {errorFetchProducts: true, error: error});
};

export const errorAddProduct = (state, error) => {
    return updateObject(state, {errorAddProduct: true, error: error});
};

export const errorEditProduct = (state, error) => {
    return updateObject(state, {errorEditProduct: true, error: error});
};

export const errorRemoveProducts = (state, error) => {
    return updateObject(state, {errorRemoveProduct: true, error: error});
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case productTypes.SET_PRODUCTS:
            return setProducts(state, payload);
        case productTypes.EDIT_PRODUCT:
            return editProduct(state, payload);
        case productTypes.ADD_PRODUCT:
            return addProducts(state, payload);
        case productTypes.REMOVE_PRODUCT:
            return removeProducts(state, payload);
        case productTypes.ERROR_FETCH_PRODUCTS:
            return errorFetchProducts(state, payload);
        case productTypes.ERROR_ADD_PRODUCT:
            return errorAddProduct(state, payload);
        case productTypes.ERROR_EDIT_PRODUCT:
            return errorEditProduct(state, payload);
        case productTypes.ERROR_REMOVE_PRODUCT:
            return errorRemoveProducts(state, payload);
        default:
            return state;
    }
};

export default reducer;