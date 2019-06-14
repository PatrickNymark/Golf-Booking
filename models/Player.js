const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  gender: {
    type: String,
    required: true
  },
  handicap: {
    type: Number
  },
  active: {
    type: Boolean,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
})

module.exports = Player = mongoose.model('players', PlayerSchema);