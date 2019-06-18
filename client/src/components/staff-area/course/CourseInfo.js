import React, { Component } from 'react'



const CourseInfo = ({ currentStep, handleChange, title }) =>  {
    if(currentStep !== 1) {
      return null;
    }

    return (
      <div>
        <div class="form-group">
            <label for="title">Course Title</label>
            <input 
              type="text" 
              class="form-control" 
              id="title" 
              placeholder="Enter course title"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label for="courseType">Course type</label>
              <select class="form-control" name="courseType" onChange={handleChange} id="courseType">
                <option value={9}>9-holes</option>
                <option value={18}>18-holes</option>
              </select>
            </div>
          </div>
          
      </div>
    )
}

export default CourseInfo;
