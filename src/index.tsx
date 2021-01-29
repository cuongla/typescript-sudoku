import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './core'
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from 'core'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

unregister();