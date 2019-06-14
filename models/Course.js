const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  holes: [{
    tees: [{
      teeNumber: Number,
      holeLength: Number
    }],
    currentFlagPosition: {
      yCordinate: Number,
      xCordinate: Number
    }
  }]
})

module.exports = Course = mongooose.model('courses', CourseSchema);