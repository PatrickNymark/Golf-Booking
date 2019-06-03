const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  email: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  clubs: [{
    type: Schema.Types.ObjectId
  }]
})

module.exports = Trainer = mongoose.model('trainers', TrainerSchema);