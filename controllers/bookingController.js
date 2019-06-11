
// models
const Booking = require('../models/Booking');

// validators
const bookingValidator = require('../validation/newBooking');

exports.createBooking = (req, res) => {
  const { isValid, errors } = bookingValidator(req.body);

  if(!isValid) {
    res.status(422).json(errors);
  }

  const newBooking = new Booking({
    players: req.body.players,
    club: req.body.club,
    course: req.body.course,
    time: req.body.time
  })

  newBooking.save().then(booking => res.json(booking)).catch(err => res.status(500).json(err.message))
};

exports.deleteBooking = (req, res) => {
  const { id } = req.params;

  Booking.findById(id).then(booking => {
    if(!booking) {
      res.status(422).json({ error: 'Booking not found'})
    }

    booking.remove().then(booking => res.json(booking)).catch(err => res.status(500).json(err.message))
  })
}

