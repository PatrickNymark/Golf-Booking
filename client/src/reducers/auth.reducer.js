import { userConstants } from '../constants';
import jwt_decode from 'jwt-decode';

// get token from localstorage
const token = JSON.parse(localStorage.getItem('user'));
// decode token
const user = token ? jwt_decode(token) : null;
// set login status
const initialState = user ? { loggedIn: true, user } : {};


export function authentication(state = initialState, action) {
    switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
        loggingIn: true,
        user: action.user
        };
    case userConstants.LOGIN_SUCCESS:
        return {
        loggedIn: true,
        user: action.user
        };
    case userConstants.LOGIN_FAILURE:
        return {};
    case userConstants.LOGOUT:
        return {};
    default:
        return state
    }
}