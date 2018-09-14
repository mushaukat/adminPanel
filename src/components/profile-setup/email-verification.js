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
        const userEmailData = JSON.parse(localStorage.getItem('hostelEmailVarification'));
        console.log(userEmailData)
        if(!userEmailData){
            this.setState({redirect:true})
        }
    }


    signOut = () => {
        this.setState({ signOutRedirect: true })
    }

    reSendEmail = (e) => {
        e.preventDefault();

        const userEmailData = JSON.parse(localStorage.getItem('hostelEmailVarification'));
        const data = {
            hostel_id: userEmailData,
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
                        document.getElementById("email").style.display = 'none';
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
        if(this.state.redirect){
            return <Redirect exact to="/" />
        }

        return (
            <div>
                <div>
                    <span><button onClick={this.signOut} className="btn btn-default btn-lg">SignOut </button> </span>
                </div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-setup">
                            <div className="marginauto">
                                <div className="wrap-div">
                                    <h2>Email Varification</h2>
                                    <br /><br />
                                    <p>Please Check Email to Verify your Email Address to complete your Profile.</p>

                                    <br />
                                    <br />
                                    <h3> {this.state.emailMsg}</h3>
                                    <div id="email">

                                        <p>Click on button bellow to resend email</p>
                                        <div className="container-login100-form-btn" >
                                            <input type="button" onClick={this.reSendEmail} value="Re-send Email" className="login100-form-btn " />

                                        </div>
                                    </div>

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