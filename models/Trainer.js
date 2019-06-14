const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
  gender: {
    type: String,
    required: true
  }
})

module.exports = Trainer = mongoose.model('trainers', TrainerSchema);