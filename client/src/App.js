import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import './App.css';


import store from './store';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
     
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
