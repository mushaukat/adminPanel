import React, { Component } from 'react';
import './stylesheets/hostel-profile.css'
import './stylesheets/mess-menu.css'

class MessMenu extends Component {
  render() {
    return (
      <div className="Container sides">
      <div className="info-block" id="login-info">
        <p className="heading">Mess Menu</p>
        <button className="btn-edit ">Edit</button>
                    <br/><br/>

                    <table>
                        <tr>
                            <th>Day</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                            <th>Breakfast Time</th>
                            <th>Lunch Time</th>
                            <th>Dinner Time</th>
                        </tr>
                        <tr>
                            <td><b>Monday</b></td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                        </tr>
                        <tr>
                        <td><b>Tuesday</b></td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                        </tr>
                        <tr>
                        <td><b>Wednessday</b></td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                        </tr>
                        <tr>
                        <td><b>Thursday</b></td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                        </tr>
                        <tr>
                        <td><b>Friday</b></td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                        </tr>
                        <tr>
                        <td><b>Saturday</b></td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                        </tr>
                        <tr>
                        <td><b>Sunday</b></td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                            <td>12000</td>
                        </tr>
                    </table>

        </div>
      </div>
    );
  }
}

export default MessMenu;
