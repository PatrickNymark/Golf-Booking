const express = require('express');
const router = express.Router();
const passport = require('passport');

// controllers
const clubController = require('../../../controllers/clubController');

// role auth
const roleAuthorization = require('../../../helpers/roleAuthorization');

/**
 * Find all clubs
 */
router.get('/find/all', clubController.findAllClubs)

/**
 * create club
 */
router.post('/create', passport.authenticate(), roleAuthorization.authenticate(['admin']), clubController.createClub);

/**
 * remove club
 */ 
router.post('/remove/${id}', clubController.removeClub); 

module.exports = router;