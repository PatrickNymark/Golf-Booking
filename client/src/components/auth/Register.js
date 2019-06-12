import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: {
        first: this.state.firstName,
        last: this.state.lastName,
      },
      password: this.state.password,
      email: this.state.email,
      role: this.state.role
    }

    axios.post('/api/auth/register', payload).then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="firstName" 
            placeholder="Enter first name" 
            onChange={this.onChange} 
          />
          <input 
            type="text" 
            name="lastName" 
            onChange={this.onChange} 
            placeholder="Enter last name" 
          />
          <input 
            type="text" 
            name="email" 
            onChange={this.onChange} 
            placeholder="Enter email"
          />
          <input 
            type="password" 
            name="password" 
            onChange={this.onChange} 
            placeholder="Enter password"
          />
          <input 
            type="text" 
            name="role" 
            onChange={this.onChange} 
            placeholder="Enter role" 
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Register;