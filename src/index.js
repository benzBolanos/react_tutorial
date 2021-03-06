import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from './Components/Router';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
