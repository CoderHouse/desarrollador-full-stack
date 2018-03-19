import * as productTypes from './product.type';
import {updateObject} from "../utility";

const initialState = {
    products: [],
    loadingProducts: false,
    loadingAddProduct: false,
    errorFetchProducts: false,
    errorAddProduct: false,
    errorEditProduct: false,
    errorRemoveProduct: false
};

const startFetchProducts = (state) => {
    return updateObject( state, { loadingProducts: true } );
};

const setProducts = (state, payload ) => {
    return updateObject( state, { products: payload, loadingProducts: false } );
};

const startEditProduct = (state, productId) => {
    const newProductList =  state.products.map((productInState) => {
        if (productId === productInState.id) {
            productInState.loading = true;
        }
        return productInState;
    });

    return updateObject( state, { products: newProductList } );
};

const editProduct = (state, product) => {
    const newProductList =  state.products.map((productInState) => {
        if (product.id === productInState.id) {
            product.loading = false;
            return product;
        }
        return productInState;
    });

    return updateObject( state, { products: newProductList } );
};

export const startAddProducts = (state) => {
    return updateObject(state, {loadingAddProduct: true});
};

export const addProducts = (state, payload) => {
    const newProductList = [...state.products, payload];
    return updateObject(state, {products: newProductList, loadingAddProduct: false});
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
        case productTypes.START_FETCH_PRODUCTS:
            return startFetchProducts(state, payload);
        case productTypes.SET_PRODUCTS:
            return setProducts(state, payload);
        case productTypes.START_EDIT_PRODUCT:
            return startEditProduct(state, payload);
        case productTypes.EDIT_PRODUCT:
            return editProduct(state, payload);
        case productTypes.START_ADD_PRODUCT:
            return startAddProducts(state, payload);
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