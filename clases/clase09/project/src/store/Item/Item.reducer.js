import * as itemTypes from './Item.type';
import {updateObject} from "../utility";

const initialState = {
    toDos: [],
    errorFetchToDos: false,
    errorAddItem: false,
    errorEditItem: false,
    errorRemoveItem: false
};

const editItem = (state, item) => {
    const newItemList =  state.toDos.map((itemInState) => {
        if (item.id === itemInState.id) {
            return item;
        }
        return itemInState;
    });

    return updateObject( state, { toDos: newItemList } );
};

const setToDos = (state, payload ) => {
    return {
        toDos: payload
    }
};

export const addToDos = (state, payload) => {
    const newItemList = [...state.toDos, payload];
    return updateObject(state, {toDos: newItemList});
};

export const removeToDos = (state, itemId) => {
    const newItemList = state.toDos.filter(item => item.id !== itemId);
    return updateObject(state, {toDos: newItemList});
};

export const errorFetchToDos = (state, error) => {
    return updateObject(state, {errorFetchToDos: true, error: error});
};

export const errorAddItem = (state, error) => {
    return updateObject(state, {errorAddItem: true, error: error});
};

export const errorEditItem = (state, error) => {
    return updateObject(state, {errorEditItem: true, error: error});
};

export const errorRemoveToDos = (state, error) => {
    return updateObject(state, {errorRemoveItem: true, error: error});
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case itemTypes.SET_TODOS:
            return setToDos(state, payload);
        case itemTypes.EDIT_ITEM:
            return editItem(state, payload);
        case itemTypes.ADD_ITEM:
            return addToDos(state, payload);
        case itemTypes.REMOVE_ITEM:
            return removeToDos(state, payload);
        case itemTypes.ERROR_FETCH_TODOS:
            return errorFetchToDos(state, payload);
        case itemTypes.ERROR_ADD_ITEM:
            return errorAddItem(state, payload);
        case itemTypes.ERROR_EDIT_ITEM:
            return errorEditItem(state, payload);
        case itemTypes.ERROR_REMOVE_ITEM:
            return errorRemoveToDos(state, payload);
        default:
            return state;
    }
};

export default reducer;
