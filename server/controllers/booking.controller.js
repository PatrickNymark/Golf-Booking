const express = require('express');
const router = express.Router();
const bookingService = require('../services/booking.service');
const authorize = require('../helpers/role-auth');

// routes
router.post('/create/:course', authorize(['staff', 'player']), createBooking);
router.get('/find/:course', getBookingByDate);
module.exports = router;

function createBooking(req, res, next) {
  bookingService.createBooking(req.user.id, req.body, req.params.course)
    .then(booking => res.json(booking))
    .catch(err => next(err));
}

function getBookingByDate(req, res, next) {
  bookingService.getBookingsByDate(req.params.course, req.query.startDate, req.query.endDate)
    .then(bookings => res.json(bookings))
    .catch(err => next(err))
}


