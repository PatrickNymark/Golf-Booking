import { combineReducers } from 'redux';

import clubReducer from './clubReducer';
import authReducer from './authReducer';

export default combineReducers({
  club: clubReducer,
  auth: authReducer
});
