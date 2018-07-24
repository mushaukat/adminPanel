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
                        Step 1 of 4: General info
                    </h1>
                    <h4 className="margint60 text-paragraph">Hostel type</h4>
                    <div className="radio text-paragraph">
                          <label><input type="radio" name="gender"></input>Male</label>
                    </div>
                    <div className="radio text-paragraph">
                          <label><input type="radio" name="gender"></input>Female</label>
                    </div>


                    <div className="form-group text-paragraph">
                        <label >Hostel Phone:</label>
                        <input type="tel" className="form-control" name="hostelPhone" placeholder="Enter Hostel Phone Number"></input>
                    </div>
                    <div className="form-group text-paragraph">
                        <label >Hostel Mobile:</label>
                        <input type="tel" className="form-control" name="hostelmobile" placeholder="Enter Hostel Mobile Number"></input>
                    </div>
            
                    
                     {/*<div id="demo"><MapContainer /></div>
                    <div> <Demo /> </div>*/}
                   
                
                    <div className="form-group text-paragraph">
                          <label >Hostel Desctiption:</label>
                          <textarea className="form-control" rows="5" id="comment" name="hostelDescription"></textarea>
                    </div>
               
               
                    
                    <div className="container-login100-form-btn">
                        <Link className="txt2" to="/facilities" >
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