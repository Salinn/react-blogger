//React
import React from 'react';
//Routing
import { Switch, Route } from 'react-router-dom'
//Component
import Search from '../../containers/SearchScreen';

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Search}/>
        </Switch>
    </main>
);

export default App
