const express = require('express');
const router = express.Router();
const passport = require('passport');

// controllers
const authController = require('../../controllers/authController');

/**
 * register user
 */
router.post('/register', authController.register)

/**
 * login user
 */
router.post('/login', authController.login);

/**
 * All users
 */
router.get('/all', passport.authenticate(), authController.getAll)



module.exports = router;