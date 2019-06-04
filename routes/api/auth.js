const express = require('express');
const router = express.Router();
const passport = require('passport');

// Controllers
const authController = require('../../controllers/authController');

/**
 * Find all clubs
 */
router.post('/signup', authController.register)

/**
 * Create new club
 */
router.post('/login', authController.login);

router.get('/test', passport.authenticate('jwt', { session: false }), authController.roleAuthorization(['player','trainer', 'admin']), (req, res) => {
  res.json(req.user)
})




module.exports = router;