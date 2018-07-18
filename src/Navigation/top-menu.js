import React, { Component } from 'react';
import './top-menu.css';



class TopMenu extends Component {
  render() {
    return (
      <div>
        <div id='cssmenu'>
          <ul>
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