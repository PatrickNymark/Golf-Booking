import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class StaffPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Staff Area</h1>
        <Link to="/course/create">Create Course</Link>
      </div>
    )
  }
}
