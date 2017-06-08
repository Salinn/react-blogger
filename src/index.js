//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
//Routing
import { BrowserRouter } from 'react-router-dom'
//Components
import App from './components/layout/App';
//Styling
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
