const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
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
  handicap: {
    type: Number
  },
  active: {
    type: Boolean,
    required: true
  },
  club: {
    type: Schema.Types.ObjectId,
    ref: 'clubs'
  }
})

module.exports = Player = mongoose.model('players', PlayerSchema);