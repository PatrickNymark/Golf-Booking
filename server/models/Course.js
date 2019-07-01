const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  payAndPlay: {
    type: Boolean,
    required: true
  },
  minHandicap: {
    type: Boolean,
  },
  courseType: {
    type: Number,
    enum: [9, 18],
    default: 18
  },
  par: {
    type: Number,
    enum: [72, 71, 70, 69],
    default: 72
  },
  totalLength: {
    type: [Number],
    required: true
  },
  courseRating: {
    type: Number,
    required: true
  },
  courseSlope: {
    type: Number,
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
}, {
  timestamps: true
})

module.exports = Course = mongooose.model('courses', CourseSchema);