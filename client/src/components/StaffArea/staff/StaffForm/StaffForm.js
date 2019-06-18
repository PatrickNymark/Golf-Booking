import React, { Component } from 'react'
import StaffInfo from './StaffInfo';
import UserInfo from './UserInfo';
import { connect } from 'react-redux';
import { authActions, staffActions } from '../../../../actions';
import axios from 'axios';

class StaffForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            submitted: false
        };

    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        });
    }

    handleForm = () => {
      const { currentStep } = this.state;
      this.setState({
        currentStep: currentStep <= 1 ? 2 : 1
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;

    }

    render() {
      const { currentStep, firstName, lastName, email, password, gender } = this.state;
        return (
            <div className="container">
                <h1 className="display-5 mt-5 mb-5 text-center">Create Staff</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                <UserInfo 
                  currentStep={currentStep}  
                  handleForm={this.handleForm} 
                  handleChange={this.handleChange} 
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  password={password}
                />
                <StaffInfo 
                  currentStep={currentStep} 
                  handleForm={this.handleForm} 
                  handleChange={this.handleChange}
                  gender={gender}
                />
              </form>
            </div>
        );
    }
}

const connectedStaffForm = connect(null)(StaffForm);
export { connectedStaffForm as StaffForm };