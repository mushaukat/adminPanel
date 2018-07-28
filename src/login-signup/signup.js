import React, { Component } from 'react';
<<<<<<< HEAD
import '../stylesheets/login-signup.css';
import axios from 'axios';
import { BrowserRouter as Redirect } from "react-router-dom";
=======
import '../stylesheets/login-signup.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
>>>>>>> fed475ac8cb5845612178d3b2be7f428befccf9d

class SignUp extends Component {
  state = {
    hostelName: 'abc',
    email: '',
    password: '123456',
    rePassword: '123456',
    ownerMobile: '15415',
    ownerPhone: '',
    redirect: false,
    signUpError: false,
    errorMsg: '',

  }



  errorMsg = () => {
    if (this.state.signUpError) {
      return  <b> <p className="error-message"> {this.state.errorMsg}  </p> </b>
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
    };

    const password = this.state.password;
    const rePassword = this.state.rePassword;

    if (password === rePassword) {
      console.log(data);
      console.log("ok");
      axios.post('/hostelSignup', data)
        .then(
          
          response => {
            if (response.data.Error) {
              console.log(response.data);
              console.log(response.data.Error);
              
              this.setState({
                signUpError: true,
                errorMsg: response.data.Message + " Please Try Again Later"
              })

            } else {
              console.log(response.data);
              console.log(response.data.Error);
              this.setState({
                redirect: true
              })

            }
          }).catch(function (e) {
            this.setState({
              loginError: true,
              errorMsg: "Unknow Error! Plese Try Again Later"
            });
          }
          );
          console.log("ok");
    }
    else {
      this.setState({
        signUpError: true,
        errorMsg: 'Password must be same',
      });

    }



  }



  render() {

    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">


              <form onSubmit={this.submitData}>

                <span className="login100-form-title">
                  Hostel Signup
  					    </span>

                <div className="wrap-input100 validate-input" data-validate="valid name is required">
                <span><p>Hostel Name: </p> </span>
                  <input className="input100" type="text" value={this.state.hostelName} onChange={(event) => this.setState({ hostelName: event.target.value })} ref="hostelName" placeholder="Enter Hostel Name" required />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-adn" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <span><p>Email: </p> </span>
                  <input className="input100" type="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} ref="email" placeholder="Enter your Email" required />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span><p>Password: </p> </span>
                  <input className="input100" type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} ref="password" placeholder=" Enter Password" required />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span><p>Confirm Password: </p> </span>
                  <input className="input100" type="password" value={this.state.rePassword} onChange={(event) => this.setState({ rePassword: event.target.value })} ref="re-password" placeholder="Re-Enter Password" required />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Mobile is required">
                <span><p>Owner Mobile No: </p> </span>
                  <input className="input100" type="text" value={this.state.ownerMobile} onChange={(event) => this.setState({ ownerMobile: event.target.value })} ref="ownerMobile" placeholder="Hostel Owner Mobile Number" required />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Mobile is required">
                <span><p>Owner Phone No: </p> </span>
                  <input className="input100" type="text" value={this.state.ownerPhone} onChange={(event) => this.setState({ ownerPhone: event.target.value })} ref="ownerPhone" placeholder="Hostel Owner Phone Number" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </span>
                </div>
                <br/>

                <div>
                    {this.errorMsg()}
                  </div>

                <div className="container-login100-form-btn">
<<<<<<< HEAD
                  <input type="submit" value="SignUp" className="login100-form-btn" />
=======
                <Link className="txt2" to="/general" >
                    <button className="login100-form-btn" onclick="getLocation()">
                    Signup
            </button>
                  </Link>
                  
                    
>>>>>>> fed475ac8cb5845612178d3b2be7f428befccf9d
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SignUp;
