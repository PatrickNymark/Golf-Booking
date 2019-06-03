const express = require('express');
const router = express.Router();

// Controllers
const clubController = require('../../controllers/clubController');

/**
 * Find all clubs
 */
router.get('/find/all', clubController.findAllClubs)

/**
 * Create new club
 */
router.post('/new', clubController.createClub);

module.exports = router;