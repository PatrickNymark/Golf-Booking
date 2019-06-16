const moment = require('moment');

// models
const Booking = require('../models/Booking');
const Course = require('../models/Course');

module.exports = {
  createBooking
}

/**
 * Create booking.
 * @param {string} creator a string that represents a players's id
 * @param {object} bookingData an object that represents a booking.
 * @returns A Promise or exception.
 */
async function createBooking(creator, bookingData) {
  const newBooking = new Booking({
    players: bookingData.players,
    course: bookingData.course,
    date: bookingData.date,
    creator
  });

  if(await Booking.find({ 
    course: bookingData.course,
    date: {
      $gte: moment(bookingData.data).subtract('6', 'm').toDate(),
      $lte: moment(bookingData.data).add('6', 'm').toDate()
    }}
  )) {
      throw 'The tee time is already taken';
  };

  return await newBooking.save();
}
