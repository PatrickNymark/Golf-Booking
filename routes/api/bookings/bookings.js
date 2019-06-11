const express = require('express');
const router = express.Router();
const passport = require('passport');

// controllers
const bookingController = require('../../../controllers/bookingController');

/**
 * Find all clubs
 */
router.post('/create', bookingController.createBooking)





module.exports = router;