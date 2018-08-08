import React, { Component } from 'react';
import '../stylesheets/profile-setup.css'
import '../stylesheets/login-signup.css'
import Demo from './geolocated.js'
import MapContainer from './googlemap2.js'
import ReactDOM from 'react-dom';


class GeneralInfo extends Component {
    render() {
        return (
             <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                

                <form className="login100-form validate-form" action="setup2.html">
                    <span className="login100-form-title">
                        Step 1: General info
                    </span>
                
            

                    <div >
                        <h4>upload profile picture</h4>
                        <button type="button" className="btn btn-success">Upload</button>
                    </div>
                    <div className="radio padtop20" required>
                        <h4>Hostel type</h4>
                          <label> <input type="radio" name="type" required ></input>Male</label>
                        
                        
                          <label><input type="radio" name="type"></input>Female</label>
                    
                    </div>
                    <div className="checkbox">
                        <h4>Room types</h4>
                          <label><input type="checkbox" value="one" name="roomtype"></input>One seater</label>
                        </div>
                        <div className="checkbox">
                          <label><input type="checkbox" value="two" name="roomtype" ></input>Two seater</label>
                        </div>
                        <div className="checkbox">
                          <label><input type="checkbox" value="three" name="roomtype" ></input>Three seater</label>
                    </div>
                    <div className="checkbox">
                          <label><input type="checkbox" value="four" name="roomtype"></input>four seater</label>
                    </div>
                    <div> <Demo /> </div>
                    <br/> <br/>
                    
                     
                    
                    
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn"  value="submit" type="submit" >
                            Next
                        </button>
                    </div>

                
                </form>
            </div>
        </div>
    </div>
        );
    }
}

export default GeneralInfo;