
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css' //全局style样式
import CounterReducer from './Store/Reducer/CounterReducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(CounterReducer)

console.log(store.getState())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}><App /></Provider>
  </React.StrictMode>
);