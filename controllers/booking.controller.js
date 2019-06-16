const express = require('express');
const router = express.Router();
const bookingService = require('../services/booking.service');
const authorize = require('../helpers/role-auth');

// routes
router.post('/create', authorize(['staff', 'player']), createBooking);
module.exports = router;

function createBooking(req, res, next) {
  bookingService.createBooking(req.user, req.body)
    .then(booking => res.json(booking))
    .catch(err => next(err));
}



