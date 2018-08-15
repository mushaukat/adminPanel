import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/login-signup/signup';
import LogIn from './components/login-signup/login';
import Recovery from './components/login-signup/recovery';
import ProfileSetup from './components/profile-setup/profile-setup'
import SubmitProfile from './components/profile-setup/submit-profile'
import EmailVerification from './components/profile-setup/email-verification'
import Routing from './components/routing'


class App extends Component {

  render() {
    return (
      <div>
    
        <Router>
          <div>
            <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/recovery" component={Recovery} />
            <Route exact path="/profileSetup" component={ProfileSetup} />
            <Route exact path="/submitProfile" component={SubmitProfile} />
            <Route exact path="/emailVerification" component={EmailVerification} />
            <Route  path="/hostel" component={Routing} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
