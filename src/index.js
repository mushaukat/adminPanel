import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import axios from 'axios';


axios.defaults.baseURL="http://www.hostinn.pk:3300/api"

ReactDOM.render(<App />,document.getElementById('main'))




registerServiceWorker();
