import React from 'react'
import { PrivateRoute } from '../routing/PrivateRoute';
import { Role } from '../../helpers';

import { Login } from '../auth/Login';
import HomePage from '../HomePage';
import Users from '../Users';
import { CourseForm } from '../StaffArea/course/CourseForm';
import StaffPage from '../StaffArea/StaffPage';
import { StaffForm } from '../StaffArea/staff/StaffForm/StaffForm';
import Bookings from '../booking/Bookings';

const Routes = ({ Route }) => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/all" roles={[Role.Staff, 'admin']} component={Users} />
      <Route exact path="/course/create" component={CourseForm} />
      <PrivateRoute exact path="/staff/admin" roles={Role.Staff} component={StaffPage} />
      <Route exact path="/staff/create" component={StaffForm} />
      <Route exact path="/bookings" component={Bookings} />
    </div>

  )
}

export default Routes;