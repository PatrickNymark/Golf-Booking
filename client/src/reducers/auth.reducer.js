import { authConstants } from '../constants';
import jwt_decode from 'jwt-decode';

// get token from localstorage
const token = JSON.parse(localStorage.getItem('user'));
// decode token
const user = token ? jwt_decode(token) : null;
// set login status
// const initialState = user ? { loggedIn: true, user } : {};

const initialState = {
    isAuthenticated: null,
    loading: false,
    user: user
  };

export function authentication(state = initialState, action) {
    switch (action.type) {
    case authConstants.LOGIN_REQUEST:
        return {
        loading: true,
        user: action.user
        };
    case authConstants.LOGIN_SUCCESS:
        return {
        loading: false,
        isAuthenticated: true,
        user: action.user
        };
    case authConstants.LOGIN_FAILURE:
        return {
        errors: action.error
        };
    case authConstants.LOGOUT:
        return {};
    default:
        return state
    }
}