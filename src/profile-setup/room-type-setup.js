import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'
import '../stylesheets/login-signup.css'
import Demo from './geolocated.js'
import MapContainer from './googlemap2.js'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class GeneralInfo extends Component {
    render() {
        return (
             <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                

                <form className="marginauto ">
                    <h1 className="">
                        Step 3 of 4: Room Type Details
                    </h1>
                      
                    <div className=" form-group margint60 text-paragraph">
                      <label >Hostel Admission Fee</label>
                      <input type="number" className="form-control text-paragraph" id="admfee"/>
                    </div>
                     <div className="form-group text-paragraph">
                      <label>Security Fee</label>
                      <input type="number" className="form-control text-paragraph" id="securityfee"/>
                    </div>
                      <div className="form-group text-paragraph">
                      <label>Select Room Seating:</label>
                      <select className="form-control text-paragraph" id="sel1">
                        <option>Single Seater</option>
                        <option>Double Seater</option>
                        <option>Triple Seater</option>
                        <option>Four Seater</option>
                        
                      </select>
                    </div>
  
                   

                    <div className="container-login100-form-btn">
                        <Link className="txt2" to="/roomtype" >
                        <button className="login100-form-btn"  value="submit" type="submit" >
                            Next
                        </button></Link>

                  
                  
                    </div>

                
                </form>
            </div>
        </div>
    </div>
        );
    }
}

export default GeneralInfo;