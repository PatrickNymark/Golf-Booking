import {
  GET_CLUBS_SUCCESS,
  GET_CLUBS_LOADING
} from '../actions/types';

const initialState = {
  clubs: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLUBS_LOADING:
      return {
        ...state,
        loading: true
      }
      case GET_CLUBS_SUCCESS:
        return {
          ...state,
          clubs: action.payload,
            loading: false
        };
      default:
        return state;
  }
}