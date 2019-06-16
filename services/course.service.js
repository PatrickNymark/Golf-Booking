
// models
const Course = require('../models/Course');

module.exports = {
  createCourse,
  deleteCourse,
  updateCourse
}

/**
 * Create course.
 * @param {object} courseData an object that represents a course.
 * @returns A Promise or exception.
 */
async function createCourse(courseData) {
  if (await Course.findOne({ title: courseData.title })) {
    throw 'Title "' + courseData.title + '" is already taken';
  }

  const course = new Course(courseData);
  return await course.save();
}

/**
 * Delete course.
 * @param {string} id a string that represents a course's id 
 * @returns A Promise or exception
 */
async function deleteCourse(id) {
  return await Course.findByIdAndRemove(id);
}

/**
 * Update course
 * @param {object} courseData an object that represent the course
 * @param {string} id an string that represents a course's id
 * @returns A Promise or exception
 */
async function updateCourse(id, courseData) {
  const course = await Course.findById(id);

  course.title = courseData.title
  course.holes = courseData.holes

  return await course.save();
}
