const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
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

module.exports = Booking = mongoose.model('bookings', BookingSchema);