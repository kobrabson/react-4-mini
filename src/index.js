import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
// import { HashRouter as Router } from 'react-router-dom
//  ^^^^ can rename it to whatever I want !just put it in the ReactDOM render and not as HashRouter!
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<HashRouter>
<App />
</HashRouter>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
