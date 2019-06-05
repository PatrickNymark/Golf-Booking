
// Models
const Booking = require('../models/Booking');

exports.createBooking = (req, res) => {
  const { players, club, course, time } = req.body;

  const newBooking = new Booking({
    players,
    club,
    course,
    time
  })

  newBooking.save().then(booking => res.json(booking))
}

