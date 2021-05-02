import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import All from '../views/all/all';

const Routes = () => {
    return ( 
        <Router>
            <Switch>
            <Route path="/" state="all" component={All} />
            </Switch>
        </Router>
     );
}
 
export default Routes;