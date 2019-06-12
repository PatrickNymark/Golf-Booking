import axios from 'axios';
import jwt_decode from 'jwt-decode';

// Constants
import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  GET_ERRORS
} from './types';

import setAuthToken from '../helpers/authenticate';

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/auth/register', userData)
    .then(res => history.push('/login'))
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data })
    });
};

export const loginUser = userData => dispatch => {
  dispatch({ type: LOGIN_USER_PENDING });
  axios
    .post('/api/auth/login', userData)
    .then(res => {
      const { token } = res.data;
      // Save to localstorage
      localStorage.setItem('jwtToken', token);
      // Set axois auth header
      setAuthToken(token);
      // Set current user
      const decoded = jwt_decode(token);
      console.log(decoded)
      dispatch({ type: LOGIN_USER_SUCCESS, payload: decoded });
    })
    .catch(err =>
      dispatch({ type: GET_ERRORS, payload: err.response.data })
    );
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch({ type: LOGIN_USER_SUCCESS, payload: {} });
};
