import axios from 'axios';

export const courseService = {
    getCourseById
};

/**
 * Get course by id
 * @param {string} id a string that represennts a course's id 
 */
function getCourseById(id) {
  return axios.get(`/api/course/${id}`).then(response => {
    return response.data;
  }); 
}

