const express = require('express');
const router = express.Router();
const passport = require('passport');

// Controllers
const authController = require('../../../controllers/authController');
const bookingController = require('../../../controllers/bookingController');

/**
 * Find all clubs
 */
router.post('/create', bookingController.createBooking)





module.exports = router;