import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import { reducers } from './reducers/index.js';
import thunk from 'redux-thunk';
const store = createStore(reducers,compose(applyMiddleware(thunk)));
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
