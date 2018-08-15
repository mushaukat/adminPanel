import React, { Component } from 'react';
import SideNav from './Navigation/side-nav';
import TopMenu from './Navigation/top-menu';
import './stylesheets/side-nav.css';
import './stylesheets/top-menu.css';
import HostelProfile from './hostel_profile/hostel-profile'

import { BrowserRouter as Router, HashRouter, Route, Link, IndexRoute, Switch } from "react-router-dom";


const DashBoardTemplate = ({ match }) => (

    <div>
        <div className="col-md-3" >
            <SideNav />
        </div>

        <div className="col-md-9">
            <Router >
                <div>
                    <Switch>
                        <Route exact path={`${match.url}/`} component={HostelProfile} />
                        <Route exact path={`${match.url}/roomtype`} component={RoomType} />
                        <Route exact path={`${match.url}/dashboard`} component={ImageUpload} />
                    </Switch>
                </div>
            </Router>
        </div>
    </div>

);



export default DashBoardTemplate;