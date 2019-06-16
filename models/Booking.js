const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  players: [{
    type: Schema.Types.ObjectId,
    ref: 'players',
    required: true
  }],
  course: {
    type: Schema.Types.ObjectId,
    ref: 'courses',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'players'
  }
});

module.exports = Booking = mongoose.model('bookings', BookingSchema);