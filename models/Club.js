const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  info: {
    type: String
  },
  openingHours: [{
    day: String,
    open: Date,
    close: Date
  }],
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'courses'
  }]
});

module.exports = Club = mongoose.model('clubs', ClubSchema);