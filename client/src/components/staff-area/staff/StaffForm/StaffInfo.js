import React, { Component } from 'react'

class StaffInfo extends Component {
  render() {
    const { currentStep, handleChange, handleForm } = this.props;
    if(currentStep !== 2) {
      return null;
    }

    return (
        <div className="form-group col-md-6">
          <label for="gender">Gender</label>
          <select class="form-control" name="gender" onChange={handleChange} id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button className="btn btn-primary mt-2" onClick={handleForm}>Prev</button>
          <button className="btn btn-primary mt-2 ml-2" type="submit">Submit</button>
        </div>
    )
  }
}

export default StaffInfo;
