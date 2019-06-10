const express = require('express');
const router = express.Router();
const passport = require('passport');

// Controllers
const authController = require('../../../controllers/authController');
const staffController = require('../../../controllers/staffController');

/**
 * Create Staff
 */
router.post('/create', staffController.createStaff);

/**
 * Delete staff
 */
router.post('/delete/${id}', staffController.deleteStaff);

/**
 * Get all staff
 */
router.get('/all', staffController.findAllStaff)




module.exports = router;