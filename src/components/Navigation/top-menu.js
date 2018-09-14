import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './top-menu.css';



class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,

    };
  }

  signOut = () => {
    this.setState({ signOutRedirect: true })
  }

  render() {
    if (this.state.signOutRedirect) {
      localStorage.clear();
      return <Redirect exact to="/" />
    }
    return (
      <div>
        <div id='cssmenu'>
          <ul>
          <li><a onClick={this.signOut}>Signout</a></li>
            <li id="last-menu"><a href='google.com'>Contact Us</a></li>
            <li><a href='google.com'>Services</a></li>
            <li><a href='google.com'>About Us</a></li>
            <li className='active'><a href='google.com'>Home</a></li>
            
          </ul>
        </div>
      </div>
    );
  }
}

export default TopMenu;