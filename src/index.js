//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import { initializeFields } from './actions/searchActions';
//Routing
import { BrowserRouter } from 'react-router-dom'
//Components
import App from './components/layout/App';
//Styling
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
store.dispatch(initializeFields( { textInputFields: initialState.search.textInputFields } ));

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
