// models
const Course = require('../models/Course');

exports.createCourse = (req, res) => {
  const { title, holes } = req.body;

  const newCourse = new Course({
    title,
    holes
  });

  newCourse.save().then(course => {
    res.json(course)
  }).catch(err => res.status(500).json(err.message))
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