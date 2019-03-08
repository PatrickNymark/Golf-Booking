import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>React-Redux Boilerplate</h1>
          </header>
        </div>
        <Router>
          <Route exact path="/test" component={Test} />
        </Router>
      </Provider>
    );
  }
}

export default App;
