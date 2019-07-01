const moment = require('moment');

// models
const Booking = require('../models/Booking');
const Course = require('../models/Course');

module.exports = {
  createBooking,
  getBookingsByDate
}

/**
 * Create booking.
 * @param {string} creator a string that represents a players's id
 * @param {object} bookingData an object that represents a booking.
 * @param {string} course a string that represents a course id
 * @returns A Promise or exception.
 */
async function createBooking(creator, bookingData, course) {
  const date = moment(bookingData.date);

  const newBooking = new Booking({
    players: bookingData.players,
    course: course,
    date: date,
    creator,
    timeKey: date.hours(),
    timeValue: date.minutes()
  }); 

  const bookings = await Booking.find({ course: course, date: { $eq: bookingData.date }});
  
  if(bookings.length > 0) {
    throw 'The tee time is already taken';
  }

  return await newBooking.save(); 
}

/**
 * GG booking by date.
 * @param {string} creator a string that represents a players's id
 * @param {object} bookingData an object that represents a booking.
 * @returns A Promise or exception.
 */
async function getBookingsByDate(course, startDate, endDate) {
  const bookings = await Booking.find({ 
    course: course, 
    date: { 
      $gte: startDate, 
      $lt: endDate
    }
  });

  return bookings
}
