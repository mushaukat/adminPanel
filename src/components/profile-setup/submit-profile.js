import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './breadcrumb.css';
import './profile-setup.css'
import axios from 'axios';

class SubmitProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signOutRedirect: false,
            editProfileRedirect: false,
            submitProfileRedirect: false,
            redirect: false,

        };
    }

    componentDidMount() {
        const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
        if (!hostelAdmin) {
            this.setState({ redirect: true })
        }
    }

    signOut = () => {
        this.setState({ signOutRedirect: true })
    }

    editProfile = () => {
        this.setState({ editProfileRedirect: true })
    }

    submitProfile = (e) => {
        e.preventDefault();

        const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
        const data = {
            hostel_id: hostelAdmin.hostel_id,
        };

        axios.post('/submitHostelProfile', data)
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
                        this.setState({ submitProfileRedirect: true })
                    }
                })
    }

    render() {
        if (this.state.signOutRedirect) {
            localStorage.clear();
            return <Redirect exact to="/" />
        }
        if (this.state.editProfileRedirect) {
            return <Redirect exact to="/profileSetup" />
        }
        if (this.state.submitProfileRedirect) {
            return <Redirect exact to="/hostel" />
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
                        <div className="wrap-setup">
                            <div className="marginauto">
                                <div className="wrap-div">
                                    <h2>Your Profile to Join is Almost Complete</h2>
                                    <br /><br />
                                    <p>Double Check Every Thing is Error Free. After Submitting, we'll get back to you in 24 hours.
                                        If your Profile is Approved, you'll be able to make your profile visible to students.
                                    </p>

                                    <br />
                                    <br />
                                    <div className="container-login100-form-btn">
                                        <input type="button" onClick={this.submitProfile} value="Submit Profile" className="login100-form-btn " />
                                        <input type="button" onClick={this.editProfile} value="Edit Profile" className="login100-form-btn-back" />
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

export default SubmitProfile;