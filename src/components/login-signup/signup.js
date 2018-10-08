import React, { Component } from 'react';
import './login-signup.css';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: '',
      hostelName: '',
      email: '',
      password: '',
      rePassword: '',
      ownerMobile: '',
      ownerPhone: '',
      redirect: false,
      Error: false,
      errorMsg: '',
      city: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
    if (hostelAdmin) {

      var status = parseInt(hostelAdmin.status)
      console.log(status)

      if (status === 0) {
        this.setState({ redirectURL: '/emailVerification' })
      }
      else if (status === 1) {
        this.setState({ redirectURL: '/profileSetup' })
      }
      else if (status === 2) {
        this.setState({ redirectURL: '/dashboard' })
      }

      this.setState({ redirect: true })
    }

  }

  errorMsg = () => {
    if (this.state.Error) {
      return <b> <p className="error-message"> {this.state.errorMsg}  </p> </b>
    }
  }

  submitData = (e) => {
    e.preventDefault();
    const data = {
      owner_name: this.state.ownerName,
      hostel_name: this.state.hostelName,
      hostel_email: this.state.email,
      password: this.state.password,
      owner_phone: this.state.ownerPhone,
      owner_mobile: this.state.ownerMobile,
      hostel_city: this.state.city,
    };

    const password = this.state.password;
    const rePassword = this.state.rePassword;

    if(this.state.city===""){
      this.setState({
        Error: true,
        errorMsg: 'Please select City',
      });
    }
    else if (password === rePassword) {
      axios.post('/hostelSignup', data)
        .then(
          response => {
            if (response.data.Error) {
              console.log(response.data);
              this.setState({
                Error: true,
                errorMsg: response.data.Message
              })

            } else {
              console.log(response.data);
              this.setState({
                redirect: true
              })
            }
          })
    }
    else {
      this.setState({
        Error: true,
        errorMsg: 'Password must be same',
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    if (this.state.redirect) {
      return <Redirect exact to="/" />
    }

    return (
      <div>
        <div className="limiter">
          <div className="container-login100">
            <center>
              <div className="wrap-signup">

                <form onSubmit={this.submitData}>

                  <span className="login100-form-title">
                    Hostel Signup
  					    </span>

                  <div className="row">

                    <div className="col-md-6">
                      <div className="">
                        <span className="input-label"><p>Owner Name: </p> </span>
                        <input className="input100" type="text" onChange={this.onChange} name="ownerName" placeholder="Enter Hostel Name" required />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="">
                        <span className="input-label"><p>Hostel Name: </p> </span>
                        <input className="input100" type="text" onChange={this.onChange} name="hostelName" placeholder="Enter Hostel Name" required />
                      </div>
                    </div>

                  </div>

                  <div className="row" >

                  <div className="col-md-6">
                      <div className="">
                        <span className="input-label"><p>Email: </p> </span>
                        <input className="input100" type="email" onChange={this.onChange} name="email" placeholder="Enter your Email" required />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="">
                        <span className="input-label"><p>Hostel Location: </p> </span>
                        <select className="input100" onChange={this.onChange} name="city">
                          <option value="">Select City</option>
                          <option value="Islamabad">Islamabad</option>
                        </select>
                      </div>
                    </div>

                  </div>

                  <div className="row">

                    <div className="col-md-6">
                      <div className="">
                        <span className="input-label"><p>Password: </p> </span>
                        <input className="input100" type="password" onChange={this.onChange} name="password" placeholder=" Enter Password" required />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="">
                        <span className="input-label"><p>Confirm Password: </p> </span>
                        <input className="input100" type="password" onChange={this.onChange} name="rePassword" placeholder="Re-Enter Password" required />
                      </div>
                    </div>

                  </div>

                  <div className="row">

                    <div className="col-md-6">
                      <div className="">
                        <span className="input-label"><p>Owner Mobile No: </p> </span>
                        <input className="input100" type="text" onChange={this.onChange} name="ownerMobile" placeholder="Hostel Owner Mobile Number" required />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="">
                        <span className="input-label"><p>Owner Phone No: </p> </span>
                        <input className="input100" type="text" onChange={this.onChange} name="ownerPhone" placeholder="Hostel Owner Phone Number" />
                      </div>
                    </div>

                  </div>



                  <div>
                    {this.errorMsg()}
                  </div>

                  <div className="container-login100-form-btn col-md-12">
                    <input type="submit" value="SignUp" className="login100-form-btn" />
                  </div>

                </form>

              </div>
            </center>
          </div>
        </div>
      </div >

    );
  }
}

export default SignUp;
