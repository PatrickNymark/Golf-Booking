import React, { Component } from 'react';
import axios from 'axios';

class CreateBooking extends Component {


  onClick = () => {
    const user = {
      players: ['player1', 'player2']  
    }

    axios.post('/api/bookings/create', user).then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <h1>Test Route</h1>
        <button onClick={this.onClick}>Click to dispatch</button>
      </div>
    );
  }
}

export default CreateBooking;

