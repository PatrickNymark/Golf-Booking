import React from 'react';

const BookingHeader = ({ hours }) => {
  return (
    <React.Fragment>
      {Array.from(Array(hours), (e, i) => {
        const itr = i + 7;
        return itr < 10 ? <th key={itr}>{0 + '' + itr}</th> : <th key={itr}>{itr}</th>
      })}
    </React.Fragment>
  )
}

export default BookingHeader;
