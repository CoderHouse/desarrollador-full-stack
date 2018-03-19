import * as productTypes from './product.type';

export const editProduct = (product) => ({
    type: productTypes.EDIT_PRODUCT,
    payload: product
});

export const addProduct = (product) => ({
    type: productTypes.ADD_PRODUCT,
    payload: product
});

export const removeProduct = (productId) => ({
    type: productTypes.REMOVE_PRODUCT,
    payload: { productId }
});