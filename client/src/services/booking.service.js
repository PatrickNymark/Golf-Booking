import axios from 'axios';
import moment from 'moment';

export const bookingService = {
    getBookingsByDate
};

/**
 * Get bookings by date
 * @param {string} course a string that represennts a course's id 
 * @param {moment} date a moment wrapped date that represents start date 
 * Date format: MM-DD-YYYY
 */
function getBookingsByDate(course, date) {
  const startDate = date.format('MM-DD-YYYY');
  const endDate = moment(startDate).add(1, 'd').format('MM-DD-YYYY');

  return axios.get(`/api/booking/find/${course}?startDate=${startDate}&endDate=${endDate}`).then(response => {
    return response.data;
  }); 
}

 