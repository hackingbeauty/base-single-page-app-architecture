import React                   from 'react';
import ReactDOM                from 'react-dom';
import { Provider }            from 'react-redux';
import { Router, hashHistory } from 'react-router';
// import { createHashHistory }   from 'history';
import configureStore          from 'core/store/configureStore';
import routes                  from './routes';

const store   = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);