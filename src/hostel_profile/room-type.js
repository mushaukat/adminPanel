import React, { Component } from 'react';
import '../stylesheets/hostel-profile.css'

class RoomType extends Component {
    render() {
        return (
            <div className="Container sides">
                <div className="info-block" id="login-info">
                    <p className="heading">Room Type</p>
                    <button className="btn-edit ">Edit</button>
                    <br/><br/>
                    <table>
                        <tr>
                            <th>Room Type</th>
                            <th>Charges With Mess</th>
                            <th>Charges With Out Mess</th>
                        </tr>
                        <tr>
                            <td>Single Seater</td>
                            <td>12000</td>
                            <td>12000</td>
                        </tr>
                        <tr>
                            <td>Double Seater</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>Triple Seater</td>
                            <td>9000</td>
                        </tr>
                        <tr>
                            <td>Four Seater</td>
                            <td>8000</td>
                        </tr>
                    </table>

                    
                </div>
            </div>
        );
    }
}

export default RoomType;
