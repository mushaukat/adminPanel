import React, { Component } from 'react';
import '../stylesheets/login-signup.css'
import axios from 'axios';
import { Redirect } from "react-router-dom";


class Facilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facilities: [],
      selected_facilities: [],
      blockFacilities: [],
      redirect: false,
      Error: false,
      errorMsg: '',
      facilityCount: 0,
      facilityError: '',
    };
    this.onChange = this.onChange.bind(this);

  }


  errorMsg = () => {
    if (this.state.Error) {
      return <b> <br /><p className="error-message"> {this.state.errorMsg}  </p> </b>
    }
  }


  componentDidMount() {

    document.getElementById("b2").className += "active"
    document.getElementById("back-btn").style.display = "block";

    axios.post('/getFacilities')
      .then(
        response => {
          if (response.data.Error) {
            console.log(response.data);
            console.log(response.data.Error);

            this.setState({
              Error: true,
              errorMsg: response.data.Message + " Try Again",
            })
          } else {
            console.log(response.data.Data);
            this.setState({ facilities: response.data.Data, })
          }
        })


    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    const data = {
      block_id: userData.block_id,
      hostel_id: userData.hostel_id,
    };

    axios.post('/getBlockFacilities', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log(response.data);
            console.log(response.data.Error);

            this.setState({
              Error: true,
              errorMsg: response.data.Message + " Try Again",
            })
          } else {
            console.log("okkkkk "+response.data.Data)
            for (var i = 1; i <= response.data.Data.length; i++) {
              this.setState({ facilityCount: this.state.facilityCount + 1 })
            }
            this.setState({ blockFacilities: response.data.Data, })
          }
        })

  }


  submitData = (e) => {
    console.log("count" + this.state.facilityCount);
    if (this.state.facilityCount < 3) {
      this.setState({ facilityError: "Please Select atleat 3 facilities" })
      return false
    }
    else {
      this.setState({ facilityError: "" })
      return true
    }

  }



  onChange(event, facility_id) {

    const target = event.target;

    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = parseInt(target.name);

    const userData = JSON.parse(localStorage.getItem('userData'));

    const data = {
      block_id: userData.block_id,
      hostel_id: userData.hostel_id,
      facility_id: name
    };

    console.log("State " + target.checked)
    if (target.checked) {

      axios.post('/insertBlockFacilities', data)
        .then(
          response => {
            if (response.data.Error) {
              console.log(response.data);
              console.log(response.data.Error);

              this.setState({
                Error: true,
                errorMsg: response.data.Message + " Try Again",
              })
            } else {
              console.log(response.data);
              this.setState({ facilityCount: this.state.facilityCount + 1 })
              this.refs[facility_id].checked = true;
              
            }
          })

    }
    else {

      axios.post('/removeBlockFacility', data)
        .then(
          response => {
            if (response.data.Error) {
              console.log(response.data);
              console.log(response.data.Error);

              this.setState({
                Error: true,
                errorMsg: response.data.Message + " Try Again",
              })

            } else {
              console.log(response.data)
              this.setState({ facilityCount: this.state.facilityCount - 1 })
              this.refs[facility_id].checked = false;
              
            }
          })
    }
  }
  isChecked(facility_id) {
    console.log("inside11 id checked");
    var id = facility_id
    var checked = false
    this.state.blockFacilities.map((facilities) => {
      if (id === facilities.facility_id) {
        checked = true
      }
    }
    )
    return checked;

  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    const facilities = this.state.facilities.map((facility, index) => {

      return (

        <div key={index}>
          <div className="checkbox  text-paragraph">
            <label><input type="checkbox" name={facility.facility_id} ref={facility.facility_id} checked={this.isChecked(facility.facility_id)} onChange={(e) => { this.onChange(e, facility.facility_id) }}></input>{facility.facility_name}</label>
          </div>
        </div>
      )
    }

    );



    return (

      <div>

        <h3 className="margint60">Tick Facilities which are available in Hostels</h3>
        <p>Please Select atleast 3 facilities</p>

        {facilities}

        <div>
          {this.errorMsg()}
        </div>
        <br /> <b> <p className="error-message">{this.state.facilityError} </p> </b>

      </div>

    );
  }
}

export default Facilities;