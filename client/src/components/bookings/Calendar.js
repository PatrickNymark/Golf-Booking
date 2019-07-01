import React, { Component } from 'react'
import moment from 'moment';
import axios from 'axios';
import './style.css';
import BookingRow from './BookingRow';
import Modal from './Modal';
import {Calendar as Cal } from 'react-calendar';
import { bookingService, courseService } from '../../services'; 


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
    return (
      <div className="container"> 
        <h1 className="display-5 mt-5 mb-5 text-center">Bookings</h1>

        <div className="row">
          <div className="col-4">
            <Cal className="calendar" locale="en" value={this.state.date.toDate()} onChange={this.onChange} />
          </div>

          <div className="col-8">
            <div className="calendar">
              <div className="month"> 
              <ul>
                <li onClick={this.onPrev} class="prev">&#10094;</li>
                <li onClick={this.onNext} class="next">&#10095;</li>
                <li>
                  {this.state.date.format('dddd DD')}
                  <br />
                  <span>{this.state.date.format('MMMM')}</span>
                </li>
              </ul>
            </div>

            <Modal modal={this.state.modal} handleModal={this.handleModal} />

            <table className="hours">
              <thead>
                <tr>
                <th>07</th>
                <th>08</th>
                <th>09</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th>19</th>
                <th>20</th>
                <th>21</th>
                <th>22</th>
              </tr>
              </thead>
              
              
              <tbody>
                <tr className="hours-row">
                  <BookingRow handleModal={this.handleModal} text="00" hours={this.state.hours} bookings={this.state.bookings.filter(booking => booking.timeValue === 0)} />
                </tr>
                <tr className="hours-row">
                  <BookingRow handleModal={this.handleModal} text="10" hours={this.state.hours} bookings={this.state.bookings.filter(booking => booking.timeValue === 10)} />
                </tr>
                <tr className="hours-row">
                  <BookingRow handleModal={this.handleModal} text="20" hours={this.state.hours} bookings={this.state.bookings.filter(booking => booking.timeValue === 20)} />
                </tr>
                <tr className="hours-row">
                  <BookingRow handleModal={this.handleModal} text="30" hours={this.state.hours} bookings={this.state.bookings.filter(booking => booking.timeValue === 30)} />
                </tr>
                <tr className="hours-row">
                  <BookingRow handleModal={this.handleModal} text="40" hours={this.state.hours} bookings={this.state.bookings.filter(booking => booking.timeValue === 40)} />
                </tr>
                <tr className="hours-row">
                  <BookingRow handleModal={this.handleModal} text="50" hours={this.state.hours} bookings={this.state.bookings.filter(booking => booking.timeValue === 50)} />
                </tr>
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