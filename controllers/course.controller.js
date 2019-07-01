const express = require('express');
const router = express.Router();
const courseService = require('../services/course.service');
const authorize = require('../helpers/role-auth');

// routes
router.post('/create', authorize('staff'), createCourse);
router.post('/delete/:id', deleteCourse);
router.post('/update/:id', updateCourse);
router.get('/:id', getCourseById);
module.exports = router;

function createCourse(req, res, next) {
  courseService.createCourse(req.body)
    .then(course => res.json(course))
    .catch(err => next(err));
}

function deleteCourse(req, res, next) {
  courseService.deleteCourse(req.params.id)
    .then(course => res.json(course))
    .catch(err => next(err))
}

function updateCourse(req, res, next) {
  courseService.updateCourse(req.params.id, req.body)
    .then(course => res.json(course))
    .catch(err => next(err))
}

function getCourseById(req, res, next) {
  courseService.getCourseById(req.params.id)
    .then(course => res.json(course))
    .catch(err => next(err))
}



