import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import helloReducer from './helloworld/hello';

const reducer = combineReducers({
  helloReducer,
});

const store = configureStore({
  reducer,
});

export default store;
