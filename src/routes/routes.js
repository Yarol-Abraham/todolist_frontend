import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import All from '../views/todo/all';
import Incomplete from '../views/todo/incomplete';
import Completed from '../views/todo/completed';
import Signup from '../views/auth/signup/signup';
import Login from '../views/auth/login/login';
import Profile from '../views/profile/profile'; 
import ChangedPassword from '../views/profile/changedPassword';
import RoutePrivate from './routePrivate';

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/signup" component={Signup}  />
                <Route exact path="/login" component={Login} />
                <RoutePrivate exact path="/profile" > 
                    <Profile /> 
                </RoutePrivate>
                <RoutePrivate exact path="/changedPassword" >
                    <ChangedPassword />
                </RoutePrivate>
                <RoutePrivate exact path="/" >
                    <All />
                </RoutePrivate>
                <RoutePrivate exact path="/incomplete" >
                    <Incomplete />
                </RoutePrivate>
                <RoutePrivate exact path="/completed" >
                    <Completed />
                </RoutePrivate>
            </Switch>
        </Router>
     );
}
 
export default Routes;