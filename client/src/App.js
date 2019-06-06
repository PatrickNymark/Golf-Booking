import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllClubs from './components/AllClubs';
import CreateBooking from './components/CreateBooking';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

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
