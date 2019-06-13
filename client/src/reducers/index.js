import { combineReducers } from 'redux';

import { alert  } from '../reducers/alert.reducer';
import { authentication } from '../reducers/auth.reducer';
import { users  } from '../reducers/user.reducer';

export default combineReducers({
  alert,
  authentication,
  users
});
