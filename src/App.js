import React, { Component } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import firebase from './firebase';

// Pages
import Trip from './containers/Trip/Trip';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

// Context
import FirebaseAuthContext from './context/FirebaseAuth';

class App extends Component {
    state = {
        user: null
    }

    componentDidMount () {
        this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        })
    }

    render () {
        return (
            <HashRouter>
                <FirebaseAuthContext.Provider value={this.state.user}>
                    <div className="App">
                            <Route path='/' component={Navbar} />
                            <div>
                                <Switch>
                                    <Route path='/trip' exact component={Trip}></Route>
                                    <Route path='/' exact component={Home} />
                                </Switch>
                            </div>
                    </div>
                </FirebaseAuthContext.Provider>
            </HashRouter>
        );
    }
}

export default App;
