import React, { Component } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom'
import Trip from './containers/Trip/Trip'

class App extends Component {
    render () {
        return (
            <div className="App">
                <HashRouter>
                    <Switch>
                        <Route path='/trip' exact component={Trip}></Route>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
