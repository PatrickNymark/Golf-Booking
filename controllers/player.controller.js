const express = require('express');
const router = express.Router();
const playerService = require('../services/player.service');
const authorize = require('../helpers/role-auth');

// routes
router.post('/create', authorize('staff'), createPlayer);
module.exports = router;

function createPlayer(req, res, next) {
  playerService.createPlayer(req.body)
    .then(player => res.json(player))
    .catch(err => next(err))
}
