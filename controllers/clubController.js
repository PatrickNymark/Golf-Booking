// Models
const Club = require('../models/Club');

// Validators
const clubValidator = require('../validation/clubs/club');

exports.createClub = (req, res) => {
  const {
    isValid,
    errors
  } = clubValidator(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }

  const newClub = new Club({
    title: req.body.title,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    info: req.body.info,
    openingHours: req.body.openingHours,
    courses: req.body.courses
  });

  newClub.save().then(club => res.json(club)).catch(err => res.status(500).json(err.message))
}

exports.removeClub = (req, res) => {
  const { id } = req.params;

  Club.findById(id).then(club => {
    if(!club) {
      return res.status(404).json({ error: 'Club not found'})
    }

    club.remove().then(club => res.json(club)).catch(err => res.status(500).json(err.message))
  })
} 

exports.findAllClubs = (req, res) => {
  Club.find().then(clubs => {
    res.json(clubs)
  }).catch(err => res.status(500).json(err.message))
}