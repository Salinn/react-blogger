//React
import React from 'react';
// Router
import { Route, IndexRoute } from 'react-router';
//Components
import App from './components/layout/App';
import Search from './containers/Search';

export default (
    <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Search } />
    </Route>
)