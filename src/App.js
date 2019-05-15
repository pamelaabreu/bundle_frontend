import React, { Component } from 'react';
import {Switch, Route, HashBrowser} from 'react-router-dom'
import Trip from './containers/Trip/Trip'

class App extends Component {
  render () {
    return (
        <div className="App">
          <HashBrowser>
            <Switch>
              <Route path='/trip' exact component={Trip}></Route>
            </Switch>
          </HashBrowser>
        </div>
    );
  }
}

export default App;
