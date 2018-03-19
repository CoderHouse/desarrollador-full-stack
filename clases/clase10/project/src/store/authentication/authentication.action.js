import * as authenticationTypes from './authentication.type';

export const authenticate = (userName) => {
    return {
        type: authenticationTypes.AUTHENTICATE,
        payload: {userName}
    }
};

export const removeAuthentication = () => {
    return {
        type: authenticationTypes.REMOVE_AUTHENTICATION
    }
};