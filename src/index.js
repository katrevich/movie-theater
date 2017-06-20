import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import appReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(appReducer);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
