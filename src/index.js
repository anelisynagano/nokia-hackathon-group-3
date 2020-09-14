import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/NokiaPureHWeb_Bd.otf'
import './fonts/NokiaPureHWeb_Lt.otf'
import './fonts/NokiaPureHWeb_Rg.otf'
import './fonts/NokiaPureTWeb_Bd.ttf'
import './fonts/NokiaPureTWeb_Lt.ttf'
import './fonts/NokiaPureTWeb_Rg.ttf'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
