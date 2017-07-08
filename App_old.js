import React from 'react';
import {Scene, Reducer, Router, Switch, TabBar, Modal, Actions} from 'react-native-router-flux'
import Login from './screens/Login'
import CreateAccount from './screens/CreateAccount'
import ForgotPassword from './screens/ForgotPassword'
import Home from './screens/Home'

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var that = this;
        return <Router>
                  <Scene key="root">
                      <Scene key="Login" initial={true} component={Login} hideNavBar={true} />
                      <Scene key="CreateAccount"  hideNavBar={true} component={CreateAccount} />
                      <Scene key="ForgotPassword" hideNavBar={true} component={ForgotPassword} />
                      <Scene key="Home" hideNavBar={true} component={Home} />
                  </Scene>
               </Router>
    }
}
