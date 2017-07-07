//React
import React from 'react';
//Routing
import { Switch, Route } from 'react-router-dom'
//Component
import Search from '../../containers/SearchScreen';
import Video from '../../containers/VideoScreen';
import Table from '../../containers/TableScreen';


const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Search}/>
            <Route exact path='/video' component={Video}/>
            <Route exact path='/table' component={Table}/>
        </Switch>
    </main>
);

export default App
