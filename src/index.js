import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//import './index.css';
//import '.../node_modules/react-bootstrap/dist/react-bootstrap.min.css';
import './Navigation/side-nav.css'
import './Navigation/top-menu.css'
//import App from './App';
import SideNav from './Navigation/side-nav'
import TopMenu from './Navigation/top-menu';
import GeneralInfo from './hostel_profile/general-info'


ReactDOM.render(<SideNav />, document.getElementById('left-div'));
ReactDOM.render(<TopMenu />, document.getElementById('top-menu'));
ReactDOM.render(<GeneralInfo />,document.getElementById('menu2'))




registerServiceWorker();
