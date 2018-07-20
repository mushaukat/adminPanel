import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'

class RoomTypeSetup extends Component {
    render() {
        return (
            <div className="Container sides info-block">
                <p className="heading">Setup 3 of 4: Room Types Details</p>
                <form action="">
                <input type="text" name="admissionFee" placeholder="Enter Admission Fee"/>
                <input type="text" name="securityFee" placeholder="Enter Security Fee"/>

                <div>
                    <span><h2>Select Room Type</h2></span><span><input type="button" value="Add" /></span>
                    <br/> 
                    
                    <span>
                    <select name="roomType">
                        <option value="volvo">Volvo</option>
                    </select>
                    </span>
                    <span>
                        <input type="text" name="priceWithOutMess" placeholder="Enter Price without Mess" />
                    </span>
                    <span>
                        <input type="text" name="priceWithMess" placeholder="Enter Price with Mess" />
                    </span> <br/>
                    <input type="button" value="save"/>
                </div>
                
                    <input type="checkbox" name="vehicle" value="Bike" required/> I have a bike<br />

                    <input type="submit" value="Next Step" />
                </form>
            </div>
        );
    }
}

export default RoomTypeSetup;