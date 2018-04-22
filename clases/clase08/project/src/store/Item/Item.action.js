import * as itemTypes from './Item.type';
import axios from '../../axios-toDos';

export const fetchToDos = () => {
    return dispatch => {
        axios.get('')
            .then(toDos => {
                dispatch(setToDos(toDos.data));
            });
    }
};

export const setToDos = (toDos) => {
    return {
        type: itemTypes.SET_TODOS,
        payload: toDos
    };
};

export const addItem = (item) => {
    return dispatch => {
        axios.post('', item)
            .then(response => {
                dispatch({type: itemTypes.ADD_ITEM, payload: response.data});
            });
    }
};

export const editItem = (item) => {
    return dispatch => {
        axios.put(`/${item.id}`, item)
            .then(_ => {
                dispatch({type: itemTypes.EDIT_ITEM, payload: item});
            });
    }
};

export const removeItem = (itemId) => {
    return dispatch => {
        axios.delete(`/${itemId}`)
            .then(_ => {
                dispatch({type: itemTypes.REMOVE_ITEM, payload: itemId});
            });
    }
};
