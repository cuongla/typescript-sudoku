import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './core'
import App from './App';

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

unregister();