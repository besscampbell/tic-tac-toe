import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { Provider } from 'react-redux';

const initialState = {
  history: [{squares : Array(9).fill(null)}],
  xIsNext: true,
}

const store = createStore(
  rootReducer,
  initialState,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);