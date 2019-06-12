import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllClubs from './components/AllClubs';
import CreateBooking from './components/CreateBooking';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import authenticate from './helpers/authenticate';
import { LOGIN_USER_SUCCESS } from './actions/types';

// Check localStorage for token
if (localStorage.jwtToken) {
  // Set default axios header
  authenticate(localStorage.jwtToken);
  // Decode token
  const decoded = jwt.decode(localStorage.jwtToken);
  // Set user authentication
  store.dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: decoded
  }); 
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/all-clubs" component={AllClubs} />
            <Route exact path="/create-booking" component={CreateBooking} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
