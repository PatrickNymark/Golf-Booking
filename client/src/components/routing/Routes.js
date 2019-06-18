import React from 'react'
import { PrivateRoute } from '../routing/PrivateRoute';
import { Role } from '../../helpers';

import { Login } from '../auth/Login';
import HomePage from '../HomePage';
import Users from '../Users';

const Routes = ({ Route }) => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/all" roles={[Role.Staff, 'admin']} component={Users} />
    </div>
  )
}

export default Routes;