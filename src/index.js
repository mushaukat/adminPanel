import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App'




//ReactDOM.render(<SideNav />, document.getElementById('left-div'));
//ReactDOM.render(<TopMenu />, document.getElementById('top-menu'));
ReactDOM.render(<App />,document.getElementById('main'))




registerServiceWorker();
