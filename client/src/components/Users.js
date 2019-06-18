import React, { Component } from 'react'
import axios from 'axios';

export default class Users extends Component {
  state = {
    users: []
  }
  componentWillMount() {
    axios.get('/api/auth/all').then(res => {
      this.setState({
        users: res.data
      })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Users</h1>
        <h1>HELLO WORLD</h1>
      </div>
    )
  }
}
