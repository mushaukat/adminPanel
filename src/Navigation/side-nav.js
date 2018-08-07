import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../stylesheets/side-nav.css';
import HostelProfile from '../hostel_profile/hostel-profile'
import ImageUpload from '../hostel_profile/profile-pic'
import RoomType from '../hostel_profile/room-type'

class SideNav extends Component {
    render() {
        let $imagePreview = null;
        let imagePreviewUrl="null";
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl}  alt=""/>);
      } else {
        $imagePreview = (<div className="previewText">Update Profile picture from Hostel Profile</div>);
      }
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">

                        <div className="imgPreview" id="imagePreview">
                            {$imagePreview}
                            
                        </div>
                            
                        <p id="hostel-name" align="center">Hostel Name</p>
                        
                    </div>

                    <ul className="list-unstyled components">
                        
                        <li className="active">
                            <a href="google.com">Dashboard</a>
                        </li>

                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Hostel Profile</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li><Link to="profile">Profile</Link></li>
                                <li><Link to="picture">Room Type</Link></li>
                                <li><Link to="rooms">Home 3</Link></li>
                            </ul>
                        </li>
                        <li><Link to="profile">Profile</Link></li>
                                <li><Link to="picture">Room Type</Link></li>
                                <li><Link to="rooms">Home 3</Link></li>
                        <li>
                            <a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false">Room Mangement</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu1">
                                <li><a href="google.com">Home 5</a></li>
                                <li><a href="google.com">Home 25</a></li>
                                <li><a href="google.com">Home 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="google.com">Mess Menu</a>
                        </li>

                        <li>
                            <a href="google.com">Notifications</a>
                        </li>
                        <li>
                            <a href="google.com">About</a>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li><a href="google.com">Page 1</a></li>
                                <li><a href="google.com">Page 2</a></li>
                                <li><a href="google.com">Page 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="google.com">Portfolio</a>
                        </li>
                        <li>
                            <a href="google.com">Log Out</a>
                        </li>
                    </ul>

                    
                </nav>
                <Router>
        <div>
          <Route exact path="/profile" component={HostelProfile} />
          <Route exact path="/picture" component={ImageUpload} />
          <Route exact path="/rooms" component={RoomType} />
          {/* <Route exact path="/facilities" component={Facilities} />
        <Route exact path="/roomtype" component={Roomtype} />
        <Route exact path="/profilepic" component={Profilepic} /> */}
        </div>
      </Router>            </div>
        );
    }
}

export default SideNav;