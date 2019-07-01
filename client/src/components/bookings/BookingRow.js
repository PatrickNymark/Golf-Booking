import React from 'react'

const  BookingRow = ({ hours, handleModal, text, bookings}) => {
  return (
    <React.Fragment>
      {Array.from(Array(hours), (e, i) =>  {
        const key = i + 7;

        const booking = bookings.filter(booking => booking.timeKey === key);

        if(booking.length > 0) {
          return <td onClick={handleModal} className="booked" key={i}>{text}</td>
        } else {
          return <td onClick={handleModal} className="free" key={i}>{text}</td>
        }
      })}
    </React.Fragment>
  )
}

export default BookingRow;
