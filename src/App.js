import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './App';
import SideNav from './Navigation/side-nav';
import TopMenu from './Navigation/top-menu';
//import GeneralInfo from './profile-setup/general-info';
import RoomType from './hostel_profile/room-type';
import MessMenu from './mess-menu';
import SignUp from './login-signup/signup';
import LogIn from './login-signup/login'
import Recovery from './login-signup/recovery'
import GeneralInfo from './test/general-info';
import DashBoardTemplate from './hostel-dashboard' 

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/dashboard" component={DashBoardTemplate} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/recovery" component={Recovery} />
      </div>
      </Router>
    );
  }
}

export default App;
