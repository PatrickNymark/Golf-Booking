import axios from 'axios';

export const authService = {
    getBookingsByDate
};

/**
 * Get bookings by date
 * @param {string} course a string that represennts a course's id 
 * @param {string} startDate a string that represents start date 
 * @param {string} endDate a string that represents end date 
 * Date format: MM-DD-YYYY
 */
function getBookingsByDate(course, startDate, endDate) {
  return axios.get(`/api/booking/find/${course}?startDate=${startDate}&endDate=${endDate}`).then(response => {
    return response.data;
  }); 
}

