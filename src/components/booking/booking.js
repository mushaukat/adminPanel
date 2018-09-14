import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './booking.css'

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingBookings: [],
      previousBookings: [],
      redirect: false,
      url: '',
      noPendingBookingMsg: '',
      noPreviousBookingMsg: '',

    };

  }

  componentDidMount() {
    const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));

    const data = {
      block_id: hostelAdmin.block_id,
      hostel_id: hostelAdmin.hostel_id,
    };
    console.log(11)
    axios.post('/getPendingBlockBookings', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log(121)
            console.log(response.data);
            this.setState({ noPendingBookingMsg: response.data.Message, })

          } else {
            console.log(111)
            const data = response.data
            console.log(data)
            this.setState({
              pendingBookings: data.Data,
              noPendingBookingMsg: ''
            })
            console.log(this.state.pendingBookings)

          }
        })



    axios.post('/getApprovedBlockBookings', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log(221)
            console.log(response.data);
            this.setState({ noPreviousBookingMsg: response.data.Message, })

          } else {
            console.log(222)
            const data = response.data
            console.log(data)
            this.setState({
              previousBookings: data.Data,
              noPreviousBookingMsg: ''
            })

          }
        })
  }

  showStudentProfile(e, userId) {
    this.setState({
      url: '/hostel/user/' + userId,
      redirect: true
    })

  }

  approveBooking(e, bookingId, user, index) {
    const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
    const data = {
      block_id: hostelAdmin.block_id,
      hostel_id: hostelAdmin.hostel_id,
      booking_id: bookingId,
    };

    axios.post('/approveBooking', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log("not")
            console.log(response.data);

          } else {
            const data = response.data
            var array = this.state.previousBookings
            array.unshift(user)
            this.setState({
              previousBookings: array,
              noPendingBookingMsg: '',
            })
            console.log(this.state.previousBookings)
            var array = this.state.pendingBookings
            array.splice(index, 1);
            this.setState({ pendingBookings: array })
            if (this.state.pendingBookings.length === 0) {
              this.setState({ previousBookings: "No Pending Bookings!" })
            }

          }
        })
  }

  declineBooking(e, bookingId, index) {
    const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
    const data = {
      block_id: hostelAdmin.block_id,
      hostel_id: hostelAdmin.hostel_id,
      booking_id: bookingId,
    };

    axios.post('/declineBooking', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log("not")
            console.log(response.data);

          } else {
            const data = response.data
            // var array = this.state.previousBookings
            // array.unshift(user)
            // this.setState({ 
            //   previousBookings: array,
            //   noPendingBookingMsg: '',
            //  })
            // console.log(this.state.previousBookings)
            var array = this.state.pendingBookings
            array.splice(index, 1);
            this.setState({ pendingBookings: array })
            if (this.state.pendingBookings.length === 0) {
              this.setState({ previousBookings: "No Pending Bookings!" })
            }

          }
        })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect exact to={this.state.url} />
    }

    const pendingBookings = this.state.pendingBookings.map((user, index) => {
      var d = new Date(user.booking_date);
      var date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
      var includeMess
      if (user.includes_mess === 0) {
        includeMess = "Yes"
      }
      else {
        includeMess = "No"
      }
      return (
        <tr id={index}>
          <div className="booking-click">
            <Link to="" >
              <span>Booking Id: {user.booking_id} &emsp;</span>
              <span>User Id: {user.user_id} &emsp; </span>
              <span>Booking Date: {date} {time} &emsp; </span>
              <br />
              <span>Name: {user.user_name} &emsp; </span>
              <span>Seaters: {user.seaters} &emsp; </span>
              <span>Include Mess: {includeMess} &emsp; </span>
            </Link>
          </div>
          <div className="booking-btn">
            <button value="View Details" onClick={(e) => this.showStudentProfile(e, user.user_id)} >View Details</button> &emsp;
          <button value="Approve" onClick={(e) => this.approveBooking(e, user.booking_id, user, index)} > Approve</button> &emsp;
          <button value="Decline" onClick={(e) => this.declineBooking(e, user.booking_id, index)} >Decline</button>
          </div>

        </tr>
      )

    })

    const previousBookings = this.state.previousBookings.map((user, index) => {
      var d = new Date(user.booking_date);
      var date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
      var includeMess
      if (user.includes_mess === 0) {
        includeMess = "Yes"
      }
      else {
        includeMess = "No"
      }
      return (
        <tr id={index}>
          <div className="booking-click">
            <Link to="" >
              <span>Booking Id: {user.booking_id} &emsp;</span>
              <span>User id: {user.user_id} &emsp; </span>
              <span>Booking Date: {date} {time} &emsp; </span>
              <br />
              <span>Name: {user.user_name} &emsp; </span>
              <span>Seaters: {user.seaters} &emsp; </span>
              <span>Include Mess: {includeMess} &emsp; </span>
            </Link>
          </div>
          <div className="booking-btn">
            <button value="View Details" onClick={(e) => this.showStudentProfile(e, user.user_id)} >View Details</button> &emsp;
          </div>

        </tr>
      )

    })

    return (

      <div >
        <h2>Bookings </h2>
        <br />
        <h4>Pending Booking</h4>
        <br />
        <div>
          {this.state.noPendingBookingMsg}
          {pendingBookings}
        </div>
        <br />
        <hr />
        <br />
        <h4>Previous Booking</h4>
        <br />
        <div>
          {this.state.noPreviousBookingMsg}
          {previousBookings}
        </div>



      </div>
    );
  }
}

export default Booking;