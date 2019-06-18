import React, { Component } from 'react'

class UserInfo extends Component {
  render() {
    const { currentStep, handleChange, handleForm } = this.props;
    if(currentStep !== 1) {
      return null;
    }

    return (
        <div>
          <div className="form-row">
          <div class="form-group col-md-6">
            <label for="firstName">First Name</label>
            <input 
              type="text" 
              class="form-control" 
              id="firstName" 
              placeholder="Enter first name"
              name="firstName"
              value={this.props.firstName}
              onChange={handleChange}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="lastName">Last Name</label>
            <input 
              type="text" 
              class="form-control" 
              id="lastName" 
              placeholder="Enter last name"
              name="lastName"
              value={this.props.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="email">Email</label>
            <input 
              type="email" 
              class="form-control" 
              id="email" 
              placeholder="Enter email"
              name="email"
              value={this.props.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="email">Password</label>
            <input 
              type="password" 
              class="form-control" 
              id="password" 
              placeholder="Enter password"
              name="password"
              value={this.props.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleForm}>Next</button>
      </div>
    )
  }
}

export default UserInfo;