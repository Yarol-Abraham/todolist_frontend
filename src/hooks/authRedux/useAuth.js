//redux
import { useDispatch, useSelector } from 'react-redux';
import { 
    signup, 
    login,
    loggout,
    verifyAuth, 
    authUser 
} from '../../redux/actions/auth/authActions';

function useAuth() {
    const dispatch = useDispatch(); 
    const _signup = (data)=> dispatch( signup(data) );
    const _login = (data)=> dispatch( login(data) );
    const _loggout = ()=> dispatch( loggout() );
    const _verifyAuth = ()=> dispatch( verifyAuth() );
    const _authUser = (user)=> dispatch( authUser(user) );
    const auth =  useSelector( state => state.auth );
    
    function handleSignup(data) {
        _signup(data);
    };

    function handleLogin(data) {
        _login(data);
    };

    function handleLogout() {
        _loggout();
    }

    async function handleAuth() {
      const user = await _verifyAuth();
      if(user) _authUser(user);
      return user;
    }

    return { 
        handleSignup,
        handleLogin,
        handleLogout, 
        handleAuth,
        auth
    }

};
 
export default useAuth;