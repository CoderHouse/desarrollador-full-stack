import * as itemTypes from './Item.type';
import axios from '../../axios-api';

const FAKE_REQUEST_DELAY = 500;

export const fetchToDos = (user, listId) => {
    return dispatch => {
        dispatch({type: itemTypes.START_FETCH_TODOS});
        axios.get(`${user}/${listId}`)
            .then(toDos => {
                const {data} = toDos.data;
                setTimeout(() => {
                    dispatch(setToDos(data));
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: itemTypes.ERROR_FETCH_TODOS, payload: error});
            });
    }
};

export const setToDos = (toDos) => {
    return {
        type: itemTypes.SET_TODOS,
        payload: toDos
    };
};

export const addItem = (user, listId, item) => {
    item.user = user;
    return dispatch => {
        dispatch({type: itemTypes.START_ADD_ITEM});
        axios.post(`${user}/${listId}`, item)
            .then(({data}) => {
                setTimeout(() => {
                    dispatch({type: itemTypes.ADD_ITEM, payload: data});
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: itemTypes.ERROR_ADD_ITEM, payload: error});
            });
    }
};

export const editItem = (userName, listId, item) => {
    return dispatch => {
        const itemId = item.id;
        dispatch({type: itemTypes.START_EDIT_ITEM, payload: itemId});
        axios.put(
            `/${userName}/${listId}/${itemId}`,
            {
                title: item.title,
                description: item.description,
                img: item.img
            })
            .then(_ => {
                setTimeout(() => {
                    dispatch({type: itemTypes.EDIT_ITEM, payload: item});
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: itemTypes.ERROR_EDIT_ITEM, payload: error});
            });
    }
};

export const removeItem = (userName, listId, itemId) => {
    return dispatch => {
        dispatch({type: itemTypes.START_EDIT_ITEM, payload: itemId});
        axios.delete(`/${userName}/${listId}/${itemId}`)
            .then(_ => {
                setTimeout(() => {
                    dispatch({type: itemTypes.REMOVE_ITEM, payload: itemId});
                }, FAKE_REQUEST_DELAY);
            })
            .catch(error => {
                dispatch({type: itemTypes.ERROR_REMOVE_ITEM, payload: error});
            });
    }
};
