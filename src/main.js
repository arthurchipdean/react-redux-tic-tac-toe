
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom'
import AppContainer from './containers/AppContainer';
import configureStore from './store/createStore';


const store = configureStore();

render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('root')
);