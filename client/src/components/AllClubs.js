import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createClub } from '../actions/clubActions';

class AllClubs extends Component {
  render() {
    return (
      <div>
        <h1>Test Route</h1>
        <button onClick={this.props.createClub}>Click to dispatch</button>
      </div>
    );
  }
}

export default connect(
  null,
  { createClub }
)(AllClubs);
