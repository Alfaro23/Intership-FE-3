import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { auth, app } from './firebase/initFirebase';

import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import userSaga from './saga';

import storeReducer from "./store/index";

export const Context = createContext(null)

const saga = createSagaMiddleware();
const store = configureStore({
  reducer:{
    user: storeReducer,
  },
  middleware: [saga]
})

saga.run(userSaga);

// const firestore = firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Context.Provider value={{
      app,
      auth
    }}>
      <App />
    </Context.Provider>
  </Provider>
);
