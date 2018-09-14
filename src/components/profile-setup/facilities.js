import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import '../stylesheets/spinner.css'


class Facilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facilities: [],
      selected_facilities: [],
      blockFacilities: [],
      otherFacilities: '',
      redirect: false,
      Error: false,
      errorMsg: '',
      facilityCount: 0,
      facilityError: '',
      spinner1: true,
      spinner2:true,
    };
    this.onChange = this.onChange.bind(this);

  }


  errorMsg = () => {
    if (this.state.Error) {
      return <b> <br /><p className="error-message"> {this.state.errorMsg}  </p> </b>
    }
  }


  componentDidMount() {

    document.getElementById("b2").className += " active "
    document.getElementById("back-btn").style.display = "block";

    axios.post('/getFacilities')
      .then(
        response => {
          if (response.data.Error) {
            console.log(response.data);

            this.setState({
              Error: true,
              errorMsg: response.data.Message + " Try Again",
            })
          } else {
            console.log(response.data.Data);
            this.setState({
              facilities: response.data.Data,
            })
          }
          this.setState({spinner1:true})
        })


    const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
    const data = {
      block_id: hostelAdmin.block_id,
      hostel_id: hostelAdmin.hostel_id,
    };

    axios.post('/getBlockFacilities', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log(response.data);

          }
          else {
            console.log(response.data)
            if(response.data.other_facilities==null){
              this.setState({ otherFacilities: '' })
            }
            else{
              this.setState({ otherFacilities: response.data.other_facilities })
            }
            
            for (var i = 1; i <= response.data.Data.length; i++) {
              this.setState({ facilityCount: this.state.facilityCount + 1 })
            }
            this.setState({ blockFacilities: response.data.Data, })
            this.state.blockFacilities.map((facilities) => {
              this.refs[facilities.facility_id].checked = true;
            }
            )

          }
          this.setState({spinner2:true})
        })

  }


  async submitData(e) {
    if (this.state.facilityCount < 3) {
      this.setState({ facilityError: "Please Select atleat 3 facilities" })
      return false
    }
    else {
      this.setState({ facilityError: "" })
      const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
      const data = {
        hostel_id: hostelAdmin.hostel_id,
        block_id: hostelAdmin.block_id,
        other_facilities: this.state.otherFacilities,
      };
      console.log(data)
      var temp
      await axios.post('/insertOtherFacilities', data)
        .then(
          response => {
            if (response.data.Error) {
              console.log(response.data);

              this.setState({
                Error: true,
                errorMsg: response.data.Message + " Try Again",
              })
              temp = false

            } else {
              const data = response.data
              console.log(data)
              temp = true
            }
          })
      return temp
    }

  }



  onChange(event, facility_id) {

    const target = event.target;
    const name = parseInt(target.name);

    const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
    const data = {
      block_id: hostelAdmin.block_id,
      hostel_id: hostelAdmin.hostel_id,
      facility_id: name
    };

    if (target.checked) {

      axios.post('/insertBlockFacilities', data)
        .then(
          response => {
            if (response.data.Error) {
              console.log(response.data);

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

  onChangeOtherFacilities = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    loadProgressBar()

    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    const facilities = this.state.facilities.map((facility, index) => {

      return (

        <div key={index}>
          <div className="checkbox  text-paragraph">
            <label><input type="checkbox" name={facility.facility_id} ref={facility.facility_id} onChange={(e) => { this.onChange(e, facility.facility_id) }}></input>{facility.facility_name}</label>
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
          <h4 className="margint60"> Other Facilities: </h4>

          <textarea className="form-control" value={this.state.otherFacilities} name="otherFacilities" onChange={this.onChangeOtherFacilities}></textarea>

        </div>

        <div>
          {this.errorMsg()}
        </div>
        <br /> <b> <p className="error-message">{this.state.facilityError} </p> </b>

      </div>

    );
  }
}

export default Facilities;