import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      password: this.state.password,
      email: this.state.email
    }

    axios.post('/api/auth/login', payload).then(res => {
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

