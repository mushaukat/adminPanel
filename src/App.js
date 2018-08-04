import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './Navigation/side-nav';
import TopMenu from './Navigation/top-menu';
import GeneralInfo from './profile-setup/general-info';
// import RoomType from './hostel_profile/room-type';
// import MessMenu from './mess-menu';
import SignUp from './login-signup/signup';
import LogIn from './login-signup/login';
import Recovery from './login-signup/recovery';
import DashBoardTemplate from './hostel-dashboard';
import Facilities from './profile-setup/facilities'
import RoomTypeSetup from './profile-setup/room-type-setup'
import HostelPicturesSetup from './profile-setup/pictures'
import ProfileSetup from './profile-setup/profile-setup'

//import Roomtype from './profile-setup/room-type-setup'
//import Profilepic from './profile-setup/profilepic'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/dashboard" component={DashBoardTemplate} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/recovery" component={Recovery} />
          <Route exact path="/ProfileSetup" component={ProfileSetup} />
          {/* <Route exact path="/facilities" component={Facilities} />
        <Route exact path="/roomtype" component={Roomtype} />
        <Route exact path="/profilepic" component={Profilepic} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
