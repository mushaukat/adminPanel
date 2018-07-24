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
                        Step 2 of 4: Facilities
                    </h1>
                    <h3 className="margint60">Tick Faclities which are available in Hostels</h3>        
                       <div className="checkbox  text-paragraph">
                          <label><input type="checkbox" value=""></input>Internet</label>
                        </div>
                        <div className="checkbox text-paragraph">
                          <label><input type="checkbox" value=""></input>Mess</label>
                        </div>
                     <div class="form-group text-paragraph">
                      <label for="sel1">Select Package:</label>
                      <select class="form-control" id="sel1">
                        <option>1</option>
                        <option>2</option>
                        
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