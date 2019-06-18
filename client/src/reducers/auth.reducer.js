import { authConstants } from '../constants';
import { isEmpty } from '../helpers';

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: {}
  };

export function authentication(state = initialState, action) {
    switch (action.type) {
    case authConstants.USER_LOADED:
        return {
            ...state,
            isAuthenticated: !isEmpty(action.user),
            user: action.user
        }
    case authConstants.USER_REQUEST:
    case authConstants.LOGIN_REQUEST:
        return {
        loading: true,
        user: action.user
        };
    case authConstants.USER_SUCCESS:
    case authConstants.LOGIN_SUCCESS:
        return {
        loading: false,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
        };
    case authConstants.USER_FAILURE:
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