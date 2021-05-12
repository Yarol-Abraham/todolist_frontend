import createAxios from '../../../config/axios';
import tokenAuth from '../../../config/tokenAuth';
import Cookies from 'js-cookie';
import { showAlert, hideAlert } from '../../../utils/alerts';
import { 
    todoSortUser,
    todoListAllUser, 
    todoCreateUser,
    todoDeleteUser,
    todoDeleteAllUser
} from './todoDispatch';

const sendMessageError = (error)=>{
    const { response: { data: { message } } } = error;
    const msg = message || error.response.data;
    showAlert("error", msg);
    setTimeout(hideAlert, 3000);
}

export function todoSort(sort) {
    return (dispatch)=>{
        dispatch(todoSortUser(sort) );
    }
}

export function todoListAll(url, page = 1, sort) {
    return async (dispatch)=>{
        try {
            tokenAuth(Cookies.get("jwt"));
            let getUrl = `/api/v1/todo${url}?sort=${sort}&page=${page}&limit=${10}`;
            const response = await createAxios.get(getUrl);
            dispatch( todoListAllUser(response.data.data) );
        } catch (error) {
            sendMessageError(error);
        };
    };
};

export function createTodo(name) {
    return async (dispatch)=>{
        try {
            tokenAuth(Cookies.get("jwt"));
            showAlert("loading", "Loading...");
            const response = await createAxios.post("/api/v1/todo", {name});
            dispatch( todoCreateUser(response.data.data) );
            showAlert("success", "successfully created");
            setTimeout(hideAlert, 3000);
        } catch (error) {
            sendMessageError(error);
        };
    };
};

export function updateStateTodo(state, _id) {
    return async ()=>{
        try {
            tokenAuth(Cookies.get("jwt"));
            showAlert("loading", "Loading...");
            await createAxios.patch(`/api/v1/todo/${_id}`, {state});
            hideAlert();
        } catch (error) {
            sendMessageError(error);
        };
    };
};

export function deleteTodo(_id) {
    return async (dispatch)=>{
        try {
            tokenAuth(Cookies.get("jwt"));
            showAlert("loading", "Cargando...");
            const todo = await createAxios.delete(`/api/v1/todo/${_id}`);
            dispatch( todoDeleteUser(todo.data.data) );
            showAlert("success", "successfully deleted");
            setTimeout(hideAlert, 2000);
        } catch (error) { sendMessageError(error); };
    };
};

export function deleteTodoAll() {
    return async ( dispatch )=>{
        try {
            tokenAuth(Cookies.get("jwt"));
            showAlert("loading", "Cargando...");
            await createAxios.delete("/api/v1/todo");
            dispatch( todoDeleteAllUser() );
            showAlert("success", "successfully deleted all");
            setTimeout(hideAlert, 2000);
        } catch (error) { sendMessageError(error); }
    };
};