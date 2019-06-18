import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers/history';

import { authActions } from './actions';

import { Navbar } from './components/Navbar';

import Routes from './components/routing/Routes';

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
            <Routes Route={Route} />
          </div>
        </Router>
    );
  }
}

const connectedApp = connect(null)(App);
export { connectedApp as App }
