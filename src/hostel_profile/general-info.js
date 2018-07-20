import React, { Component } from 'react';
import '../stylesheets/hostel-profile.css'


class GeneralInfo extends Component {
    render() {

        return (
            <div className="Container sides" >
                <div className="info-block" id="login-info">
                <p className="heading">Login Information</p>
                
                <div className="divider">
                    <span className="col-md-3">Email</span>
                    <span className="col-md-6">abc@zxc.com</span>
                    <span className="col-md-3" ><a href="">Change Email</a></span>
                </div>
                <div className="divider"></div>
                <div className="divider">
                    <span className="col-md-3">Password</span>
                    <span className="col-md-6">abc@zxc.com</span>
                    <span className="col-md-3"><a href="">Change Password</a></span>
                </div>

                </div>
                <br/><br/>
                
                <div className="info-block" id="hostel-info">
                    <p className="heading md-col-12" >Hostel Information</p>
                    <button className="btn-edit ">Edit</button>
                    <br/>
                    <div className="col-md-6">
                        <p><b>Hostel Name</b></p>
                        <p>United</p>
                    </div>
                    <div className="col-md-6">
                        <p><b>Hostel Type</b></p>
                        <p>Boys</p>
                    </div>
                    <br/><br/>
                    <div className="col-md-6">
                        <p><b>Phone Number</b></p>
                        <p>United</p>
                    </div>
                    <div className="col-md-6">
                        <p><b>Mobile Number</b></p>
                        <p>Boys</p>
                    </div>
                    <br/><br/>
                    <div className="col-md-12">
                        <p><b>About Hostel</b></p>
                        <p>United</p>
                    </div>

                </div>
                <br/><br/>

                <div className="info-block" id="hostel-info">
                    <p className="heading md-col-12" >Hostel Images</p>
                    <button className="btn-edit ">Edit</button>
                    <br/>
                    <div>
                        <span className="img-block"><img href=""  alt=""/></span>
                        <span className="img-block"><img href="" alt=""/></span>
                        <span className="img-block"><img href=""  alt=""/></span>
                        <span className="img-block"><img href=""  alt=""/></span>
                        <span className="img-block"><img href=""  alt=""/></span>
                    </div>

                </div>

                
            </div>
        );
    }
}

export default GeneralInfo;
