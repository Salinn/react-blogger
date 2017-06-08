//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//Routing
import {Router, browserHistory } from 'react-router';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <div>
            hi
        </div>
    </Provider>,
  document.getElementById('root')
);
