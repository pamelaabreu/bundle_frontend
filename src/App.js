import React, { Component } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Trip from './containers/Trip/Trip';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
    render () {
        return (
            <div className="App">
                <HashRouter>
                    <Route path='/' component={Navbar} />
                    <div>
                        <Switch>
                            <Route path='/trip' exact component={Trip}></Route>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;
