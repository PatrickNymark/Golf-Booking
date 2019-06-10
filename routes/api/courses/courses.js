const express = require('express');
const router = express.Router();

// controllers
const courseController = require('../../../controllers/courseController');

/**
 * create course
 */
router.post('/create', courseController.createCourse);

/**
 * delete course
 */
router.post('/delete/${id}', courseController.deleteCourse);

module.exports = router;