import React, { Component } from 'react';
import axios from 'axios';

class AdminPage extends Component {
  render() {
    return (
      <div>
        <h1>Admin Route</h1>
        <button onClick={this.onClick}>Click to dispatch</button>
      </div>
    );
  }
}

export default AdminPage;

