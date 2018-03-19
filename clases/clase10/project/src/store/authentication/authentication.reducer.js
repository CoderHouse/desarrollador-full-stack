import * as authenticationTypes from './authentication.type';
import {updateObject} from "../utility";

// Init User from Local Storage
const USER_LOCAL_STORAGE = 'user';
const userString = sessionStorage.getItem(USER_LOCAL_STORAGE);
let user;
try {
    user = JSON.parse(userString);
} catch(ex) {
    sessionStorage.removeItem(USER_LOCAL_STORAGE);
}

const initialState = { user };

const authenticate = (state, user) => {
    sessionStorage.setItem(USER_LOCAL_STORAGE, JSON.stringify(user));
    return updateObject(state, {user});
};

const removeAuthentication = (state) => {
    sessionStorage.removeItem(USER_LOCAL_STORAGE);
    return updateObject(state, {user: undefined});
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case authenticationTypes.AUTHENTICATE:
            return authenticate(state, payload);
        case authenticationTypes.REMOVE_AUTHENTICATION:
            return removeAuthentication(state, payload);
        default:
            return state;
    }
};

export default reducer;