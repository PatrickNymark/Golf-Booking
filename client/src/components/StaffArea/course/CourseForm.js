import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import CourseInfo from './CourseInfo';
import HolesInfo from './HolesInfo';

class CourseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            title: '',
            holes: [],
            courseType: 18,
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

    }

    render() {
      const { currentStep, courseType } = this.state;
        return (
            <div className="container">
                <h1 className="display-5 mt-5 mb-5 text-center">Create Course</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                <CourseInfo currentStep={currentStep} courseType={courseType} handleChange={this.handleChange} />
                <HolesInfo currentStep={currentStep} courseType={courseType} handleChange={this.handleChange} />

                <button className="btn btn-primary" onClick={this.handleForm}>Next</button>
              </form>
            </div>
        );
    }
}

const connectedCourseForm = connect(null)(CourseForm);
export { connectedCourseForm as CourseForm };