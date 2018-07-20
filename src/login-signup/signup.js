import React, { Component } from 'react';
import '../stylesheets/login-signup.css'

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">


              <form className="login100-form validate-form">
                <span className="login100-form-title">
                  Hostel Signup
					</span>
                <div className="wrap-input100 validate-input" data-validate="valid name is required">
                  <input className="input100" type="text" name="name" placeholder="Hostel Name" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-adn" aria-hidden="true"></i>
                  </span>
                </div>


                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" name="email" placeholder="Email" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" placeholder="Password" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>


                <div className="wrap-input100">
                  <input className="input100" type="tel" name="pass" placeholder="Hostel phone" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Mobile is required">
                  <input className="input100" type="tel" name="pass" placeholder="Hostel mobile" />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="enter valid ">
                  <textarea className="inputdesc" type="text" name="name" rows="10" cols="10" placeholder="Hostel Description"></textarea>
                  <span className="focus-input100"></span>

                </div>

                <p id="demo"></p>

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" onclick="getLocation()">
                    Signup
						</button>
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
