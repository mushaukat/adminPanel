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

    };
    this.onChange = this.onChange.bind(this);

  }


  errorMsg = () => {
    if (this.state.Error) {
      return <b> <br /><p className="error-message"> {this.state.errorMsg}  </p> </b>
    }
  }


  componentDidMount() {

    document.getElementById("b2").className+= "active"
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
            console.log(response.data.Data)
            this.setState({ blockFacilities: response.data.Data, })
          }
        })

  }


  submitData = (e) => {
    console.log("fac");
  }



  onChange(event,facility_id) {

    const target = event.target;

    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = parseInt(target.name);

    const userData = JSON.parse(localStorage.getItem('userData'));

    const data = {
      block_id: userData.block_id,
      hostel_id: userData.hostel_id,
      facility_id: name
    };

    console.log("State "+target.checked)
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
              this.refs[facility_id].checked = false;
            }
          })
    }
  }
    isChecked(facility_id) {
      console.log("inside1");
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
              <label><input type="checkbox" name={facility.facility_id} ref={facility.facility_id} checked={this.isChecked(facility.facility_id)} onChange={(e)=>{this.onChange(e,facility.facility_id)}}></input>{facility.facility_name}</label>
            </div>
          </div>
        )
      }

      );



      return (

        <div>

          <h3 className="margint60">Tick Faclities which are available in Hostels</h3>
          {facilities}

          <div>
            {this.errorMsg()}
          </div>

        </div>

      );
    }
  }

  export default Facilities;