import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './breadcrumb.css';
import './profile-setup.css'
import GeneralInfo from './general-info'
import Facilities from './facilities'
import RoomTypeSetup from './room-type-setup'
import HostelPicturesSetup from './pictures'

class ProfileSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generalInfo: true,
            facilities: false,
            roomTypes: false,
            pictures: false,
            screenNumber: 1,
            redirect: false,

        };
        this.setNextScreen = this.setNextScreen.bind(this)
        this.setBackScreen = this.setBackScreen.bind(this)
        this.onClick = this.onClick.bind(this)
        this.child = React.createRef();
    }

    componentDidMount() {
        console.log("profile")
        const hostelAdmin = JSON.parse(localStorage.getItem('hostelAdmin'));
        console.log(11)
        console.log(hostelAdmin)
        if (!hostelAdmin) {
            this.setState({ redirect: true })
        }
    }


    showSetupScreen() {
        if (this.state.screenNumber === 1) {
            return <GeneralInfo ref={this.child} />
        }
        if (this.state.screenNumber === 2) {
            return <Facilities ref={this.child} />
        }
        if (this.state.screenNumber === 3) {
            return <RoomTypeSetup ref={this.child} />
        }
        if (this.state.screenNumber === 4) {
            return <HostelPicturesSetup ref={this.child} />
        }
        if (this.state.screenNumber === 5) {
            return <Redirect exact to="/submitProfile" />
        }
    }

    async onClick () {
        var complete = await this.child.current.submitData();
        console.log("abc "+complete)
        if (complete === true) {
            this.setNextScreen();
        }
    };
    setNextScreen() {
        this.setState({ screenNumber: this.state.screenNumber + 1 })
    }

    setBackScreen() {
        if (this.state.screenNumber === 4) {
            document.getElementById("b4").className -= "active"
        }
        else if (this.state.screenNumber === 3) {
            document.getElementById("b3").className -= "active"
        }
        else if (this.state.screenNumber === 2) {
            document.getElementById("b2").className -= "active"
        }
        this.setState({ screenNumber: this.state.screenNumber - 1 })

    }

    signOut = () => {
        this.setState({ signOutRedirect: true })
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

                        <div className="wrap-breadcrumb">
                            <div className="breadcrumb flat">

                                <div className="breadcrumb flat">
                                    <a id="b1">General Information</a>
                                    <a id="b2" >Facilities</a>
                                    <a id="b3">Charges Details</a>
                                    <a id="b4">Hostel Pictures</a>
                                </div>
                            </div>
                        </div>

                        <div className="wrap-setup">
                            <div className="marginauto">
                                <div className="wrap-div">
                                    <form onSubmit={this.submitData} id="form1">

                                        {this.showSetupScreen()}

                                        <div className="container-login100-form-btn">

                                        </div>

                                        <div className="container-login100-form-btn">
                                            <input type="button" onClick={this.onClick} value="Next Step" className="login100-form-btn " />
                                            <input type="button" id="back-btn" onClick={this.setBackScreen} value="Back" className="login100-form-btn-back" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileSetup;