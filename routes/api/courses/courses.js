const express = require('express');
const router = express.Router();
const passport = require('passport');

// controllers
const courseController = require('../../../controllers/courseController');

// role authorization
const roleAuthorization = require('../../../helpers/roleAuthorization');

/**
 * create course
 */
router.post('/create', passport.authenticate(), roleAuthorization.authenticate(['staff']), courseController.createCourse);

/**
 * delete course
 */
router.post('/delete/${id}', passport.authenticate(), roleAuthorization.authenticate(['staff']), courseController.deleteCourse);

module.exports = router;