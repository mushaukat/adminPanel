import React, { Component } from 'react';
import './login-signup.css'
import { Redirect } from "react-router-dom";

class Recovery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};

	}

	componentDidMount() {
		const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
		if (hostelAdmin) {

			var status = parseInt(hostelAdmin.status)
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


						<form className="">
							<span className="login100-form-title">
								Recover password
							</span>

							<div className="wrap-input100" data-validate="Valid email is required: ex@abc.xyz">
								<input className="input100" type="text" name="email" placeholder="Email" />
							</div>


							<div className="container-login100-form-btn">
								<button className="login100-form-btn">
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
