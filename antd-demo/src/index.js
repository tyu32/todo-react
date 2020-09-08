import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Demo from './pages/Category/addCategory'

import {HashRouter, Router, Switch, BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  // <BrowserRouter>
  //   <Switch>
  //     <Router path = "/" component={App}
  //   </Switch>
  // </BrowserRouter>
  //<React.StrictMode>
    <App />,
  //</React.StrictMode>,
  document.getElementById('root'),
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
