import React, { Component } from 'react';
import '../stylesheets/login-signup.css'

class Recovery extends Component {
  render() {
    return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				

				<form className="login100-form validate-form">
					<span className="login100-form-title">
						Recover password
					</span>
				
					

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					
					<p id="demo"></p>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onclick="getLocation()">
							Recover
						</button>
					</div>

				
				</form>
			</div>
		</div>
	</div>


    );
 
  }
}

export default Recovery;
