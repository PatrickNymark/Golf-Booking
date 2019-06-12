const Staff = require('../models/Staff');

// Validators
const newStaffValidator = require('../validation/newStaff');

exports.createStaff = (req, res) => {
  const { isValid, errors } = newStaffValidator(req.body);

  if(!isValid) {
    return res.status(422).json(errors);
  }

  const newStaff = new Staff({
    gender: req.body.gender,
    club: req.body.club,
    user: req.body.user
  });

  newStaff.save().then(staff => res.json(staff)).catch(err => res.status(500).json(err.message))
};

exports.deleteStaff = (req, res) => {
  const { id } = req.params;

  Staff.findOneAndDelete({ _id: id }).then(staff => {
    if(!staff) {
      return res.status(404).json({ msg: 'No staff found'});
    }

    res.json(staff)
  }).catch(err => res.status(500).json(err.message));
};

exports.findAllStaff = (req, res) => {
  Staff.find().then(staff => {
    if(!staff) {
      res.status(404).json({  msg: 'No staff found'})
    }

    res.json(staff)
  }).catch(err => res.status(500).json(err.message))
}
