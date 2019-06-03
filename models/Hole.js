const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoleSchema = new Schema({
  tees: [{
    teeNumber: Number,
    holeLength: Number
  }]
});

module.exports = Hole = mongoose.model('holes', HoleSchema);