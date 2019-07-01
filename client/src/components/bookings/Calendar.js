import React, { Component } from 'react'
import moment from 'moment';
import {Calendar as ReactCalendar } from 'react-calendar';
import { bookingService, courseService } from '../../services'; 
import './style.css';

import BookingHeader from './BookingHeader';
import RowWrapper from './RowWrapper';
import Modal from './Modal';

class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: moment(),
      interval: 10,
      hours: 16,
      bookings: [],
      modal: false,
      course: {}
    }
  }

  componentWillMount() {
    this.getBookings();
    this.getCourse();
  }


  componentDidUpdate(prevProps, prevState) {
    if(!this.state.date.isSame(prevState.date)) {
      this.getBookings();
    } 
  }

  getBookings() {
    const { course } = this.props.match.params;

    bookingService.getBookingsByDate(course, this.state.date).then(bookings => {
      this.setState({
        bookings
      })
    });
  }

  getCourse() {
    const { course } = this.props.match.params;
    
    courseService.getCourseById(course).then(course => {
      this.setState({
        course
      })
    })
  }

  onNext = () => {
    this.setState({
      date: moment(this.state.date).add(1, 'd')
    })
  }

  onPrev = () => {    
    this.setState({
      date: moment(this.state.date).subtract(1, 'd')
    })
  }

  onChange = (date) => {
    this.setState({
      date: moment(date)
    })
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
 
  render() {
    const { date, interval, hours, bookings, modal } = this.state;
    return (
      <div className="container"> 
        <h1 className="display-5 mt-5 mb-5 text-center">Bookings</h1>

        <div className="row">
          <div className="col-4">
            <ReactCalendar className="calendar" locale="en" value={date.toDate()} onChange={this.onChange} />
          </div>

          <div className="col-8">
            <div className="calendar">
              <div className="month"> 
              <ul>
                <li onClick={this.onPrev} class="prev">&#10094;</li>
                <li onClick={this.onNext} class="next">&#10095;</li>
                <li>
                  {date.format('dddd DD')}
                  <br />
                  <span>{date.format('MMMM')}</span>
                </li>
              </ul>
            </div>

            <Modal modal={modal} handleModal={this.handleModal} />

            <table className="hours">
              <thead>
                <tr>
                  <BookingHeader hours={hours} />
                </tr>
              </thead>        
              
              <tbody>
                <RowWrapper date={date} interval={interval} hours={hours} handleModal={this.handleModal} bookings={bookings} />
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;