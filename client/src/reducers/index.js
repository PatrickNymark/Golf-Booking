import { combineReducers } from 'redux';

import clubReducer from './clubReducer';

export default combineReducers({
  club: clubReducer
});
