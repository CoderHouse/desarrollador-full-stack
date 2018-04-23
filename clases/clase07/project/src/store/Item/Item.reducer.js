import * as itemTypes from './Item.type';
import {updateObject} from "../utility";

const initialState = {
    toDos: []
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

const addToDos = (state, payload) => {
    const newItemList = [...state.toDos, payload];
    return updateObject( state, { toDos: newItemList } );
};

const removeToDos = (state, itemId) => {
    const newItemList = state.toDos.filter(item => item.id !== itemId);
    return updateObject( state, { toDos: newItemList } );
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case itemTypes.EDIT_ITEM: return editItem(state, payload);
        case itemTypes.ADD_ITEM: return addToDos(state, payload);
        case itemTypes.REMOVE_ITEM: return removeToDos(state, payload.itemId);
        default:
            return state;
    }
};

export default reducer;
