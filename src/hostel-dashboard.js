import React, { Component } from 'react';
import SideNav from './Navigation/side-nav';
import TopMenu from './Navigation/top-menu';
import './stylesheets/side-nav.css';
import './stylesheets/top-menu.css';

class DashBoardTemplate extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="left-div">
                    <SideNav/>
                    </div>

                    <div id="right-div">

                        <div id="top-menu">
                        <TopMenu/>
                        </div>

                        <div id="menu2">
                            
                        </div>

                    </div>


                </div>
            </div>

                );
              }
            }
            
export default DashBoardTemplate;