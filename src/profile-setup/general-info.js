import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'

class GeneralInfo extends Component {
    render() {
        return (
            <div className="">
                <p className="heading">Setup 1 0f 4: Profile Info</p>

                <form action="/">

                <div className="radio padtop20" required>
                    <h5>Hostel type</h5>
                    <label> <input type="radio" name="hostelType" required ></input>Male</label>
                    <label><input type="radio" name="hostelType"></input>Female</label>
                </div>

                <div>
                <input type="tel" name="hostelPhone" placeholder="Enter Hostel Phone Number"/>
                </div>

                <div>
                <input type="tel" name="hostelMobile" placeholder="Enter Hostel Mobile Number" required/>
                </div>

                <div>
                  <textarea  type="text" name="hostelDescription" rows="10" cols="10" placeholder="Hostel Description"></textarea>
                </div>

                <div>

                </div>
                <button type="button">Next Step</button>

                </form>
            </div>
        );
    }
}

export default GeneralInfo;