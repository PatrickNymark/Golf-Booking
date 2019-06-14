
// models
const Course = require('../models/Course');

module.exports = {
  createCourse
}

/**
 * Create course.
 * @param courseData an object that represents a course.
 * @returns A Promise or exception.
 */
async function createCourse(courseData) {
  if (await Course.findOne({ title: courseData.title })) {
    throw 'Title "' + userData.title + '" is already taken';
  }

  const course = new Course(courseData);
  return await course.save();
}

