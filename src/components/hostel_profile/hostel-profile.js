import React, { Component } from 'react';
import '../stylesheets/hostel-profile.css'
import SideNav from '../Navigation/side-nav';
import TopMenu from '../Navigation/top-menu';
import '../stylesheets/side-nav.css';
import '../stylesheets/top-menu.css';


class HostelProfile extends Component {
    render() {

        return (
            <div>
                <div id="left-div">
                    <SideNav />
                </div>

                <div id="right-div">

                    <div id="top-menu">
                        <TopMenu />
                    </div>

                    <div id="menu2">
                        <h1>ndklajsfokwfakd</h1>
                    </div>

                </div>


            </div>

        );
    }
}

export default HostelProfile;
