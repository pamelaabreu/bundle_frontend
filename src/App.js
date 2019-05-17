import React, { Component } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Trip from './containers/Trip/Trip';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

class App extends Component {
    render () {
        return (
            <div className="App">
                <HashRouter>
                    <Route path='/' component={Navbar} />
                    <div>
                        <Switch>
                            <Route path='/trip' exact component={Trip}></Route>
                            <Route path='/' exact component={Home} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;
