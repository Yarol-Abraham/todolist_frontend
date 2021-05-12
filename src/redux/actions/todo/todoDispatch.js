import {
    TODO_SORT,
    TODO_LIST_ALL,
    TODO_CREATE,
    TODO_DELETE,
    TODO_DELETE_ALL
} from '../../types/todoTypes';

export const todoSortUser = (sort)=>({
    type: TODO_SORT,
    payload: sort
});

export const todoListAllUser = (data)=>({
    type: TODO_LIST_ALL,
    payload: data
});

export const todoCreateUser = (data)=>({
    type: TODO_CREATE,
    payload: data
});

export const todoDeleteUser = (data)=>({
    type: TODO_DELETE,
    payload: data
});

export const todoDeleteAllUser = ()=>({
    type:TODO_DELETE_ALL
})