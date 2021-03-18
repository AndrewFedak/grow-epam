import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root/root';
import './index.scss';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import root from './root/reducer/reducer';
import dashboard from './components/goal_categories/reducer/reducer';

const middlewares = [thunkMiddleware];

const initialState = {}

const store = createStore(
  combineReducers({
    root,
    dashboard
  }),
  JSON.parse(window.localStorage.getItem('grow')) || initialState,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);