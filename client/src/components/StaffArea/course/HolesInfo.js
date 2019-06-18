import React, { Component } from 'react'

const HolesInfo = ({ handleChange, courseType, currentStep}) => {
    if(currentStep !== 2) {
      return null;
    }

    return (
      <div className="container">
        <h1 className="text-center display-5 mt-5 mb-5">Create golf holes</h1>
        <form>
          <div className="form-row">
          {[...Array(courseType)].map((e, i) => {
            const hole = i + 1;
            return (
              <div class="form-group mr-4">
                <label for="title">Hole {hole}</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="title" 
                  placeholder="Enter course title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
            )
          })}
          </div>
        </form>
      </div>
    )
}

export default HolesInfo;