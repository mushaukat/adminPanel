import React, { Component } from 'react';
import '../stylesheets/login-signup.css';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {

      var status = parseInt(userData.status)
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
      hostel_name: this.state.hostelName,
      hostel_email: this.state.email,
      password: this.state.password,
      owner_phone: this.state.ownerPhone,
      owner_mobile: this.state.ownerMobile,
      hostel_city: this.state.city,
    };

    const password = this.state.password;
    const rePassword = this.state.rePassword;

    if (password === rePassword) {
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

                  <div class="row">
                    <div class="col-md-6">
                      <div className="wrap-input100 validate-input" data-validate="valid name is required">
                        <span><p>Hostel Name: </p> </span>
                        <input className="input100" type="text" onChange={this.onChange} name="hostelName" placeholder="Enter Hostel Name" required />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-adn" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <span><p>Email: </p> </span>
                        <input className="input100" type="email" onChange={this.onChange} name="email" placeholder="Enter your Email" required />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">

                      <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <span><p>Password: </p> </span>
                        <input className="input100" type="password" onChange={this.onChange} name="password" placeholder=" Enter Password" required />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <span><p>Confirm Password: </p> </span>
                        <input className="input100" type="password" onChange={this.onChange} name="rePassword" placeholder="Re-Enter Password" required />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-md-6">
                      <div className="wrap-input100 validate-input" data-validate="Mobile is required">
                        <span><p>Owner Mobile No: </p> </span>
                        <input className="input100" type="text" onChange={this.onChange} name="ownerMobile" placeholder="Hostel Owner Mobile Number" required />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-mobile" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div className="wrap-input100 validate-input" data-validate="Mobile is required">
                        <span><p>Owner Phone No: </p> </span>
                        <input className="input100" type="text" onChange={this.onChange} name="ownerPhone" placeholder="Hostel Owner Phone Number" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                          <i className="fa fa-mobile" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="Mobile is required">
                      <span><p>Hostel Location: </p> </span>
                      <select className="input100" onChange={this.onChange} name="city">
                        <option value="">Select City</option>
                        <option value="Islamabad">Islamabad</option>
                      </select>
                      <span className="focus-input100"></span>
                      <span className="symbol-input100">
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>

                  <div>
                    {this.errorMsg()}
                  </div>

                  <div className="container-login100-form-btn col-md-12">

                    <input type="submit" value="SignUp" className="login100-form-btn" />

                    {/* <Link className="txt2" to="/general" >
                    <button className="login100-form-btn" onclick="getLocation()">
                    Signup
            </button>
                  </Link> */}

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
