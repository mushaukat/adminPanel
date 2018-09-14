import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import './hostel-profile.css'
import './popup.css'
import HostelProfile from './hostel-profile'

class AccountSettings extends Component {

    constructor(props) {
        super(props);

    }

    showChangePasswordPopup = () => {
        (
            <div>


            </div>
        )
    }




    render() {

        $(function() {
  
            // contact form animations
            $('#contact').click(function() {
              $('#contactForm').fadeToggle();
            })
            $(document).mouseup(function (e) {
              var container = $("#contactForm");
          
              if (!container.is(e.target) // if the target of the click isn't the container...
                  && container.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  container.fadeOut();
              }
            });
            
          });

        return (
            <div className="" >
            
            <div id="contact">Contact</div>

<div id="contactForm">

  <h1>Keep in touch!</h1>
  <small>I'll get back to you as quickly as possible</small>
  
  <form action="#">
    <input placeholder="Name" type="text" required />
    <input placeholder="Email" type="email" required />
    <input placeholder="Subject" type="text" required />
    <textarea placeholder="Comment"></textarea>
    <input class="formBtn" type="submit" />
    <input class="formBtn" type="reset" />
  </form>
</div>


                <div className="info-block" id="login-info">
                    <p className="heading">Login Information</p>
                    <br />
                    <div className="divider">
                        <span className="col-md-3">Hostel Name</span>
                        <span className="col-md-6">abc@zxc.com</span>
                        <span className="col-md-3"><button id="" onClick={this.div_show}>Edit</button></span>
                    </div>
                    <hr />

                    <div className="divider">
                        <span className="col-md-3">Email</span>
                        <span className="col-md-6">abc@zxc.com</span>
                        <span className="col-md-3">Edit</span>
                    </div>
                    <hr />

                    <div className="divider">
                        <span className="col-md-3">Password</span>
                        <span className="col-md-6">abc@zxc.com</span>
                        <div data-role="main" className="ui-content">
                            {/* <span className="col-md-3"><a href="#myPopup" data-rel="popup" className="ui-btn ui-btn-inline ui-corner-all ui-icon-check ui-btn-icon-left">Show Popup Form</a></span> */}
                            {/* <div data-role="popup" id="myPopup" className="ui-content" >
                                <form >
                                    <div>
                                        <h3>Change Password</h3>
                                        <label for="usrnm" className="ui-hidden-accessible">Current Password:</label>
                                        <input type="text" name="currentPassword" id="usrnm" placeholder="Username" />
                                        <label for="pswd" className="ui-hidden-accessible">New Password:</label>
                                        <input type="password" name="newPassword" id="pswd" placeholder="Password" />
                                        <label for="pswd" className="ui-hidden-accessible">Retype New Password:</label>
                                        <input type="password" name="rePassword" id="pswd" placeholder="Password" />
                                        <input type="submit" data-inline="true" value="Change Password" />
                                    </div>
                                </form>
                            </div> */}

                        </div>
                    </div>



                    <hr />

                    <div className="divider">
                        <span className="col-md-3">Hostel Mobile No</span>
                        <span className="col-md-6">abc@zxc.com</span>
                        <span className="col-md-3">Edit</span>
                    </div>
                    <hr />

                    <div className="divider">
                        <span className="col-md-3">Hostel Phone No</span>
                        <span className="col-md-6">abc@zxc.com</span>
                        <span className="col-md-3">Edit</span>
                    </div>
                    <hr />

                    <div className="divider">
                        <span className="col-md-3">City</span>
                        <span className="col-md-6">abc@zxc.com</span>
                        <span className="col-md-3">Edit</span>
                    </div>
                    <hr />

                </div>


            </div>



        );
    }
}

export default AccountSettings;
