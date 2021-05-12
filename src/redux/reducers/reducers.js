import { combineReducers } from 'redux';

//reducers
import todoReducer from './todoReducers';
import authReducers from './authReducers'

export default combineReducers({
    todoList: todoReducer,
    auth: authReducers
})