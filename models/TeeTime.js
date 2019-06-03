const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeeTimeSchema = new Schema({
  players: [{
    type: Schema.Types.ObjectId,
    required: true
  }],
  club: {
    type: Schema.Types.ObjectId,
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
});

module.exports = TeeTime = mongoose.model('teeTimes');