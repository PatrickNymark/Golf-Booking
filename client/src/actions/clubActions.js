import axios from 'axios';
import {
  GET_CLUBS_LOADING,
  GET_CLUBS_SUCCESS
} from './types';

export const createClub = () => dispatch => {
  dispatch({
    type: GET_CLUBS_LOADING
  })
  axios
    .get('/api/clubs/find/all')
    .then(res => {
      dispatch({
        type: GET_CLUBS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    );
};