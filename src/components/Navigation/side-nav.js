import React, { Component } from 'react';
import $ from 'jquery'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './side-nav.css';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePic: '',
            hostelName: '',

        };
    }

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('hostelAdmin'));
        console.log(token);
        const data = {
            token:token,
        }

        var dp = 'http://www.hostinn.pk:3300/api/blockProfileImage/' + data.token
        this.setState({
            profilePic: dp,
           // hostelName: hostelAdmin.hostel_name
        })
    };

    dropdown() {
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
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


                            <div className="sidebar-header">
                                <div >
                                    <img src={this.state.profilePic} />
                                </div>
                                <br />
                                <h3>{this.state.hostelName}</h3>
                            </div>

                            <ul className="list-unstyled components">

                                <li className="active">
                                    <Link to="">DashBoard</Link>
                                </li>

                                <li >
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                                    <ul className="collapse list-unstyled dropdown-btn" id="homeSubmenu">
                                        <li><a href="#">Home 1</a></li>
                                        <li><a href="#">Home 2</a></li>
                                        <li><a href="#">Home 3</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#">About</a>
                                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                                    <ul className="collapse list-unstyled dropdown-btn" id="pageSubmenu">
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
                            <div className="navbar-header">
                                <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                                    <i className="glyphicon glyphicon-align-left"></i>
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