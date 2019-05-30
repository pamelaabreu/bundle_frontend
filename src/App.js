import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

// Pages
import Trip from "./containers/Trip/Trip";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Reminders from "./containers/Reminders/Reminders";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path="/" component={Navbar} />
          <div>
            <Switch>
              <Route path="/trip/:trip_id" exact component={Trip} />
              <Route path="/" exact component={Home} />
              <Route path="/reminders" exact component={Reminders} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
