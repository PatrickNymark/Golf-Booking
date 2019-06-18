import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers/history';

import { authActions } from './actions';

import { Navbar } from './components/Navbar';
import { Login } from './components/auth/Login';
import HomePage from './components/HomePage';
import Users from './components/Users';
import { PrivateRoute } from './components/PrivateRoute';
import { Role } from './helpers';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(authActions.getCurrent());
  }
  render() {
    return (
        <Router history={history}>
          <div>
            <Navbar />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/all" roles={[Role.Staff, 'admin']} component={Users} />
          </div>
        </Router>
    );
  }
}

const connectedApp = connect(null)(App);
export { connectedApp as App }
