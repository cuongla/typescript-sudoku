import React from 'react';
import ReactDOM from 'react-dom';
import { register } from './core'

// components
import App from './App';

// redux 
import { Provider } from 'react-redux';
import { configureStore } from 'core';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}>
      <React.Fragment>
        <App />
      </React.Fragment>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

register();