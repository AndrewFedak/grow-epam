import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import root from './reducer/reducer';
import filterControls from '../components/filter_controls/reducer/reducer';
import goalCategories from '../components/goal_categories/reducer/reducer';

import GoalCategories from '../components/goal_categories/goal_categories';
import FilterControls from '../components/filter_controls/filter_controls';

const middlewares = [thunkMiddleware];

const initialState = {}

const store = createStore(
  combineReducers({
    root,
    filterControls,
    goalCategories
  }),
  initialState,
  applyMiddleware(...middlewares)
);

const Root = () => {
  return (
    <Provider store={store}>
      <FilterControls />
      <GoalCategories />
    </Provider>
  );
}

export default Root;
