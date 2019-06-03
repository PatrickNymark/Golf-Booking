const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  holes: [{
    type: Schema.Types.ObjectId,
    ref: 'holes'
  }]
})

module.exports = Course = mongooose.model('courses', CourseSchema);