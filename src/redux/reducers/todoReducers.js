import {
    TODO_LIST_ALL,
    TODO_CREATE,
    TODO_SORT,
    TODO_DELETE,
    TODO_DELETE_ALL
} from '../types/todoTypes';

const initialState = {
    todolist: [],
    sort: "createAt"
};

function todoReducer(state = initialState, action) {
    
    switch (action.type) {
        case TODO_LIST_ALL:
            return {
            ...state,
            todolist: action.payload
        }

        case TODO_CREATE:
            return {
                ...state,
                todolist: [ ...state.todolist, action.payload ]
            }

        case TODO_DELETE:
            return{
                ...state,
                todolist: [ ...state.todolist.filter( todo => todo._id !== action.payload._id ) ]
            }

        case TODO_DELETE_ALL:
            return{
                ...state,
                todolist: []
            }

        case TODO_SORT: 
            return{
                ...state,
                sort: action.payload
            }

        default:
            return state;
    }

}

export default todoReducer;