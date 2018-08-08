import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './components/Navigation/side-nav';
import TopMenu from './components/Navigation/top-menu';
import GeneralInfo from './components/profile-setup/general-info';
// import RoomType from './components/hostel_profile/room-type';
import SignUp from './components/login-signup/signup';
import LogIn from './components/login-signup/login';
import Recovery from './components/login-signup/recovery';
import DashBoardTemplate from './components/hostel-dashboard';
import Facilities from './components/profile-setup/facilities'
import RoomTypeSetup from './components/profile-setup/room-type-setup'
import HostelPicturesSetup from './components/profile-setup/pictures'
import ProfileSetup from './components/profile-setup/profile-setup'
import HostelProfile from './components/hostel_profile/hostel-profile'
import ImageUpload from './components/hostel_profile/profile-pic'
import RoomType from './components/hostel_profile/room-type'
import SubmitProfile from './components/profile-setup/submit-profile'
import EmailVerification from './components/profile-setup/email-verification'

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
          <Route exact path="/profileSetup" component={ProfileSetup} />
          <Route exact path="/profile" component={HostelProfile} />
          <Route exact path="/picture" component={ImageUpload} />
          <Route exact path="/rooms" component={RoomType} />
          <Route exact path="/submitProfile" component={SubmitProfile} />
          <Route exact path="/emailVerification" component={EmailVerification} />
          {/* <Route exact path="/facilities" component={Facilities} />
        <Route exact path="/roomtype" component={Roomtype} />
        <Route exact path="/profilepic" component={Profilepic} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
