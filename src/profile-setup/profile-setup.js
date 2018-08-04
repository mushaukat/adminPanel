import React, { Component } from 'react';
import '../stylesheets/breadcrumb.css'
import '../stylesheets/profile-setup.css'
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

        };

    }

    showSetupScreen() {
        console.log("inside" + this.state.facilities);
        if (this.state.generalInfo) {
            return <GeneralInfo />
        }
        if (this.state.facilities) {
            return <Facilities />
        }
        if (this.state.roomTypes) {
            return <RoomTypeSetup />
        }
        if (this.state.pictures) {
            return <HostelPicturesSetup />
        }
    }


    setGeneralInfo = () => {
        this.setState({ generalInfo: true, facilities: false, roomTypes: false, pictures: false });
        ;
    }

    setFacilities = () => {
        this.setState({ generalInfo: false, facilities: true, roomTypes: false, pictures: false });
    }

    setRoomTypes = () => {
        this.setState({ generalInfo: false, facilities: false, roomTypes: true, pictures: false });
    }

    setPictures = () => {
        this.setState({ generalInfo: false, facilities: false, roomTypes: false, pictures: true });
    }



    render() {
        var $ = (selector) => {
            return document.querySelector(selector);
        };
        var $$ = function (selector) {
            return document.querySelectorAll(selector);
        };
        var breadcrumb = $('.breadcrumb');
        var breadcrumbSteps = $$('.breadcrumb__step');
        [].forEach.call(breadcrumbSteps, function (item, index, array) {
            item.onclick = function () {
                for (var i = 0, l = array.length; i < l; i++) {
                    if (index >= i) {
                        array[i].classList.add('breadcrumb__step--active');
                    }
                    else {
                        array[i].classList.remove('breadcrumb__step--active');
                    }
                }
            };
        });

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-signup">
                        <div className="marginauto">



                            <div className="breadcrumb-body">
                                <div className="breadcrumb">
                                    <a className="breadcrumb__step breadcrumb__step--active" onClick={this.setGeneralInfo} >General Information</a>
                                    <a className="breadcrumb__step" onClick={this.setFacilities}>Facilities</a>
                                    <a className="breadcrumb__step" onClick={this.setRoomTypes} >Charges Details</a>
                                    <a className="breadcrumb__step" onClick={this.setPictures} >Hostel Pictures</a>
                                </div>
                            </div>

                            <div>
                                <form onSubmit={this.submitData}>
                                    {this.showSetupScreen()}


                                    <div className="container-login100-form-btn">
                                        <input type="submit" value="Next Step" className="login100-form-btn" />
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileSetup;