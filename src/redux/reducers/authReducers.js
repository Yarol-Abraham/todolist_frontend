import {
    SIGNUP,
    GET_AUTH,
    FAIL_AUTH,
    LOGIN,
    LOGGOUT,

    UPDATE_USER
} from '../types/authTypes';

const initialState = {
    user: null,
    success: false,
    fail: false,
    loading: true,
    message: ""
};

function authReducer(state = initialState, action) {
    
    switch (action.type) {
        case SIGNUP:
        case LOGIN:
            return{
                ...state,
                success: action.payload
            }
        case LOGGOUT:
            return{
                ...state,
                success: action.payload.success,
                user: action.payload.user
            }
        case GET_AUTH: 
            return{
                ...state,
                success: action.payload.success,
                user: action.payload.user       
            }
        case UPDATE_USER:
            return{
                ...state,
                user: action.payload
            }
        case FAIL_AUTH:
            return{
                ...state,
                success: action.payload.success,
                user: action.payload.user,
                fail: action.payload.fail,
                message: action.payload.message
            }
        
        default:
            return state;
    }
}

export default authReducer;