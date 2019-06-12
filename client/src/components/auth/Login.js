import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
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

    const userDate = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userDate, this.props.history);
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

export default connect(null, { loginUser })(Login);

