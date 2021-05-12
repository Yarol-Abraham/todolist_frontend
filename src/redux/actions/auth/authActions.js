import createAxios from '../../../config/axios';
import Cookies from 'js-cookie';
import tokenAuth from '../../../config/tokenAuth';
import { showAlert, hideAlert } from '../../../utils/alerts';
import { 
    signupUser, 
    loginUser,
    logoutUser,
    getUser,
} from './authDispatch';


const sendToken = (token)=>{
    Cookies.set('jwt', token, { 
        expires: new Date( Date.now() + 30 * 24 * 60 * 60 * 1000 )
    });
};

const errorMessage = (error)=>{
    const { response: { data: { message } } } = error;
    const msg = message || error.response.data;
    showAlert('error', msg);
    setTimeout(hideAlert, 5000);
};

export function signup(data) {
    return async (dispatch)=>{
        try {
            showAlert('loading', 'cargando');
            const response = await createAxios.post('/api/v1/user/signup', data);
            sendToken(response.data.token);
            dispatch( loginUser(true) )
            hideAlert();
        } catch (error) {
            errorMessage(error);
        };
    };
};

export function login(data) {
   return async(dispatch) =>{
       try {
            showAlert('loading', 'cargando');
            const response = await createAxios.post('/api/v1/user/login', data);
            sendToken(response.data.token);
            dispatch( signupUser(true) )
            hideAlert();
       } catch (error) {
            errorMessage(error);
       };
   };
};

export function loggout() {
    return (dispatch)=>{
        Cookies.remove('jwt');
        dispatch(logoutUser({ user: null, success: false }) );
    };
};

export function verifyAuth() {
 return async ()=>{
    try {
        tokenAuth(Cookies.get('jwt')); 
        const response = await createAxios.get('/api/v1/user/me');
        return response.data.data;
    } catch (error) { return null; }
 };
};

export function authUser(user) {
    return (dispatch)=>{
    dispatch(
            getUser({
                user,
                success: true
            })
       );
    }
}