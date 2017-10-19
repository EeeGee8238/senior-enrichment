'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main';
import store from './store';
//import Root from './components/Root';

render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('main')
);

/* in lieu of `Root` you could make a Router and have Routes defining the views you want -- otherwise do this in `Root`*/
