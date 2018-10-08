import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './breadcrumb.css';
import './profile-setup.css'
import axios from 'axios';

class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signOutRedirect: false,
            editProfileRedirect: false,
            submitProfileRedirect: false,
            pictures: false,
            screenNumber: 1,
            emailMsg: '',
            redirect: false,

        };
    }

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('hostelEmailVarification'));
        console.log(token)
        if (!token) {
            this.setState({ redirect: true })
        }
    }


    signOut = () => {
        this.setState({ signOutRedirect: true })
    }

    reSendEmail = (e) => {
        e.preventDefault();

        const token = JSON.parse(localStorage.getItem('hostelEmailVarification'));
        const data = {
            token: token,
        };

        axios.post('/sendHostelVerificationEmail', data)
            .then(
                response => {
                    if (response.data.Error) {
                        console.log(response.data);

                        this.setState({
                            Error: true,
                            errorMsg: response.data.Message + " Try Again",
                        })
                    } else {
                        const data = response.data
                        console.log(data)
                        //  document.getElementById("email").style.display = 'none';
                        this.setState({
                            emailMsg: "Email with Link is Sent. Please Check!"
                        })
                    }
                })
    }

    render() {
        if (this.state.signOutRedirect) {
            localStorage.clear();
            return <Redirect exact to="/" />
        }
        if (this.state.redirect) {
            return <Redirect exact to="/" />
        }

        return (
            <div>
                <div>
                    <span><button onClick={this.signOut} className="btn btn-default btn-lg">SignOut </button> </span>
                </div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-email-varification">
                            <div className="marginauto">
                                <div className="wrap-div">
                                    <h2>Email Varification</h2>
                                    <br /><br />
                                    <div className="txt">
                                        Please Check Email to Verify your Email Address to complete your Profile.
                                    </div>
                                    <p></p>

                                    <br />

                                    <div id="email" className="txt">
                                        <button onClick={this.reSendEmail} className="button-click-here" >Click here </button> to re-send email
                                    </div>

                                    <h3 className="msg"> {this.state.emailMsg}</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailVerification;