const express = require('express');
const router = express.Router();

// controllers
const authController = require('../../controllers/authController');

/**
 * Find all clubs
 */
router.post('/register', authController.register)

/**
 * Create new club
 */
router.post('/login', authController.login);




module.exports = router;