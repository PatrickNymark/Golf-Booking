const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainingSessionSchema = new Schema({
  players: [{
    type: Schema.Types.ObjectId
  }],
  trainer: {
    type: Schema.Types.ObjectId,
    required: true
  },
  club: {
    type: Schema.Types.ObjectId,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
});

module.exports = TrainingSession = mongoose.model('trainingSessions', TrainingSessionSchema);