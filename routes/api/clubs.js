const express = require('express');
const router = express.Router();
const {
  check,
  validationResult
} = require('express-validator');


// Models
const Club = require('../../models/Club');

router.get('/find/all', (req, res) => {
  Club.find().then(clubs => {
    res.json(clubs)
  }).catch(err => res.status(500).json(err.message))
})

router.post('/new', [check('username').isEmail(), check('password').isLength({
  min: 5
})], (req, res) => {
  const {
    title,
    address,
    phoneNumber,
    email,
    info,
    openingHours,
    courses
  } = req.body;

  const newClub = new Club({
    title,
    address,
    phoneNumber,
    email,
    info,
    openingHours,
    courses
  });

  newClub.save().then(club => res.json(club)).catch(err => res.status(500).json(err.message))
})

module.exports = router;