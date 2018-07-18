import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//import './index.css';
import './Navigation/side-nav.css'
import './Navigation/top-menu.css'
//import App from './App';
import SideNav from './Navigation/side-nav'
import ImageUpload from './hostel_profile/profile-pic'

import TopMenu from './Navigation/top-menu';

ReactDOM.render(<SideNav />, document.getElementById('left-div'));
ReactDOM.render(<TopMenu />, document.getElementById('top-menu'));

registerServiceWorker();
