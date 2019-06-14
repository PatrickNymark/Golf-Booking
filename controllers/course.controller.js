const express = require('express');
const router = express.Router();
const courseService = require('../services/course.service');
const authorize = require('../helpers/role-auth');

// routes
router.post('/create', authorize('staff'), createCourse);
module.exports = router;

function createCourse(req, res, next) {
  courseService.createCourse(req.body)
    .then(course => res.json(course))
    .catch(err => next(err));
}

