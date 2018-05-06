import * as itemTypes from './Item.type';
import {updateObject} from "../utility";

const initialState = {
    toDos: [],
    loadingToDos: false,
    loadingAddItem: false,
    errorFetchToDos: false,
    errorAddItem: false,
    errorEditItem: false,
    errorRemoveItem: false
};

const startFetchToDos = (state) => {
    return updateObject( state, { loadingToDos: true } );
};

const setToDos = (state, payload ) => {
    return updateObject( state, { toDos: payload, loadingToDos: false } );
};

const startEditItem = (state, itemId) => {
    const newItemList =  state.toDos.map((itemInState) => {
        if (itemId === itemInState.id) {
            itemInState.loading = true;
        }
        return itemInState;
    });

    return updateObject( state, { toDos: newItemList } );
};

const editItem = (state, item) => {
    const newItemList =  state.toDos.map((itemInState) => {
        if (item.id === itemInState.id) {
            item.loading = false;
            return item;
        }
        return itemInState;
    });

    return updateObject( state, { toDos: newItemList } );
};

export const startAddToDos = (state) => {
    return updateObject(state, {loadingAddItem: true});
};

export const addToDos = (state, payload) => {
    const newItemList = [...state.toDos, payload.data];
    return updateObject(state, {toDos: newItemList, loadingAddItem: false});
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
        case itemTypes.START_FETCH_TODOS:
            return startFetchToDos(state, payload);
        case itemTypes.SET_TODOS:
            return setToDos(state, payload);
        case itemTypes.START_EDIT_ITEM:
            return startEditItem(state, payload);
        case itemTypes.EDIT_ITEM:
            return editItem(state, payload);
        case itemTypes.START_ADD_ITEM:
            return startAddToDos(state, payload);
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
