import React from 'react'
import BookingRow from './BookingRow';
import moment from 'moment';

const RowWrapper = ({ date, interval, hours, handleModal, bookings}) => {
  return (
    <React.Fragment>
      {Array.from(Array(60 / interval), (e, i) => {
        let itr = (i < 1) ? i + '' + i : i + '' + 0;

        return (
          <tr key={itr} className="hours-row">
            <BookingRow 
              handleModal={handleModal} 
              text={itr} hours={hours} 
              bookings={bookings.filter(booking => booking.timeValue === parseInt(itr, 10))} 
            />
          </tr>
        )
      })}     
    </React.Fragment>
  )
}

export default RowWrapper;
