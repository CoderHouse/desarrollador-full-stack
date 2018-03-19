import * as productTypes from './product.type';
import {updateObject} from "../utility";

const initialState = {
    products: []
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
        default:
            return state;
    }
};

export default reducer;