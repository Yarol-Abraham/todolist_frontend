import {
    SIGNUP,
    LOGIN,
    LOGGOUT,
    GET_AUTH,
    FAIL_AUTH
} from '../../types/authTypes';

export const signupUser = (sesion)=>({
    type: SIGNUP,
    payload: sesion
}); 

export const loginUser = (sesion)=>({
    type: LOGIN,
    payload: sesion
})

export const logoutUser = (sesion)=>({
    type: LOGGOUT,
    payload: sesion
});

export const getUser = (options)=>({
    type: GET_AUTH,
    payload: options
})

export const authFail = (state)=>({
    type: FAIL_AUTH,
    payload: state
});