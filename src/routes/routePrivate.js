import { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/authRedux/useAuth';
import { handleShowAlert, handleHideAlert } from '../utils/alerts';
function PrivateRoute({ children, ...rest }) {
    const [ user, setuser ] = useState({});
    const { handleAuth } = useAuth();
    
    async function initialSesion() {
      handleShowAlert("loading", "Loading...");
      setuser(await handleAuth());
      handleHideAlert();
    }

    useEffect(() => {
      initialSesion();
      // eslint-disable-next-line
    }, []);
    return (
      <Route
        {...rest} 
        render={() => user ? ( children ) : 
          (
            <Redirect to={"/login"} />
          )
        }
      />
    );
  }

export default PrivateRoute;