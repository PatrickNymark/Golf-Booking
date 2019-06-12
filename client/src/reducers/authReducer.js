import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        loading: true
      }
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          loading: false
        };
      default:
        return state;
  }
}