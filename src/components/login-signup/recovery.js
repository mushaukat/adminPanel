import React, { Component } from 'react';
import '../stylesheets/login-signup.css'
import { Redirect } from "react-router-dom";

class Recovery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};

	}

	componentDidMount() {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (userData) {

			var status = parseInt(userData.status)
			console.log(status)

			if (status === 0) {
				console.log("0")
				this.setState({ redirectURL: '/emailVerification' })
			}
			else if (status === 1) {
				console.log("1")
				this.setState({ redirectURL: '/profileSetup' })
			}
			else if (status === 2) {
				console.log("2")
				this.setState({ redirectURL: '/dashboard' })
			}

			this.setState({ redirect: true })
		}

	}

	render() {
		if (this.state.redirect) {
			return <Redirect exact to="/" />
		}
		return (
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">


						<form className="login100-form validate-form">
							<span className="login100-form-title">
								Recover password
					</span>



							<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
								<input className="input100" type="text" name="email" placeholder="Email" />
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
