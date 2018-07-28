import React, { Component } from 'react';
import '../stylesheets/login-signup.css'
import { BrowserRouter as Redirect, Link } from "react-router-dom";
import axios from 'axios';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
    redirect: false,
    loginError: false,
    errorMsg: '',

  };


  errorMsg = () => {
    if (this.state.loginError) {
      return  <b> <p className="error-message"> {this.state.errorMsg}  </p> </b>
    }

  }

  submitData = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.email,
      password: this.state.password
    };

    console.log(data)
    axios.post('/adminLogin', data)
      .then(
        response => {
          if (response.data.Error) {
            console.log(response.data);
            console.log(response.data.Error);
            
            this.setState({
              loginError: true,
              errorMsg: response.data.Message + "Try Again",
            })
            console.log(this.state.errorMsg);

          } else {
            console.log(response.data);
            console.log(response.data.Error);
            sessionStorage.setItem('userData', response.data) 

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

  }


  render() {
    var style1 = {
      background: '#7386D5'
    }
    var style2 = {
      fontSize: '1.5em'
    }

    if (this.state.redirect) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div style={style1}>
        <div className="limiter" style={style1}>
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
              </div>

              <form onSubmit={this.submitData}>
                <div className="login100-form validate-form">
                  <span className="login100-form-title">
                    Member Login
                </span>

                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="email" name="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} placeholder="Email" required />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" name="pass" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} placeholder="Password" required />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div>
                    <b>{this.errorMsg()}</b>
                  </div>

                  <div className="container-login100-form-btn">

                    <button className="login100-form-btn">
                      Login
                  </button>
                  </div>
                  <br />
                  <div className="text-center p-t-12">
                    <span className="txt1">
                      Forgot
                  </span>
                    <Link className="txt2" to="/recovery" >
                      Email / Password?
                  </Link>
                  </div>

                  <div className="text-center p-t-136">
                    <Link className="txt2" to="/signup" style={style2}>
                      <b>Create your Hostel Account</b>
                      <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                    </Link>
                  </div>

                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;