import React, { Component } from 'react';
import SideNav from './Navigation/side-nav';
import TopMenu from './Navigation/top-menu';
//import './side-nav.css';
//import './stylesheets/top-menu.css';
import HostelProfile from './hostel_profile/hostel-profile'
import MessMenu from './mess-menu/mess-menu'
import AccountSettings from './hostel_profile/account-settings'
import Booking from './booking/booking'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ViewUser from './booking/view-user';


const Routing = ({ match }) => (
    <div>
        <div className="col-md-3" >
            <SideNav />
        </div>

        <div className="col-md-9">
            <div className="col-md-12">
               
                <TopMenu />
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            

            <Router >
                <div>
                    <Switch>
                        <Route exact path={`${match.url}/p`} component={HostelProfile} />
                        <Route exact path={`${match.url}/settings`} component={AccountSettings} />
                        <Route exact path={`${match.url}/profile`} component={HostelProfile} />
                        <Route exact path={`${match.url}/mess`} component={MessMenu} />
                        <Route exact path={`${match.url}/booking`} component={Booking} />
                        <Route exact path={`${match.url}/user/:userId`} component={ViewUser} />

                    </Switch>
                </div>
            </Router>
        </div>
    </div>

);

export default Routing;
