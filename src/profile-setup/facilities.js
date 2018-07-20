import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'

class Facilities extends Component {
    render() {
        return (
            <div className="">
                <p className="heading">Setup 2 of 4: Facilities</p>

                <h2>Select Facilities in your Hostel</h2>


                <form action="">
                    <input type="checkbox" name="vehicle" value="Bike" required/> I have a bike<br />
                    <input type="submit" value="Next Step" />
                </form>
            </div>
        );
    }
}

export default Facilities;