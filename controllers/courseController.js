// models
const Course = require('../models/Course');
const Staff = require('../models/Staff');

// validators
const courseValidator = require('../validation/newCourse');

exports.createCourse = (req, res) => {
  const { isValid, errors } = courseValidator(req.body);

  if(!isValid) {
    return res.status(422).json(errors);
  }

  // Check if staff is not connected to the course trying to edit
  Staff.findOne({ user: req.user.id }).then(staff => {
    if(staff.club != req.body.club) {
      return res.status(401).json({ error: 'You do not have access to edit this course'})
    }

    const newCourse = new Course({
      title: req.body.title,
      club: staff.club,
      holes: req.body.holes
    });

    newCourse.save().then(course => {
      res.json(course)
    }).catch(err => res.status(500).json(err.message))
  }).catch(err => res.status(500).json(err.message));
};

exports.deleteCourse = (req, res) => {
  const { id } = req.params;

  Course.findById(id).then(course => {
    if(!course) {
      return res.status(404).json({ error: 'Club not found'})
    }

    course.remove().then(course => res.json(course)).catch(err => res.status(500).json(err.message))
  })
}