import React, { Component } from 'react';
import '../stylesheets/login-signup.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LogIn extends Component {
  render() {
    var style1 = {
      background: '#7386D5'
    }
    var style2 = {
      fontSize: '1.5em'
    }
    
    return (
        <div style={style1}>
        <div className="limiter" style={style1}>
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG"/>
              </div>
      
              <form className="login100-form validate-form">
                <span className="login100-form-title">
                  Member Login
                </span>
      
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="email" name="email" placeholder="Email" required/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>
      
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" placeholder="Password" required/>
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
      
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
                <br/>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;