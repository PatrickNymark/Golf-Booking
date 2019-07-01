import React from 'react'
import { PrivateRoute } from '../routing/PrivateRoute';
import { Role } from '../../helpers';

import { Login } from '../auth/Login';
import HomePage from '../HomePage';
import Users from '../Users';
import Calendar from '../bookings/Calendar';

const Routes = ({ Route }) => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/all" roles={[Role.Staff, 'admin']} component={Users} />
      <Route exact path="/booking/:course" component={Calendar} />
    </div>

  )
}

export default Routes;