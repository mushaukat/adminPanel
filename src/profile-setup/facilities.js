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
            console.log(this.state.facilities[0].facility_name)
          }
        })
  }


  submitData = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));

    const data = {
      block_id: userData.block_id,
      hostel_id: userData.hostel_id,
      hostel_facilities: this.state.selected_facilities,

    };


    console.log(data);
    axios.post('/insertBlockFacilities', data)
      .then(

        response => {
          if (response.data.Error) {
            console.log(response.data);
            console.log(response.data.Error);

            this.setState({
              Error: true,
              errorMsg: response.data.Message
            })

          } else {
            console.log(response.data);
            console.log(response.data.Error);
            this.setState({
              redirect: true
            })

          }
        })


  }



  onChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = parseInt(target.name);
    if (target.checked) {
      this.setState({
        selected_facilities: [...this.state.selected_facilities, name]
      });
    }
    else {
      var array = this.state.selected_facilities
      var index = array.indexOf(name);
      if (index > -1) {
        array.splice(index, 1);
      }
      this.setState({
        selected_facilities: array
      });
    }

    console.log(this.state.selected_facilities)
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    const facilities = this.state.facilities.map((facility, index) => {

      return (

        <div key={index}>
          <div className="checkbox  text-paragraph">
            <label><input type="checkbox" name={facility.facility_id} onChange={this.onChange}></input>{facility.facility_name}</label>
          </div>
        </div>
      )
    }

    );



    return (

      <div>

        <h1 className="">
          Step 2 of 4: Facilities
                    </h1>
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