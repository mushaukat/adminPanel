import React, { Component } from 'react';
import $ from 'jquery'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../stylesheets/side-nav.css';
import HostelProfile from '../hostel_profile/hostel-profile'

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePic: true,
            hostelName: '',

        };
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData);
        const data = {
            block_id: userData.block_id,
            hostel_id: userData.hostel_id,
        }

        var dp = 'http://www.hostinn.pk:3300/api/blockProfileImage/' + data.block_id + '/' + data.hostel_id
        this.setState({
            profilePic: dp,
            hostelName: userData.hostel_name
        })
    };

    dropdown(){
        var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
    }


    render() {
        // $(document).ready(function () {
        //     $("#sidebar").mCustomScrollbar({
        //         theme: "minimal"
        //     });

        //     $('#sidebarCollapse').on('click', function () {
        //         $('#sidebar, #content').toggleClass('active');
        //         $('.collapse.in').toggleClass('in');
        //         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        //     });
        // });

        return (
            <Router>
                <div>
                    <div className="wrapper">

                        <nav id="sidebar">


                            <div class="sidebar-header">
                                <div >
                                    <img src={this.state.profilePic} />
                                </div>
                                <br />
                                <h3>{this.state.hostelName}</h3>
                            </div>

                            <ul class="list-unstyled components">

                                <li class="active">
                                    <Link to="">DashBoard</Link>
                                </li>

                                <li >
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                                    <ul class="collapse list-unstyled dropdown-btn" id="homeSubmenu">
                                        <li><a href="#">Home 1</a></li>
                                        <li><a href="#">Home 2</a></li>
                                        <li><a href="#">Home 3</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#">About</a>
                                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                                    <ul class="collapse list-unstyled dropdown-btn" id="pageSubmenu">
                                        <li><a href="#">Page 1</a></li>
                                        <li><a href="#">Page 2</a></li>
                                        <li><a href="#">Page 3</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        <div id="content">
                            <div class="navbar-header">
                                <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                                    <i class="glyphicon glyphicon-align-left"></i>
                                    <span>Toggle Sidebar</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </Router>
        );
    }
}

export default SideNav;