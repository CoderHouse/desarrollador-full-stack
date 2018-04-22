import * as listTypes from './List.type';
import axios from '../../axios-api';

const FAKE_REQUEST_DELAY = 500;

export const fetchToDos = (user) => {
    return dispatch => {
        dispatch({type: listTypes.START_FETCH_LISTS});
        axios.get(`${user}/list`)
            .then(lists => {
                const data = lists.data;
                setTimeout(() => {
                    dispatch(setLists(data));
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: listTypes.ERROR_FETCH_LISTS, payload: error});
            });
    }
};

export const setLists = (lists) => {
    return {
        type: listTypes.SET_LISTS,
        payload: lists
    };
};

export const addList = (user, list) => {
    return dispatch => {
        dispatch({type: listTypes.START_ADD_LIST});
        axios.post(`${user}/list`, list)
            .then(({data}) => {
                setTimeout(() => {
                    dispatch({type: listTypes.ADD_LIST, payload: data});
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: listTypes.ERROR_ADD_LIST, payload: error});
            });
    }
};

export const editList = (user, list) => {
    return dispatch => {
        dispatch({type: listTypes.START_EDIT_LIST, payload: list.id});
        axios.put(`${user}/list/${list.id}`,
            {
                title: list.title,
                description: list.description
            })
            .then(_ => {
                setTimeout(() => {
                    dispatch({type: listTypes.EDIT_LIST, payload: list});
                }, FAKE_REQUEST_DELAY)
            })
            .catch(error => {
                dispatch({type: listTypes.ERROR_EDIT_LIST, payload: error});
            });
    }
};

export const removeList = (user, listId) => {
    return dispatch => {
        dispatch({type: listTypes.START_EDIT_LIST, payload: listId});
        axios.delete(`/${user}/list/${listId}`)
            .then(_ => {
                setTimeout(() => {
                    dispatch({type: listTypes.REMOVE_LIST, payload: listId});
                }, FAKE_REQUEST_DELAY);
            })
            .catch(error => {
                dispatch({type: listTypes.ERROR_REMOVE_LIST, payload: error});
            });
    }
};
