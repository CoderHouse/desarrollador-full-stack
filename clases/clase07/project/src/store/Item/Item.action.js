import * as itemTypes from './Item.type';

export const editItem = (item) => ({
    type: itemTypes.EDIT_ITEM,
    payload: item
});

export const addItem = (item) => ({
    type: itemTypes.ADD_ITEM,
    payload: item
});

export const removeItem = (itemId) => ({
    type: itemTypes.REMOVE_ITEM,
    payload: { itemId }
});
