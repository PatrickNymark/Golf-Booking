import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../actions';
import { history } from '../helpers';


class Navbar extends Component {  

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.logout());
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand" href="#">Navbar</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
            </li>
            {!isAuthenticated && 
              <li class="nav-item">
                <Link to="/login" class="nav-link">Login</Link>
              </li> }
            <li class="nav-item">
              <Link to="/register" class="nav-link">Register</Link> 
            </li>
            <li class="nav-item">
              <Link to="/all" class="nav-link">All</Link> 
            </li>
            {isAuthenticated && 
              <li class="nav-item">
                <Link onClick={this.handleLogout} to="/login" class="nav-link">Logout</Link>
              </li> }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
      auth: state.authentication
  };
}

const connectedNavBar = connect(mapStateToProps)(Navbar);
export {connectedNavBar as Navbar};