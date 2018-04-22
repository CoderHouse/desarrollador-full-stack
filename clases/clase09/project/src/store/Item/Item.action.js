import * as itemTypes from './Item.type';
import axios from '../../axios-toDos';

export const fetchToDos = () => {
    return dispatch => {
        axios.get('')
            .then(toDos => {
                dispatch(setToDos(toDos.data));
            })
            .catch( error => {
                dispatch({type: itemTypes.ERROR_FETCH_TODOS, payload: error});
            } );
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
            .then(_ => {
                dispatch({type: itemTypes.ADD_ITEM, payload: item});
            })
            .catch( error => {
                dispatch({type: itemTypes.ERROR_ADD_ITEM, payload: error});
            } );
    }
};

export const editItem = (item) => {
    return dispatch => {
        axios.put(`/${item.id}`, item)
            .then(_ => {
                dispatch({type: itemTypes.EDIT_ITEM, payload: item});
            })
            .catch( error => {
                dispatch({type: itemTypes.ERROR_EDIT_ITEM, payload: error});
            } );
    }
};

export const removeItem = (itemId) => {
    return dispatch => {
        axios.delete(`/${undefined}`)
            .then(_ => {
                dispatch({type: itemTypes.REMOVE_ITEM, payload: itemId});
            })
            .catch( error => {
                dispatch({type: itemTypes.ERROR_REMOVE_ITEM, payload: error});
            } );
    }
};
