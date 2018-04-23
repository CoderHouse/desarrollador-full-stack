import * as listTypes from './List.type';
import {updateObject} from "../utility";

const initialState = {
    lists: [],
    loadingLists: false,
    loadingAddList: false,

    errorFetchLists: false,
    errorAddList: false,
    errorEditList: false,
    errorRemoveList: false
};

const startFetchLists = (state) => {
    return updateObject( state, { loadingLists: true, lists: [] } );
};

const setLists = (state, payload ) => {
    return updateObject( state, { lists: payload, loadingLists: false } );
};

const startEditList = (state, listId) => {
    const newListList =  state.lists.map((itemInState) => {
        if (listId === itemInState.id) {
            itemInState.loading = true;
        }
        return itemInState;
    });

    return updateObject( state, { lists: newListList } );
};

const editList = (state, list) => {
    const newListList =  state.lists.map((itemInState) => {
        if (list.id === itemInState.id) {
            list.loading = false;
            return list;
        }
        return itemInState;
    });

    return updateObject( state, { lists: newListList } );
};

export const startAddToDos = (state) => {
    return updateObject(state, {loadingAddList: true});
};

export const addToDos = (state, payload) => {
    const newListList = [...state.lists, payload];
    return updateObject(state, {lists: newListList, loadingAddList: false});
};

export const removeToDos = (state, listId) => {
    const newListList = state.lists.filter(item => item.id !== listId);
    return updateObject(state, {lists: newListList});
};

export const errorFetchLists = (state, error) => {
    return updateObject(state, {errorFetchLists: true, error: error});
};

export const errorAddList = (state, error) => {
    return updateObject(state, {errorAddList: true, error: error});
};

export const errorEditList = (state, error) => {
    return updateObject(state, {errorEditList: true, error: error});
};

export const errorRemoveToDos = (state, error) => {
    return updateObject(state, {errorRemoveList: true, error: error});
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case listTypes.START_FETCH_LISTS:
            return startFetchLists(state, payload);
        case listTypes.SET_LISTS:
            return setLists(state, payload);
        case listTypes.START_EDIT_LIST:
            return startEditList(state, payload);
        case listTypes.EDIT_LIST:
            return editList(state, payload);
        case listTypes.START_ADD_LIST:
            return startAddToDos(state, payload);
        case listTypes.ADD_LIST:
            return addToDos(state, payload);
        case listTypes.REMOVE_LIST:
            return removeToDos(state, payload);
        case listTypes.ERROR_FETCH_LISTS:
            return errorFetchLists(state, payload);
        case listTypes.ERROR_ADD_LIST:
            return errorAddList(state, payload);
        case listTypes.ERROR_EDIT_LIST:
            return errorEditList(state, payload);
        case listTypes.ERROR_REMOVE_LIST:
            return errorRemoveToDos(state, payload);
        default:
            return state;
    }
};

export default reducer;
