import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { auth, app } from './firebase/initFirebase';

import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
// import {userSaga, messageSaga} from './saga';
// import { sagas } from './saga';
import userSaga from './saga';

import storeReducer from "./store/index";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer:{
    user: storeReducer,
  },
  middleware: [saga]
})

saga.run(userSaga);
// saga.run(sagas.messageSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
