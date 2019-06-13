import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import './App.css';


import { history } from './helpers/history';
import Navbar from './components/Navbar';
import { LoginPage } from './components/LoginPage';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
            <Navbar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </div>
        </Router>
    );
  }
}

export default App; 